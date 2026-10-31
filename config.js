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
};
