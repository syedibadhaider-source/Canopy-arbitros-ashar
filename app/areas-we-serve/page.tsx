import type { Metadata } from "next";

import { AreasCoverageMap } from "@/components/sections/areas-coverage-map";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { serviceAreas, whoWeServe } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "Canopy Arborists serves Sonoma County, Napa County, and Marin County with premium arboriculture and consulting services.",
};

export default function AreasPage() {
  return (
    <div className="site-shell page-content space-y-24">
      <PageHero
        label="Areas We Serve"
        title="Local expertise across Sonoma, Napa, and Marin County."
        description="We provide science-based arboriculture for premium residential, commercial, and municipal landscapes throughout Northern California."
        image="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2100&q=80"
        imageAlt="Northern California landscape and tree canopy"
        primaryCta={{ href: "/contact", label: "Schedule Consultation" }}
        secondaryCta={{ href: "/services", label: "View Services" }}
      />

      <section>
        <Reveal>
          <SectionHeading
            label="Regional Coverage"
            title="County-specific service with consistent technical standards."
            description="Our team understands local species behavior, climate stress patterns, and property conditions across each county we serve."
          />
        </Reveal>

        <AreasCoverageMap areas={serviceAreas} />

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {serviceAreas.map((area, index) => (
            <Reveal key={area.county} delay={index * 0.05}>
              <article className="flex h-full flex-col rounded-3xl border border-[#34754C]/16 bg-white/74 p-6 shadow-[0_18px_34px_rgba(16,34,22,0.08)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34754C]">County</p>
                <h3 className="mt-2 font-heading text-2xl text-[#102216]">{area.county}</h3>
                <p className="mt-4 text-sm leading-7 text-[#314439]">{area.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {area.cities.map((city) => (
                    <span
                      key={city}
                      className="rounded-full border border-[#34754C]/18 bg-[#EFE6DC]/80 px-3 py-1 text-xs font-semibold text-[#2f6542]"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <Reveal>
          <SectionHeading
            label="Who We Serve"
            title="Tailored support for every property context."
            description="From private estates to municipalities, we adapt scope and reporting to each client's needs."
          />
        </Reveal>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whoWeServe.map((segment, index) => (
            <Reveal key={segment} delay={index * 0.04}>
              <article className="flex h-full items-center rounded-2xl border border-[#34754C]/15 bg-white/72 p-5 shadow-[0_14px_30px_rgba(16,34,22,0.06)]">
                <p className="text-sm font-semibold text-[#203428]">{segment}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <Reveal>
          <div className="rounded-[2rem] border border-[#34754C]/18 bg-[#102216] p-8 text-[#EFE6DC] shadow-[0_28px_56px_rgba(8,22,14,0.38)] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2D3C0]">Project or Property Outside Core Counties?</p>
            <h2 className="mt-3 font-heading text-3xl text-white sm:text-4xl">Request a location review with our team.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#EFE6DC]/84 sm:text-base">
              Contact us with your site details and we will confirm service availability, scope fit, and response windows.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/contact" className="bg-[#F9D619] text-[#102216] hover:bg-[#f0cf16]">
                Contact Canopy Arborists
              </ButtonLink>
              <ButtonLink href="tel:+17075550112" variant="secondary" className="text-[#EFE6DC] ring-white/32 hover:bg-white/10">
                Emergency: (707) 555-0112
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
