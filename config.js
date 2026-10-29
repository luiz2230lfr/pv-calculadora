/*
  CONFIGURAÇÃO DA PÁGINA DE VENDAS
  --------------------------------
  Cole aqui os links de checkout da plataforma de vendas, entre as aspas.
  Exemplo: CHECKOUT_BASICO_URL: "https://pay.plataforma.com/abc123",

  Enquanto um link estiver vazio (""), o botão daquele plano continua
  levando para a seção de planos e um aviso aparece no console do navegador.
*/
window.CONFIG = {
  CHECKOUT_BASICO_URL: "https://checkout.payt.com.br/70ea8f8d242afd54537306a4d283adeb",   // Plano Básico (R$ 14,90)
  CHECKOUT_PREMIUM_URL: "https://checkout.payt.com.br/45cb486a10c189d465741dad3e5bf794",  // Plano Premium (R$ 29,90)

  // Microsoft Clarity (mapas de calor e gravações). Deixe "" para desligar.
  CLARITY_ID: "yy85gv6bpr",

  // PÁGINA B — teste DESLIGADO até aprovação e validação da atribuição.
  AB_ENABLED: false,
  CHECKOUT_UPGRADE_URL: "https://checkout.payt.com.br/d13aea15906e177c09575343e1177b33",
  // Links de compra ativos. Pixel, UTMs e marcação A/B ficam para a etapa final.
  // Sete depoimentos confirmados como reais e autorizados pelo Luiz em 28/10/2026.
  DEPOIMENTOS: [
    {
        "arquivo": "/b/assets/depoimento-autorizado-01-400.webp",
        "arquivo800": "/b/assets/depoimento-autorizado-01-800.webp",
        "alt": "Conversa no WhatsApp sobre o uso da calculadora para definir os preços.",
        "width": 400,
        "height": 711
    },
    {
        "arquivo": "/b/assets/depoimento-autorizado-02-400.webp",
        "arquivo800": "/b/assets/depoimento-autorizado-02-800.webp",
        "alt": "Dois comentários no WhatsApp sobre a experiência com o aplicativo.",
        "width": 400,
        "height": 606
    },
    {
        "arquivo": "/b/assets/depoimento-autorizado-03-400.webp",
        "arquivo800": "/b/assets/depoimento-autorizado-03-800.webp",
        "alt": "Cliente comenta no WhatsApp que o aplicativo ajudou no negócio; telefone desfocado.",
        "width": 400,
        "height": 711
    },
    {
        "arquivo": "/b/assets/depoimento-autorizado-04-400.webp",
        "arquivo800": "/b/assets/depoimento-autorizado-04-800.webp",
        "alt": "Comentários de clientes nas redes sociais sobre a calculadora e o suporte.",
        "width": 400,
        "height": 546
    },
    {
        "arquivo": "/b/assets/depoimento-autorizado-05-400.webp",
        "arquivo800": "/b/assets/depoimento-autorizado-05-800.webp",
        "alt": "Comentários de clientes sobre o uso da calculadora na precificação.",
        "width": 400,
        "height": 521
    },
    {
        "arquivo": "/b/assets/depoimento-autorizado-06-400.webp",
        "arquivo800": "/b/assets/depoimento-autorizado-06-800.webp",
        "alt": "Comentários de clientes sobre a experiência com o aplicativo.",
        "width": 400,
        "height": 530
    },
    {
        "arquivo": "/b/assets/depoimento-autorizado-07-400.webp",
        "arquivo800": "/b/assets/depoimento-autorizado-07-800.webp",
        "alt": "Conversa no WhatsApp com demonstração do aplicativo; contato desfocado.",
        "width": 400,
        "height": 710
    }
],
  // Como adicionar um depoimento autorizado:
  // 1. Oculte telefones/e-mails com borrão forte; confira o antes/depois.
  // 2. Exporte 400/800 px em WebP (400 px até 60 KB) para /b/assets/.
  // 3. Adicione: { arquivo: "/b/assets/real-400.webp",
  //    arquivo800: "/b/assets/real-800.webp", alt: "Descrição do comentário",
  //    width: 400, height: 700 }. Use as dimensões REAIS do seu arquivo.
  // Lista vazia = seção totalmente oculta. Não use provas não autorizadas.
  B_RESPONSAVEL: "", // PENDENTE: responsável / CNPJ ou CPF, conforme confirmação.
  B_EMAIL: "", // PENDENTE: e-mail de suporte.
  B_TERMOS_URL: "", // PENDENTE: texto aprovado e endereço dos Termos de uso.
  B_PRIVACIDADE_URL: "", // PENDENTE: texto aprovado e endereço da Política.
};
