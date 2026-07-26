# Portfólio — versão Next.js

Esta é a migração do portfólio original (Vite + React Router) para
**Next.js (App Router)**, feita pra atender casos de freelance onde SEO,
conversão e uso de APIs são relevantes para o cliente.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

## O que mudou em relação à versão Vite

- Roteamento por arquivos (`src/app/`) em vez de `react-router-dom`.
- Páginas de projeto (`/projetos/[slug]`) são pré-renderizadas em build
  time (SSG) via `generateStaticParams`.
- Cada página de projeto tem seu próprio `<title>`/`<meta description>` via
  `generateMetadata` — SEO individual por projeto.
- Fontes carregadas via `next/font` (auto-hospedadas, sem requisição
  externa ao Google Fonts).
- Imagens usando `next/image` (otimização automática).
- Formulário de contato envia para uma **API Route real**
  (`src/app/api/contact/route.js`) em vez de um `mailto:`.

Os dados dos projetos (`src/data/`) e os tokens de design
(`src/styles/variables.css`) são idênticos aos da versão Vite —
nada disso depende do framework.

## Pendências antes de publicar

- [ ] Substituir `public/images/profile/photo-placeholder.svg` pela foto real.
- [ ] Adicionar as capturas de tela em `public/images/projects/<slug>/`.
- [ ] Atualizar e-mail, GitHub e LinkedIn (`Navbar`, `About`, `ContactForm`, `Footer`).
- [ ] Atualizar `metadataBase` em `src/app/layout.js` com o domínio real.
- [ ] Conectar a API Route de contato a um provedor de e-mail real (Resend, SendGrid...).
