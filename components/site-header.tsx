"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ButtonLink } from "@/components/ui/button-link";
import { cn } from "@/lib/cn";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const transparent = pathname === "/" && !scrolled && !menuOpen;
  const lightHeader = transparent;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        lightHeader
          ? "border-[#34754C]/12 bg-[#f6f2ea]/72 shadow-[0_10px_26px_rgba(16,34,22,0.08)] backdrop-blur-lg"
          : "border-white/20 bg-[#102216]/78 shadow-[0_14px_42px_rgba(6,20,13,0.4)] backdrop-blur-xl",
      )}
    >
      <div className="site-shell flex items-center justify-between py-4">
        <Link href="/" className="group inline-flex items-center">
          <img
            src="/logo-01-new.png"
            alt="Canopy Arborists"
            className="h-10 w-auto sm:h-12 lg:h-14"
            loading="eager"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main Navigation">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium tracking-wide transition-colors duration-300",
                  lightHeader
                    ? "text-[#30493b] hover:text-[#102216]"
                    : "text-[#EFE6DC]/88 hover:text-white",
                  active && (lightHeader ? "text-[#102216]" : "text-white"),
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+17075550112"
            className={cn(
              "inline-flex items-center gap-2 rounded-full px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.12em] transition-colors",
              lightHeader
                ? "border border-[#34754C]/25 text-[#244333] hover:bg-[#34754C]/8"
                : "border border-white/25 text-[#EFE6DC] hover:bg-white/8",
            )}
          >
            <Phone className="size-3.5" />
            24/7 Emergency
          </a>
          <ButtonLink href="/contact" className="bg-[#F9D619] text-[#102216] hover:bg-[#f0cf16]">
            Book Consultation
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-full border transition-colors lg:hidden",
            lightHeader
              ? "border-[#34754C]/22 bg-white/65 text-[#1e372a] hover:bg-white/90"
              : "border-white/20 bg-white/10 text-[#EFE6DC] hover:bg-white/20",
          )}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/15 bg-[#102216]/95 px-6 pb-6 pt-3 backdrop-blur-xl lg:hidden"
          >
            <nav className="grid gap-1" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const active = pathname === item.href;

                return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-medium text-[#EFE6DC]/88 transition-colors hover:bg-white/8 hover:text-white",
                  active && "bg-white/10 text-white",
                )}
              >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-5 grid gap-2">
              <ButtonLink href="/contact" className="w-full bg-[#F9D619] text-[#102216] hover:bg-[#f0cf16]">
                Book Consultation
              </ButtonLink>
              <ButtonLink href="tel:+17075550112" variant="secondary" className="w-full text-[#EFE6DC] ring-white/35 hover:bg-white/10">
                Emergency: (707) 555-0112
              </ButtonLink>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
