// Servidor local simples, só para visualizar a página no computador antes de publicar.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const raiz = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const porta = Number(process.env.PORT) || 4321;
const tipos = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".png": "image/png", ".mp4": "video/mp4", ".webm": "video/webm", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".svg": "image/svg+xml",
};

createServer(async (req, res) => {
  let caminho = decodeURIComponent(new URL(req.url, "http://x").pathname);
  if (caminho.endsWith("/")) caminho += "index.html";
  const arquivo = normalize(join(raiz, caminho));
  if (!arquivo.startsWith(raiz) || arquivo.includes(`${join(raiz, ".")}claude`)) { res.writeHead(403).end(); return; }
  try {
    const dados = await readFile(arquivo);
    const tipo = tipos[extname(arquivo).toLowerCase()] || "application/octet-stream";
    // suporte a "Range" (necessário para o navegador avançar/voltar no vídeo)
    const faixa = /bytes=(\d*)-(\d*)/.exec(req.headers.range || "");
    if (faixa) {
      const ini = faixa[1] ? Number(faixa[1]) : 0;
      const fim = faixa[2] ? Math.min(Number(faixa[2]), dados.length - 1) : dados.length - 1;
      res.writeHead(206, { "Content-Type": tipo, "Content-Range": `bytes ${ini}-${fim}/${dados.length}`, "Accept-Ranges": "bytes", "Content-Length": fim - ini + 1, "Cache-Control": "no-store" });
      return res.end(dados.subarray(ini, fim + 1));
    }
    res.writeHead(200, { "Content-Type": tipo, "Accept-Ranges": "bytes", "Cache-Control": "no-store" });
    res.end(dados);
  } catch {
    res.writeHead(404).end("Não encontrado");
  }
}).listen(porta, () => console.log(`Página de vendas em http://localhost:${porta}`));
