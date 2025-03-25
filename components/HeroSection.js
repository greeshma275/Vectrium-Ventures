import styles from '/styles/HeroSection.module.css'; 
const HeroSection = ({ activeSection }) => {
  return (
    <section className={styles.heroSection}>
      {activeSection === 'services' ? (
        // Updated Services Content
        <div className={styles.content}>
          <h1 className={styles.title}>Our Services</h1>
          <h2 className={styles.subtitle}>
            We provide best<br />
            business solutions
          </h2>
          <p className={styles.description}>
            We provide a range of services designed to help your business grow. From innovative design solutions
            to cutting-edge technology and strategic marketing, our team is dedicated to delivering high-quality
            results tailored to your needs.
          </p>
          <a 
            href="https://api.whatsapp.com/send?phone=918815631154" 
            className={styles.ctaButton}
            target="_blank" 
            rel="noopener noreferrer"
          >
            Call Now
          </a>
        </div>
      ) : activeSection === 'aboutus' ? (
        // About Us Content
        <div className={styles.aboutUsContent}>
          <h2>We're changing the<br />whole game.</h2>
          <a href="https://api.whatsapp.com/send?phone=918815631154"className={styles.callButton}>Call Now</a>
        </div>
      ) : activeSection === 'career' ? (
      
        <div className={styles.content}>
          <h1 className={styles.title}>
            One Step<br />
            Closer To Your New Job
          </h1>
          <p className={styles.description}>
            Explore exciting career opportunities at Vectrium Ventures. We are always looking for 
            talented individuals to join our team and help us grow. If you're passionate about 
            technology, creativity, and innovation, we'd love to hear from you.
          </p>
          
          <div className={styles.careerCategories}>
            <h3 className={styles.subtitle}>Popular Categories</h3>
            <ul className={styles.categoryList}>
              <li>UX Designer</li>
              <li>Frontend Dev</li>
              <li>Backend Dev</li>
            </ul>
          </div>
          
          <a 
            href="#apply" 
            className={styles.ctaButton}
          >
            Apply Now
          </a>
        </div>
      ) : (
        // Original Home Content
        <div className={styles.content}>
          <h1 className={styles.title}>
            Empowering Your <br />
            <span>Digital Journey</span>
            <br />
            with Innovative <br />
            IT Solutions
          </h1>
          <p className={styles.description}>
            Vectrium Ventures delivers tailored IT solutions that elevate your brand and streamline your digital operations.
            Our expert team specializes in driving innovation across design, development, and marketing.
          </p>
          <div className={styles.cta}>
            <a href="https://api.whatsapp.com/send?phone=918815631154" className={styles.ctaButton}>Call Now →</a>
          </div>
        </div>
      )}
      
    </section>
  );
};

export default HeroSection; 