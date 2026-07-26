const blogNext = {
  slug: 'blog-nextjs',
  name: 'Blog Next.js',
  shortDescription:
    'Blog com renderização otimizada, SEO técnico e rotas dinâmicas de artigos.',
  description:
    'Blog desenvolvido com Next.js explorando App Router e rotas dinâmicas para páginas de artigo. O foco do projeto foi SEO técnico (meta tags e Open Graph), performance de carregamento e cobertura de testes automatizados.',
  technologies: ['Next.js', 'React', 'JavaScript', 'CSS Modules'],
  tools: [
    { label: 'SEO', items: ['Meta tags', 'Open Graph', 'Rotas dinâmicas'] },
    { label: 'Testes', items: ['Jest', 'Validação automatizada'] },
    { label: 'Performance', items: ['Lighthouse', 'Otimização de imagens'] },
  ],
  timeline: [
    { title: 'Estrutura e rotas', text: 'Configuração do App Router e das rotas dinâmicas de artigo.' },
    { title: 'SEO técnico', text: 'Implementação de meta tags e Open Graph por página.' },
    { title: 'Testes e performance', text: 'Cobertura com Jest e otimização guiada por relatórios do Lighthouse.' },
  ],
  future: [
    'Adicionar CMS headless para gestão de conteúdo.',
    'Implementar busca full-text nos artigos.',
  ],
  gallery: [
    { src: '/images/projects/blog-nextjs/home.webp', alt: 'Página inicial do blog' },
    { src: '/images/projects/blog-nextjs/article.webp', alt: 'Página de artigo' },
    { src: '/images/projects/blog-nextjs/lighthouse.webp', alt: 'Resultado do Lighthouse' },
  ],
  links: {
    repo: 'https://github.com/seu-usuario/blog-nextjs',
    demo: 'https://blog-nextjs.vercel.app',
  },
};

export default blogNext;
