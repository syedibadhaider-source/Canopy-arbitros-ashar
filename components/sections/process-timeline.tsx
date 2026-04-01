"use client";

import { motion, useReducedMotion } from "framer-motion";

import { cn } from "@/lib/cn";
import type { ProcessStep } from "@/lib/site-data";

type ProcessTimelineProps = {
  steps: ProcessStep[];
  className?: string;
};

export function ProcessTimeline({ steps, className }: ProcessTimelineProps) {
  const reduceMotion = useReducedMotion();

  return (
    <ol className={cn("grid gap-4 md:grid-cols-2 xl:grid-cols-5", className)}>
      {steps.map((step, index) => {
        const itemClassName =
          "h-full rounded-2xl border border-[#34754C]/15 bg-white/70 p-5 shadow-[0_16px_30px_rgba(16,34,22,0.06)] backdrop-blur-sm";

        if (reduceMotion) {
          return (
            <li key={step.title} className={itemClassName}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#34754C]">Step {index + 1}</p>
              <h3 className="font-heading text-xl text-[#102216]">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#324338]">{step.detail}</p>
            </li>
          );
        }

        return (
          <motion.li
            key={step.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.65,
              delay: index * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={itemClassName}
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#34754C]">Step {index + 1}</p>
            <h3 className="font-heading text-xl text-[#102216]">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#324338]">{step.detail}</p>
          </motion.li>
        );
      })}
    </ol>
  );
}
