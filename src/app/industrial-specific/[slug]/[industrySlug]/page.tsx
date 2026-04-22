import ServiceDetailsSections from "@/components/main/ServiceDetailsSections";
import servicesData from "@/data/Industry.json";
import { getMergedServiceForIndustry } from "@/lib/industryData";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string; industrySlug: string }>;
};

export async function generateStaticParams() {
  const params: { slug: string; industrySlug: string }[] = [];
  
  servicesData.services.forEach((service) => {
    servicesData.industries.forEach((industry) => {
      params.push({
        slug: service.key,
        industrySlug: industry.key,
      });
    });
  });

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, industrySlug } = await params;
  const service = servicesData.services.find((s) => s.key === slug);
  const industry = servicesData.industries.find((i) => i.key === industrySlug);
  
  if (!service || !industry) return { title: "Service Not Found" };
  const merged = getMergedServiceForIndustry({ serviceKey: slug, industryKey: industrySlug });
  
  return {
    title: `${industry.name} ${service.name}`,
    description: merged?.heroDescription ?? industry.description,
  };
}

export default async function IndustryServiceDetailsPage({ params }: Props) {
  const { slug, industrySlug } = await params;
  const service = servicesData.services.find((s) => s.key === slug);
  const industry = servicesData.industries.find((i) => i.key === industrySlug);

  if (!service || !industry) {
    notFound();
  }

  return (
    <main>
      <ServiceDetailsSections initialServiceId={service.id} initialIndustryId={industry.id} />
    </main>
  );
}
