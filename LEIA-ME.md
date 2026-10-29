# Página de vendas — Calculadora de Precificação para Cabeleireiras

Projeto separado do aplicativo. Só arquivos simples: `index.html` (textos), `estilos.css` (visual), `script.js` (botões, vídeo e animações) e `config.js` (links de checkout).

## Links de checkout
Abra `config.js` e cole os links entre as aspas de `CHECKOUT_BASICO_URL` e `CHECKOUT_PREMIUM_URL`.
Enquanto estiverem vazios, os botões dos planos ficam na própria seção de planos.

## Imagens e vídeo (todos otimizados)
| Pasta | Conteúdo |
|---|---|
| `imagens/marca/` | Logo (WebP), ícones do navegador (PNG) e `compartilhar.jpg` (prévia do link no WhatsApp/Instagram) |
| `imagens/video/` | `demonstracao.mp4` (vídeo do app no topo) e `demonstracao-capa.webp` (imagem mostrada antes do vídeo carregar) |
| `imagens/bonus/` | Mockups dos 5 bônus em WebP, em dois tamanhos (`-400` celular, `-800` telas maiores) |
| `imagens/depoimentos/` | Os 7 prints de depoimentos reais e autorizados (WebP, `-400` e `-800`) |

Para trocar uma imagem, mande o arquivo novo ao Claude: ele converte para WebP no tamanho certo.
A pasta `materiais-novos/` guarda os arquivos originais enviados e **não deve ser publicada**.

## Hospedagem
O arquivo `_headers` define o cache quando a página for publicada no Cloudflare Pages.
Não publicar as pastas `.claude/` e `materiais-novos/`.

## Ver no computador
No Claude, peça para abrir a visualização da página (http://localhost:4321).

## Ver sem rastreio (não conta visita)
- **Online:** `https://pv-calculadora.vercel.app/?semrastreio=1`, a mesma página, sem UTMify (pixel e UTMs) e sem Clarity, com o aviso "Modo sem rastreio" no canto. Acompanha sozinho cada versão nova.
- **No computador:** pasta irmã `2 - Página de Vendas - Visualizar sem rastreio`, com dois cliques no `index.html`.
- **REGRA:** toda vez que uma versão nova da página A for publicada, refazer a cópia do computador com
  `python ferramentas/gerar-copia-sem-rastreio.py` e anotar no VERSOES.md "cópia sem rastreio atualizada".
  A pasta `ferramentas/` não vai para o site (está no `.vercelignore`).
