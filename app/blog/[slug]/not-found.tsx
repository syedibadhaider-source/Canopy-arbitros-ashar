import Link from "next/link";

export default function BlogNotFound() {
  return (
    <div className="site-shell page-content">
      <section className="rounded-[2rem] border border-[#34754C]/16 bg-white/76 p-8 shadow-[0_20px_42px_rgba(16,34,22,0.08)] md:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34754C]">Post Not Found</p>
        <h1 className="mt-3 font-heading text-3xl text-[#102216] sm:text-4xl">This blog post is unavailable.</h1>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-[#314439]">
          The post may have been moved or is no longer published. Browse the latest insights from Canopy Arborists.
        </p>
        <Link href="/blog" className="mt-6 inline-flex rounded-full bg-[#34754C] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#2f6844]">
          Back to Blog
        </Link>
      </section>
    </div>
  );
}
