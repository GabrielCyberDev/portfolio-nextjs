import styles from './Footer.module.css';

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/GabrielCyberDev' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/gabriel-costa-178657267/' },
  { label: 'E-mail', href: 'https://mail.google.com/mail/?view=cm&fs=1&to=gabrielcostadelima98@gmail.com' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.text}>
          Desenvolvido por Gabriel · {new Date().getFullYear()}
        </p>

        <ul className={styles.links}>
          {SOCIAL_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}