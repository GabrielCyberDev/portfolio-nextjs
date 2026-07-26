import styles from './ProjectLinks.module.css';

export default function ProjectLinks({ links }) {
  return (
    <section className={styles.section}>
      <div className={styles.mainLinks}>
        <a href={links.demo} target="_blank" rel="noreferrer" className={styles.primary}>
          Ver demonstração
        </a>
        <a href={links.repo} target="_blank" rel="noreferrer" className={styles.secondary}>
          Ver repositório
        </a>
      </div>

      {/* Links extras — usado no projeto Micro Frontends para provar que
          cada parte (Menu, Order) tem deploy próprio e funciona sozinha. */}
      {links.extraLinks?.length > 0 && (
        <p className={styles.extraLinks}>
          Deploys independentes:{' '}
          {links.extraLinks.map(({ label, href }, index) => (
            <span key={href}>
              <a href={href} target="_blank" rel="noreferrer">
                {label}
              </a>
              {index < links.extraLinks.length - 1 && ' · '}
            </span>
          ))}
        </p>
      )}
    </section>
  );
}