const microFrontends = {
  slug: 'micro-frontends',
  name: 'Micro Frontends',
  shortDescription:
    'Arquitetura de micro frontends com Module Federation e deploys independentes.',
  description:
    'Aplicação dividida em três times independentes usando Webpack Module Federation: um container principal, um micro frontend de menu e um micro frontend de pedidos, cada um com deploy próprio na Vercel.',
  technologies: ['React', 'Webpack', 'Module Federation', 'JavaScript', 'CSS'],
  tools: [
    { label: 'Arquitetura', items: ['Container App', 'Menu MFE', 'Order MFE'] },
    { label: 'Deploy', items: ['3 deploys independentes na Vercel'] },
  ],
  timeline: [
    { title: 'Container', text: 'Aplicação host responsável por orquestrar os micro frontends.' },
    { title: 'Menu MFE', text: 'Micro frontend responsável pelo catálogo de itens.' },
    { title: 'Order MFE', text: 'Micro frontend responsável pelo fluxo de pedidos.' },
  ],
  future: [
    'Adicionar comunicação via eventos entre os micro frontends.',
    'Criar pipeline de CI separado por time.',
  ],
  gallery: [
    { src: '/images/projects/micro-frontends/container.webp', alt: 'Aplicação container' },
    { src: '/images/projects/micro-frontends/menu.webp', alt: 'Micro frontend de menu' },
    { src: '/images/projects/micro-frontends/order.webp', alt: 'Micro frontend de pedidos' },
  ],
  links: {
    repo: 'https://github.com/seu-usuario/micro-frontends',
    demo: 'https://micro-frontends-container.vercel.app',
  },
};

export default microFrontends;
