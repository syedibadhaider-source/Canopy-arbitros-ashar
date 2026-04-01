import type { Metadata } from "next";

import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { credentials, methodologySteps, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore premium arboriculture services from Canopy Arborists, including risk assessment, plant health care, pruning, and consulting.",
};

export default function ServicesPage() {
  return (
    <div className="site-shell page-content space-y-24">
      <PageHero
        label="Services"
        title="Integrated arboriculture services for preservation, safety, and long-term canopy performance."
        description="From management planning to emergency response, each service is delivered through science-based diagnostics and precise field execution."
        image="https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=2100&q=80"
        imageAlt="Expansive tree canopy landscape"
        primaryCta={{ href: "/contact", label: "Book Consultation" }}
        secondaryCta={{ href: "/services/consulting-and-expert-services", label: "Consulting Services" }}
      />

      <section>
        <Reveal>
          <SectionHeading
            label="Service Portfolio"
            title="Eight focused service lines, one cohesive arboricultural standard."
            description="Every service is designed to support informed decisions, measurable outcomes, and responsible long-term stewardship."
          />
        </Reveal>
        <div className="mt-10">
          <ServicesGrid services={services} />
        </div>
      </section>

      <section>
        <Reveal>
          <SectionHeading
            label="How We Deliver"
            title="A structured methodology that keeps quality and risk control consistent across scopes."
          />
        </Reveal>
        <ProcessTimeline steps={methodologySteps} className="mt-10" />
      </section>

      <section>
        <Reveal>
          <div className="rounded-3xl border border-[#34754C]/18 bg-white/74 p-7 shadow-[0_20px_42px_rgba(16,34,22,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34754C]">Professional Standards</p>
            <h2 className="mt-3 font-heading text-3xl text-[#102216]">Quality is defined by discipline, not guesswork.</h2>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {credentials.map((credential) => (
                <span
                  key={credential}
                  className="rounded-full border border-[#34754C]/18 bg-[#EFE6DC]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#2f6542]"
                >
                  {credential}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <div className="rounded-[2rem] border border-[#34754C]/18 bg-[#102216] p-8 text-[#EFE6DC] shadow-[0_28px_56px_rgba(8,22,14,0.38)] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2D3C0]">Need help deciding scope?</p>
            <h2 className="mt-3 font-heading text-3xl text-white sm:text-4xl">We can define the right service strategy for your property.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#EFE6DC]/84 sm:text-base">
              Start with a consultation and we will prioritize preservation opportunities, risk concerns, and practical
              next steps for your site.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/contact" className="bg-[#F9D619] text-[#102216] hover:bg-[#f0cf16]">
                Request Consultation
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
