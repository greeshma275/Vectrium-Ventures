// components/BrandsSection.js
import styles from '../styles/BrandsSection.module.css';

const BrandsSection = () => {
  const brands = [
    { name: "ALIRON", logo: "/brands/aliron.png" },
    { name: "FedEx", logo: "/brands/fedex.png" },
    { name: "Donnely", logo: "/brands/donnelly.png" },
    { name: "Kantar", logo: "/brands/kantar.jpg" }
  ];

  return (
    <section className={styles.brandsSection}>
      <div className={styles.brandsContainer}>
        {brands.map((brand, index) => (
          <div key={index} className={styles.brandCard}>
            <img 
              src={brand.logo} 
              alt={brand.name} 
              className={styles.brandLogo}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrandsSection;