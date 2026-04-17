import { HOW_IT_WORKS } from "@/lib/constants";
import { FadeIn } from "@/components/animation/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function HowItWorksSection() {
  return (
    <section className="section bg-[var(--bg)]">
      <div className="container-custom">
        <div className="max-w-3xl">
          <FadeIn>
            <SectionLabel>Como funciona</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionTitle className="mt-4">
              Uma parceria em <span className="italic text-[var(--accent)]">4 etapas</span> simples
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-[var(--text-muted)] text-lg">
              Da primeira conversa ao acompanhamento pós-anestésico, cada etapa é pensada para
              integrar com a rotina da sua clínica.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connector line */}
          <div className="hidden lg:block absolute top-12 left-12 right-12 h-px bg-gradient-to-r from-[var(--accent)] via-[var(--accent)] to-transparent opacity-50" aria-hidden />

          {HOW_IT_WORKS.map((step, idx) => (
            <FadeIn key={step.step} delay={idx * 0.12}>
              <div className="relative bg-white rounded-2xl p-8 border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-500 hover:-translate-y-2 h-full">
                <span className="font-display text-6xl text-[var(--bg-soft)] group-hover:text-[var(--accent-light)] transition-colors leading-none">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-xl text-[var(--primary)] leading-tight">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
