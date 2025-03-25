import { useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/CallToAction.module.css';

export default function CallToAction() {
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

    const section = document.querySelector(`.${styles.ctaSection}`);
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.ctaSection}`}>
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>We are here to help you grow your online business</h2>
        <a href="https://api.whatsapp.com/send?phone=918815631154" className={styles.ctaButton}>
  Call Now →
</a>
      </div>
    </section>
  );
}