import Link from "next/link";

import { navItems, services } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[#34754C]/20 bg-[#0f2015] text-[#EFE6DC]">
      <div className="site-shell grid gap-12 py-14 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <section className="space-y-5">
          <div>
            <Link href="/" className="inline-flex">
              <img
                src="/logo-01-new.png"
                alt="Canopy Arborists"
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-2 max-w-md text-sm leading-6 text-[#EFE6DC]/78">
              Premium arboriculture services for preservation, risk management, and long-term tree health in Sonoma,
              Napa, and Marin County.
            </p>
          </div>

          <div className="grid gap-2 text-sm text-[#EFE6DC]/82">
            <p>Founded by Edgar Guerrero, ISA Certified Arborist and TRAQ Qualified professional.</p>
            <p>Science-based recommendations aligned with ANSI A300 and Z133 safety standards.</p>
          </div>
        </section>

        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2D3C0]">Explore</p>
          <ul className="mt-4 grid gap-2 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-[#EFE6DC]/85 transition-colors hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E2D3C0]">Core Services</p>
          <ul className="mt-4 grid gap-2 text-sm text-[#EFE6DC]/85">
            {services.slice(0, 5).map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="transition-colors hover:text-white">
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-[#E2D3C0]/25 bg-white/5 p-4 text-sm text-[#EFE6DC]/90">
            <p className="font-semibold text-white">Emergency Tree Services</p>
            <p className="mt-1 text-[#EFE6DC]/80">Rapid response for hazardous tree conditions.</p>
            <a href="tel:+17075550112" className="mt-3 inline-flex font-semibold text-[#F9D619] hover:underline">
              (707) 555-0112
            </a>
          </div>
        </section>
      </div>

      <div className="border-t border-white/10">
        <div className="site-shell flex flex-col items-start justify-between gap-2 py-5 text-xs text-[#E2D3C0]/75 md:flex-row">
          <p>(c) {new Date().getFullYear()} Canopy Arborists. All rights reserved.</p>
          <p>Serving Sonoma County, Napa County, and Marin County.</p>
        </div>
      </div>
    </footer>
  );
}
