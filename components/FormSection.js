// components/FormSection.jsx
import { useState } from 'react';
import Image from 'next/image';
import styles from '../styles/FormSection.module.css';
'use client';
const FormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobTitle: '',
    location: '',
    linkedin: '',
    website: '',
    resume: null
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted');
    // Add your form submission logic here
    setFormData({
      name: '',
      email: '',
      phone: '',
      jobTitle: '',
      location: '',
      linkedin: '',
      website: '',
      resume: null
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Form */}
          <form onSubmit={handleSubmit} className={styles.form}>
            <h2 className={styles.formTitle}>Apply for this role</h2>
            
            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  placeholder="Enter job title"
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label>Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Enter Location"
                  required
                />
              </div>
              <div className={styles.inputGroup}>
                <label>LinkedIn Profile</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="Enter LinkedIn Profile"
                  required
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.inputGroup}>
                <label>Personal Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  placeholder="Enter personal website"
                />
              </div>
              <div className={styles.inputGroup}>
                <label>Resume</label>
                <div className={styles.fileInput}>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleChange}
                    accept=".pdf,.doc,.docx"
                    required
                  />
                  <span className={styles.fileLabel}>
                    {formData.resume?.name || 'Choose File'}
                  </span>
                </div>
              </div>
            </div>

            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
          </form>

          {/* Right Image */}
          <div className={styles.imageWrapper}>
            <Image
              src="/services/careerform.webp"
              alt="Career Application"
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

export default FormSection;