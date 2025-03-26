// components/CareersSection.jsx
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from '../styles/CareersSection.module.css';
'use client';
const CareersSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section 
      id="careers" 
      ref={ref} 
      className={`${styles.careersSection} ${inView ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        {/* Most Demanded Categories */}
        <div className={styles.categories}>
          <h2 className={styles.subtitle}>Most Demanded Job Categories</h2>
          <div className={styles.categoryList}>
            <div className={styles.category}>
              <div className={styles.logoHeading}>
                <Image 
                  src="/services/business_consultation.jpg"
                  width={48}
                  height={48}
                  alt="Design"
                  className={styles.categoryLogo}
                />
                <h3>Design</h3>
              </div>
              <p>UI/UX, Product Design, Graphic Design</p>
            </div>

            <div className={styles.category}>
              <div className={styles.logoHeading}>
                <Image 
                  src="/services/graphic_design.jpg"
                  width={48}
                  height={48}
                  alt="Technology"
                  className={styles.categoryLogo}
                />
                <h3>Technology</h3>
              </div>
              <p>Software Development, DevOps, Cloud Solutions</p>
            </div>

            <div className={styles.category}>
              <div className={styles.logoHeading}>
                <Image 
                  src="/services/digital_marketing.jpg"
                  width={48}
                  height={48}
                  alt="Marketing"
                  className={styles.categoryLogo}
                />
                <h3>Marketing</h3>
              </div>
              <p>Digital Marketing, SEO, Content Strategy</p>
            </div>

            <div className={styles.category}>
              <div className={styles.logoHeading}>
                <Image 
                  src="/services/brand_building.jpg"
                  width={48}
                  height={48}
                  alt="Finance"
                  className={styles.categoryLogo}
                />
                <h3>Finance</h3>
              </div>
              <p>Financial Planning, Investment Analysis</p>
            </div>
            </div>
            </div>
      </div>
    </section>
  );
};

export default CareersSection;