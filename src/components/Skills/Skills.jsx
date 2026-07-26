import skills from '../../data/skills';
import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './Skills.module.css';

export default function Skills() {
  return (
    <section id="habilidades" className="section section-border">
      <div className="container">
        <SectionTitle
          eyebrow="habilidades"
          title="Habilidades"
          subtitle="Tecnologias e práticas que utilizo no dia a dia."
        />

        <div className={styles.grid}>
          {skills.map(({ category, items }) => (
            <div key={category} className={styles.group}>
              <h3 className={styles.groupTitle}>{category}</h3>
              <ul className={styles.tagList}>
                {items.map((item) => (
                  <li key={item} className={styles.tag}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
