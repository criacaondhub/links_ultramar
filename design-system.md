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
| Fonte | Unbounded |
| Peso | Regular (400) / Bold (700) — Bold adicionado para @handle e frase de credibilidade |
| Fonte (variável CSS) | `--font-sans: "Unbounded", sans-serif;` |

Import Google Fonts:
```
https://fonts.googleapis.com/css2?family=Unbounded:wght@400;700&display=swap
```

## 3. Espaçamentos e Grid

Container máximo: **1440px**

| Token | Mobile | Desktop |
|---|---|---|
| Padding lateral das seções | 24px | 80px |
| Padding vertical das seções | 48px | 96px |
| Gap entre elementos no grid | 16px | 24px |

## 4. Imagens

⚠️ PENDENTE — o cliente vai fornecer os arquivos de imagem em `public/assets/`. Documentar nome do arquivo, seção de uso, posicionamento, sombras e filtros assim que forem enviados.
