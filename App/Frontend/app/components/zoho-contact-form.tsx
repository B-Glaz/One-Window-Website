const formUrl =
  "https://forms.zohopublic.in/onewindow/form/OneWindowContactform/formperma/4n9nj4fNP6XVi5nF9cYdZsGOZeVLOOfwaSoIJ-tud2k?zf_rszfm=1";

type ZohoContactFormProps = { country?: string };

export function ZohoContactForm({ country = "" }: ZohoContactFormProps) {
  const title = country ? `One Window ${country} counselling form` : "One Window Contact form";

  return (
    <div className="zoho-form-shell">
      <iframe aria-label={title} frameBorder="0" loading="lazy" src={formUrl} title={title} />
    </div>
  );
}
