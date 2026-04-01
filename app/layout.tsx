import type { Metadata } from "next";
import { Manrope, Poppins } from "next/font/google";

import { ChatWidget } from "@/components/chat-widget";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://canopyarborists.com"),
  title: {
    default: "Canopy Arborists | Advanced Arboriculture in Sonoma, Napa, Marin",
    template: "%s | Canopy Arborists",
  },
  description:
    "Canopy Arborists delivers science-based tree care, risk management, and consulting services across Sonoma, Napa, and Marin County.",
  keywords: [
    "Canopy Arborists",
    "ISA Certified Arborist",
    "TRAQ Qualified",
    "Tree care Sonoma County",
    "Tree care Napa County",
    "Tree care Marin County",
    "Plant health care",
    "Tree risk assessment",
  ],
  openGraph: {
    title: "Canopy Arborists",
    description:
      "Advanced arboriculture services focused on preservation, diagnostics, and responsible risk management.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${manrope.variable} antialiased`}>
      <body className="min-h-screen bg-[#f3eee5] text-[#102216]">
        <SiteHeader />
        <div className="relative flex min-h-screen flex-col overflow-x-clip pt-[84px]">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_14%_14%,rgba(87,147,107,0.16),transparent_38%),radial-gradient(circle_at_88%_14%,rgba(249,214,25,0.15),transparent_34%),linear-gradient(180deg,#f6f2ea_0%,#f3eee5_100%)]" />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <ChatWidget />
        </div>
      </body>
    </html>
  );
}
