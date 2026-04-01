import type { Metadata } from "next";

import { ButtonLink } from "@/components/ui/button-link";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { globalFaq } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Canopy Arborists to request a consultation, risk review, plant health care planning, or emergency tree response.",
};

export default function ContactPage() {
  return (
    <div className="site-shell page-content space-y-24">
      <PageHero
        label="Contact"
        title="Start with a focused consultation and clear arboricultural guidance."
        description="Share your tree concerns, property context, or project objectives and we will recommend the right next steps."
        image="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Forest canopy symbolizing healthy tree systems"
      />

      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <Reveal>
          <div className="flex h-full flex-col space-y-4 rounded-[2rem] border border-[#34754C]/16 bg-white/75 p-7 shadow-[0_20px_40px_rgba(16,34,22,0.08)]">
            <SectionHeading
              label="Contact Details"
              title="Speak with our team"
              description="Serving Sonoma County, Napa County, and Marin County."
            />

            <div className="space-y-3 text-sm text-[#314439]">
              <p>
                <span className="font-semibold text-[#102216]">Phone:</span>{" "}
                <a href="tel:+17075550112" className="text-[#2f6542] hover:underline">
                  (707) 555-0112
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#102216]">Email:</span>{" "}
                <a href="mailto:hello@canopyarborists.com" className="text-[#2f6542] hover:underline">
                  hello@canopyarborists.com
                </a>
              </p>
              <p>
                <span className="font-semibold text-[#102216]">Emergency Line:</span>{" "}
                <a href="tel:+17075550112" className="text-[#2f6542] hover:underline">
                  24/7 priority response
                </a>
              </p>
            </div>

            <div className="rounded-2xl border border-[#34754C]/14 bg-[#EFE6DC]/75 p-4 text-sm leading-6 text-[#2f4337]">
              Include your property location, tree concerns, timelines, and any photos available to improve first-call
              triage.
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form className="h-full rounded-[2rem] border border-[#34754C]/16 bg-white/76 p-7 shadow-[0_22px_44px_rgba(16,34,22,0.08)]">
            <h2 className="font-heading text-3xl text-[#102216]">Request Consultation</h2>
            <p className="mt-2 text-sm leading-6 text-[#304338]">
              Tell us how we can help and we will follow up with a recommended path.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-[#263a2e]">
                First Name
                <input
                  type="text"
                  name="firstName"
                  required
                  className="rounded-xl border border-[#34754C]/18 bg-[#f9f6f1] px-4 py-3 text-sm text-[#102216] focus:border-[#34754C] focus:outline-none"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-[#263a2e]">
                Last Name
                <input
                  type="text"
                  name="lastName"
                  required
                  className="rounded-xl border border-[#34754C]/18 bg-[#f9f6f1] px-4 py-3 text-sm text-[#102216] focus:border-[#34754C] focus:outline-none"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-[#263a2e]">
                Email
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded-xl border border-[#34754C]/18 bg-[#f9f6f1] px-4 py-3 text-sm text-[#102216] focus:border-[#34754C] focus:outline-none"
                />
              </label>

              <label className="grid gap-2 text-sm font-medium text-[#263a2e]">
                Phone
                <input
                  type="tel"
                  name="phone"
                  required
                  className="rounded-xl border border-[#34754C]/18 bg-[#f9f6f1] px-4 py-3 text-sm text-[#102216] focus:border-[#34754C] focus:outline-none"
                />
              </label>
            </div>

            <label className="mt-4 grid gap-2 text-sm font-medium text-[#263a2e]">
              Service Interest
              <select
                name="serviceInterest"
                className="rounded-xl border border-[#34754C]/18 bg-[#f9f6f1] px-4 py-3 text-sm text-[#102216] focus:border-[#34754C] focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Tree Management Plans</option>
                <option>Tree Pruning and Structural Training</option>
                <option>Plant Health Care Programs</option>
                <option>Tree Risk Assessment</option>
                <option>Tree Removal</option>
                <option>Root Zone and Soil Management</option>
                <option>Emergency Tree Services</option>
                <option>Consulting and Expert Services</option>
              </select>
            </label>

            <label className="mt-4 grid gap-2 text-sm font-medium text-[#263a2e]">
              Project Details
              <textarea
                name="details"
                rows={5}
                required
                className="rounded-xl border border-[#34754C]/18 bg-[#f9f6f1] px-4 py-3 text-sm text-[#102216] focus:border-[#34754C] focus:outline-none"
                placeholder="Property location, tree concerns, timeline, and goals"
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#34754C] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(52,117,76,0.34)] transition-all hover:-translate-y-0.5 hover:bg-[#2f6844]"
            >
              Send Request
            </button>
          </form>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <div className="rounded-[2rem] border border-[#ad950f]/35 bg-[linear-gradient(140deg,#F9D619_0%,#f1ce10_60%,#f4d63e_100%)] p-8 shadow-[0_22px_44px_rgba(167,141,12,0.34)] md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2a2402]">Emergency Tree Services</p>
            <h2 className="mt-3 font-heading text-3xl text-[#101d12] sm:text-4xl">Immediate hazard or storm damage? Call now.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#243125] sm:text-base">
              For urgent conditions impacting safety or property access, contact our emergency line for priority response.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ButtonLink href="tel:+17075550112" variant="emergency">
                Call (707) 555-0112
              </ButtonLink>
              <ButtonLink href="/services/emergency-tree-services" variant="ghost" className="border-[#102216]/30">
                Emergency Service Details
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <SectionHeading label="FAQ" title="Before you reach out" />
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
    </div>
  );
}
