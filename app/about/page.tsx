import type { Metadata } from "next";
import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { credentials } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Canopy Arborists, founded by Edgar Guerrero, and our science-based approach to premium arboriculture in Northern California.",
};

const founderImage =
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80";

export default function AboutPage() {
  return (
    <div className="site-shell page-content space-y-24">
      <PageHero
        label="About"
        title="Built to raise the standard of tree care in Northern California."
        description="Canopy Arborists was founded to deliver an elite level of arboriculture where scientific thinking, field precision, and long-term strategy guide every recommendation."
        image="https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Mature canopy trees in refined landscape"
        primaryCta={{ href: "/contact", label: "Book Consultation" }}
        secondaryCta={{ href: "/services", label: "Explore Services" }}
      />

      <section className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-stretch">
        <Reveal className="min-w-0">
          <div className="relative h-full min-h-[380px] overflow-hidden rounded-[2rem] border border-[#34754C]/18 lg:min-h-[470px]">
            <Image
              src={founderImage}
              alt="Nature and terrain reflecting founder-led science-based tree care"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(11,27,17,0.22),rgba(11,27,17,0.6))]" />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="min-w-0">
          <div className="h-full rounded-[2rem] border border-[#34754C]/16 bg-white/74 p-7 shadow-[0_20px_38px_rgba(16,34,22,0.08)]">
            <SectionHeading
              label="Founder"
              title="Edgar Guerrero, ISA Certified Arborist and TRAQ Qualified professional."
              description="Canopy Arborists was created by Edgar Guerrero to combine diagnostics, preservation strategy, structural pruning, and plant health care into one integrated service model for serious property stewardship."
              className="max-w-none"
            />
            <p className="mt-6 text-base leading-7 text-[#304338]">
              The company vision is clear: become a leading authority in arboricultural consulting and plant health
              care across Sonoma County, Napa County, and Marin County.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="grid items-stretch gap-4 md:grid-cols-2">
        <Reveal>
          <article className="flex h-full flex-col rounded-3xl border border-[#34754C]/16 bg-white/74 p-7 shadow-[0_20px_38px_rgba(16,34,22,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34754C]">Mission</p>
            <h3 className="mt-3 font-heading text-2xl text-[#102216]">Preserve and enhance the urban forest.</h3>
            <p className="mt-4 text-sm leading-7 text-[#314439]">
              We deliver proactive, science-based arboriculture and responsible tree management that protects both
              ecological value and property safety.
            </p>
          </article>
        </Reveal>

        <Reveal delay={0.06}>
          <article className="flex h-full flex-col rounded-3xl border border-[#34754C]/16 bg-[#102216] p-7 text-[#EFE6DC] shadow-[0_22px_44px_rgba(8,22,14,0.4)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2D3C0]">Vision</p>
            <h3 className="mt-3 font-heading text-2xl text-white">Lead modern arboricultural consulting in Northern California.</h3>
            <p className="mt-4 text-sm leading-7 text-[#EFE6DC]/84">
              We aim to be the trusted authority for diagnostics, risk intelligence, and long-range tree management
              planning in high-value environments.
            </p>
          </article>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <SectionHeading
            label="Standards and Discipline"
            title="Professional rigor is embedded in every recommendation."
            description="Our work aligns with recognized industry standards and a preservation-first philosophy that prioritizes long-term tree performance."
          />
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {credentials.map((credential, index) => (
            <Reveal key={credential} delay={index * 0.03}>
              <span className="rounded-full border border-[#34754C]/18 bg-[#EFE6DC]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#2f6542]">
                {credential}
              </span>
            </Reveal>
          ))}
        </div>
      </section>

      <section>
        <Reveal>
          <SectionHeading
            label="Case Study Snapshot"
            title="Estate canopy preservation with risk mitigation and phased management."
            description="A high-value residential property in Napa required preservation-focused mitigation across mature trees with known structural concerns."
          />
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 grid gap-4 rounded-[2rem] border border-[#34754C]/16 bg-white/74 p-7 shadow-[0_24px_44px_rgba(16,34,22,0.08)] md:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold text-[#34754C]">42</p>
              <p className="mt-1 text-sm text-[#304338]">Trees assessed with risk categorization</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#34754C]">91%</p>
              <p className="mt-1 text-sm text-[#304338]">Canopy retained through targeted mitigation</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#34754C]">3-Year</p>
              <p className="mt-1 text-sm text-[#304338]">Structured management plan adopted by owner team</p>
            </div>
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <div className="rounded-[2rem] border border-[#34754C]/18 bg-[#102216] p-8 text-[#EFE6DC] shadow-[0_28px_56px_rgba(8,22,14,0.38)] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2D3C0]">Work with Canopy Arborists</p>
            <h2 className="mt-3 font-heading text-3xl text-white sm:text-4xl">Partner with an arboriculture team built for high-trust decisions.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#EFE6DC]/84 sm:text-base">
              From diagnostics and pruning strategy to consulting and emergency response, we deliver disciplined,
              science-based tree management for complex properties.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/contact" className="bg-[#F9D619] text-[#102216] hover:bg-[#f0cf16]">
                Request Consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" className="text-[#EFE6DC] ring-white/30 hover:bg-white/10">
                View Services
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
