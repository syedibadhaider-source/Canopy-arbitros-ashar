"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail, MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Tab = "whatsapp" | "email";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("whatsapp");
  const [emailForm, setEmailForm] = useState({ name: "", email: "", message: "" });
  const hasOpened = useRef(false);

  useEffect(() => {
    if (hasOpened.current) return;
    hasOpened.current = true;
    const timer = setTimeout(() => {
      // Beep sound via Web Audio API
      try {
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(880, ctx.currentTime);
        gain.gain.setValueAtTime(0.18, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.35);
      } catch {
        // Audio not available
      }
      setOpen(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open contact options"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#102216] shadow-[0_8px_32px_rgba(16,34,22,0.35)] transition-transform hover:scale-105 active:scale-95"
      >
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <X className="h-5 w-5 text-[#EFE6DC]" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              <MessageCircle className="h-5 w-5 text-[#F9D619]" />
            </motion.span>
          )}
        </AnimatePresence>
        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-[#102216] opacity-30" />
        )}
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[320px] overflow-hidden rounded-3xl border border-[#34754C]/16 bg-[#f6f2ea] shadow-[0_24px_64px_rgba(16,34,22,0.22)]"
          >
            {/* Header */}
            <div className="bg-[#102216] px-5 py-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#EFE6DC]/70">
                Canopy Arborists
              </p>
              <p className="mt-0.5 font-heading text-lg text-white">How can we help?</p>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-[#34754C]/12 bg-[#EFE6DC]/60">
              <button
                onClick={() => setTab("whatsapp")}
                className={`flex flex-1 items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                  tab === "whatsapp"
                    ? "border-b-2 border-[#102216] text-[#102216]"
                    : "text-[#33453a]/60 hover:text-[#102216]"
                }`}
              >
                <Phone className="h-3.5 w-3.5" />
                Emergency
              </button>
              <button
                onClick={() => setTab("email")}
                className={`flex flex-1 items-center justify-center gap-2 py-3 text-xs font-semibold uppercase tracking-[0.12em] transition-colors ${
                  tab === "email"
                    ? "border-b-2 border-[#102216] text-[#102216]"
                    : "text-[#33453a]/60 hover:text-[#102216]"
                }`}
              >
                <Mail className="h-3.5 w-3.5" />
                Book
              </button>
            </div>

            {/* Tab content */}
            <div className="p-5">
              <AnimatePresence mode="wait" initial={false}>
                {tab === "whatsapp" ? (
                  <motion.div
                    key="whatsapp"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 12 }}
                    transition={{ duration: 0.18 }}
                  >
                    <div className="rounded-2xl border border-[#34754C]/12 bg-white/80 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#F9D619] bg-[#102216] inline-block rounded-full px-2.5 py-0.5 mb-3">
                        24/7 Emergency
                      </p>
                      <p className="text-sm leading-6 text-[#33453a]">
                        For urgent tree hazards, storm damage, or emergency risk situations — reach us instantly on WhatsApp.
                      </p>
                    </div>
                    <a
                      href="https://wa.me/17075550000?text=Hi%2C%20I%20need%20emergency%20arborist%20assistance."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] py-3.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(37,211,102,0.3)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Message on WhatsApp
                    </a>
                  </motion.div>
                ) : (
                  <motion.div
                    key="email"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.18 }}
                  >
                    <p className="mb-3 text-sm leading-6 text-[#33453a]">
                      Schedule a consultation with our certified arborist team.
                    </p>
                    <div className="space-y-2.5">
                      <input
                        type="text"
                        placeholder="Your name"
                        value={emailForm.name}
                        onChange={(e) => setEmailForm((f) => ({ ...f, name: e.target.value }))}
                        className="w-full rounded-xl border border-[#34754C]/16 bg-white/80 px-3.5 py-2.5 text-sm text-[#102216] placeholder-[#33453a]/40 outline-none focus:border-[#102216]/40 focus:ring-2 focus:ring-[#102216]/10"
                      />
                      <input
                        type="email"
                        placeholder="Email address"
                        value={emailForm.email}
                        onChange={(e) => setEmailForm((f) => ({ ...f, email: e.target.value }))}
                        className="w-full rounded-xl border border-[#34754C]/16 bg-white/80 px-3.5 py-2.5 text-sm text-[#102216] placeholder-[#33453a]/40 outline-none focus:border-[#102216]/40 focus:ring-2 focus:ring-[#102216]/10"
                      />
                      <textarea
                        placeholder="Briefly describe your tree concern..."
                        rows={3}
                        value={emailForm.message}
                        onChange={(e) => setEmailForm((f) => ({ ...f, message: e.target.value }))}
                        className="w-full resize-none rounded-xl border border-[#34754C]/16 bg-white/80 px-3.5 py-2.5 text-sm text-[#102216] placeholder-[#33453a]/40 outline-none focus:border-[#102216]/40 focus:ring-2 focus:ring-[#102216]/10"
                      />
                    </div>
                    <a
                      href={`mailto:info@canopyarborists.com?subject=Consultation Request from ${encodeURIComponent(emailForm.name)}&body=${encodeURIComponent(emailForm.message)}%0A%0AFrom: ${encodeURIComponent(emailForm.email)}`}
                      className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#F9D619] py-3.5 text-sm font-semibold text-[#102216] shadow-[0_4px_16px_rgba(249,214,25,0.3)] transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <Mail className="h-4 w-4" />
                      Book Consultation
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
