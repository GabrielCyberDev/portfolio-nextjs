# Gabriel Costa — Portfólio

Portfólio profissional desenvolvido com **React** e **Next.js**, reunindo projetos, habilidades técnicas e formas de contato em uma aplicação moderna e responsiva. O projeto foi construído como uma **landing page** com navegação por seções, complementada por páginas individuais de detalhamento para cada projeto do portfólio.

🔗 **Acesse online:** [https://portfolio-nextjs-ruby-theta.vercel.app](https://portfolio-nextjs-ruby-theta.vercel.app)

---

## 📖 Descrição

Este projeto foi desenvolvido como prática de conclusão da formação em Front-end, reunindo os principais projetos desenvolvidos ao longo do curso em um único ambiente.

Além de apresentar experiências e competências técnicas, o portfólio demonstra a aplicação de boas práticas de desenvolvimento, componentização, organização de código, responsividade, SEO e integração com API para envio de mensagens pelo formulário de contato.

O objetivo é servir tanto como entrega acadêmica quanto como um portfólio profissional para processos seletivos e oportunidades de trabalho.

---

## 🚀 Tecnologias Utilizadas

| Categoria       | Tecnologias          |
| --------------- | -------------------- |
| Interface       | React 19             |
| Framework       | Next.js (App Router) |
| Estilização     | CSS Modules          |
| API             | API Routes (Next.js) |
| Envio de E-mail | Resend API           |
| Deploy          | Vercel               |
| Versionamento   | Git & GitHub         |

---

## 📁 Estrutura do Projeto

```text
src/
├── app/
│   ├── page.js                     # Página inicial (Landing Page)
│   ├── projetos/[slug]/            # Página individual de cada projeto
│   ├── api/contact/                # API Route do formulário
│   └── layout.js                   # Layout global e Metadata
│
├── components/                     # Componentes reutilizáveis
│
├── data/
│   ├── projects/                   # Dados dos projetos
│   └── skills.js                   # Lista de habilidades
│
└── styles/                         # Variáveis e estilos globais

public/
└── images/
    ├── profile/
    └── projects/
```

Todos os projetos são cadastrados em **`src/data/projects`**.

Para adicionar um novo projeto basta:

1. Criar um novo arquivo seguindo o padrão dos existentes.
2. Importá-lo em `src/data/projects/index.js`.

Os cards da página inicial e a página de detalhes serão gerados automaticamente a partir dessas informações.

---

## ✨ Funcionalidades

* Landing Page com navegação por âncoras
* Seções de Sobre, Projetos, Habilidades e Contato
* Página individual para cada projeto
* Componentes reutilizáveis
* Layout totalmente responsivo
* Formulário de contato funcional
* Envio real de e-mails utilizando Resend
* SEO individual para cada projeto
* Geração estática das páginas (SSG)
* Deploy automático na Vercel
* Estrutura preparada para expansão com novos projetos

---

## ▶️ Como Executar o Projeto

Clone o repositório:

```bash
git clone https://github.com/GabrielCyberDev/portfolio-nextjs.git
```

Entre na pasta:

```bash
cd portfolio-nextjs
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

Abra o navegador em:

```text
http://localhost:3000
```

---

## 📜 Scripts Disponíveis

| Comando         | Descrição                             |
| --------------- | ------------------------------------- |
| `npm run dev`   | Executa o ambiente de desenvolvimento |
| `npm run build` | Gera o build de produção              |
| `npm start`     | Executa o build localmente            |
| `npm run lint`  | Executa a análise do ESLint           |

---

## ☁️ Deploy

A aplicação foi publicada utilizando a **Vercel**, permitindo deploy contínuo a cada atualização enviada para a branch principal do projeto.

### Passos para publicar

1. Faça o push do repositório para o GitHub.
2. Acesse a Vercel.
3. Clique em **New Project**.
4. Importe o repositório.
5. Configure a variável de ambiente:

```text
RESEND_API_KEY
```

6. Realize o deploy.

---

## 🔍 SEO e Arquitetura

O projeto foi desenvolvido utilizando recursos modernos do Next.js para melhorar desempenho, indexação e experiência do usuário.

### SEO

* Metadata dinâmica para cada projeto
* `<title>` individual
* `<meta description>` específica
* Melhor indexação pelos mecanismos de busca

### Geração Estática (SSG)

As páginas dos projetos são geradas durante o processo de build utilizando:

* `generateStaticParams()`

Isso melhora significativamente o tempo de carregamento e a performance da aplicação.

### API

O formulário de contato utiliza uma **API Route** própria do Next.js (`/api/contact`) para realizar o envio de mensagens através da plataforma **Resend**, eliminando a necessidade de utilizar links `mailto:`.

---

## 💼 Projetos em Destaque

### 📰 Blog Next.js

* Next.js App Router
* Rotas Dinâmicas
* SEO Técnico
* Testes Automatizados com Jest
* Otimizações utilizando Lighthouse
* Deploy na Vercel

---

### 🌍 Travel Explorer

* Catálogo de destinos turísticos
* Responsividade
* Otimização com `next/image`
* SEO
* Melhorias de Performance
* Deploy na Vercel

---

### 🍔 Food Micro Frontends

Arquitetura distribuída utilizando **Webpack Module Federation**.

Aplicações independentes:

* Container
* Menu
* Order

Cada aplicação possui seu próprio deploy na Vercel e comunicação desacoplada através de **CustomEvent**, demonstrando uma arquitetura escalável baseada em Micro Frontends.

---

## 👨‍💻 Autor

**Gabriel Costa**

* GitHub: https://github.com/GabrielCyberDev
* LinkedIn: https://www.linkedin.com/in/gabriel-costa-178657267/
* E-mail: [gabrielcostadelima98@gmail.com](mailto:gabrielcostadelima98@gmail.com)

---

## 📄 Licença

Este projeto está licenciado sob a **Licença MIT**.

O código pode ser utilizado como referência para estudos e aprendizado, porém recomenda-se evitar sua utilização integral como entrega de atividades acadêmicas ou profissionais sem adaptações.
