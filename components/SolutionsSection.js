'use client';
import { useEffect } from 'react';
import styles from '../styles/SolutionsSection.module.css';
'use client';
export default function SolutionsSection() {
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

    const section = document.querySelector(`.${styles.solutionsSection}`);
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.solutionsSection}`}>
      <div className={styles.contentWrapper}>
        <div className={styles.imageContainer}>
          <img 
            src="solutions.png" 
            alt="Our Solutions" 
            className={styles.solutionsImage}
          />
        </div>
        
        <div className={styles.textContent}>
          <h2 className={styles.sectionTitle}>Our Solutions</h2>
          <p className={styles.description}>
            Vectrium Ventures is a leading IT solution service provider based in indoor. Our company specializes in a range of services including website development, graphic designing, UI/UX web designing, brand building, social media handling, business consultation, SEO and content writing, and digital marketing.
          </p>
        </div>
      </div>
    </section>
  );
}