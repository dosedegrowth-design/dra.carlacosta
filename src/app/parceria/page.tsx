import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { FadeIn } from "@/components/animation/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactSection } from "@/components/sections/ContactSection";
import { B2B_BENEFITS, HOW_IT_WORKS, SITE, STATS, TESTIMONIALS } from "@/lib/constants";

type IconName = keyof typeof Icons;

export const metadata: Metadata = {
  title: "Parceria com Clínicas — Anestesiologia Ambulatorial",
  description:
    "Anestesiologista parceira para clínicas de dermatologia, odontologia, cirurgia plástica e estética. Sedação segura, previsibilidade clínica e pacientes mais satisfeitos.",
};

export default function ParceriaPage() {
  const whatsappHref = `https://wa.me/${SITE.whatsapp}`;

  const reasons = [
    "Avaliação pré-anestésica completa de cada paciente",
    "Monitorização contínua durante todo o procedimento",
    "Protocolos atualizados conforme diretrizes da SBA",
    "Equipamentos e insumos próprios, se necessário",
    "Agenda integrada e comunicação direta com sua equipe",
    "Suporte pós-anestésico e relatórios individualizados",
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center pt-32 pb-20 overflow-hidden bg-[var(--primary)] text-white">
          <div className="absolute inset-0 opacity-15">
            <Image
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=2000&q=80"
              alt=""
              fill
              priority
              className="object-cover"
              aria-hidden
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-[var(--primary)] to-[var(--primary-dark)]" />

          <div className="container-custom relative grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <FadeIn>
                <SectionLabel className="text-[var(--accent-light)]">
                  <span className="!bg-[var(--accent-light)]" />
                  Para gestores de clínica
                </SectionLabel>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[1.05]">
                  Uma parceira que eleva{" "}
                  <span className="italic text-[var(--accent-light)]">a ciência</span> da sua clínica
                </h1>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="mt-8 text-white/80 text-lg md:text-xl max-w-2xl leading-relaxed">
                  Amplie seu portfólio de procedimentos, reduza riscos operatórios e entregue uma
                  experiência sem dor ao seu paciente — com uma anestesiologista dedicada ao modelo
                  ambulatorial.
                </p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="#contato-parceria" className="btn-accent">
                    Quero ser parceiro
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !text-white !border-white hover:!bg-white hover:!text-[var(--primary)]"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </FadeIn>
            </div>
            <FadeIn direction="left" className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1584516150909-c43483ee7932?w=1200&q=80"
                  alt="Procedimento em clínica moderna"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Benefits */}
        <section className="section bg-[var(--bg)]">
          <div className="container-custom">
            <div className="max-w-3xl">
              <FadeIn>
                <SectionLabel>Por que ter uma anestesista parceira</SectionLabel>
              </FadeIn>
              <FadeIn delay={0.1}>
                <SectionTitle className="mt-4">
                  Mais segurança. Mais previsibilidade.{" "}
                  <span className="italic text-[var(--accent-dark)]">Mais resultado.</span>
                </SectionTitle>
              </FadeIn>
            </div>

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {B2B_BENEFITS.map((b, idx) => {
                const Icon = Icons[b.icon as IconName] as React.ComponentType<{ className?: string; strokeWidth?: number }>;
                return (
                  <FadeIn key={b.title} delay={idx * 0.1}>
                    <div className="h-full bg-white border border-[var(--border)] rounded-2xl p-6 hover:border-[var(--accent)] transition-colors">
                      <span className="w-12 h-12 grid place-items-center rounded-xl bg-[var(--primary)] text-white">
                        {Icon ? <Icon className="w-5 h-5" strokeWidth={1.6} /> : null}
                      </span>
                      <h3 className="mt-5 font-display text-xl text-[var(--primary)] leading-tight">
                        {b.title}
                      </h3>
                      <p className="mt-2 text-sm text-[var(--text-muted)] leading-relaxed">
                        {b.description}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>

            <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">
              <FadeIn>
                <SectionLabel>Diferenciais do atendimento</SectionLabel>
                <SectionTitle className="mt-4">
                  O que você pode esperar da parceria
                </SectionTitle>
                <ul className="mt-8 space-y-4">
                  {reasons.map((r) => (
                    <li key={r} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[var(--accent-dark)] flex-shrink-0 mt-0.5" />
                      <span className="text-[var(--text)]">{r}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn direction="left">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559757175-7cb036bd4d31?w=1200&q=80"
                    alt="Equipe médica"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="section bg-[var(--bg-soft)]">
          <div className="container-custom">
            <div className="max-w-3xl">
              <FadeIn>
                <SectionLabel>Fluxo da parceria</SectionLabel>
              </FadeIn>
              <FadeIn delay={0.1}>
                <SectionTitle className="mt-4">
                  Do primeiro contato ao{" "}
                  <span className="italic text-[var(--accent-dark)]">procedimento</span>
                </SectionTitle>
              </FadeIn>
            </div>

            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOW_IT_WORKS.map((step, idx) => (
                <FadeIn key={step.step} delay={idx * 0.12}>
                  <div className="relative bg-white rounded-2xl p-8 border border-[var(--border)] hover:border-[var(--accent)] transition-all hover:-translate-y-2 h-full">
                    <span className="font-display text-6xl text-[var(--bg-soft)] leading-none">
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

        {/* Stats / Social proof */}
        <section className="section bg-[var(--primary)] text-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {STATS.map((s, idx) => (
                <FadeIn key={s.label} delay={idx * 0.1}>
                  <p className="font-display text-5xl md:text-6xl text-[var(--accent-light)]">
                    {s.value}
                  </p>
                  <p className="mt-2 text-white/70">{s.label}</p>
                </FadeIn>
              ))}
            </div>

            <div className="mt-20 grid md:grid-cols-2 gap-8">
              {TESTIMONIALS.filter((t) => t.role.toLowerCase().includes("parceira") || t.role.toLowerCase().includes("dentista") || t.role.toLowerCase().includes("plástica")).map((t, idx) => (
                <FadeIn key={t.name} delay={idx * 0.1}>
                  <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10">
                    <p className="font-display text-xl leading-snug">&ldquo;{t.text}&rdquo;</p>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent-light)] to-[var(--accent)]" />
                      <div>
                        <p className="font-medium">{t.name}</p>
                        <p className="text-sm text-white/60">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <div id="contato-parceria" />
        <ContactSection />

        <FadeIn className="pb-24 bg-[var(--bg-soft)]">
          <div className="container-custom text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--accent-dark)]"
            >
              <ArrowUpRight className="w-4 h-4 rotate-180" />
              Voltar ao início
            </Link>
          </div>
        </FadeIn>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
