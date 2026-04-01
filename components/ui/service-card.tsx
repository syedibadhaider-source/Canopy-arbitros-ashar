"use client";

import {
  ArrowUpRight,
  ClipboardList,
  Scale,
  Scissors,
  ShieldCheck,
  Shovel,
  Sprout,
  Stethoscope,
  TreePine,
  TriangleAlert,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";
import type { Service } from "@/lib/site-data";

const serviceIcons: Record<string, LucideIcon> = {
  "tree-management-plans": ClipboardList,
  "tree-pruning-and-structural-training": Scissors,
  "plant-health-care-programs": Stethoscope,
  "tree-risk-assessment": ShieldCheck,
  "tree-removal": TreePine,
  "root-zone-and-soil-management": Sprout,
  "emergency-tree-services": TriangleAlert,
  "consulting-and-expert-services": Scale,
};

const serviceCardImages: Record<string, string> = {
  "tree-management-plans": "/tree-management-card.png",
  "tree-pruning-and-structural-training": "/pruning-closeup.png",
  "plant-health-care-programs": "/plant-health-care-card.png",
  "tree-risk-assessment": "/tree-risk-assessment-card.png",
  "tree-removal": "/tree-removal-card.png",
  "root-zone-and-soil-management": "/root-zone-soil-card.png",
  "emergency-tree-services": "/emergency-tree-services-card.png",
  "consulting-and-expert-services": "/consulting-expert-services-card.png",
};

type ServiceCardProps = {
  service: Service;
  className?: string;
};

export function ServiceCard({ service, className }: ServiceCardProps) {
  const Icon = serviceIcons[service.slug] ?? Shovel;
  const cardImage = serviceCardImages[service.slug];

  if (cardImage) {
    return (
      <motion.article
        whileHover={{ y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "group relative h-full overflow-hidden rounded-3xl border border-[#34754C]/15 bg-white/72 p-5 shadow-[0_22px_40px_rgba(16,34,22,0.08)] backdrop-blur-sm",
          className,
        )}
      >
        <div className="relative flex h-full flex-col gap-5">
          <div className="relative h-52 overflow-hidden rounded-2xl border border-[#34754C]/16">
            <Image
              src={cardImage}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,22,14,0.1)_0%,rgba(8,22,14,0.42)_100%)]" />
          </div>

          <h3 className="font-heading text-2xl leading-tight text-[#102216]">{service.title}</h3>

          <div className="mt-auto">
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#214a30] transition-colors duration-300 hover:text-[#34754C]"
            >
              Learn More
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative h-full overflow-hidden rounded-3xl border border-[#34754C]/15 bg-white/70 p-6 shadow-[0_22px_40px_rgba(16,34,22,0.08)] backdrop-blur-sm",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 size-36 rounded-full bg-gradient-to-br from-[#57936B]/20 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
      <div className="relative flex h-full flex-col gap-6">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex size-12 items-center justify-center rounded-2xl border border-[#34754C]/20 bg-[#EFE6DC]/80 text-[#2f6542]">
            <Icon aria-hidden className="size-5" />
          </div>
          <span className="rounded-full border border-[#34754C]/20 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#34754C]">
            {service.kicker}
          </span>
        </div>

        <div className="space-y-3">
          <h3 className="font-heading text-2xl leading-tight text-[#102216]">{service.title}</h3>
          <p className="text-sm leading-6 text-[#33453a]">{service.intro}</p>
        </div>

        <div className="mt-auto">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#214a30] transition-colors duration-300 hover:text-[#34754C]"
          >
            Explore Service
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
