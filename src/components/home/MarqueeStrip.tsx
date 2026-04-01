"use client";

const PHRASES = [
  "Statement decor",
  "Limited finds",
  "Playful luxury",
  "Not basic",
  "Color & charm",
  "Small batches",
  "Conversation starters",
  "Maison Retro",
  "Retro-inspired",
  "Curated objects",
];

function Row({ reverse }: { reverse?: boolean }) {
  const doubled = [...PHRASES, ...PHRASES, ...PHRASES, ...PHRASES];
  return (
    <div
      className={`flex w-max gap-3 ${reverse ? "animate-marquee-scroll-reverse" : "animate-marquee-scroll"}`}
    >
      {doubled.map((text, i) => (
        <span
          key={`${text}-${i}`}
          className="flex items-center gap-3 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.28em] text-cream/85"
        >
          <span className="h-1 w-1 rounded-full bg-tangerine" aria-hidden />
          {text}
        </span>
      ))}
    </div>
  );
}

export function MarqueeStrip() {
  return (
    <div className="relative z-[1] border-y border-cream/10 bg-ink overflow-hidden py-3.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex flex-col gap-2">
        <Row />
        <Row reverse />
      </div>
    </div>
  );
}
