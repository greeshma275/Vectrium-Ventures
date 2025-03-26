import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import Image from 'next/image';
import styles from '../styles/MissionSection.module.css';
'use client';
const MissionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const stats = [
    { value: 94, suffix: '%', label: 'Satisfaction Rate' },
    { value: 70, suffix: 'M+', label: 'Users Served' },
    { value: 10000, suffix: '+', label: 'Projects Completed' }
  ];

  return (
    <section 
      ref={ref}
      className={`${styles.missionSection} ${inView ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <div className={styles.content}>
            <h2 className={styles.title}>Our Mission</h2>
            <p className={styles.description}>
              We are committed to delivering innovative IT solutions that empower businesses to 
              achieve their goals and drive digital transformation. Our mission is to provide 
              exceptional service and expertise to help our clients thrive in a rapidly evolving 
              digital landscape.
            </p>
            
            <div className={styles.statsContainer}>
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`${styles.statItem} ${inView ? styles.animate : ''}`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className={styles.statNumber}>
                    {inView && (
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2}
                        suffix={stat.suffix}
                      />
                    )}
                  </div>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className={styles.imageWrapper}>
            <Image
              src="/services/Our_mission-min.png" // Replace with your image path
              alt="Our Mission"
              width={600}
              height={600}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;