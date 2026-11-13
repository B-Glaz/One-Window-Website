from pathlib import Path

from docx import Document
from docx.shared import RGBColor


SOURCE = Path(r"C:\Users\Blesson\Downloads\USA and UK Country Page Content (1).docx")
OUTPUT = Path(r"C:\Digital Manager\CODE\OW Website\Main site\site\docs\USA and UK Country Page Content Updated.docx")


def ensure_heading_styles(document: Document) -> None:
    """Ensure the heading styles used for Word's collapsible outline are available."""
    for name, size in (("Heading 2", 16), ("Heading 3", 13)):
        style = document.styles[name]
        style.font.name = "Aptos Display"
        style.font.size = __import__("docx").shared.Pt(size)
        style.font.bold = True
        style.font.color.rgb = RGBColor(0, 0, 0)


def replace_in_runs(paragraph, replacements):
    for run in paragraph.runs:
        text = run.text
        for old, new in replacements.items():
            text = text.replace(old, new)
        run.text = text


def clean_usa_paragraphs(document: Document) -> None:
    replacements = {
        "r�sum�": "resume",
        "Bachelor�s": "Bachelor's",
        "bachelor�s": "bachelor's",
        "family�s": "family's",
        "Google�s": "Google's",
        "Cornell�s": "Cornell's",
        "provider�s": "provider's",
        "Master�s": "Master's",
        "Fulbright�Nehru": "Fulbright-Nehru",
        "2025�26": "2025-26",
        "2026�27": "2026-27",
        "�": "'",
    }

    heading_map = {
        19: ("Types of Universities and Courses", "Heading 2"),
        35: ("Eligibility", "Heading 2"),
        41: ("Application process", "Heading 2"),
        52: ("Scholarships for Bachelor's Studies", "Heading 3"),
        54: ("Funding Options to Explore", "Heading 3"),
        60: ("USA Scholarships for Bachelor's Students", "Heading 3"),
        81: ("Inlaks Shivdasani and Fulbright Eligibility", "Heading 3"),
        84: ("How One Window Helps", "Heading 3"),
        89: ("Explore more", "Heading 2"),
        112: ("Frequently asked questions", "Heading 2"),
    }

    for index in range(8, 141):
        paragraph = document.paragraphs[index]
        replace_in_runs(paragraph, replacements)

        if index in heading_map:
            text, style_name = heading_map[index]
            # Preserve hyperlinks and run formatting where possible, but remove editorial notes.
            paragraph.text = text
            paragraph.style = style_name

        # Red-marked USA copy becomes normal document text; its heading hierarchy is the dropdown.
        for run in paragraph.runs:
            if run.font.color is not None:
                run.font.color.rgb = RGBColor(0, 0, 0)


def clean_usa_table(document: Document) -> None:
    replacements = {
        "�": "'",
        "Bachelor�s": "Bachelor's",
        "Master�s": "Master's",
        "Fulbright�Nehru": "Fulbright-Nehru",
    }
    # Table 1 belongs to the USA scholarship section. Leave the UK cost table untouched.
    for row in document.tables[1].rows:
        for cell in row.cells:
            for paragraph in cell.paragraphs:
                replace_in_runs(paragraph, replacements)


def main() -> None:
    document = Document(SOURCE)
    ensure_heading_styles(document)
    clean_usa_paragraphs(document)
    clean_usa_table(document)
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    document.save(OUTPUT)
    print(OUTPUT)


if __name__ == "__main__":
    main()
