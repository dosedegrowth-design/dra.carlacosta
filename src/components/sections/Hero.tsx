"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, User } from "lucide-react";
import { SITE } from "@/lib/constants";

export function Hero() {
  const whatsappHref = `https://wa.me/${SITE.whatsapp}`;

  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-[var(--bg)]">
      {/* Background decorativo — blobs orgânicos sutis */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 -left-32 w-[600px] h-[600px] rounded-full bg-[var(--bg-soft)] blur-3xl opacity-60" />
        <div className="absolute -bottom-32 right-10 w-[500px] h-[500px] rounded-full bg-[var(--sage)]/10 blur-3xl" />
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

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-[clamp(2.75rem,5.5vw,5rem)] leading-[1.05] text-[var(--primary)]"
          >
            Anestesia que <span className="italic text-[var(--accent-dark)]">acolhe</span>,
            <br />
            ciência que <span className="italic text-[var(--accent-dark)]">cuida</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 text-[var(--text-muted)] text-[clamp(1.05rem,1.5vw,1.25rem)] font-body max-w-xl leading-relaxed"
          >
            Anestesia ambulatorial para clínicas de dermatologia, odontologia, cirurgia plástica e estética, com a tranquilidade que seu paciente merece.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
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
            transition={{ duration: 0.8, delay: 1.1 }}
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative hidden lg:block"
        >
          {/* Moldura sutil atrás da foto */}
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[var(--sage)]/20 to-[var(--accent-light)]/20 -z-10" />

          <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/hero/carla-hero.jpg"
              alt="Dra. Carla Costa, Anestesiologista"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
            />
            {/* Overlay suave para harmonizar com a paleta */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/20 via-transparent to-transparent" />
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-[var(--bg-cream)] rounded-2xl p-5 shadow-xl border border-[var(--border)] max-w-[220px]"
          >
            <p className="font-display text-3xl text-[var(--primary)] italic">+8 anos</p>
            <p className="text-sm text-[var(--text-muted)] mt-1">de experiência em anestesiologia</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute -top-4 -right-4 bg-[var(--primary)] text-[var(--bg-cream)] rounded-2xl p-5 shadow-xl max-w-[200px]"
          >
            <p className="font-display text-xl italic">Santa Casa SP</p>
            <p className="text-xs opacity-80 mt-1 tracking-wide uppercase">Medicina da Dor</p>
          </motion.div>

          {/* Elemento decorativo — estrela do brand */}
          <svg
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-10 h-10 text-[var(--primary)] opacity-40"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M12 0 L13 10 L24 12 L13 14 L12 24 L11 14 L0 12 L11 10 Z" />
          </svg>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
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
