'use client';

import { useState } from 'react';
import Link from 'next/link';

import styles from './Navbar.module.css';

const NAV_LINKS = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'contato', label: 'Contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.logo} onClick={() => setIsOpen(false)}>
          gabriel<span className={styles.logoDot}>.</span>
        </Link>

        <button
          type="button"
          className={styles.toggle}
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label="Abrir menu de navegação"
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
          {NAV_LINKS.map(({ id, label }) => (
            <Link
              key={id}
              href={`/#${id}`}
              className={styles.link}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
