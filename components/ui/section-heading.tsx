import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "space-y-4",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      )}
    >
      <p className="inline-flex w-fit rounded-full border border-[#34754C]/25 bg-[#EFE6DC]/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#2f6542]">
        {label}
      </p>
      <h2 className="font-heading text-balance text-3xl leading-tight text-[#102216] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-7 text-[#2f3f35] sm:text-lg">{description}</p>
      ) : null}
    </header>
  );
}
