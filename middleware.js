import "./ab-runtime.js";
import "./config.js";

export const config = { matcher: ["/", "/b", "/b/", "/upgrade", "/upgrade/"] };

export default function middleware(request) {
  const settings = globalThis.CONFIG;
  const url = new URL(request.url);
  const headers = new Headers({
    "Cache-Control": "private, no-store",
    "Vercel-CDN-Cache-Control": "no-store",
    "Vary": "Cookie",
  });
  if (url.pathname.startsWith("/upgrade")) {
    // Sem oferta de R$ 19,90, não exibir o upgrade com outro preço.
    if (!String(settings.CHECKOUT_UPGRADE_URL || "").trim()) {
      const basic = String(settings.CHECKOUT_BASICO_URL || "").trim();
      if (/^https:\/\/checkout\.payt\.com\.br\//.test(basic)) {
        headers.set("Location", basic);
        return new Response(null, { status: 307, headers });
      }
    }
    headers.set("x-middleware-next", "1");
    return new Response(null, { headers });
  }
  // OFF prevalece inclusive sobre ?versao=b. /b/ é uma prévia direta independente.
  if (url.pathname !== "/") {
    headers.set("x-middleware-next", "1");
    return new Response(null, { headers });
  }
  const forced = url.searchParams.get("versao");
  const saved = (request.headers.get("cookie") || "").match(/(?:^|;\s*)pv_ab_v1=([ab])(?:;|$)/)?.[1];
  let version = "a";
  if (settings.AB_ENABLED) {
    version = /^[ab]$/.test(forced || "") ? forced : saved || (crypto.getRandomValues(new Uint8Array(1))[0] < 128 ? "a" : "b");
    // Forçar serve apenas para conferir; não troca a atribuição permanente.
    if (!saved && !forced) headers.append("Set-Cookie", `pv_ab_v1=${version}; Path=/; Max-Age=31536000; HttpOnly; SameSite=Lax; Secure`);
  }
  headers.set("X-PV-Version", version);
  if (version === "b") {
    const destination = new URL("/b/index.html", url);
    destination.search = url.search;
    headers.set("x-middleware-rewrite", destination.href);
  } else headers.set("x-middleware-next", "1");
  return new Response(null, { headers });
}
