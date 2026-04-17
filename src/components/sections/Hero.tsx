"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, User } from "lucide-react";
import { SITE } from "@/lib/constants";
import { TextReveal } from "@/components/animation/TextReveal";

export function Hero() {
  const whatsappHref = `https://wa.me/${SITE.whatsapp}`;

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
      {/* Background image with parallax */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=2000&q=80"
          alt="Ambiente clínico moderno"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg)]/95 via-[var(--bg)]/90 to-[var(--bg)]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent" />
      </div>

      <div className="container-custom grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="section-label flex items-center gap-3"
          >
            <span className="h-px w-8 bg-[var(--accent)]" />
            Anestesiologia • Medicina da Dor
          </motion.span>

          <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] text-[var(--primary)]">
            <TextReveal text="Cuidado, segurança e" />
            <br />
            <TextReveal text="conforto" highlight="conforto" delay={0.4} />
            <span className="block text-[var(--text-muted)] text-[clamp(1.1rem,2vw,1.5rem)] font-body mt-6 max-w-xl leading-relaxed">
              Anestesia ambulatorial para clínicas dermatológicas, odontológicas, plásticas e
              estéticas — com a tranquilidade que seu paciente merece.
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link href="/parceria" className="btn-primary">
              <Building2 className="w-5 h-5" />
              Sou Clínica
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <User className="w-5 h-5" />
              Sou Paciente
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-12 flex items-center gap-6 text-sm text-[var(--text-muted)]"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-[var(--sage)] to-[var(--primary)]"
                />
              ))}
            </div>
            <span>+20 clínicas parceiras confiam neste atendimento</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="lg:col-span-5 relative hidden lg:block"
        >
          <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=1200&q=80"
              alt="Dra. Carla Costa"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/40 to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-2xl border border-[var(--border)] max-w-[220px]"
          >
            <p className="font-display text-3xl text-[var(--primary)]">+8 anos</p>
            <p className="text-sm text-[var(--text-muted)] mt-1">de experiência em anestesiologia</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -top-6 -right-6 bg-[var(--accent-dark)] text-white rounded-2xl p-5 shadow-2xl max-w-[200px]"
          >
            <p className="font-display text-2xl">Santa Casa SP</p>
            <p className="text-sm opacity-90 mt-1">Especialização em Medicina da Dor</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-muted)] text-xs tracking-[0.3em] uppercase"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span>Role</span>
          <span className="w-px h-10 bg-[var(--text-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
