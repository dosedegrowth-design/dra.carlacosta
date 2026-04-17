"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";
import { FadeIn } from "@/components/animation/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const total = TESTIMONIALS.length;
  const t = TESTIMONIALS[idx];

  return (
    <section className="section bg-[var(--bg)]">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <SectionLabel className="justify-center">Depoimentos</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionTitle className="mt-4">
              O que dizem as <span className="italic text-[var(--accent-dark)]">clínicas parceiras</span>{" "}
              e pacientes
            </SectionTitle>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-16 max-w-4xl mx-auto relative">
            <Quote className="absolute -top-6 left-0 w-24 h-24 text-[var(--accent-light)] opacity-40" />

            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="relative bg-white rounded-3xl p-10 md:p-16 border border-[var(--border)]"
              >
                <p className="font-display text-2xl md:text-3xl leading-snug text-[var(--primary)]">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="mt-10 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--accent-light)] to-[var(--accent)]" />
                  <div>
                    <p className="font-medium text-[var(--primary)]">{t.name}</p>
                    <p className="text-sm text-[var(--text-muted)]">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIdx(i)}
                    aria-label={`Depoimento ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      i === idx ? "w-8 bg-[var(--primary)]" : "w-2 bg-[var(--border)]"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Depoimento anterior"
                  onClick={() => setIdx((idx - 1 + total) % total)}
                  className="w-12 h-12 rounded-full border border-[var(--border)] grid place-items-center hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  aria-label="Próximo depoimento"
                  onClick={() => setIdx((idx + 1) % total)}
                  className="w-12 h-12 rounded-full border border-[var(--border)] grid place-items-center hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
