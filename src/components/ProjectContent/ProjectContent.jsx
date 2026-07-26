import styles from './ProjectContent.module.css';

/**
 * Componente genérico para qualquer seção de texto da página de detalhes
 * (ferramentas usadas, linha do tempo, próximos passos...).
 * Evita criar um componente novo para cada tipo de seção — ver variant.
 *
 * variant="list"    → items: string[]
 * variant="timeline" → entries: { title, text }[]
 */
export default function ProjectContent({ title, variant = 'list', items, entries }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      {variant === 'list' && (
        <ul className={styles.list}>
          {items.map((item) => (
            <li key={item} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      )}

      {variant === 'timeline' && (
        <ol className={styles.timeline}>
          {entries.map(({ title: entryTitle, text }) => (
            <li key={entryTitle} className={styles.timelineItem}>
              <h3 className={styles.timelineTitle}>{entryTitle}</h3>
              <p className={styles.timelineText}>{text}</p>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
