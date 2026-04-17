import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";
import { FadeIn } from "@/components/animation/FadeIn";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { SectionTitle } from "@/components/ui/SectionTitle";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function BlogPreviewSection() {
  return (
    <section className="section bg-[var(--bg)]">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <FadeIn>
              <SectionLabel>Conteúdo</SectionLabel>
            </FadeIn>
            <FadeIn delay={0.1}>
              <SectionTitle className="mt-4">
                Informação que <span className="italic text-[var(--accent-dark)]">cura</span>
              </SectionTitle>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--accent-dark)] transition-colors font-medium"
            >
              Ver todos os artigos
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, idx) => (
            <FadeIn key={post.slug} delay={idx * 0.1}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden border border-[var(--border)] hover:border-[var(--accent)] transition-all hover:-translate-y-1 hover:shadow-xl h-full"
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
                    <span>•</span>
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl text-[var(--primary)] leading-tight group-hover:text-[var(--accent-dark)] transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-[var(--text-muted)] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
