import { FAQS } from "@/lib/constants";
import { FadeIn } from "@/components/animation/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AccordionItem } from "@/components/ui/Accordion";

export function FAQSection() {
  return (
    <section id="faq" className="section bg-[var(--bg-soft)]">
      <div className="container-custom max-w-4xl">
        <div className="text-center max-w-2xl mx-auto">
          <FadeIn>
            <SectionLabel className="justify-center">FAQ</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionTitle className="mt-4">
              Perguntas <span className="italic text-[var(--accent-dark)]">frequentes</span>
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-[var(--text-muted)] text-lg">
              Respostas diretas às dúvidas mais comuns de clínicas parceiras e pacientes.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3} className="mt-16">
          <div className="bg-white rounded-2xl px-6 md:px-10 border border-[var(--border)]">
            {FAQS.map((f, idx) => (
              <AccordionItem key={f.question} question={f.question} defaultOpen={idx === 0}>
                {f.answer}
              </AccordionItem>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
