import { notFound } from 'next/navigation';

import projects from '@/data/projects';
import ProjectHeader from '@/components/ProjectHeader/ProjectHeader';
import ProjectContent from '@/components/ProjectContent/ProjectContent';
import ProjectGallery from '@/components/ProjectGallery/ProjectGallery';
import ProjectLinks from '@/components/ProjectLinks/ProjectLinks';

// Gera as páginas de cada projeto em build time (SSG) — HTML já pronto,
// sem esperar nenhuma requisição no cliente. É o principal motivo de SEO
// pra migrar do Vite pro Next neste projeto.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

// Metadata por página — cada projeto ganha seu próprio <title> e
// <meta description>, importante pra indexação individual no Google.
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.shortDescription,
    openGraph: {
      title: project.name,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectDetails({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const { tools, timeline, future, gallery, links } = project;

  return (
    <article className="container">
      <ProjectHeader project={project} />

      {tools.map(({ label, items }) => (
        <ProjectContent key={label} title={label} variant="list" items={items} />
      ))}

      <ProjectContent title="Linha do tempo" variant="timeline" entries={timeline} />

      <ProjectContent title="Próximos passos" variant="list" items={future} />

      <ProjectGallery images={gallery} />

      <ProjectLinks links={links} />
    </article>
  );
}