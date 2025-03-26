import React from "react";
import Image from "next/image";
import PropTypes from 'prop-types';
import styles from "../styles/Navbar.module.css";

const Navbar = ({setActiveSection }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <Image src="/logo.png" alt="Vectrium Ventures" width={150} height={50} />
        <span className={styles.brandName}>Vectrium Ventures</span>
      </div>
      <ul className={styles.navLinks}>
      <button 
  className={styles.navButton} 
  onClick={() => setActiveSection('home')}
>
  Home
</button>

<button 
  className={styles.navButton} 
  onClick={() => setActiveSection('services')}
>
  Services
</button>
<button 
  className={styles.navButton} 
  onClick={() => setActiveSection('aboutus')}
> About Us</button>
<button 
  className={styles.navButton}
  onClick={() => setActiveSection('career')}
>
  Careers
</button>
<button 
  className={styles.navButton}
  onClick={() => setActiveSection('contactus')}
>
  Contact Us
</button>

        <li><button className={styles.callButton}onClick={() => window.location.href = 'https://api.whatsapp.com/send?phone=918815631154'}>Call Now</button></li>
      </ul>
      
    </nav>
  );
};
Navbar.propTypes = {
  setActiveSection: PropTypes.func.isRequired
};

export default Navbar;
