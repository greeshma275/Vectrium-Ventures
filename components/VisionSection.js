'use client';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from '../styles/VisionSection.module.css';

const VisionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section 
      ref={ref}
      className={`${styles.visionSection} ${inView ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Right Content */}
          <div className={styles.content}>
            <h2 className={styles.title}>Our Vision</h2>
            <p className={styles.description}>
              Our vision is to become a leading innovator in the IT industry, providing 
              cutting-edge solutions that drive growth and success for businesses worldwide. 
              We aim to be recognized for our commitment to excellence, customer satisfaction, 
              and our ability to adapt to the evolving technological landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;