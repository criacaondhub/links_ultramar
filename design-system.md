# Design System — Links Ultramar (Dr. Rafael Ultramar)

## 1. Tokens de Cor

| Token | Valor | Uso |
|---|---|---|
| `--color-background` | `#000000` | Cor de fundo geral da página |
| `--color-text` | `#FFFFFF` | Texto padrão sobre o fundo preto |
| `--color-primary` | `#CB2C30` | Botão primário (uso mencionado pelo cliente por CTA) |
| `--color-secondary` | `#68E2B3` | Botão secundário (uso mencionado pelo cliente por CTA) |
| `--color-text-on-secondary` | `#000000` | Texto sobre botões na cor `--color-secondary` |

## 2. Tipografia

| Token | Valor |
|---|---|
| Fonte principal | Unbounded |
| Peso | Regular (400) / Bold (700) — Bold adicionado para @handle e frase de credibilidade |
| Fonte (variável CSS) | `--font-sans: "Unbounded", sans-serif;` |
| Fonte secundária | Sofia Sans Condensed — usada apenas no texto de credibilidade ("Reconstruo cabelos..."), em caixa alta |
| Fonte secundária (variável CSS) | `--font-condensed: "Sofia Sans Condensed", sans-serif;` |

Import Google Fonts:
```
https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap
https://fonts.googleapis.com/css2?family=Sofia+Sans+Condensed:wght@400;700;800&display=swap
```

## 3. Espaçamentos e Grid

Container máximo: **1440px**

| Token | Mobile | Desktop |
|---|---|---|
| Padding lateral das seções | 24px | 80px |
| Padding vertical das seções | 48px | 96px |
| Gap entre elementos no grid | 16px | 24px |

## 4. Imagens

| Arquivo | Seção | Uso |
|---|---|---|
| `Background.png` | Fundo global (`body`) | `background-size: cover`, `background-position: top center`, `no-repeat` |
| `Banner-Hero.png` | Hero | Imagem de composição contida em `max-w-[1080px]`, sem `border-radius` |
| `logo-rafael-ultramar.svg` | Header | Logo, sobreposta levemente à imagem do Hero |
| `foto-youtube-ultramar.png` | — | Não utilizada atualmente (substituída pelo Banner-Hero.png) |
| `logo-fue-ultramar.png` | LinkBanners (banner 2) | Logo dentro do card |
| `banner-link-01.png` a `banner-link-04.png` | LinkBanners | Cards de link, `border-radius` de `5.154% / 18.611%` aplicado via CSS para acompanhar o raio nativo da arte (67px em 1300x360px) |
| `banner-link-05.png` | LinkBanners (banner 5) | Card já vem com borda vermelha desenhada na própria arte — sem clip/borda CSS adicional (`clipToImage={false}`) |
