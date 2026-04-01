import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { getServiceBySlug, services } from "@/lib/site-data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

const serviceHeroImages: Record<string, string> = {
  "tree-management-plans": "/tree-management-card.png",
  "tree-pruning-and-structural-training": "/pruning-closeup.png",
  "plant-health-care-programs": "/plant-health-care-card.png",
  "tree-risk-assessment": "/tree-risk-assessment-card.png",
  "tree-removal": "/tree-removal-card.png",
  "root-zone-and-soil-management": "/root-zone-soil-card.png",
  "emergency-tree-services": "/emergency-tree-services-card.png",
  "consulting-and-expert-services": "/consulting-expert-services-card.png",
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.intro,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = getServiceBySlug(resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const heroImage = serviceHeroImages[service.slug] ?? "/hero.png";

  return (
    <div className="site-shell page-content space-y-24">
      <PageHero
        label={service.kicker}
        title={service.title}
        description={service.intro}
        image={heroImage}
        imageAlt={`${service.title} service image`}
        primaryCta={{ href: "/contact", label: "Book Consultation" }}
        secondaryCta={{ href: "/services", label: "All Services" }}
      />

      <section className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
        <Reveal className="h-full min-w-0">
          <div className="flex h-full flex-col rounded-3xl border border-[#34754C]/16 bg-white/74 p-6 shadow-[0_20px_40px_rgba(16,34,22,0.08)]">
            <SectionHeading label="Overview" title="What this service covers" description={service.overview} className="max-w-none" />
            <p className="mt-7 rounded-2xl border border-[#34754C]/15 bg-[#EFE6DC]/66 p-5 text-sm leading-7 text-[#314439]">
              {service.whyItMatters}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="h-full min-w-0">
          <div className="h-full rounded-3xl border border-[#34754C]/16 bg-white/76 p-6 shadow-[0_20px_40px_rgba(16,34,22,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34754C]">What is included</p>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-[#2f4337]">
              {service.includes.map((item) => (
                <li key={item} className="rounded-xl border border-[#34754C]/12 bg-[#EFE6DC]/70 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <SectionHeading
            label="Process"
            title="How this service is delivered"
            description="Every engagement follows a structured progression from diagnosis to documented recommendations and precision execution."
          />
        </Reveal>
        <ProcessTimeline steps={service.process} className="mt-10 md:grid-cols-3 xl:grid-cols-3" />
      </section>

      <section className="grid items-stretch gap-4 md:grid-cols-2">
        <Reveal>
          <article className="h-full rounded-3xl border border-[#34754C]/16 bg-white/74 p-7 shadow-[0_20px_38px_rgba(16,34,22,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34754C]">Who this is for</p>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-[#304338]">
              {service.forAudience.map((audience) => (
                <li key={audience}>{audience}</li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={0.05}>
          <article className="flex h-full flex-col rounded-3xl border border-[#34754C]/16 bg-[#102216] p-7 text-[#EFE6DC] shadow-[0_22px_44px_rgba(8,22,14,0.36)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2D3C0]">Need urgent support?</p>
            <h3 className="mt-3 font-heading text-2xl text-white">Emergency response is available.</h3>
            <p className="mt-4 text-sm leading-7 text-[#EFE6DC]/84">
              For immediate hazards, storm damage, or unstable tree conditions, our team can prioritize rapid response.
            </p>
            <ButtonLink href="tel:+17075550112" className="mt-auto self-start bg-[#F9D619] text-[#102216] hover:bg-[#f0cf16]">
              Call Emergency Line
            </ButtonLink>
          </article>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <SectionHeading label="FAQ" title="Common questions about this service" />
        </Reveal>
        <div className="mt-8 grid gap-3">
          {service.faq.map((item, index) => (
            <Reveal key={item.question} delay={index * 0.04}>
              <details className="group rounded-2xl border border-[#34754C]/16 bg-white/72 p-5 shadow-[0_12px_26px_rgba(16,34,22,0.06)]">
                <summary className="cursor-pointer list-none text-sm font-semibold text-[#102216]">
                  {item.question}
                </summary>
                <p className="mt-3 text-sm leading-6 text-[#304338]">{item.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <Reveal>
          <div className="rounded-[2rem] border border-[#34754C]/18 bg-[#102216] p-9 text-[#EFE6DC] shadow-[0_28px_56px_rgba(8,22,14,0.38)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2D3C0]">Next Step</p>
            <h2 className="mt-3 font-heading text-3xl text-white sm:text-4xl">{service.cta}</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#EFE6DC]/84 sm:text-base">
              We will evaluate site context, define priority actions, and provide a clear scope tailored to your property.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/contact" className="bg-[#F9D619] text-[#102216] hover:bg-[#f0cf16]">
                Request Consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" className="text-[#EFE6DC] ring-white/32 hover:bg-white/10">
                Browse All Services
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-[#34754C]/12 pt-5 pb-2">
        <Link href="/services" className="text-sm font-semibold text-[#2f6542] hover:underline">
          Back to all services
        </Link>
      </section>
    </div>
  );
}
