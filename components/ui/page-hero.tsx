import Image from "next/image";

import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

type PageHeroProps = {
  label: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta?: {
    href: string;
    label: string;
  };
  secondaryCta?: {
    href: string;
    label: string;
  };
};

export function PageHero({
  label,
  title,
  description,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden rounded-[2rem] border border-white/25">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,20,12,0.84)_8%,rgba(7,20,12,0.58)_42%,rgba(12,30,19,0.22)_90%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(87,147,107,0.35),transparent_55%)]" />

      <div className="relative px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <Reveal className="max-w-3xl space-y-7">
          <p className="inline-flex w-fit rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#efe6dc]">
            {label}
          </p>
          <h1 className="font-heading text-balance text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="max-w-2xl text-pretty text-base leading-7 text-white/85 sm:text-lg">{description}</p>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {primaryCta ? <ButtonLink href={primaryCta.href}>{primaryCta.label}</ButtonLink> : null}
              {secondaryCta ? (
                <ButtonLink href={secondaryCta.href} variant="secondary" className="text-[#EFE6DC] ring-white/35 hover:bg-white/15">
                  {secondaryCta.label}
                </ButtonLink>
              ) : null}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
