import json
import sys
from pathlib import Path

from docx import Document
from docx.enum.section import WD_SECTION
from docx.enum.table import WD_CELL_VERTICAL_ALIGNMENT
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Inches, Pt, RGBColor


NAVY = "143369"
BLUE = "0C71C3"
PALE_BLUE = "EEF5FC"
LIGHT_BORDER = "D9D9D9"
MUTED = RGBColor(88, 97, 116)


def clean(value):
    if not isinstance(value, str):
        return value
    replacements = {
        "\u2018": "'", "\u2019": "'", "\u201c": '"', "\u201d": '"',
        "\u2013": "-", "\u2014": "-", "\u00b7": "-", "\u00a0": " ",
    }
    for old, new in replacements.items():
        value = value.replace(old, new)
    return value


def set_cell_shading(cell, fill):
    tc_pr = cell._tc.get_or_add_tcPr()
    shading = tc_pr.find(qn("w:shd"))
    if shading is None:
        shading = OxmlElement("w:shd")
        tc_pr.append(shading)
    shading.set(qn("w:fill"), fill)


def set_cell_borders(cell, color=LIGHT_BORDER):
    tc_pr = cell._tc.get_or_add_tcPr()
    borders = tc_pr.first_child_found_in("w:tcBorders")
    if borders is None:
        borders = OxmlElement("w:tcBorders")
        tc_pr.append(borders)
    for edge in ("top", "left", "bottom", "right", "insideH", "insideV"):
        element = borders.find(qn(f"w:{edge}"))
        if element is None:
            element = OxmlElement(f"w:{edge}")
            borders.append(element)
        element.set(qn("w:val"), "single")
        element.set(qn("w:sz"), "6")
        element.set(qn("w:color"), color)


def set_cell_margins(cell, top=120, start=150, bottom=120, end=150):
    tc = cell._tc
    tc_pr = tc.get_or_add_tcPr()
    tc_mar = tc_pr.first_child_found_in("w:tcMar")
    if tc_mar is None:
        tc_mar = OxmlElement("w:tcMar")
        tc_pr.append(tc_mar)
    for name, value in (("top", top), ("start", start), ("bottom", bottom), ("end", end)):
        node = tc_mar.find(qn(f"w:{name}"))
        if node is None:
            node = OxmlElement(f"w:{name}")
            tc_mar.append(node)
        node.set(qn("w:w"), str(value))
        node.set(qn("w:type"), "dxa")


def add_hyperlink(paragraph, text, url):
    relation_id = paragraph.part.relate_to(
        url,
        "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
        is_external=True,
    )
    hyperlink = OxmlElement("w:hyperlink")
    hyperlink.set(qn("r:id"), relation_id)
    run = OxmlElement("w:r")
    props = OxmlElement("w:rPr")
    color = OxmlElement("w:color")
    color.set(qn("w:val"), BLUE)
    props.append(color)
    underline = OxmlElement("w:u")
    underline.set(qn("w:val"), "single")
    props.append(underline)
    run.append(props)
    text_node = OxmlElement("w:t")
    text_node.text = clean(text)
    run.append(text_node)
    hyperlink.append(run)
    paragraph._p.append(hyperlink)


def add_body(doc, text, bold_lead=None):
    paragraph = doc.add_paragraph(style="Body Text")
    if bold_lead:
        paragraph.add_run(clean(bold_lead)).bold = True
    paragraph.add_run(clean(text))
    return paragraph


def add_label(doc, text):
    paragraph = doc.add_paragraph()
    paragraph.paragraph_format.space_before = Pt(8)
    paragraph.paragraph_format.space_after = Pt(4)
    run = paragraph.add_run(clean(text).upper())
    run.bold = True
    run.font.size = Pt(9)
    run.font.color.rgb = RGBColor(12, 113, 195)
    run.font.letter_spacing = Pt(1.2)
    return paragraph


def add_item_blocks(doc, items):
    for title, description in items:
        paragraph = doc.add_paragraph(style="Body Text")
        paragraph.paragraph_format.space_after = Pt(6)
        paragraph.add_run(clean(title) + ". ").bold = True
        paragraph.add_run(clean(description))


def add_bullets(doc, items):
    for item in items:
        paragraph = doc.add_paragraph(clean(item), style="List Bullet")
        paragraph.paragraph_format.space_after = Pt(3)


def add_numbered_steps(doc, items):
    for item in items:
        if len(item) == 3:
            _, title, description = item
            text = f"{clean(title)}. {clean(description)}"
        else:
            text = clean(item)
        paragraph = doc.add_paragraph(text, style="List Number")
        paragraph.paragraph_format.space_after = Pt(5)


def add_cost_table(doc, rows, country):
    table = doc.add_table(rows=1, cols=3)
    table.autofit = False
    table.columns[0].width = Inches(1.65)
    table.columns[1].width = Inches(1.35)
    table.columns[2].width = Inches(3.45)
    headings = ["Cost category", "Planning figure", "Context"]
    for index, heading in enumerate(headings):
        cell = table.rows[0].cells[index]
        cell.text = heading
        set_cell_shading(cell, NAVY)
        set_cell_borders(cell)
        set_cell_margins(cell)
        cell.vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
        for run in cell.paragraphs[0].runs:
            run.bold = True
            run.font.color.rgb = RGBColor(255, 255, 255)
    for row_index, row_data in enumerate(rows):
        cells = table.add_row().cells
        for index, value in enumerate(row_data):
            cells[index].text = clean(value)
            set_cell_borders(cells[index])
            set_cell_margins(cells[index])
            cells[index].vertical_alignment = WD_CELL_VERTICAL_ALIGNMENT.CENTER
            if row_index % 2:
                set_cell_shading(cells[index], PALE_BLUE)
        cells[0].paragraphs[0].runs[0].bold = True
    paragraph = doc.add_paragraph(style="Body Text")
    paragraph.paragraph_format.space_before = Pt(7)
    paragraph.add_run(
        f"Planning note: These {country} figures are references rather than quotes. "
        "Use each institution's current published fees and cost-of-attendance guidance before deciding."
    ).italic = True


def add_country(doc, country_name, data):
    hero = data["hero"]
    doc.add_heading(country_name, level=1)
    add_label(doc, hero["eyebrow"])
    doc.add_heading(clean(hero["title"]), level=2)
    add_body(doc, hero["description"])

    doc.add_heading("Planning support", level=2)
    add_bullets(doc, hero["proofPoints"])

    doc.add_heading(f"Why study in {country_name}", level=2)
    overview_intro = {
        "USA": "The U.S. system offers a wide range of institutions and study formats. The opportunity is valuable when choices are grounded in academic fit, total cost and a realistic admissions plan.",
        "United Kingdom": "The UK combines internationally recognised qualifications, focused degree routes and a diverse student environment. Strong decisions depend on course-level fit, total cost and a realistic application plan.",
    }[country_name]
    add_body(doc, overview_intro)
    add_item_blocks(doc, data["highlights"])
    add_item_blocks(doc, data["reasons"])

    doc.add_heading("Universities and courses", level=2)
    add_body(doc, data["universities"]["intro"])
    add_item_blocks(doc, data["universities"]["types"])
    doc.add_heading("Popular fields to explore", level=3)
    add_bullets(doc, data["universities"]["fields"])

    doc.add_heading("Eligibility", level=2)
    add_body(
        doc,
        "Requirements vary by programme and institution. Verify the official admissions page for every course because grades, prerequisites, test policies and document formats can change by intake.",
    )
    add_item_blocks(doc, data["eligibility"])

    doc.add_heading("Application process", level=2)
    add_body(doc, "Start early, work backwards from each deadline and maintain one reliable record of requirements, documents and decisions.")
    add_numbered_steps(doc, data["admissions"])

    doc.add_heading("Cost of study", level=2)
    add_cost_table(doc, data["costs"], country_name)

    doc.add_heading("Scholarships and funding", level=2)
    add_body(doc, "Funding is competitive and often partial. Admission and scholarship requirements may use different documents and deadlines.")
    add_item_blocks(doc, data["scholarships"])

    doc.add_heading("Student visa", level=2)
    visa_intro = {
        "USA": "The F-1 process begins after an eligible institution admits you. Requirements, fees and appointment availability can change, so use U.S. government guidance and your university's Designated School Official.",
        "United Kingdom": "The Student visa process begins after you meet the university's conditions and receive a Confirmation of Acceptance for Studies. Requirements and fees can change, so use current UK government guidance.",
    }[country_name]
    add_body(doc, visa_intro)
    add_numbered_steps(doc, data["visaSteps"])
    if country_name == "USA":
        add_body(doc, "The listed F/M visa application fee is US$185. Verify the current visa and SEVIS fees before paying. A visa does not guarantee admission at the port of entry.", bold_lead="Current official reference. ")

    doc.add_heading("Intakes and deadlines", level=2)
    add_item_blocks(doc, data["intakes"])

    doc.add_heading("Student life", level=2)
    add_item_blocks(doc, data["life"]["items"])

    doc.add_heading("Career opportunities", level=2)
    career_intro = {
        "USA": "Practical training is regulated authorisation, not a job promise. Eligibility depends on immigration status, programme, timing and approval.",
        "United Kingdom": "Work during and after study depends on current immigration conditions, course eligibility and employer requirements. Employment and settlement are not automatic.",
    }[country_name]
    add_body(doc, career_intro)
    add_item_blocks(doc, data["careers"])

    doc.add_heading("Frequently asked questions", level=2)
    for question, answer in data["faqs"]:
        paragraph = doc.add_paragraph(style="Body Text")
        paragraph.paragraph_format.space_before = Pt(5)
        paragraph.paragraph_format.space_after = Pt(3)
        paragraph.add_run(clean(question)).bold = True
        add_body(doc, answer)

    doc.add_heading("Next step", level=2)
    add_label(doc, data["finalCta"]["eyebrow"])
    doc.add_heading(clean(data["finalCta"]["title"]), level=3)
    add_body(doc, data["finalCta"]["description"])
    add_bullets(doc, data["finalCta"]["benefits"])
    add_body(doc, f"One Window contact number: {data['phone']['display']}")
    add_body(doc, "Enquiry form heading: Tell us about your study plans")

    doc.add_heading("Official and supporting sources", level=2)
    for label, url in data["sources"]:
        paragraph = doc.add_paragraph(style="List Bullet")
        add_hyperlink(paragraph, label, url)


def configure_styles(doc):
    normal = doc.styles["Normal"]
    normal.font.name = "Aptos"
    normal.font.size = Pt(10.5)
    normal._element.rPr.rFonts.set(qn("w:ascii"), "Aptos")
    normal._element.rPr.rFonts.set(qn("w:hAnsi"), "Aptos")
    normal.paragraph_format.space_after = Pt(6)
    normal.paragraph_format.line_spacing = 1.12

    body = doc.styles["Body Text"]
    body.font.name = "Aptos"
    body.font.size = Pt(10.5)
    body._element.rPr.rFonts.set(qn("w:ascii"), "Aptos")
    body._element.rPr.rFonts.set(qn("w:hAnsi"), "Aptos")
    body.paragraph_format.space_after = Pt(7)
    body.paragraph_format.line_spacing = 1.14

    title = doc.styles["Title"]
    title.font.name = "Aptos Display"
    title.font.size = Pt(28)
    title.font.bold = True
    title.font.color.rgb = RGBColor(0, 0, 0)
    title._element.rPr.rFonts.set(qn("w:ascii"), "Aptos Display")
    title._element.rPr.rFonts.set(qn("w:hAnsi"), "Aptos Display")
    title.paragraph_format.space_after = Pt(12)

    heading_sizes = {1: 23, 2: 16, 3: 12}
    for level, size in heading_sizes.items():
        style = doc.styles[f"Heading {level}"]
        style.font.name = "Aptos Display"
        style.font.size = Pt(size)
        style.font.bold = True
        style.font.color.rgb = RGBColor(0, 0, 0)
        style._element.rPr.rFonts.set(qn("w:ascii"), "Aptos Display")
        style._element.rPr.rFonts.set(qn("w:hAnsi"), "Aptos Display")
        style.paragraph_format.keep_with_next = True
        style.paragraph_format.space_before = Pt(14 if level == 1 else 10)
        style.paragraph_format.space_after = Pt(6)


def main():
    if len(sys.argv) != 3:
        raise SystemExit("Usage: build-usa-uk-content-doc.py CONTENT_JSON OUTPUT_DOCX")
    data = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    output = Path(sys.argv[2])
    output.parent.mkdir(parents=True, exist_ok=True)

    doc = Document()
    section = doc.sections[0]
    section.top_margin = Inches(0.75)
    section.bottom_margin = Inches(0.75)
    section.left_margin = Inches(0.8)
    section.right_margin = Inches(0.8)
    configure_styles(doc)

    title = doc.add_paragraph(style="Title")
    title.add_run("USA and UK Country Page Content")
    subtitle = doc.add_paragraph()
    subtitle.paragraph_format.space_after = Pt(14)
    run = subtitle.add_run("One Window study abroad content reference")
    run.font.size = Pt(13)
    run.font.color.rgb = MUTED

    add_body(
        doc,
        "This document packages the complete editorial content used across the One Window USA and United Kingdom country experiences. It is organised for content review, website editing and future design work while retaining the qualifications, planning notes and source links that protect accuracy.",
    )
    add_body(
        doc,
        "Each country section follows the same reading sequence: positioning, study options, eligibility, applications, costs, funding, visas, intakes, student life, careers, frequently asked questions and conversion copy.",
    )
    doc.add_heading("Document contents", level=2)
    add_bullets(doc, ["USA country page content", "United Kingdom country page content"])

    doc.add_page_break()
    add_country(doc, "USA", data["usa"])
    doc.add_page_break()
    add_country(doc, "United Kingdom", data["uk"])

    doc.core_properties.title = "USA and UK Country Page Content"
    doc.core_properties.subject = "One Window country page content reference"
    doc.core_properties.author = "One Window"
    doc.save(output)


if __name__ == "__main__":
    main()
