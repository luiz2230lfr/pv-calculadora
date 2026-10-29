# Histórico de versões da página de vendas

Cada versão aprovada recebe um número (tag no GitHub). Para voltar a uma versão anterior,
basta pedir ao Claude: "volte a página para a versão X". Nada é apagado — a volta vira uma
nova versão, e dá para desfazer depois.

## v1.7.0 — 29/10/2026 (página A)
- Depoimentos de volta (dobra 4, entre "Como funciona" e os bônus): os mesmos 7 prints reais e autorizados da página B, na faixa café com cards brancos, em carrossel para deslizar (setas douradas no computador). Textos da seção iguais aos da B: "QUEM USA, CONTA" / "Mais segurança para cobrar." Imagens em `imagens/depoimentos/`.

## v1.6.0 — 29/10/2026 (página A)
- Bônus novos do Premium, mesmo formato dos cards e mesmos valores (total R$ 195): Bônus 02 vira "20 respostas prontas para clientes que pedem desconto"; Bônus 03 vira "Kit Orçamento Profissional"; Bônus 05 vira "Kit de Controle de Clientes" (títulos, descrições, alt e imagens novas; `?v=2` nas imagens para não aparecer a antiga do cache). Bônus 01 e 04 iguais.
- Lista de bônus do card Premium atualizada com os 5 nomes novos. Estrutura, copy do resto, preços, rastreamento e checkout sem mudança.

## Página B — prévia local em revisão — 28/10/2026

### Acabamento atual — 28/10/2026
- Prova social com chamada mais curta: “QUEM USA, CONTA”, “Mais segurança para cobrar.” e convite para deslizar e ler os relatos. Fotos e nomes continuam visíveis; telefones ocultos. Sem mudanças nas imagens, carrossel ou restante da página.
- Orientação mais recente e reforçada pelo Luiz: fotos de perfil e nomes dos depoimentos VISÍVEIS. Restaurados novamente dos sete originais autorizados; mantidos somente os telefones já desfocados nos arquivos recebidos. Nenhum outro ajuste visual nesta rodada.
- Rodada final por arquivo enviado: seções com fundos próprios na ordem aprovada, solução separada e cinco faixas para as telas; rodapé café. Cards claros padronizados, preservado o convite amarelo. Manchete e prints do app intactos.
- Prova social com nova etiqueta/título/apoio e contador visível; identidades novamente ocultadas conforme a nova orientação. Premium com lista curta e mockup enviado, seta SVG de 48 px e frase que rolam ao card, movimento desligado com preferência por menos animação. Selo original dourado/preto restaurado.
- Upgrade com o mockup do Premium e somente o botão final; caixa de preço preservada sem CTA e subtítulo sem preço repetido. Links de checkout mantidos. WebP transparente do mockup: 400 px 33,2 KB; 800 px 93,7 KB.
- Conferido em 360/390/1280 px: fundos, rolagem ao Premium, carrossel/contador, FAQ, destinos de compra, ausência de rolagem lateral e de erros no console. Lighthouse mobile LOCAL: B 99 desempenho/100 acessibilidade, 216 KiB, LCP 1,9 s; upgrade 99/100, 176 KiB, LCP 2,1 s.
- Pasta “11 - Página B pronta para subir” aguardando aprovação visual explícita, conforme item 8 do pedido; não criada nesta etapa. PageSpeed online e auditoria da pasta limpa ficam para depois. Sem publicação.
- Mockup da primeira dobra: moldura realista preservada, círculo nude e quatro cartões flutuantes nas laterais, conforme esclarecimento do Luiz. Alteração restrita ao topo da B, mantendo P6, copy, preço/botão e os demais mockups.
- Ajuste posterior solicitado pelo Luiz: imagem original da manchete restaurada no lugar do card de dados da seção 2; depoimentos restaurados dos originais autorizados com fotos e nomes visíveis, preservando somente os desfoques de telefone já presentes no ZIP. Sem rastreamento nem publicação.
- Cores revisadas: títulos café, perda em vermelho e solução em verde apenas nos elementos indicados; Premium café com preço/botão dourados, sem estrelas. Só gastos e garantia como seções inteiras escuras.
- Copy final do topo, solução, cinco funções, convite ao Premium, garantia, FAQ e upgrade aplicada. Valores com espaço não separável após R$. Ordem dos blocos e arquivos dos prints do app preservados.
- Card de dados no lugar da imagem de portal; comparação R$ 150/R$ 186; ícones SVG consistentes; público em uma coluna mobile; conteúdo visível sem animação de entrada. Selo simples de 30 dias na garantia.
- Sete depoimentos reais/autorizados com fotos, nomes de perfil e telefones ocultos diretamente nos WebP, sem IA; carrossel sem celular, com setas/bolinhas. Originais fora do repositório da página.
- Links simples reativados do config: B Básico → upgrade; B Premium → Premium R$ 29,90; dois CTAs de upgrade → oferta R$ 19,90; recusa → Básico R$ 14,90. Oferta vazia desliga upgrade e leva ao Básico, conferido no navegador e no middleware.
- Pixel, UTMs e marcação da versão permanecem adiados por nova orientação do Luiz. Nenhum Clarity na B/upgrade. AB_ENABLED=false. Página A intacta, hashes conferidos.
- Conferido em 360/375/390 px e desktop: sem rolagem lateral, âncora, FAQ, carrossel, cliques externos interceptados e proteção de oferta vazia. Lighthouse mobile LOCAL: B 100 desempenho/100 acessibilidade, upgrade 100/100; LCP 1,8 s em ambos. Não é PageSpeed online.
- Pendentes antes da publicação: responsável/e-mail/links legais; conferir estatísticas no relatório original do Sebrae; etapa final de rastreamento e teste A/B; validação online depois de URL autorizada. Sem push, merge ou deploy.

### Histórico das rodadas anteriores
- Botão Básico da B reativado para abrir `/upgrade/`, a pedido do Luiz. Sem oferta de upgrade configurada, usa o checkout Básico normal como proteção. Premium, botões de compra do upgrade e rastreamento permanecem desativados.
- Copy da seção 2 substituída pelo texto enviado pelo Luiz, com os negritos e quadro da progressiva. Etiquetas dos planos em cápsulas escura/vermelha conforme referências; estrelas decorativas e “Mais completo” preservado. Provas sociais sem moldura de celular, um print por vez, setas laterais e bolinhas. Prints recebidos no ZIP restaurados a pedido do Luiz, mantendo os telefones já desfocados.
- Premium voltou ao fundo café com tipografia clara e sem a montagem pequena; todos os textos dos planos, na mesma ordem, e o convite dentro do Básico foram preservados. Provas sociais ganharam introdução curta, cards de 224 px no celular e setas/contador. Após autorização do Luiz, fotos dos perfis pixelizadas diretamente nos arquivos finais, sem IA, preservando os pixels fora das fotos e os desfoques de telefone recebidos.
- Novo refinamento autorizado: tour com uma tela de 260 px por função no celular, benefício curto e explicação; retirados os dois celulares lado a lado. Títulos dos bônus agora exibem apenas o nome do material.
- Planos redesenhados sem nuvens: faixas escura/dourada, chamada destacada ao Premium dentro do Básico, “MAIS COMPLETO” entre aspas, descrição e mockup do pacote antes da lista.
- Sete prints do ZIP enviados e confirmados pelo Luiz como reais e autorizados foram incluídos no carrossel, com desfoques recebidos preservados e WebP em 400/800 px. Selo de garantia enviado pelo Luiz aplicado em WebP transparente; fundo quadriculado removido com ImageGen. Hero preservada nesta revisão.
- Problema e solução unidos em um único bloco contínuo até a última vantagem. Sinais padronizados em 22 px. Tour reorganizado como apresentação com negritos → tela → função/explicação; títulos Início, Valor da minha hora, Calcular pelo frasco, Calculadora e Meus preços; retirado o detalhe com prints extras da soma de gastos.
- Ajuste dos planos: convite ao Premium dentro do card Básico; etiquetas em nuvem escura/dourada com brilhos decorativos e selo Mais completo; retirada do resumo verde e do texto comum acima dos cards; lista Premium reforçada com benefícios reais do aplicativo, suporte, garantia e cinco bônus.
- Revisão aprovada após comparação: oferta antecipada no topo; título antes da notícia; retirada da média de corte e da conclusão estatística indevida; conta da progressiva completa em um único ponto; fórmulas e telas repetidas removidas; títulos antes dos prints no tour; ajuda de soma opcional; público enxuto e uma etiqueta por bônus.
- Seção de vídeo/conta demonstrativa removida. Provas sociais ocupam essa posição, mas ficam ocultas enquanto DEPOIMENTOS estiver vazio. Nenhuma imagem de depoimento foi acrescentada.
- Verde aplicado aos pontos de ação e preço e vermelho ao alerta do problema, mantendo a identidade principal. Planos esclarecem o mesmo aplicativo e as diferenças de bônus/garantia; FAQ explica acesso pelo navegador e entrega dos bônus.
- Todas as molduras de telas e vídeo da B passaram para acabamento realista com borda metálica, câmera, barra de status e indicador inferior, sem marca de fabricante. O app do conjunto de upgrade usa a mesma moldura. Prints reais preservados.
- Revisão visual: faixa com destaques seletivos, mockup P6 com círculo nude e quatro cartões de vantagens, três selos abaixo do pagamento; notícia no início da seção 2; trechos em caixa alta e sinais verdes/vermelhos fora dos planos. Conferido em 360, 390 e 1280 px.
- Branch `pagina-b`, sem push, merge ou publicação. Página A preservada: `index.html`, `estilos.css` e `script.js` sem alterações.
- Nova `/b/` com roteiro aprovado, identidade da marca, tour do app, bônus, planos, garantia e FAQ; sem bloco Quem sou eu. Card de notícia vermelho mantido como exceção autorizada pelo Luiz.
- Nova `/upgrade/` com oferta Premium de R$ 19,90. Links salvos no config; por nova orientação do Luiz, TODOS os botões de compra da B e do upgrade estão sem link e desativados. A âncora do topo funciona.
- UTMs e Pixel REMOVIDOS da B e do upgrade por solicitação posterior do Luiz. Clarity ausente na B. A mantém seus rastreadores e seus checkouts originais.
- WebP em 400/800 px, fontes WOFF2 locais, vídeo H.264 720 px sem som com carregamento próximo da tela, carrossel CSS oculto com DEPOIMENTOS vazio.
- Roteador 50/50 preparado, com cookie persistente e prévia forçada; AB_ENABLED permanece false. Marcação da versão, UTMs, checkouts, proteção do upgrade vazio e validação real dos eventos serão concluídos na etapa final, conforme pedido do Luiz.
- Pendentes: responsável/e-mail/Termos/Privacidade; duração do acesso; parcelamento; validação dos números do Sebrae; aprovação visual; PageSpeed online após autorização de URL acessível.
- Relatório, tabela de pesos e prints locais ficam na pasta irmã `revisao-pagina-b`, fora dos arquivos publicados.

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
