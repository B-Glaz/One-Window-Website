import { notFound, redirect } from "next/navigation";
import { InstitutionalPage, servicePages } from "../../institution-pages";
export default async function Page({
  params,
}: {
  params: Promise<{
    service: string;
  }>;
}) {
  const { service } = await params;
  if (service === "bachelors-recruitment") {
    redirect("/services/bachelors");
  }
  const page = servicePages[service];
  if (!page) notFound();
  return (
    <InstitutionalPage
      page={page}
      related={Object.entries(servicePages)
        .filter(([slug]) => slug !== service)
        .map(([slug, item]) => [slug, item.audience])}
    />
  );
}
