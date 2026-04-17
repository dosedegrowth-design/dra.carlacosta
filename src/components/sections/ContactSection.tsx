"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, Mail, Phone, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import { FadeIn } from "@/components/animation/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simula envio — integrar com Supabase/email no futuro
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = data.get("nome");
    const clinica = data.get("clinica");
    const especialidade = data.get("especialidade");
    const volume = data.get("volume");
    const mensagem = data.get("mensagem");

    const text = encodeURIComponent(
      `Olá Dra. Carla!\n\nNome: ${nome}\nClínica: ${clinica}\nEspecialidade: ${especialidade}\nVolume mensal: ${volume}\n\n${mensagem}`
    );
    const whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${text}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setSent(true);
      setLoading(false);
      form.reset();
    }, 600);
  };

  return (
    <section id="contato" className="section bg-[var(--bg-soft)]">
      <div className="container-custom grid lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <FadeIn>
            <SectionLabel>Contato</SectionLabel>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionTitle className="mt-4">
              Vamos construir uma{" "}
              <span className="italic text-[var(--accent)]">parceria</span>
            </SectionTitle>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-[var(--text-muted)] text-lg leading-relaxed">
              Preencha o formulário com os dados da sua clínica e receba um retorno personalizado via
              WhatsApp em até 24h.
            </p>
          </FadeIn>

          <FadeIn delay={0.3} className="mt-10 space-y-5">
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors group"
            >
              <span className="w-12 h-12 grid place-items-center rounded-xl bg-[#25D366] text-white">
                <MessageCircle className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs text-[var(--text-muted)]">WhatsApp direto</p>
                <p className="font-medium text-[var(--primary)]">{SITE.phone}</p>
              </div>
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
            >
              <span className="w-12 h-12 grid place-items-center rounded-xl bg-[var(--primary)] text-white">
                <Mail className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs text-[var(--text-muted)]">E-mail</p>
                <p className="font-medium text-[var(--primary)]">{SITE.email}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 p-5 bg-white rounded-xl border border-[var(--border)]">
              <span className="w-12 h-12 grid place-items-center rounded-xl bg-[var(--accent)] text-white">
                <Phone className="w-5 h-5" />
              </span>
              <div>
                <p className="text-xs text-[var(--text-muted)]">Atendimento</p>
                <p className="font-medium text-[var(--primary)]">Seg — Sex, 9h às 19h</p>
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="left" className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 md:p-10 border border-[var(--border)] space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-[var(--text-muted)] uppercase tracking-[0.15em] mb-2">
                  Seu nome *
                </label>
                <input
                  required
                  type="text"
                  name="nome"
                  placeholder="Dr(a)."
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[var(--text-muted)] uppercase tracking-[0.15em] mb-2">
                  Nome da clínica *
                </label>
                <input
                  required
                  type="text"
                  name="clinica"
                  placeholder="Sua clínica"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-medium text-[var(--text-muted)] uppercase tracking-[0.15em] mb-2">
                  Especialidade *
                </label>
                <select
                  required
                  name="especialidade"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option>Dermatologia</option>
                  <option>Odontologia</option>
                  <option>Cirurgia Plástica</option>
                  <option>Bucomaxilofacial</option>
                  <option>Estética Avançada</option>
                  <option>Outra</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-[var(--text-muted)] uppercase tracking-[0.15em] mb-2">
                  Volume mensal estimado
                </label>
                <select
                  name="volume"
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Selecione
                  </option>
                  <option>Até 10 procedimentos</option>
                  <option>10 a 30 procedimentos</option>
                  <option>30 a 60 procedimentos</option>
                  <option>Mais de 60 procedimentos</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[var(--text-muted)] uppercase tracking-[0.15em] mb-2">
                Mensagem
              </label>
              <textarea
                name="mensagem"
                rows={5}
                placeholder="Conte um pouco sobre sua necessidade..."
                className="w-full px-4 py-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full md:w-auto disabled:opacity-60"
            >
              {sent ? (
                <>
                  <CheckCircle2 className="w-5 h-5" />
                  Redirecionando para o WhatsApp...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  {loading ? "Enviando..." : "Enviar para WhatsApp"}
                </>
              )}
            </button>

            <p className="text-xs text-[var(--text-muted)]">
              Ao enviar, você concorda em receber contato pelos canais informados. Seus dados não são
              compartilhados.
            </p>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
