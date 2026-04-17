import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { FadeIn } from "@/components/animation/FadeIn";
import { CTASection } from "@/components/sections/CTASection";
import { BLOG_POSTS, SITE } from "@/lib/constants";
import { getBlogPostingSchema, getBreadcrumbSchema } from "@/lib/structured-data";

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  const canonicalUrl = `/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: canonicalUrl },
    keywords: [post.category, "anestesia", "anestesiologia", "saúde"],
    openGraph: {
      type: "article",
      url: `${SITE.url}${canonicalUrl}`,
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 750, alt: post.title }],
      publishedTime: post.date,
      modifiedTime: post.date,
      authors: [SITE.name],
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const postSchema = getBlogPostingSchema(post.slug);
  const breadcrumb = getBreadcrumbSchema([
    { name: "Início", url: SITE.url },
    { name: "Blog", url: `${SITE.url}/blog` },
    { name: post.title, url: `${SITE.url}/blog/${post.slug}` },
  ]);

  return (
    <>
      {postSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(postSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <Header />
      <main>
        <article>
          <section className="pt-40 pb-16 bg-[var(--bg-soft)]">
            <div className="container-custom max-w-4xl">
              <FadeIn>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--primary)] mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Voltar ao blog
                </Link>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="flex items-center gap-3 text-sm">
                  <span className="px-3 py-1 rounded-full bg-white text-[var(--accent-dark)] font-medium">
                    {post.category}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[var(--text-muted)]">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                  <span className="text-[var(--text-muted)]">•</span>
                  <span className="text-[var(--text-muted)]">{formatDate(post.date)}</span>
                </div>
              </FadeIn>
              <FadeIn delay={0.2}>
                <h1 className="mt-6 font-display text-[clamp(2rem,5vw,4rem)] leading-[1.08] text-[var(--primary)]">
                  {post.title}
                </h1>
              </FadeIn>
              <FadeIn delay={0.3}>
                <p className="mt-6 text-lg text-[var(--text-muted)] leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>
              </FadeIn>
            </div>
          </section>

          <FadeIn>
            <div className="container-custom max-w-4xl -mt-8">
              <div className="relative aspect-[16/9] rounded-3xl overflow-hidden">
                <Image src={post.image} alt={post.title} fill priority className="object-cover" />
              </div>
            </div>
          </FadeIn>

          <section className="section bg-[var(--bg)]">
            <div className="container-custom max-w-3xl prose prose-lg">
              <FadeIn>
                <div className="space-y-6 text-[var(--text)] leading-relaxed text-lg">
                  <p className="text-xl font-display text-[var(--primary)]">
                    Este é um conteúdo de demonstração. Em breve, artigos completos sobre o tema.
                  </p>
                  <p>
                    O universo da anestesiologia ambulatorial tem crescido de maneira consistente no
                    Brasil nos últimos anos. Cada vez mais, clínicas de dermatologia, odontologia e
                    cirurgia plástica percebem o valor de oferecer procedimentos sob sedação
                    consciente.
                  </p>
                  <p>
                    Neste artigo, vamos explorar como essa transição pode transformar a experiência
                    do paciente e elevar o patamar clínico da sua prática, sempre com base em
                    evidências científicas e protocolos rigorosos.
                  </p>
                  <h2 className="font-display text-3xl text-[var(--primary)] mt-12">
                    Por que falar sobre isso agora
                  </h2>
                  <p>
                    A demanda por procedimentos estéticos e dermatológicos cresceu exponencialmente.
                    Com esse crescimento, também aumentou a consciência dos pacientes sobre segurança
                    e conforto durante os procedimentos.
                  </p>
                  <p>
                    Para continuar lendo este artigo completo, aguarde a publicação oficial ou entre
                    em contato diretamente pelo WhatsApp.
                  </p>
                </div>
              </FadeIn>
            </div>
          </section>
        </article>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
