import Link from 'next/link';

import styles from './ProjectHeader.module.css';

export default function ProjectHeader({ project }) {
  const { name, description, technologies } = project;

  return (
    <header className={styles.header}>
      <Link href="/#projetos" className={styles.back}>
        ← Voltar para projetos
      </Link>

      <h1 className={styles.title}>{name}</h1>
      <p className={styles.description}>{description}</p>

      <ul className={styles.techList}>
        {technologies.map((tech) => (
          <li key={tech} className={styles.techTag}>
            {tech}
          </li>
        ))}
      </ul>
    </header>
  );
}
