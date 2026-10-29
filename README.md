# Portfólio Acadêmico – DSM FATEC SJC

SPA em React + TypeScript + Vite, publicada no GitHub Pages:
https://fatec-sjc-dsm-portfolio.github.io/ra1461392411015/

## Editar o conteúdo
Todo o conteúdo fica em `src/data/portfolio.ts` (o formato dos dados está em `src/data/tipos.ts`). A foto vai em `public/foto.jpg`
e as capturas de tela dos projetos também ficam em `public/`.

## Rodar localmente
```bash
npm install
npm run dev
```

## Publicação
Todo push na branch `main` dispara o workflow `.github/workflows/deploy.yml`, que gera o build e publica no GitHub Pages
(em Settings → Pages → Source, selecione **GitHub Actions**).
