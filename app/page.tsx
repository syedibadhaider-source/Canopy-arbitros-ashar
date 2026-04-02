import Image from "next/image";

import { CredentialsMarquee } from "@/components/sections/credentials-marquee";
import { HeroMetrics } from "@/components/sections/hero-metrics";
import { ProcessTimeline } from "@/components/sections/process-timeline";
import { ServicesGrid } from "@/components/sections/services-grid";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  credentials,
  globalFaq,
  methodologySteps,
  serviceAreas,
  services,
  testimonials,
  whoWeServe,
} from "@/lib/site-data";

const heroImage = "/hero.png";
const fieldDiagnosticsImage = "/field-diagnostics.png";
const pruningCloseupImage = "/pruning-closeup.png";

const consultingImage =
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=80";

const heroMetrics = [
  {
    value: "500+",
    description: "Managed tree assets across premium properties",
  },
  {
    value: "3 Counties",
    description: "Local expertise in Sonoma, Napa, and Marin County",
  },
  {
    value: "Preservation First",
    description: "Strategic recommendations before removal decisions",
  },
];

const imageFeatureCards = [
  {
    label: "Field Intelligence",
    title: "Ground-level diagnostics that shape better long-term tree decisions.",
    image: fieldDiagnosticsImage,
    href: "/services/consulting-and-expert-services",
    overlay:
      "bg-[linear-gradient(180deg,rgba(8,22,14,0.62)_0%,rgba(8,22,14,0.26)_42%,rgba(8,22,14,0.58)_100%)]",
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(249,214,25,0.26),transparent_38%)]",
  },
  {
    label: "Precision Pruning",
    title: "Precision cuts that protect structure, clearance, and long-term canopy health.",
    image: pruningCloseupImage,
    href: "/services/tree-pruning-and-structural-training",
    overlay:
      "bg-[linear-gradient(180deg,rgba(8,22,14,0.66)_0%,rgba(8,22,14,0.24)_44%,rgba(8,22,14,0.62)_100%)]",
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(87,147,107,0.28),transparent_42%)]",
  },
  {
    label: "Risk Assessment",
    title: "Objective risk intelligence before costly failures or emergency interventions.",
    image: consultingImage,
    href: "/services/tree-risk-assessment",
    overlay:
      "bg-[linear-gradient(180deg,rgba(8,22,14,0.66)_0%,rgba(8,22,14,0.3)_44%,rgba(8,22,14,0.62)_100%)]",
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(226,211,192,0.3),transparent_42%)]",
  },
  {
    label: "Plant Health Care",
    title: "Preventive programs that preserve canopy value and long-term landscape performance.",
    image: heroImage,
    href: "/services/plant-health-care-programs",
    overlay:
      "bg-[linear-gradient(180deg,rgba(8,22,14,0.66)_0%,rgba(8,22,14,0.28)_44%,rgba(8,22,14,0.62)_100%)]",
    glow: "bg-[radial-gradient(circle_at_top_left,rgba(249,214,25,0.2),transparent_42%)]",
  },
] as const;

export default function Home() {
  return (
    <div className="pb-10">
      <section className="relative isolate min-h-[88svh] overflow-hidden border-b border-[#34754C]/20">
        <Image
          src={heroImage}
          alt="Canopy and mature trees in premium landscape environment"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(8,22,14,0.9)_8%,rgba(10,26,16,0.78)_46%,rgba(10,26,16,0.45)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_14%,rgba(87,147,107,0.34),transparent_52%)]" />

        <div className="site-shell relative flex min-h-[88svh] items-center pb-16 pt-24">
          <Reveal className="max-w-3xl space-y-8">
            <p className="inline-flex w-fit rounded-full border border-white/25 bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-[#EFE6DC]">
              Advanced Arboriculture
            </p>

            <h1 className="font-heading text-balance text-4xl leading-tight text-white sm:text-5xl lg:text-7xl">
              Science-driven tree care for healthier, safer, and longer-living landscapes.
            </h1>

            <p className="max-w-2xl text-pretty text-base leading-7 text-[#EFE6DC]/85 sm:text-lg">
              Canopy Arborists delivers premium arboriculture services focused on preservation, risk management,
              structural integrity, and long-term plant health across Sonoma, Napa, and Marin County.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <ButtonLink href="/contact" className="bg-[#F9D619] text-[#102216] hover:bg-[#efcf16]">
                Book a Consultation
              </ButtonLink>
              <ButtonLink
                href="/services"
                variant="secondary"
                className="text-[#EFE6DC] ring-white/30 hover:bg-white/15"
              >
                Explore Services
              </ButtonLink>
            </div>

            <div className="space-y-2 rounded-2xl border border-white/20 bg-white/8 px-4 py-3 backdrop-blur-sm sm:w-fit">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E2D3C0]">Immediate Support</p>
              <a
                href="tel:+17075550112"
                className="font-heading block text-2xl leading-none text-[#F9D619] transition-colors hover:text-[#fff2a6] sm:text-3xl lg:text-4xl"
              >
                (707) 555-0112
              </a>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="rounded-full border border-white/22 bg-white/7 px-3 py-1 text-xs font-medium text-[#EFE6DC]">
                ISA Certified Arborist
              </span>
              <span className="rounded-full border border-white/22 bg-white/7 px-3 py-1 text-xs font-medium text-[#EFE6DC]">
                TRAQ Qualified
              </span>
              <span className="rounded-full border border-white/22 bg-white/7 px-3 py-1 text-xs font-medium text-[#EFE6DC]">
                ANSI A300 + Z133 Standards
              </span>
            </div>
          </Reveal>
        </div>

        <div className="site-shell relative z-10 -mt-10 pb-8">
          <Reveal>
            <HeroMetrics metrics={heroMetrics} />
          </Reveal>
        </div>
      </section>

      <section className="site-shell mt-12">
        <Reveal>
          <CredentialsMarquee items={credentials} />
        </Reveal>
      </section>

      <section className="site-shell mt-24 grid gap-10 lg:grid-cols-[1.25fr_0.75fr]">
        <Reveal>
          <SectionHeading
            label="About Canopy Arborists"
            title="A premium arboriculture partner for clients who value long-term tree stewardship."
            description="Founded by Edgar Guerrero, ISA Certified Arborist and TRAQ Qualified professional, Canopy Arborists was built to raise the standard of tree care in Northern California through diagnostics, structural pruning, plant health care programs, and responsible risk mitigation."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-[#34754C]/16 bg-white/72 p-6 shadow-[0_24px_48px_rgba(16,34,22,0.08)] backdrop-blur-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34754C]">Founder Profile</p>
            <h3 className="mt-3 font-heading text-2xl text-[#102216]">Edgar Guerrero</h3>
            <p className="mt-2 text-sm leading-6 text-[#34453a]">
              ISA Certified Arborist and TRAQ Qualified professional with a focused approach to preservation, risk
              intelligence, and urban forest resilience.
            </p>
            <p className="mt-4 rounded-2xl border border-[#34754C]/12 bg-[#EFE6DC]/72 p-4 text-sm leading-6 text-[#2f4236]">
              Mission: Preserve and enhance the urban forest through proactive, science-based arboriculture and
              responsible tree management.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="site-shell mt-24">
        <Reveal>
          <header className="mx-auto max-w-4xl space-y-4 text-center">
            <p className="mx-auto inline-flex w-fit rounded-full border border-[#34754C]/25 bg-[#EFE6DC]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f6542]">
              Featured Services
            </p>
            <h2 className="revealing-text font-heading mx-auto max-w-[44ch] text-3xl leading-tight text-[#102216] sm:text-4xl md:text-5xl">
              <span className="reveal-line">
                <span className="reveal-line-inner md:whitespace-nowrap">
                  Comprehensive arboriculture services designed for
                </span>
              </span>
              <span className="reveal-line">
                <span className="reveal-line-inner">
                  <span className="headline-highlight headline-highlight-green">precision</span>,{" "}
                  <span className="headline-highlight headline-highlight-yellow">longevity</span>, and{" "}
                  <span className="headline-highlight headline-highlight-beige">trust</span>.
                </span>
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-base leading-7 text-[#2f3f35] sm:text-lg">
              Every engagement is structured around risk context, tree biology, and measurable outcomes.
            </p>
          </header>
        </Reveal>
        <div className="mt-10">
          <ServicesGrid services={services} />
        </div>
      </section>

      <section className="site-shell mt-24">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {imageFeatureCards.map((card, index) => (
            <Reveal key={card.label} delay={index * 0.06}>
              <article className="relative isolate overflow-hidden rounded-[2rem] border border-[#34754C]/18 shadow-[0_24px_44px_rgba(16,34,22,0.12)]">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 24vw"
                />
                <div className={`absolute inset-0 ${card.overlay}`} />
                <div className={`absolute inset-0 ${card.glow}`} />

                <div className="relative flex min-h-[430px] flex-col items-start justify-between p-5 lg:min-h-[460px]">
                  <div className="max-w-sm space-y-3">
                    <p className="inline-flex rounded-full border border-white/28 bg-white/12 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#EFE6DC]">
                      {card.label}
                    </p>
                    <h2 className="font-heading text-balance text-2xl leading-tight text-white">
                      {card.title}
                    </h2>
                  </div>

                  <ButtonLink href={card.href} className="bg-[#F9D619] text-[#102216] hover:bg-[#f0cf16]">
                    Learn More
                  </ButtonLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-shell mt-24">
        <Reveal>
          <SectionHeading
            label="Why Canopy Arborists"
            title="Built for clients who need expert judgment, not generic tree work."
            description="We combine field execution with diagnostics and planning disciplines often missing from traditional service models."
            className="max-w-4xl"
          />
        </Reveal>

        <div className="mt-10 grid gap-4">
          <Reveal>
            <div className="rounded-3xl border border-[#34754C]/16 bg-white/72 p-7 shadow-[0_26px_44px_rgba(16,34,22,0.08)]">
              <h3 className="font-heading text-2xl text-[#102216]">What sets us apart</h3>
              <ul className="mt-5 grid gap-3 text-sm leading-6 text-[#33453a] sm:grid-cols-2 lg:grid-cols-4">
                <li className="flex items-center rounded-2xl border border-[#34754C]/12 bg-[#EFE6DC]/70 p-4">
                  Preservation-first planning mindset
                </li>
                <li className="flex items-center rounded-2xl border border-[#34754C]/12 bg-[#EFE6DC]/70 p-4">
                  Diagnostics and long-term canopy strategy
                </li>
                <li className="flex items-center rounded-2xl border border-[#34754C]/12 bg-[#EFE6DC]/70 p-4">
                  Detailed technical reports and recommendations
                </li>
                <li className="flex items-center rounded-2xl border border-[#34754C]/12 bg-[#EFE6DC]/70 p-4">
                  Professional standards and safety alignment
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid items-stretch gap-4 md:grid-cols-2">
              <article className="flex h-full flex-col rounded-3xl border border-[#34754C]/16 bg-[#102216] p-6 text-[#EFE6DC] shadow-[0_24px_42px_rgba(7,20,12,0.35)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2D3C0]">Risk Reduction</p>
                <h3 className="mt-2 font-heading text-2xl text-white">Structured decision support</h3>
                <p className="mt-3 text-sm leading-6 text-[#EFE6DC]/82">
                  Clear recommendations help owners and managers move from uncertainty to action with confidence.
                </p>
              </article>
              <article className="flex h-full flex-col rounded-3xl border border-[#34754C]/16 bg-[#F9D619]/88 p-6 text-[#102216] shadow-[0_20px_38px_rgba(151,126,6,0.2)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em]">Local Intelligence</p>
                <h3 className="mt-2 font-heading text-2xl">County-specific expertise</h3>
                <p className="mt-3 text-sm leading-6 text-[#1f2f23]">
                  Practical knowledge of Sonoma, Napa, and Marin conditions informs more accurate field decisions.
                </p>
              </article>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="site-shell mt-24">
        <Reveal>
          <SectionHeading
            label="Methodology"
            title="A disciplined process that protects trees, people, and property."
            description="Our delivery model combines science, standards, and precision execution at every stage."
          />
        </Reveal>
        <ProcessTimeline steps={methodologySteps} className="mt-10" />
      </section>

      <section className="site-shell mt-24">
        <Reveal>
          <SectionHeading
            label="Who We Serve"
            title="Tailored arboriculture support for complex and high-value environments."
            description="From private estates to municipalities, we adapt scope and reporting to each stakeholder context."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {whoWeServe.map((segment, index) => (
            <Reveal key={segment} delay={index * 0.04}>
              <article className="rounded-2xl border border-[#34754C]/16 bg-white/75 p-5 text-sm font-medium text-[#213529] shadow-[0_16px_30px_rgba(16,34,22,0.07)]">
                {segment}
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-shell mt-24 grid items-stretch gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="h-full">
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-[2rem] border border-[#34754C]/18">
            <Image
              src={consultingImage}
              alt="Nature environment representing refined consulting and assessment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(170deg,rgba(9,25,15,0.35),rgba(9,25,15,0.6))]" />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="h-full">
          <div className="flex h-full flex-col rounded-[2rem] border border-[#34754C]/16 bg-white/72 p-7 shadow-[0_28px_52px_rgba(16,34,22,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34754C]">Consulting and Expert Services</p>
            <h3 className="mt-4 font-heading text-3xl text-[#102216]">Beyond field work, we advise on high-stakes tree decisions.</h3>
            <p className="mt-4 text-base leading-7 text-[#33453a]">
              Canopy Arborists supports construction teams, property stakeholders, and insurers with defensible
              arboricultural guidance.
            </p>
            <ul className="mt-6 grid gap-3 text-sm leading-6 text-[#2e4135]">
              <li>Construction impact assessments and tree protection plans</li>
              <li>Permit support and technical documentation</li>
              <li>Insurance-related tree evaluations and expert opinions</li>
              <li>Coordination with architects, planners, and project consultants</li>
            </ul>
            <ButtonLink href="/services/consulting-and-expert-services" className="mt-auto self-start">
              Explore Consulting Services
            </ButtonLink>
          </div>
        </Reveal>
      </section>

      <section className="site-shell mt-24">
        <Reveal>
          <div className="rounded-[2rem] border border-[#ad950f]/35 bg-[linear-gradient(140deg,#F9D619_0%,#f1ce10_60%,#f4d63e_100%)] p-8 shadow-[0_22px_44px_rgba(167,141,12,0.34)] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2a2402]">Emergency Response</p>
            <h3 className="mt-3 font-heading text-balance text-3xl leading-tight text-[#101d12] sm:text-4xl">
              Hazardous tree situation? Rapid response to protect people and property.
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#243125] sm:text-base">
              For storm damage, partial failures, or immediate site hazards, our emergency team responds with structured
              triage, safety-first stabilization, and clear next-step guidance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="tel:+17075550112" variant="emergency">
                Call Emergency Line
              </ButtonLink>
              <ButtonLink href="/services/emergency-tree-services" variant="ghost" className="border-[#102216]/30">
                Emergency Service Details
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="site-shell mt-24">
        <Reveal>
          <SectionHeading
            label="Service Area"
            title="Serving Sonoma County, Napa County, and Marin County."
            description="Local field knowledge and response coverage for residential, estate, municipal, and commercial environments."
            className="max-w-4xl"
          />
        </Reveal>

        <div className="mt-8 grid items-stretch gap-4 lg:grid-cols-3">
          {serviceAreas.map((area, index) => (
            <Reveal key={area.county} delay={index * 0.06}>
              <article className="flex h-full flex-col rounded-3xl border border-[#34754C]/16 bg-white/75 p-6 shadow-[0_18px_34px_rgba(16,34,22,0.08)]">
                <h3 className="font-heading text-2xl text-[#102216]">{area.county}</h3>
                <p className="mt-3 text-sm leading-6 text-[#324438]">{area.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {area.cities.map((city) => (
                    <span
                      key={city}
                      className="rounded-full border border-[#34754C]/18 bg-[#EFE6DC]/75 px-3 py-1 text-xs font-semibold text-[#2f6542]"
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

      <section className="site-shell mt-24">
        <Reveal>
          <SectionHeading
            label="Proof"
            title="Trusted by serious property stakeholders across Northern California."
            description="Our clients choose Canopy Arborists for clear communication, measurable outcomes, and technical confidence."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.person + item.context} delay={index * 0.05}>
              <figure className="h-full rounded-3xl border border-[#34754C]/16 bg-white/72 p-6 shadow-[0_16px_36px_rgba(16,34,22,0.08)]">
                <blockquote className="text-sm leading-7 text-[#25382c]">&quot;{item.quote}&quot;</blockquote>
                <figcaption className="mt-6 border-t border-[#34754C]/12 pt-4">
                  <p className="font-semibold text-[#102216]">{item.person}</p>
                  <p className="text-xs uppercase tracking-[0.12em] text-[#3f5b4c]">{item.context}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="site-shell mt-24">
        <Reveal>
          <SectionHeading
            label="FAQ"
            title="Common questions from homeowners, estates, and managed properties."
          />
        </Reveal>

        <div className="mt-8 grid gap-3">
          {globalFaq.map((item, index) => (
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

      <section className="site-shell mt-24 pb-8">
        <Reveal>
          <div className="rounded-[2rem] border border-[#34754C]/18 bg-[#102216] p-9 text-[#EFE6DC] shadow-[0_30px_56px_rgba(8,22,14,0.4)] md:p-11">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2D3C0]">Ready to begin</p>
            <h2 className="mt-3 font-heading text-balance text-3xl leading-tight text-white sm:text-4xl">
              Book an arboriculture consultation with Canopy Arborists.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#EFE6DC]/85 sm:text-base">
              Tell us about your trees, property goals, or risk concerns and we will build a clear plan grounded in
              science, field experience, and professional standards.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/contact" className="bg-[#F9D619] text-[#102216] hover:bg-[#f0cf16]">
                Request Consultation
              </ButtonLink>
              <ButtonLink href="/services" variant="secondary" className="text-[#EFE6DC] ring-white/32 hover:bg-white/10">
                View All Services
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
