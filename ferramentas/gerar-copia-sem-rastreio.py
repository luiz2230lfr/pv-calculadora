"""Refaz a cópia da página A SEM rastreio (não conta visita no rastreador de vendas nem no Clarity).

Rodar depois de cada versão publicada da página A:
    python ferramentas/gerar-copia-sem-rastreio.py

Gera a pasta irmã "2 - Página de Vendas - Visualizar sem rastreio" (fora do repositório),
que abre com dois cliques no index.html. Não copia materiais-novos/ nem arquivos internos.
"""
import base64
import re
import shutil
from datetime import date
from pathlib import Path

ORIGEM = Path(__file__).resolve().parent.parent
DESTINO = ORIGEM.parent / "2 - Página de Vendas - Visualizar sem rastreio"
ARQUIVOS = ["index.html", "estilos.css", "script.js", "config.js", "politica-de-privacidade.html"]
PASTAS = ["imagens", "fontes"]


def trocar(texto, antes, depois, obrigatorio=True):
    if antes not in texto:
        if obrigatorio:
            raise SystemExit(f"Não encontrei na página: {antes[:60]!r}. Confira o script antes de usar a cópia.")
        return texto
    return texto.replace(antes, depois)


def main():
    DESTINO.mkdir(exist_ok=True)
    for nome in ARQUIVOS:
        shutil.copy2(ORIGEM / nome, DESTINO / nome)
    for pasta in PASTAS:
        shutil.copytree(ORIGEM / pasta, DESTINO / pasta, dirs_exist_ok=True)

    # index.html: liga o modo sem rastreio, tira o rastreador de vendas e o que depende da internet
    html = (DESTINO / "index.html").read_text(encoding="utf-8")
    html, n = re.subn(r"window\.SEM_RASTREIO = .*?;</script>", "window.SEM_RASTREIO = true;</script>", html, count=1)
    if n != 1:
        raise SystemExit("Não encontrei a linha do modo sem rastreio no index.html.")
    html, n = re.subn(r"\n  <!-- Rastreador de vendas.*?</script>\n", "\n", html, flags=re.S)
    if n != 1:
        raise SystemExit(f"Esperava 1 bloco do rastreador de vendas e achei {n}. Confira o index.html.")
    html = re.sub(r"  <link rel=\"preconnect\" href=\"https://[^\"]+\">\n", "", html)
    html = re.sub(r"  <link rel=\"preload\" href=\"fontes/[^\"]+\" as=\"font\"[^>]*>\n", "", html)
    html = html.replace("<head>", "<head>\n  <!-- CÓPIA SEM RASTREIO gerada por ferramentas/gerar-copia-sem-rastreio.py -->", 1)
    if "cashflow." in html or "atob(" in html or "utmify" in html.lower():
        raise SystemExit("Ainda sobrou código de rastreamento na cópia. Nada foi garantido.")
    (DESTINO / "index.html").write_text(html, encoding="utf-8", newline="")

    # config.js: Clarity desligado
    cfg = (DESTINO / "config.js").read_text(encoding="utf-8")
    cfg, n = re.subn(r'CLARITY_ID:\s*"[^"]*"', 'CLARITY_ID: ""   /* desligado na cópia sem rastreio */', cfg)
    if n != 1:
        raise SystemExit("Não encontrei o CLARITY_ID no config.js.")
    (DESTINO / "config.js").write_text(cfg, encoding="utf-8", newline="")

    # estilos.css: fontes embutidas (o navegador bloqueia fontes de arquivos abertos com dois cliques)
    css = (DESTINO / "estilos.css").read_text(encoding="utf-8")
    def embutir(m):
        dados = base64.b64encode((DESTINO / m.group(1)).read_bytes()).decode()
        return f"url(data:font/woff2;base64,{dados})"
    css = re.sub(r'url\("(fontes/[^"]+\.woff2)"\)', embutir, css)
    (DESTINO / "estilos.css").write_text(css, encoding="utf-8", newline="")

    (DESTINO / "LEIA-ME - como abrir.txt").write_text(
        "CÓPIA DA PÁGINA A SEM RASTREIO\n"
        "Para abrir: dê dois cliques em index.html.\n"
        "Esta cópia NÃO tem o rastreador de vendas nem o Microsoft Clarity, então não conta visita.\n"
        "Atenção: os botões de compra continuam levando ao checkout de verdade (Wiapy). Não preencha dados lá.\n"
        f"Gerada em {date.today():%d/%m/%Y} a partir da página publicada. Online: https://pv-calculadora.vercel.app/?semrastreio=1\n",
        encoding="utf-8",
    )
    print(f"Cópia sem rastreio atualizada em: {DESTINO}")


if __name__ == "__main__":
    main()
