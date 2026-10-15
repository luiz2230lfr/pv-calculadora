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
| `imagens/depoimentos/` | (vazio) prints dos depoimentos — `depoimento-1.png` a `-3.png` |

Para trocar uma imagem, mande o arquivo novo ao Claude: ele converte para WebP no tamanho certo.
A pasta `materiais-novos/` guarda os arquivos originais enviados e **não deve ser publicada**.

## Hospedagem
O arquivo `_headers` define o cache quando a página for publicada no Cloudflare Pages.
Não publicar as pastas `.claude/` e `materiais-novos/`.

## Ver no computador
No Claude, peça para abrir a visualização da página (http://localhost:4321).
