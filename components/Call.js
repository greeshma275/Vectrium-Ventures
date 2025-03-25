// components/CallToAction.js
import React from 'react';
import styles from '../styles/Call.module.css';

const CallToAction = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.gradientBackground}></div>
      <div className={styles.ctaContent}>
        <h2 className={styles.ctaTitle}>Act Now, Using Our Opportunities</h2>
        <button 
  className={styles.ctaButton}
  onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=918815631154'}
>
  Call Now
  <span className={styles.arrow}>→</span>
</button>
      </div>
    </section>
  );
};

export default CallToAction;