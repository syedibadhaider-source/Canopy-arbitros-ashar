"use client";

import { motion, useReducedMotion } from "framer-motion";

type HeroMetric = {
  value: string;
  description: string;
};

type HeroMetricsProps = {
  metrics: HeroMetric[];
};

export function HeroMetrics({ metrics }: HeroMetricsProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="grid gap-3 rounded-3xl border border-white/20 bg-[#0e2317]/70 p-5 backdrop-blur-xl md:grid-cols-3 md:p-6">
      {metrics.map((metric, index) => (
        <motion.article
          key={metric.value + metric.description}
          initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.62, delay: index * 0.12, ease: "easeOut" }}
          className="relative"
        >
          <motion.p
            className="text-3xl font-semibold text-[#F9D619]"
            animate={
              reduceMotion
                ? undefined
                : {
                    scale: [1, 1.03, 1],
                    textShadow: [
                      "0 0 0 rgba(249,214,25,0)",
                      "0 0 22px rgba(249,214,25,0.32)",
                      "0 0 0 rgba(249,214,25,0)",
                    ],
                  }
            }
            transition={{
              duration: 3.2,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.35,
              ease: "easeInOut",
            }}
          >
            {metric.value}
          </motion.p>
          <p className="mt-1 text-sm text-[#EFE6DC]/82">{metric.description}</p>
        </motion.article>
      ))}
    </div>
  );
}
