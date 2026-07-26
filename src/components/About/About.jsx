import SectionTitle from '../SectionTitle/SectionTitle';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="sobre" className="section section-border">
      <div className="container">
        <SectionTitle
          eyebrow="sobre"
          title="Sobre mim"
          subtitle="Um pouco da minha trajetória até aqui."
        />

        <div className={styles.grid}>
          <p className={styles.paragraph}>
            Sou desenvolvedor front-end em formação, com foco em React e em
            construir interfaces que priorizam performance, acessibilidade e
            código de fácil manutenção. Durante o curso, desenvolvi projetos
            que exploram desde SEO técnico até arquiteturas distribuídas com
            micro frontends — os detalhes de cada um estão na seção de
            projetos abaixo.
          </p>

          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactLabel}>E-mail</span>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gabrielcostadelima98@gmail.com" target="_blank" rel="noreferrer">
                gabrielcostadelima98@gmail.com
              </a>
            </li>
            <li>
              <span className={styles.contactLabel}>GitHub</span>
              <a href="https://github.com/GabrielCyberDev" target="_blank" rel="noreferrer">
                github.com/GabrielCyberDev
              </a>
            </li>
            <li>
              <span className={styles.contactLabel}>LinkedIn</span>
              <a href="https://www.linkedin.com/in/gabriel-costa-178657267/" target="_blank" rel="noreferrer">
                linkedin.com/in/gabriel-costa-178657267
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}