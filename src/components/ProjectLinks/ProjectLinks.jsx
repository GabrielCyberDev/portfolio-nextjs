import styles from './ProjectLinks.module.css';

export default function ProjectLinks({ links }) {
  return (
    <section className={styles.section}>
      <a href={links.demo} target="_blank" rel="noreferrer" className={styles.primary}>
        Ver demonstração
      </a>
      <a href={links.repo} target="_blank" rel="noreferrer" className={styles.secondary}>
        Ver repositório
      </a>
    </section>
  );
}
