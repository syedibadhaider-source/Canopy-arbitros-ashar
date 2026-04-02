import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts, getBlogPostBySlug } from "@/lib/blog-data";

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

const categoryFramework: Record<
  string,
  {
    strategy: string;
    execution: string;
    governance: string;
    faqs: Array<{ q: string; a: string }>;
  }
> = {
  "Risk Management": {
    strategy:
      "A defensible risk strategy should separate immediate hazards from manageable defects, then prioritize work by consequence, occupancy, and timing windows.",
    execution:
      "Execution should combine inspection intervals, mitigation hierarchy, and documented trigger points for escalation so teams do not rely on reactive judgment during high-pressure events.",
    governance:
      "Owners and managers should maintain written decision records with dates, observations, and actions to support continuity, budgeting, and liability clarity.",
    faqs: [
      {
        q: "How often should high-value properties complete risk review?",
        a: "At minimum annually, and additionally after major storms, construction disturbance, or noticeable canopy change.",
      },
      {
        q: "Can mitigation reduce risk without full removal?",
        a: "Yes. Load reduction, structural pruning, occupancy management, and targeted stabilization can significantly reduce risk where biology and structure allow.",
      },
    ],
  },
  "Structural Pruning": {
    strategy:
      "Pruning plans should define long-term structure goals by age class and species, not just immediate visual outcomes or clearance requests.",
    execution:
      "Each cycle should prioritize defect prevention, load distribution, and branch architecture while preserving wound closure potential through proper cut quality.",
    governance:
      "A written pruning schedule with objective-based scopes reduces unnecessary repeat work and helps ownership teams align budget and site priorities.",
    faqs: [
      {
        q: "Is annual pruning required for every tree?",
        a: "No. Frequency depends on species behavior, age, site targets, and prior pruning quality.",
      },
      {
        q: "Why do standards matter in pruning?",
        a: "Standards improve consistency, reduce harmful cuts, and support outcomes that are safer and biologically responsible.",
      },
    ],
  },
  "Plant Health Care": {
    strategy:
      "PHC should be built as a monitoring-driven program with clear biological goals for vigor, stress tolerance, and pest pressure reduction.",
    execution:
      "Treatment windows, soil interventions, and canopy support actions should be timed to seasonal physiology and validated through repeat observations.",
    governance:
      "Program performance should be reviewed at set intervals with documented adjustments, not carried forward indefinitely without evidence of response.",
    faqs: [
      {
        q: "Can PHC reverse all decline?",
        a: "Not always. PHC is strongest when applied early, before decline progresses into severe structural or root dysfunction.",
      },
      {
        q: "How quickly should results be expected?",
        a: "Some stress reductions are visible within a season, while full canopy response typically requires multi-season tracking.",
      },
    ],
  },
  "Soil and Root Zone": {
    strategy:
      "Root-zone strategy should focus on oxygen availability, compaction relief, and moisture management before additive programs are considered.",
    execution:
      "Field execution works best in phases: diagnose, relieve constraints, protect roots from new disturbance, then monitor canopy response over time.",
    governance:
      "Site teams should coordinate irrigation, landscape, and construction practices so improvements are not undone by routine operational decisions.",
    faqs: [
      {
        q: "Is fertilizer the first solution for weak trees?",
        a: "Usually no. Root-zone and moisture constraints should be resolved first or nutrient inputs may have limited value.",
      },
      {
        q: "How much root disturbance is too much during projects?",
        a: "Even moderate repeated disturbance can be significant for mature trees near high-value targets; pre-construction planning is critical.",
      },
    ],
  },
  "Emergency Services": {
    strategy:
      "Emergency response strategy should prioritize life safety, perimeter control, and stabilization sequencing before full remediation decisions.",
    execution:
      "Execution should follow a triage model: isolate hazards, secure unstable material, restore safe access, then perform controlled secondary work.",
    governance:
      "Every emergency action should end with a documented follow-up scope to prevent unresolved residual risk on adjacent trees and structures.",
    faqs: [
      {
        q: "Should all storm-damaged trees be removed immediately?",
        a: "Not always. Some incidents are better managed with staged stabilization and controlled follow-up work.",
      },
      {
        q: "What information helps emergency response the most?",
        a: "Site address, hazard type, access constraints, and photos of target exposure help speed safe mobilization.",
      },
    ],
  },
  Consulting: {
    strategy:
      "Consulting strategy should be integrated early into project planning so tree constraints shape design and permitting proactively.",
    execution:
      "Execution should align field observations with practical protection specifications that contractors can implement without ambiguity.",
    governance:
      "Permit and stakeholder documentation should be technically clear, internally consistent, and traceable to site conditions and risk context.",
    faqs: [
      {
        q: "When should consulting begin on a construction project?",
        a: "Ideally during pre-design or conceptual planning before major layout decisions are finalized.",
      },
      {
        q: "Can consulting reduce project delays?",
        a: "Yes. Early conflict identification and defensible recommendations often reduce redesign and permit friction.",
      },
    ],
  },
  "Management Planning": {
    strategy:
      "Portfolio-level planning should rank trees by risk, value, and biological need so work sequencing remains objective across large sites.",
    execution:
      "Execution should phase high-impact actions first while preserving flexibility for seasonal timing and budget constraints.",
    governance:
      "Boards and ownership teams benefit from annual plan reviews tied to outcomes, not just completed task counts.",
    faqs: [
      {
        q: "How is a management plan different from a service estimate?",
        a: "A plan defines multi-year priorities and strategy, while an estimate usually addresses a single immediate scope.",
      },
      {
        q: "Can plans support reserve budgeting for HOAs?",
        a: "Yes. Prioritized scopes and timing tiers help boards align canopy stewardship with financial planning.",
      },
    ],
  },
  "Tree Removal": {
    strategy:
      "Removal strategy should be applied when risk or decline exceeds acceptable thresholds and mitigation is no longer reliable.",
    execution:
      "Controlled dismantling plans should account for structure proximity, rigging constraints, crew safety, and site restoration requirements.",
    governance:
      "Post-removal recommendations should include replacement direction and residual site risk notes for surrounding trees.",
    faqs: [
      {
        q: "Can removal be avoided in many high-concern cases?",
        a: "Often yes, if mitigation remains structurally and biologically viable and target risk can be reduced to acceptable levels.",
      },
      {
        q: "Should replacement be considered part of removal planning?",
        a: "For long-term canopy value, yes. Replacement strategy helps maintain ecological and landscape performance over time.",
      },
    ],
  },
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const framework = categoryFramework[post.category] ?? categoryFramework["Risk Management"];

  return (
    <div className="site-shell page-content space-y-24">
      <PageHero
        label={post.category}
        title={post.title}
        description={post.excerpt}
        image={post.image}
        imageAlt={post.imageAlt}
      />

      <section className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <article className="rounded-[2rem] border border-[#34754C]/16 bg-white/76 p-7 shadow-[0_20px_42px_rgba(16,34,22,0.08)] md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34754C]">Introduction</p>
            <p className="mt-4 text-base leading-8 text-[#2f4337]">{post.intro}</p>

            <div className="mt-8 space-y-7">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="font-heading text-2xl text-[#102216]">{section.heading}</h2>
                  <p className="mt-3 text-sm leading-7 text-[#314439]">{section.content}</p>
                </section>
              ))}
            </div>

            <section className="mt-10 rounded-2xl border border-[#34754C]/14 bg-[#EFE6DC]/72 p-5">
              <h2 className="font-heading text-2xl text-[#102216]">Detailed Field Framework</h2>
              <p className="mt-3 text-sm leading-7 text-[#314439]">{framework.strategy}</p>
              <p className="mt-3 text-sm leading-7 text-[#314439]">{framework.execution}</p>
              <p className="mt-3 text-sm leading-7 text-[#314439]">{framework.governance}</p>
            </section>

            <section className="mt-10">
              <h2 className="font-heading text-2xl text-[#102216]">Topic FAQ</h2>
              <div className="mt-4 grid gap-3">
                {framework.faqs.map((item) => (
                  <details key={item.q} className="rounded-2xl border border-[#34754C]/16 bg-white/72 p-4">
                    <summary className="cursor-pointer list-none text-sm font-semibold text-[#102216]">{item.q}</summary>
                    <p className="mt-3 text-sm leading-6 text-[#304338]">{item.a}</p>
                  </details>
                ))}
              </div>
            </section>
          </article>
        </Reveal>

        <Reveal delay={0.06}>
          <aside className="space-y-5">
            <div className="overflow-hidden rounded-3xl border border-[#34754C]/16 bg-white/76 shadow-[0_18px_36px_rgba(16,34,22,0.08)]">
              <div className="relative h-60">
                <Image src={post.image} alt={post.imageAlt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 30vw" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34754C]">Post Details</p>
                <p className="mt-3 text-sm text-[#2f4337]">Published: {post.publishedAt}</p>
                <p className="mt-1 text-sm text-[#2f4337]">Read time: {post.readTime}</p>
              </div>
            </div>

            <div className="rounded-3xl border border-[#34754C]/16 bg-[#102216] p-6 text-[#EFE6DC] shadow-[0_22px_44px_rgba(8,22,14,0.34)]">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2D3C0]">Key Takeaways</p>
              <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-6 text-[#EFE6DC]/86">
                {post.takeaways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </aside>
        </Reveal>
      </section>

      <section>
        <Reveal>
          <SectionHeading
            label="More Insights"
            title="Continue reading"
            description="Explore additional articles on diagnostics, pruning, risk management, and canopy stewardship."
          />
        </Reveal>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {blogPosts
            .filter((item) => item.slug !== post.slug)
            .slice(0, 3)
            .map((item, index) => (
              <Reveal key={item.slug} delay={index * 0.05}>
                <Link
                  href={`/blog/${item.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-[#34754C]/16 bg-white/74 p-5 shadow-[0_16px_32px_rgba(16,34,22,0.08)] transition-transform hover:-translate-y-1"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34754C]">{item.category}</p>
                  <h3 className="mt-2 font-heading text-2xl leading-tight text-[#102216]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#314439]">{item.excerpt}</p>
                  <span className="mt-auto pt-4 text-sm font-semibold text-[#2f6542]">Read Article</span>
                </Link>
              </Reveal>
            ))}
        </div>
      </section>
    </div>
  );
}
