import Link from 'next/link';

import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
  const { slug, name, shortDescription, technologies } = project;

  return (
    <article className={styles.card}>
      <div>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{shortDescription}</p>

        <ul className={styles.techList}>
          {technologies.map((tech) => (
            <li key={tech} className={styles.techTag}>
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <Link href={`/projetos/${slug}`} className={styles.link}>
        Ver detalhes →
      </Link>
    </article>
  );
}
