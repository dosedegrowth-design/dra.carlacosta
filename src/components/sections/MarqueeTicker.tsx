import { MARQUEE_ITEMS } from "@/lib/constants";

export function MarqueeTicker() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <section
      aria-label="Áreas de atuação"
      className="py-8 bg-[var(--primary)] text-white overflow-hidden border-y border-[var(--primary-light)]"
    >
      <div className="marquee-track flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-8 px-8">
            <span className="font-display text-2xl md:text-4xl">{item}</span>
            <span className="w-2 h-2 rounded-full bg-[var(--accent)]" aria-hidden />
          </div>
        ))}
      </div>
    </section>
  );
}
