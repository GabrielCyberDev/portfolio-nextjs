const travelExplorer = {
  slug: 'travel-explorer',
  name: 'Travel Explorer',
  shortDescription:
    'Catálogo de destinos de viagem com foco em performance e responsividade.',
  description:
    'Aplicação para explorar destinos de viagem, construída com Next.js. O projeto priorizou responsividade total, otimização de imagens com next/image e SEO para páginas de destino individuais.',
  technologies: ['Next.js', 'React', 'JavaScript', 'CSS Modules'],
  tools: [
    { label: 'Performance', items: ['Lighthouse', 'next/image'] },
    { label: 'SEO', items: ['Meta tags por destino'] },
  ],
  timeline: [
    { title: 'Listagem de destinos', text: 'Grid responsivo com cards de destino.' },
    { title: 'Página de destino', text: 'Rota dinâmica com detalhes e galeria por destino.' },
    { title: 'Otimização', text: 'Ajustes de performance guiados por relatórios do Lighthouse.' },
  ],
  future: [
    'Adicionar filtro por região e orçamento.',
    'Integrar API real de preços de passagens.',
  ],
  gallery: [
    { src: '/images/projects/travel-explorer/home.webp', alt: 'Página inicial do Travel Explorer' },
    { src: '/images/projects/travel-explorer/destination.webp', alt: 'Página de destino' },
    { src: '/images/projects/travel-explorer/lighthouse.webp', alt: 'Resultado do Lighthouse' },
  ],
  links: {
    repo: 'https://github.com/seu-usuario/travel-explorer',
    demo: 'https://travel-explorer.vercel.app',
  },
};

export default travelExplorer;
