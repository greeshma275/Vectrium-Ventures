import { useState } from 'react';
import styles from '../styles/ServicesCarousel.module.css';

const services = [
  {
    title: "Graphic Designing",
    content: "Graphic designing is at the heart of building a strong brand identity. Our graphic design services include everything from logo creation and branding materials to marketing collateral and digital graphics.",
    logo: "/services/graphic_design.jpg"
  },
  {
    title: "UI/UX Web Designing",
    content: "UI/UX design is crucial for creating intuitive and enjoyable user experiences. Our UI/UX web designing service focuses on designing user interfaces that are not only aesthetically pleasing but also easy to navigate.",
    logo: "/services/ui_ux.jpg"
  },
  {
    title: "Brand Building",
    content: "Brand building is essential for establishing a strong market presence. Our brand building services involve developing comprehensive strategies to enhance your brand's visibility and reputation.",
    logo: "/services/brand_building.jpg"
  },
  {
    title: "Social Media Handling",
    content: "In the digital age, effective social media handling is key to engaging with your audience and growing your online presence. Our social media handling service includes managing your social media profiles, and implementing strategies to boost engagement and drive traffic.",
    logo: "/services/social_media_handling.png"
  },
  {
    title: "Business Consultation",
    content: "Our business consultation services provide expert guidance to help you make informed decisions and drive growth. We offer strategic advice on various aspects of your business, including operations, marketing, and financial planning.",
    logo: "/services/business_consultation.jpg"
  },
  {
    title: "SEO and Content Writing",
    content: "SEO and content writing are critical for enhancing your website's visibility and attracting the right audience. We create optimized content that ranks well in search engines while engaging your readers.",
    logo: "/services/content_writing.jpg"
  },
  {
    title: "Digital Marketing",
    content: "Digital marketing encompasses a range of strategies to promote and grow your business online. Our digital marketing services include creating and managing campaigns across various digital channels, such as search engines, social media, and email.",
    logo: "/services/digital_marketing.jpg"
  }
];

export default function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev < services.length - 1 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev > 0 ? prev - 1 : prev));
  };

  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>Services Offered by Us</h2>
      
      <div className={styles.carouselWrapper}>
        <button 
          className={styles.arrowButton} 
          onClick={prevSlide}
          disabled={currentIndex === 0}
        >
          &lt;
        </button>
        
        <div className={styles.carouselContainer}>
          <div 
            className={styles.carouselTrack} 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {services.map((service, index) => (
              <div 
                key={index} 
                className={styles.serviceCard}
              >
                <img 
                  src={service.logo} 
                  alt={service.title}
                  className={styles.serviceLogo}
                />
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.serviceContent}>{service.content}</p>
              </div>
            ))}
          </div>
        </div>

        <button 
          className={styles.arrowButton} 
          onClick={nextSlide}
          disabled={currentIndex === services.length - 1}
        >
          &gt;
        </button>
      </div>
    </section>
  );
}