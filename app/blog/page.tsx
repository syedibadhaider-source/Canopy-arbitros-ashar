import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights from Canopy Arborists on risk management, pruning strategy, plant health care, and long-term canopy stewardship.",
};

export default function BlogPage() {
  return (
    <div className="site-shell page-content space-y-24">
      <PageHero
        label="Blog"
        title="Full-length arboriculture articles for better property decisions."
        description="Eight detailed articles covering risk assessment, pruning standards, plant health care, emergency response, consulting, and long-term canopy planning."
        image="/tree-management-card.png"
        imageAlt="Arborist field planning documentation and analysis tools"
      />

      <section>
        <Reveal>
          <SectionHeading
            label="Published Articles"
            title="Canopy Arborists Knowledge Library"
            description="In-depth guidance written for homeowners, estate managers, HOAs, municipalities, and commercial property teams."
          />
        </Reveal>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, index) => (
            <Reveal key={post.slug} delay={index * 0.03}>
              <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[#34754C]/16 bg-white/76 shadow-[0_18px_34px_rgba(16,34,22,0.08)]">
                <div className="relative h-52 border-b border-[#34754C]/12">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 25vw"
                  />
                </div>

                <div className="flex h-full flex-col p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34754C]">{post.category}</p>
                  <h2 className="mt-2 font-heading text-2xl leading-tight text-[#102216]">{post.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[#314439]">{post.excerpt}</p>

                  <div className="mt-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#456652]">
                    <span>{post.publishedAt}</span>
                    <span aria-hidden>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="mt-auto pt-5 text-sm font-semibold text-[#2f6542] transition-colors hover:text-[#1f4a32]"
                  >
                    Read Full Article
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
