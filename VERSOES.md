# Histórico de versões da página de vendas

Cada versão aprovada recebe um número (tag no GitHub). Para voltar a uma versão anterior,
basta pedir ao Claude: "volte a página para a versão X". Nada é apagado — a volta vira uma
nova versão, e dá para desfazer depois.

## v1.2.0 — 15/10/2026
- Copy nova: topo ("Seu salão dá lucro ou você paga para trabalhar?"), títulos de "O que você recebe", bônus e planos, passo 3 e frase final de "Como funciona", textos dos bônus.
- Nova pergunta 7 no FAQ (atendimento em casa / trabalhando sozinha).
- Celular: topo mais compacto (mostra mais do vídeo na primeira tela) e espaços mais uniformes entre e dentro das seções. Computador sem mudança visual.

## v1.1.0 — 15/10/2026
- Microsoft Clarity instalado (mapas de calor e gravações de navegação), ID no `config.js`.
- Carrega só depois que a página abriu, sem afetar a velocidade.

## v1.0.1 — 15/10/2026
Ajustes para a hospedagem na Vercel (sem mudança visual).
- Cache: imagens e vídeo ficam guardados no aparelho por 30 dias; estilos e scripts por 1 dia; links de checkout sempre atualizados (`vercel.json`).
- Arquivos internos (anotações e servidor de visualização) deixam de ficar acessíveis no site (`.vercelignore`).

## v1.0.0 — 15/10/2026
Primeira versão completa da página de vendas.
- Topo com vídeo do aplicativo no celular (abre e navega pelas abas).
- "O que você recebe": tópicos com certinhos dourados.
- "Como funciona": linha do tempo com 3 passos.
- Bônus com os 5 mockups (WebP, leves).
- Planos Básico e Premium com os textos novos; card do Premium "respirando" com halo dourado.
- Garantia e perguntas frequentes.
- Seção de depoimentos oculta até haver depoimentos reais autorizados.
- Links de checkout ainda vazios (config.js).
- Página otimizada: abre com ~166 KB.
