import projects from '../../data/projects';
import SectionTitle from '../SectionTitle/SectionTitle';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './ProjectsPreview.module.css';

export default function ProjectsPreview() {
  return (
    <section id="projetos" className="section section-border">
      <div className="container">
        <SectionTitle
          eyebrow="projetos"
          title="Projetos"
          subtitle="Uma seleção do que desenvolvi durante a formação."
        />

        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
