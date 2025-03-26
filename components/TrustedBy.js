'use client';
import { useEffect } from 'react';
import styles from '../styles/TrustedBy.module.css';

export default function TrustedBy() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector(`.${styles.trustedSection}`);
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.trustedSection}`}>
      <h2 className={styles.sectionTitle}>Trusted by Leading Brands</h2>
      
      <div className={styles.brandsContainer}>
        <div className={styles.brandsRow}>
          {['kindle-fire', 'donnelly', 'imation', 'glycon', 'kantar', 'lesechos'].map((brand) => (
            <div key={brand} className={styles.brandItem}>
              <img 
                src={`/brands/${brand}.${
                  brand === 'imation' ? 'webp' : 
                  brand === 'kantar' ? 'jpg' : 'png'
                }`} 
                alt={brand} 
                className={styles.brandImage} 
              />
            </div>
          ))}
        </div>

        <div className={styles.brandsRow}>
          <div className={styles.brandItem}>
            <img src="/brands/franchise.webp" alt="FRANCHISE" className={styles.brandImage} />
          </div>
          {['aliron', 'aspiringminds', 'fedex', 'grow', 'thrive'].map((brand) => (
            <div key={brand} className={styles.brandItem}>
              <img 
                src={`/brands/${brand}.${brand === 'grow' ? 'jpg' : 'png'}`} 
                alt={brand} 
                className={styles.brandImage} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}