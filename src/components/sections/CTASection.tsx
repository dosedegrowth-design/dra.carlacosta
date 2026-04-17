import Link from "next/link";
import Image from "next/image";
import { Building2, User, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { FadeIn } from "@/components/animation/FadeIn";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function CTASection() {
  const whatsappHref = `https://wa.me/${SITE.whatsapp}`;

  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=2000&q=80"
          alt=""
          fill
          className="object-cover"
          aria-hidden
        />
        <div className="absolute inset-0 bg-[var(--primary)]/90" />
      </div>

      <div className="container-custom text-center text-white max-w-4xl mx-auto">
        <FadeIn>
          <span className="section-label !text-[var(--accent-light)] inline-flex items-center gap-3 justify-center">
            <span className="h-px w-8 bg-[var(--accent-light)]" />
            Vamos conversar
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionTitle className="!text-white mt-6">
            Elevando cada procedimento com{" "}
            <span className="italic text-[var(--accent-light)]">ciência e cuidado</span>
          </SectionTitle>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-6 text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
            Seja você um(a) gestor(a) de clínica ou paciente buscando mais tranquilidade, estamos
            prontas para te atender.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/parceria" className="btn-accent">
              <Building2 className="w-5 h-5" />
              Parceria com clínicas
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-secondary !text-white !border-white hover:!bg-white hover:!text-[var(--primary)]">
              <User className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
