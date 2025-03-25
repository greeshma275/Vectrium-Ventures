import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/Contact.module.css';
import Layout from '../components/Layout';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("We'll contact you soon!");
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage}></div>
      
      <div className={styles.formContainer}>
        <div className={styles.formHeader}>
          <div className={styles.logoContainer}>
            <Image 
              src="/logo.png" 
              alt="Vectrium Ventures" 
              width={70}  // Reduced from 150
              height={40}  // Reduced from 50
              priority
            />
          </div>
          <h1 className={styles.formTitle}>Vectrium Ventures</h1>
        </div>

        <h2 className={styles.formHeading}>Let’s Get In Touch</h2>
        <p className={styles.formSubheading}>
          Or just reach out manually to <span>contact@vectriumventures.in</span>
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.nameGroup}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={styles.input}
                placeholder="Enter your first name..."
                required
              />
            </div>
            
            <div className={styles.inputGroup}>
              <label className={styles.label}>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={styles.input}
                placeholder="Enter your last name..."
                required
              />
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter your email address..."
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={styles.input}
              placeholder="Enter your mobile number..."
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Your message here..."
              required
            />
          </div>

          <button type="submit" className={styles.submitButton}>
            Submit Form →
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;