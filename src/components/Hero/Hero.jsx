import Link from 'next/link';
import Image from 'next/image';

import styles from './Hero.module.css';
import photo from '../../../public/images/profile/photo-placeholder.png';
// Troque pela foto real, ex:
// import photo from '../../../public/images/profile/photo.jpg';

export default function Hero() {
  return (
    <section id="topo" className={`container ${styles.hero}`}>
      <div className={styles.content}>
        <span className="eyebrow">whoami</span>
        <h1 className={styles.title}>
          Gabriel — desenvolvedor <span className={styles.accent}>front-end</span>
        </h1>
        <p className={styles.description}>
          Construo interfaces React rápidas, acessíveis e bem organizadas.
          Abaixo estão os projetos que desenvolvi ao longo da formação, do
          código à implantação.
        </p>
        <div className={styles.actions}>
          <Link href="/#projetos" className={styles.primaryButton}>
            Ver projetos
          </Link>
          <Link href="/#contato" className={styles.secondaryButton}>
            Entrar em contato
          </Link>
        </div>
      </div>

      <div className={styles.photoWrapper}>
        {/* next/image otimiza automaticamente: gera tamanhos responsivos,
            serve em WebP quando suportado, e evita layout shift porque já
            sabe as dimensões da imagem em build time. */}
        <Image
          src={photo}
          alt="Foto de perfil de Gabriel"
          fill
          sizes="(max-width: 860px) 180px, 320px"
          className={styles.photo}
          priority
        />
      </div>
    </section>
  );
}
