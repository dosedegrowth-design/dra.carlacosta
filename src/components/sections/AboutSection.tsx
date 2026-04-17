import Image from "next/image";
import * as Icons from "lucide-react";
import { PILARES, STATS } from "@/lib/constants";
import { FadeIn } from "@/components/animation/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";

type IconName = keyof typeof Icons;

export function AboutSection() {
  return (
    <section id="sobre" className="section bg-[var(--bg)]">
      <div className="container-custom grid lg:grid-cols-12 gap-16 items-start">
        <FadeIn direction="right" className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=1200&q=80"
              alt="Dra. Carla Costa atendendo"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 bg-[var(--primary)] text-white rounded-2xl p-6 max-w-[260px] hidden md:block">
            <p className="font-display text-lg leading-tight">
              &ldquo;Cada paciente merece ser tratado com a mesma dedicação de um familiar.&rdquo;
            </p>
            <p className="mt-3 text-xs text-[var(--accent-light)] uppercase tracking-[0.2em]">
              Dra. Carla Costa
            </p>
          </div>
        </FadeIn>

        <div className="lg:col-span-7">
          <FadeIn>
            <SectionLabel>Sobre a Dra. Carla</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionTitle className="mt-4">
              Ciência, cuidado e <span className="italic text-[var(--accent)]">humanização</span>{" "}
              em cada procedimento
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-[var(--text-muted)] leading-relaxed text-lg">
              Médica anestesiologista com formação pela Universidade Potiguar, residência em
              Anestesiologia pela Unitau e especialização em Medicina da Dor pela Santa Casa de São
              Paulo. Atua em anestesia ambulatorial e em centro cirúrgico, com foco em clínicas
              parceiras das áreas de dermatologia, odontologia, cirurgia plástica e estética
              avançada.
            </p>
          </FadeIn>

          <div className="mt-10 grid sm:grid-cols-2 gap-6">
            {PILARES.map((p, idx) => {
              const Icon = p.icon ? (Icons[p.icon as IconName] as React.ComponentType<{ className?: string; strokeWidth?: number }>) : null;
              return (
                <FadeIn key={p.title} delay={0.1 * idx} className="flex gap-4">
                  <span className="flex-shrink-0 w-14 h-14 grid place-items-center rounded-xl bg-[var(--bg-soft)] text-[var(--accent-dark)] p-2">
                    {p.image ? (
                      <Image src={p.image} alt={p.title} width={40} height={40} className="w-10 h-10 object-contain" />
                    ) : Icon ? (
                      <Icon className="w-6 h-6" strokeWidth={1.5} />
                    ) : null}
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-[var(--primary)]">{p.title}</h3>
                    <p className="mt-1 text-sm text-[var(--text-muted)] leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.3} className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-[var(--border)]">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl md:text-4xl text-[var(--primary)]">{s.value}</p>
                <p className="text-xs md:text-sm text-[var(--text-muted)] mt-1">{s.label}</p>
              </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
