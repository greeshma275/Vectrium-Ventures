// components/CandidatesSection.jsx
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import styles from '../styles/CandidatesSection.module.css';

const CandidatesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  return (
    <section 
      ref={ref}
      className={`${styles.section} ${inView ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Image */}
          <div className={styles.imageWrapper}>
            <Image
              src="/services/img.jpg"
              alt="Candidate & Employer Benefits"
              width={550}
              height={550}
              className={styles.image}
              style={{ marginTop: '2rem' }}
            />
          </div>

          {/* Right Content */}
          <div className={styles.content}>
            <h2 className={styles.title}>
              Perfect for Candidates.<br />
              Beautiful for Employers.
            </h2>
            
            <div className={styles.splitLayout}>
              {/* Left Column */}
              <div className={styles.column}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>📄</div>
                    <h3 className={styles.cardTitle}>Profile</h3>
                  </div>
                  <p className={styles.cardText}>
                    Detailed information about the candidate’s background.
                  </p>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>🎯</div>
                    <h3 className={styles.cardTitle}>Skills</h3>
                  </div>
                  <p className={styles.cardText}>
                    Showcasing the candidate’s key competencies and talents.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className={styles.column}>
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>📅</div>
                    <h3 className={styles.cardTitle}>Experience</h3>
                  </div>
                  <p className={styles.cardText}>
                    Years of experience in relevant fields.
                  </p>
                </div>

                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.cardIcon}>💼</div>
                    <h3 className={styles.cardTitle}>Portfolio</h3>
                  </div>
                  <p className={styles.cardText}>
                    Projects and work samples completed by the candidate.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidatesSection;