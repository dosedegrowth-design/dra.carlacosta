# Dra. Carla Costa — Site Institucional

Landing premium para a Dra. Carla Costa (anestesiologia e medicina da dor), com foco híbrido **B2B** (clínicas parceiras) + **B2C** (pacientes).

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind CSS 4 (`@tailwindcss/postcss`)
- Framer Motion 12 (animações on-scroll + micro-interações)
- Lucide React (ícones)
- Deploy: Vercel

## Como rodar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

```
src/
├── app/                 # App Router (Next.js)
│   ├── page.tsx         # Home (12 seções)
│   ├── parceria/        # Landing B2B dedicada
│   ├── servicos/[slug]/ # Páginas individuais por serviço
│   ├── blog/            # Listagem + posts individuais
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # 12 seções da home + B2B
│   ├── animation/       # FadeIn, TextReveal, AnimateOnScroll
│   └── ui/              # Button, Accordion, SectionTitle, WhatsAppFloat
├── hooks/useInView.ts   # IntersectionObserver SSR-safe
├── lib/
│   ├── constants.ts     # Conteúdo (serviços, FAQ, depoimentos, posts)
│   ├── structured-data.ts # JSON-LD schemas
│   └── utils.ts         # cn()
└── types/               # TypeScript types
```

## Conteúdo editável

Todo o conteúdo textual está em `src/lib/constants.ts`:
- `SITE` — nome, CRM, contato, redes sociais
- `SERVICES` — 6 áreas de atuação
- `B2B_BENEFITS` — 4 benefícios para clínicas
- `HOW_IT_WORKS` — 4 etapas da parceria
- `PILARES` — 4 pilares (Segurança, Acolhimento, Conforto, Humanização)
- `MITOS` — Mitos e Verdades
- `TESTIMONIALS` — depoimentos
- `FAQS` — perguntas frequentes
- `BLOG_POSTS` — posts do blog
- `STATS` — números em destaque

## SEO

- `generateMetadata` em cada página
- `sitemap.ts` dinâmico
- `robots.ts`
- JSON-LD: `Physician`, `FAQPage`, `WebSite`
- Open Graph: imagem em `/public/images/og-image.jpg` (adicionar)

## Placeholders

Imagens atualmente vêm do Unsplash (configuradas em `next.config.ts`). Substitua pelas fotos oficiais da Dra. quando disponíveis.

## Deploy

O projeto está pronto para deploy na Vercel:

1. Push para GitHub
2. Import na Vercel
3. Configurar domínio `dracarlacosta.com.br`

## Próximos passos

- [ ] Substituir imagens Unsplash pelas fotos oficiais
- [ ] Atualizar CRM, WhatsApp e e-mail em `src/lib/constants.ts`
- [ ] Adicionar Open Graph image em `/public/images/og-image.jpg`
- [ ] Integrar formulário de contato com backend (Supabase ou email)
- [ ] Expandir blog com artigos reais
