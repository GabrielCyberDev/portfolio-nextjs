import Image from 'next/image';

import styles from './ProjectGallery.module.css';

export default function ProjectGallery({ images }) {
  if (!images?.length) return null;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Capturas de tela</h2>
      <div className={styles.grid}>
        {images.map(({ src, alt }) => (
          <div key={src} className={styles.imageWrapper}>
            <Image src={src} alt={alt} fill sizes="(max-width: 720px) 100vw, 33vw" className={styles.image} />
          </div>
        ))}
      </div>
    </section>
  );
}
