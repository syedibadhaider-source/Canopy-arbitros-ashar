import type { CSSProperties } from "react";

type CredentialsMarqueeProps = {
  items: string[];
};

export function CredentialsMarquee({ items }: CredentialsMarqueeProps) {
  const doubledItems = [...items, ...items];

  return (
    <div className="credentials-marquee relative overflow-hidden rounded-2xl border border-[#34754C]/16 bg-white/65 p-4 shadow-[0_18px_40px_rgba(16,34,22,0.07)]">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-[linear-gradient(90deg,rgba(246,241,233,0.98),rgba(246,241,233,0))]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-[linear-gradient(270deg,rgba(246,241,233,0.98),rgba(246,241,233,0))]" />

      <ul className="credentials-marquee-track flex items-center gap-3" aria-label="Professional credentials">
        {doubledItems.map((item, index) => {
          const pillStyle = {
            "--glow-delay": `${(index % items.length) * 0.35}s`,
          } as CSSProperties;

          return (
            <li key={`${item}-${index}`} className="credential-pill" style={pillStyle}>
              <span className="relative z-[1]">{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
