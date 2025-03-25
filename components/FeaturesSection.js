import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Features.module.css';

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const features = [
    {
      title: "Brand Building",
      content: "AIR DETAIL - Our solution for creating memorable brand identities through strategic positioning and visual storytelling.",
      logo: "/services/brand_building.jpg" 
    },
    {
      title: "Social Media Handling",
      content: "Anti-core using our supermarkets. We manage your social presence with data-driven strategies and engaging content.",
      logo: "/services/social_media_handling.png" 
    },
    {
      title: "Business Consultation",
      content: "Spencer digital experience creation. Expert guidance for business growth and digital transformation.",
      logo: "/services/business_consultation.jpg"
    }
  ];

  return (
    <section className={styles.featuresSection}>
      <div className={styles.contentColumn}>
        <h2 className={styles.sectionTitle}>Our Features</h2>
        
        <div className={styles.accordion}>
          {features.map((feature, index) => (
            <div className={styles.accordionItem} key={index}>
              <button 
                className={`${styles.accordionButton} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <div className={styles.logoTitleWrapper}>
                  <div className={styles.featureLogo}>
                    <Image 
                      src={feature.logo}
                      alt={`${feature.title} icon`}
                      width={32}
                      height={32}
                    />
                  </div>
                  {feature.title}
                </div>
                <span className={styles.chevron}></span>
              </button>
              <div 
                className={styles.accordionContent}
                style={{ 
                  maxHeight: activeIndex === index ? "200px" : "0",
                  padding: activeIndex === index ? "1rem" : "0 1rem"
                }}
              >
                <p>{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.imageColumn}>
        <img 
          src="/solutions-min.png" 
          alt="Digital Solutions" 
          className={styles.featureImage}
        />
      </div>
    </section>
  );
};

export default FeaturesSection;