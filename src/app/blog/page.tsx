import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { FadeIn } from "@/components/animation/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Blog | Conteúdo sobre Anestesia",
  description:
    "Artigos e conteúdos sobre anestesia ambulatorial, sedação consciente e medicina da dor para clínicas e pacientes.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndex() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-40 pb-16 bg-[var(--bg-soft)]">
          <div className="container-custom">
            <FadeIn>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--primary)] mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar ao início
              </Link>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionLabel>Blog</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.2}>
              <SectionTitle className="mt-4 max-w-3xl">
                Conhecimento que <span className="italic text-[var(--accent-dark)]">acolhe</span>
              </SectionTitle>
            </FadeIn>
          </div>
        </section>

        <section className="section bg-[var(--bg)]">
          <div className="container-custom grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post, idx) => (
              <FadeIn key={post.slug} delay={idx * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--accent)] transition-all hover:-translate-y-1 duration-500 h-full"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-[var(--text-muted)]">
                      <span className="px-2 py-1 rounded-full bg-[var(--bg-soft)] text-[var(--accent-dark)] font-medium">
                        {post.category}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display text-xl text-[var(--primary)] leading-tight group-hover:text-[var(--accent-dark)] transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
                      {post.excerpt}
                    </p>
                    <p className="mt-4 text-xs text-[var(--text-muted)]">{formatDate(post.date)}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
