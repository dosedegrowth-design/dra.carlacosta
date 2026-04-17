import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { FadeIn } from "@/components/animation/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { CTASection } from "@/components/sections/CTASection";
import { SERVICES, SITE } from "@/lib/constants";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.short,
    openGraph: {
      title: service.title,
      description: service.short,
      images: [service.image],
    },
  };
}

export default async function ServicePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const whatsappHref = `https://wa.me/${SITE.whatsapp}`;
  const others = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  const highlights = [
    "Avaliação pré-procedimento completa",
    "Monitorização contínua de sinais vitais",
    "Técnica personalizada conforme o caso",
    "Acompanhamento pós-procedimento",
  ];

  return (
    <>
      <Header />
      <main>
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <Image src={service.image} alt="" fill priority className="object-cover" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)]/95 via-[var(--primary)]/85 to-[var(--primary)]/50" />
          </div>
          <div className="container-custom text-white">
            <FadeIn>
              <Link
                href="/#servicos"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-10"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar às áreas de atuação
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionLabel className="text-[var(--accent-light)]">
                <span className="!bg-[var(--accent-light)]" />
                Área de atuação
              </SectionLabel>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] max-w-4xl">
                {service.title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="mt-6 text-lg text-white/85 max-w-2xl">{service.short}</p>
            </FadeIn>
          </div>
        </section>

        <section className="section bg-[var(--bg)]">
          <div className="container-custom grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-7">
              <FadeIn>
                <h2 className="font-display text-3xl md:text-4xl text-[var(--primary)]">
                  Sobre o atendimento
                </h2>
                <p className="mt-6 text-[var(--text-muted)] text-lg leading-relaxed">
                  {service.description}
                </p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h3 className="mt-12 font-display text-2xl text-[var(--primary)]">
                  O que está incluído
                </h3>
                <ul className="mt-6 space-y-3">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[var(--accent-dark)] flex-shrink-0 mt-1" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link href="/parceria" className="btn-primary">
                    Para minha clínica
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary"
                  >
                    Falar como paciente
                  </a>
                </div>
              </FadeIn>
            </div>

            <FadeIn direction="left" className="lg:col-span-5">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Other services */}
        <section className="section bg-[var(--bg-soft)]">
          <div className="container-custom">
            <FadeIn>
              <h2 className="font-display text-3xl md:text-4xl text-[var(--primary)]">
                Outras áreas de atuação
              </h2>
            </FadeIn>
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {others.map((o, idx) => (
                <FadeIn key={o.slug} delay={idx * 0.1}>
                  <Link
                    href={`/servicos/${o.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--accent)] transition-colors hover:-translate-y-1 duration-500"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={o.image}
                        alt={o.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="font-display text-xl text-[var(--primary)]">{o.title}</h3>
                      <p className="mt-2 text-sm text-[var(--text-muted)]">{o.short}</p>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
