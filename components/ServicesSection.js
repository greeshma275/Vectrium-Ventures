// Components/ServicesSection.js
import React from 'react';
import styles from '/styles/ServicesSection.module.css'; // Create this CSS module

const ServicesSection = () => {
  const services = [
    {
      title: "Website Development",
      description: "Creative and visually stunning design solutions to make your brand stand out.",
      logo: "/services/website_development.jpg"
    },
    {
      title: "Graphic Designing",
      description: "Cutting edge technology solutions to drive your business forward.",
      logo: "/services/graphic_design.jpg"
    },
    {
        title: "UI/UX Web Designing",
      description: "Strategic marketing services to enhance your brand's reach and impact.",
      logo: "/services/ui_ux.jpg"
    },
    {
        title: "Brand Building",
      description: "Creative and visually stunning design solutions to make your brand stand out.",
      logo: "/services/brand_building.jpg"
    },
    {
        title: "Social Media Handling",
      description: "Creative and visually stunning design solutions to make your brand stand out.",
      logo: "/services/social_media_handling.png"
    },
    {
        title: "Business Consultation",
      description: "Cutting edge technology solutions to drive your business forward.",
      logo: "/services/business_consultation.jpg"
    },
    {
        title: "SEO and Content Writing",
      description: "Creative and visually stunning design solutions to make your brand stand out.",
      logo: "/services/content_writing.jpg"
    },
    { title: "Digital Marketing",
        description: "Strategic marketing services to enhance your brand's reach and impact.",
        logo: "/services/digital_marketing.jpg"
      },
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.sectionHeader}>
        <h2>See Our All Services</h2>
        <p>Discover the range of services we offer to elevate your business.</p>
        <p>Our expert team delivers top-notch solutions to meet your unique needs.</p>
      </div>

      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <img 
    src={service.logo} 
    alt={service.title} 
    className={styles.serviceImage}
  />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default ServicesSection;