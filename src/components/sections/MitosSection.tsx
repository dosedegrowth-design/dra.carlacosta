import { MITOS } from "@/lib/constants";
import { FadeIn } from "@/components/animation/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AccordionItem } from "@/components/ui/Accordion";

export function MitosSection() {
  return (
    <section className="section bg-[var(--bg-soft)]">
      <div className="container-custom grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <FadeIn>
            <SectionLabel>Mitos e Verdades</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionTitle className="mt-4">
              Separe o mito da <span className="italic text-[var(--accent)]">verdade</span> sobre
              anestesia
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-[var(--text-muted)] text-lg leading-relaxed">
              Desmistificamos as dúvidas mais comuns para que você — paciente ou profissional — tome
              decisões seguras e informadas.
            </p>
          </FadeIn>
        </div>

        <div className="lg:col-span-7">
          <FadeIn direction="left">
            <div className="bg-white rounded-2xl px-6 md:px-10 border border-[var(--border)]">
              {MITOS.map((m, idx) => (
                <AccordionItem
                  key={m.mito}
                  question={`Mito ${idx + 1}: ${m.mito}`}
                  defaultOpen={idx === 0}
                >
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    <span className="font-medium text-[var(--accent-dark)]">Verdade: </span>
                    {m.verdade}
                  </p>
                </AccordionItem>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
