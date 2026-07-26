import styles from './SectionTitle.module.css';

export default function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className={styles.wrapper}>
      {eyebrow && <span className="eyebrow">~/{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
