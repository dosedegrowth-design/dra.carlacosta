import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { B2B_BENEFITS } from "@/lib/constants";
import { FadeIn } from "@/components/animation/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";

type IconName = keyof typeof Icons;

export function B2BSection() {
  return (
    <section id="parceria" className="section bg-[var(--primary)] text-white relative overflow-hidden">
      {/* Decorative image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=2000&q=80"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] via-[var(--primary)] to-[var(--primary-dark)]" />

      <div className="container-custom relative grid lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6">
          <FadeIn>
            <SectionLabel className="text-[var(--accent-light)]">
              <span className="!bg-[var(--accent-light)]" />
              Para sua clínica
            </SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionTitle className="!text-white mt-4">
              Sua clínica merece uma{" "}
              <span className="italic text-[var(--accent-light)]">anestesista parceira</span>
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-white/80 text-lg leading-relaxed">
              Ofereça procedimentos ambulatoriais com sedação endovenosa segura, eleve a experiência
              do paciente e aumente o ticket médio da sua clínica com uma anestesista dedicada.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Link href="/parceria" className="btn-accent mt-10 inline-flex">
              Conhecer a parceria
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>

        <div className="lg:col-span-6 grid sm:grid-cols-2 gap-4">
          {B2B_BENEFITS.map((b, idx) => {
            const Icon = Icons[b.icon as IconName] as React.ComponentType<{ className?: string; strokeWidth?: number }>;
            return (
              <FadeIn key={b.title} delay={idx * 0.1} direction={idx % 2 === 0 ? "up" : "down"}>
                <div className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 h-full hover:border-[var(--accent)] transition-colors">
                  <span className="w-12 h-12 grid place-items-center rounded-xl bg-[var(--accent)] text-white">
                    {Icon ? <Icon className="w-5 h-5" strokeWidth={1.6} /> : null}
                  </span>
                  <h3 className="mt-5 font-display text-xl leading-tight">{b.title}</h3>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{b.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
