"use client";

import { motion, useReducedMotion } from "framer-motion";

type Area = {
  county: string;
  description: string;
  cities: string[];
};

type AreasCoverageMapProps = {
  areas: Area[];
};

type CountyShape = {
  path: string;
  marker: [number, number];
  label: [number, number];
  fill: string;
};

const countyShapes: Record<string, CountyShape> = {
  "Sonoma County": {
    path: "M190 74L304 40L377 106L334 202L222 232L143 185L150 113Z",
    marker: [247, 146],
    label: [248, 150],
    fill: "#57936B",
  },
  "Napa County": {
    path: "M325 74L426 96L474 172L442 254L351 248L334 202L377 106Z",
    marker: [401, 172],
    label: [401, 178],
    fill: "#F9D619",
  },
  "Marin County": {
    path: "M121 239L230 225L309 275L279 376L188 430L121 383L91 304Z",
    marker: [204, 316],
    label: [204, 322],
    fill: "#34754C",
  },
};

function countyLabel(county: string) {
  return county.replace(" County", "");
}

export function AreasCoverageMap({ areas }: AreasCoverageMapProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mt-8 grid items-stretch gap-5 rounded-[2rem] border border-[#34754C]/16 bg-white/74 p-4 shadow-[0_24px_44px_rgba(16,34,22,0.08)] md:p-6 lg:grid-cols-[1.08fr_0.92fr]">
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#34754C]/15 bg-[linear-gradient(170deg,rgba(239,230,220,0.95),rgba(240,247,241,0.88))] p-4 md:p-5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_14%,rgba(87,147,107,0.2),transparent_45%),radial-gradient(circle_at_92%_12%,rgba(249,214,25,0.22),transparent_42%)]" />

        <p className="relative inline-flex rounded-full border border-[#34754C]/18 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2f6542]">
          Northern California Coverage
        </p>

        <div className="relative mt-4 flex-1 overflow-hidden rounded-2xl border border-[#34754C]/14 bg-white/58 p-3 md:p-4">
          <svg
            role="img"
            aria-label="Animated service area map highlighting Sonoma, Napa, and Marin County"
            viewBox="0 0 560 500"
            className="h-auto w-full"
          >
            <path
              d="M126 58L323 30L468 132L492 214L454 314L335 442L172 458L78 388L58 267L92 132Z"
              fill="none"
              stroke="#2f6542"
              strokeWidth="1.6"
              strokeDasharray="3 8"
              opacity="0.28"
            />

            {areas.map((area, index) => {
              const shape = countyShapes[area.county];

              if (!shape) {
                return null;
              }

              return (
                <g key={area.county}>
                  <motion.path
                    d={shape.path}
                    fill={shape.fill}
                    fillOpacity={0.77}
                    stroke="#113322"
                    strokeOpacity={0.45}
                    strokeWidth={2}
                    initial={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                      duration: 0.72,
                      delay: index * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    style={{ transformOrigin: `${shape.marker[0]}px ${shape.marker[1]}px` }}
                  />

                  {!reduceMotion ? (
                    <motion.circle
                      cx={shape.marker[0]}
                      cy={shape.marker[1]}
                      r={18}
                      fill="#102216"
                      fillOpacity={0.26}
                      animate={{ scale: [0.8, 1.45, 0.8], opacity: [0.6, 0, 0.6] }}
                      transition={{
                        duration: 2.6,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 0.28,
                        ease: "easeInOut",
                      }}
                    />
                  ) : null}

                  <circle cx={shape.marker[0]} cy={shape.marker[1]} r={5} fill="#102216" />

                  <text
                    x={shape.label[0]}
                    y={shape.label[1]}
                    textAnchor="middle"
                    className="fill-[#0d1f14] text-[13px] font-semibold tracking-[0.08em]"
                  >
                    {countyLabel(area.county)}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <div className="grid h-full auto-rows-fr gap-3">
        {areas.map((area, index) => (
          <motion.article
            key={area.county}
            initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.62,
              delay: index * 0.09,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex h-full flex-col rounded-2xl border border-[#34754C]/14 bg-[#EFE6DC]/72 p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#34754C]">{area.county}</p>
            <p className="mt-2 text-sm leading-6 text-[#314439]">{area.description}</p>
            <p className="mt-auto pt-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#3a5f4b]">
              Key Cities: {area.cities.slice(0, 3).join(", ")}
            </p>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
