import { useInView } from 'react-intersection-observer';
import styles from '../styles/AboutSection.module.css';
import Image from 'next/image'; 
'use client';
const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section 
      ref={ref}
      className={`${styles.aboutSection} ${inView ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.twoColumnLayout}>
          {/* Left Column */}
          <div className={styles.leftColumn}>
            <h2 className={styles.heading}>
            Vectrium Ventures is a premier IT solutions provider based in Indore, offering expertise in website development, UI/UX design, and digital marketing.
            </h2>
            
            <div className={styles.logoSection}>
              <Image 
                src="/services/blue1-min.webp" 
                alt="Company Logo"
                width={60}
                height={60}
                className={styles.logo}
              />
              <div className={styles.logoContent}>
                <p className={styles.leadText}>
                  We help businesses enhance their online presence with innovative strategies 
                  and tailored solutions, delivering high-quality results.
                </p>
                <a href="https://api.whatsapp.com/send?phone=918815631154" className={styles.helpLink}>
                  How We Can Help →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className={styles.rightColumn}>
            <div className={styles.pointsContainer}>
              {[1, 2, 3].map((index) => (
                <div 
                  key={index}
                  className={`${styles.point} ${inView ? styles.animate : ''}`}
                >
                  <h3 className={styles.head}>0{index}. {index === 1 ? 'Client-Centric Innovation' : 
                             index === 2 ? 'Strategic Expertise' : 
                             'Collaborative Growth'}</h3>
                  <p>
                    {index === 1 ? `We focus on delivering personalized solutions...` :
                     index === 2 ? `Backed by six years of research...` :
                     `We work closely with our clients...`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;