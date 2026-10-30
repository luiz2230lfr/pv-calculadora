# Histórico de versões da página de vendas

Cada versão aprovada recebe um número (tag no GitHub). Para voltar a uma versão anterior,
basta pedir ao Claude: "volte a página para a versão X". Nada é apagado — a volta vira uma
nova versão, e dá para desfazer depois.

## v2.0.2 — 30/10/2026 (página A)
- Removida a linha "Total parcelado: R$ 37,08. Sem assinatura." do card; espaçamento do bloco de preço ajustado. `estilos.css?v=2.0.2`. Cópia sem rastreio atualizada.

## v2.0.1 — 30/10/2026 (página A)
- Checks do card da oferta no mesmo padrão dos outros checks da página (círculo dourado de 26 px). `estilos.css?v=2.0.1`. Cópia sem rastreio atualizada.

## v2.0.0 — 30/10/2026 (página A)
- Oferta única de R$ 29,90: card e link de checkout do Plano Básico (R$ 14,90) removidos; card centralizado. Checkout da oferta de R$ 29,90 e rastreio iguais.
- Card da oferta: título "Tudo o que será liberado para você hoje" → selo "APP COMPLETO + 5 BÔNUS + ACESSO VITALÍCIO" → nome do produto → mockup do pacote (`imagens/oferta/`) → 11 itens com check (app, recursos, 5 bônus, acesso vitalício, 30 dias de garantia) → "De R$ 147,00 por / R$ 29,90 à vista / ou 12x de R$ 3,09 / Total parcelado: R$ 37,08. Sem assinatura." → botão "QUERO O PACOTE COMPLETO" → "Pix ou cartão • 30 dias de garantia • Sem assinatura". Parcelamento conferido no checkout da Payt (1x R$ 29,90; 12x R$ 3,09).
- Botão do topo: "Ver como descobrir quanto cobrar", leva a "Como funciona". O botão "Quero minha calculadora" saiu do fim de "Como funciona" e foi para baixo dos depoimentos (creme, texto café), levando à oferta.
- Depoimentos: sem barra de rolagem; setas creme nas laterais, bolinhas clicáveis abaixo (uma por posição possível: 7 no celular, 5 no computador), tudo sincronizado com o deslizar.
- Bônus: nova introdução, selos "INCLUÍDO" e fechamento "Os 5 bônus acompanham sua calculadora, sem custo adicional."
- Garantia única de 30 dias (topo, oferta, seção de garantia e FAQ). FAQ 5 "O que está incluído nos R$ 29,90?" (com acesso vitalício e sem assinatura); FAQ 6 sem menção a dois planos.
- Imagens: sem arrastar e sem menu de "salvar imagem" (botão direito/toque longo). Zoom limitado (viewport + pinça/Ctrl). Não impede captura de tela; alguns navegadores ignoram o limite de zoom.
- `estilos.css?v=2.0.0` e `script.js?v=2.0.0`. Cópia sem rastreio atualizada.

## v1.9.0 — 29/10/2026 (página A)
- Modo sem rastreio: abrir com `?semrastreio=1` no fim do endereço não carrega UTMify (pixel e UTMs) nem Clarity, e mostra um aviso "Modo sem rastreio" no canto. Sem o parâmetro, a página funciona exatamente como antes (o código da UTMify continua idêntico, só ganhou um "if" em volta). `script.js?v=1.9.0` para não usar o arquivo guardado.
- Cópia local sem rastreio (fora do site): pasta "2 - Página de Vendas - Visualizar sem rastreio", abre com dois cliques no index.html. Refeita por `python ferramentas/gerar-copia-sem-rastreio.py` (regra no LEIA-ME). Cópia sem rastreio atualizada.
- Velocidade (página normal, sem o parâmetro, comparada com a v1.8.1 no mesmo navegador a 390 px): mesmos 19 pedidos e 185 KB; +0,5 KB comprimido no total (o aviso e o "if"); tempo de carregamento igual, dentro da variação.

## v1.8.1 — 29/10/2026 (página A)
- `estilos.css?v=1.8.1`: quem já tinha visitado não fica com o visual antigo (sem a fonte nova) guardado no navegador.

## v1.8.0 — 29/10/2026 (página A)
- Mais rápida no celular, sem mudar texto, visual, checkout ou rastreamento.
- Fonte Plus Jakarta Sans guardada no próprio site (`fontes/`), no lugar do Google Fonts.
- Capa do vídeo do topo carregada com prioridade; conexão antecipada com a UTMify.
- Depoimentos com versão de 600 px e tamanho certo para cada tela.
- Fontes guardadas no navegador por 1 ano (`vercel.json`).

## v1.7.0 — 29/10/2026 (página A)
- Depoimentos de volta (dobra 4, entre "Como funciona" e os bônus): os mesmos 7 prints reais e autorizados da página B, na faixa café com cards brancos, em carrossel para deslizar (setas douradas no computador). Textos da seção iguais aos da B: "QUEM USA, CONTA" / "Mais segurança para cobrar." Imagens em `imagens/depoimentos/`.

## v1.6.0 — 29/10/2026 (página A)
- Bônus novos do Premium, mesmo formato dos cards e mesmos valores (total R$ 195): Bônus 02 vira "20 respostas prontas para clientes que pedem desconto"; Bônus 03 vira "Kit Orçamento Profissional"; Bônus 05 vira "Kit de Controle de Clientes" (títulos, descrições, alt e imagens novas; `?v=2` nas imagens para não aparecer a antiga do cache). Bônus 01 e 04 iguais.
- Lista de bônus do card Premium atualizada com os 5 nomes novos. Estrutura, copy do resto, preços, rastreamento e checkout sem mudança.

## v1.5.0 — 23/10/2026
- Celular: ao clicar no botão do topo, a página para logo acima do título dos planos e o card do Básico ficou mais compacto. Assim o Premium (pulsando) já aparece na mesma tela, logo abaixo do Básico. Computador sem mudança.

## v1.4.0 — 23/10/2026
- Links de checkout da Payt no `config.js` (Básico e Premium): os botões dos planos agora levam ao pagamento.
- UTMify instalada no `<head>` (pixel e script de UTMs), códigos colados exatamente como fornecidos.

## v1.3.0 — 22/10/2026
- Bônus 03 trocado: sai a "Planilha de controle de gastos do salão", entra o "Catálogo de Serviços Pronto para Editar" (imagem nova em WebP 400/800, título, descrição e texto alternativo).
- Lista do Plano Premium atualizada com o novo bônus. Valor estimado do bônus continua R$ 47,00 (total dos bônus R$ 195,00).

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
