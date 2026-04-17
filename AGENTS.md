# AGENTS.md — Instruções para edições futuras

Este documento orienta agentes (Claude, GPT) a fazer alterações neste projeto mantendo consistência.

## Padrões importantes

1. **Conteúdo textual** sempre em `src/lib/constants.ts`. Nunca hardcode em componentes.
2. **Seções** vão em `src/components/sections/`. Uma seção = um arquivo.
3. **Animação** usar `FadeIn` (Framer Motion) ou `AnimateOnScroll` (CSS). Não usar CSS inline em JSX.
4. **Ícones** via `lucide-react`. Para Instagram/LinkedIn, use SVG inline (não existe na lib 1.8).
5. **Cores** usar vars CSS (`var(--primary)`, `var(--accent)`, etc). Nunca hex direto.
6. **Fontes** `font-display` (serif Playfair) para títulos, body default para texto.

## Padrão de animação

```tsx
<FadeIn delay={0.1} direction="up">
  <Component />
</FadeIn>

<AnimateOnScroll variant="fadeUp">
  <Component />
</AnimateOnScroll>

<TextReveal text="Minha frase" highlight="palavra" />
```

## Adicionar novo serviço

1. Abrir `src/lib/constants.ts`
2. Adicionar ao array `SERVICES` com: slug, title, short, description, icon (lucide), image
3. O sitemap e as páginas `/servicos/[slug]` são geradas automaticamente

## Adicionar novo post no blog

1. Adicionar ao array `BLOG_POSTS` em `constants.ts`
2. Página gerada automaticamente em `/blog/[slug]`
3. Para conteúdo real, edite `src/app/blog/[slug]/page.tsx`

## Adicionar nova seção na home

1. Criar arquivo em `src/components/sections/MinhaSecao.tsx`
2. Seguir padrão: `SectionLabel` + `SectionTitle` + conteúdo com `FadeIn`
3. Importar e incluir em `src/app/page.tsx`

## Não fazer

- Não importar `Instagram` ou `Linkedin` de `lucide-react` (versão 1.8 não tem). Usar SVG inline.
- Não usar cores hardcoded. Sempre CSS vars.
- Não duplicar conteúdo — colocar em `constants.ts`.
- Não criar componentes duplicados — reutilizar `SectionTitle`, `SectionLabel`, `Button`, `Accordion`.
