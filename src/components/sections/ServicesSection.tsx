import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { FadeIn } from "@/components/animation/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";

type IconName = keyof typeof Icons;

export function ServicesSection() {
  return (
    <section id="servicos" className="section bg-[var(--bg-soft)]">
      <div className="container-custom">
        <div className="max-w-3xl">
          <FadeIn>
            <SectionLabel>Áreas de atuação</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionTitle className="mt-4">
              Um <span className="italic text-[var(--accent)]">leque completo</span> de cuidado
              anestésico ambulatorial
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-[var(--text-muted)] text-lg leading-relaxed">
              Procedimentos com sedação segura, avaliação pré-anestésica rigorosa e acompanhamento
              humanizado — sob medida para a rotina da sua clínica.
            </p>
          </FadeIn>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => {
            const Icon = Icons[s.icon as IconName] as React.ComponentType<{ className?: string; strokeWidth?: number }>;
            return (
              <FadeIn key={s.slug} delay={idx * 0.08}>
                <Link
                  href={`/servicos/${s.slug}`}
                  className="group relative block bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--accent)] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/70 via-[var(--primary)]/20 to-transparent" />
                    <span className="absolute top-4 left-4 w-11 h-11 grid place-items-center rounded-xl bg-white/95 backdrop-blur text-[var(--primary)]">
                      {Icon ? <Icon className="w-5 h-5" strokeWidth={1.6} /> : null}
                    </span>
                    <span className="absolute top-4 right-4 w-11 h-11 grid place-items-center rounded-xl bg-[var(--accent)]/0 group-hover:bg-[var(--accent)] text-white transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl md:text-2xl text-[var(--primary)] leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
                      {s.short}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--accent-dark)] font-medium">
                      Saber mais
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
