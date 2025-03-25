
import styles from '/styles/StatsTestimonials.module.css';

const StatsTestimonialsSection = () => {
  const stats = [
    { number: "20K+", label: "Happy Clients" },
    { number: "5K+", label: "Successful Projects" },
    { number: "100+", label: "Positive Feedback" },
    { number: "50+", label: "Global Reach" }
  ];

  const testimonials = [
    {
      title: "Excellent Quality",
      text: "The attention to detail and professionalism were evident throughout the project. Highly recommend!",
      author: "Ravi Singh",
      role: "Project Manager, DesignWorks",
      rating: 5
    },
    {
        title:"Remarkable Effort",
        text:"Their commitment to excellence is umparalleled. We saw significant growth and improvement",
        author:"Pooja Sharma",
        role:"CTO, Future Innovations",
        rating:4
    },
    {
        title:"Exceptional service",
        text:"The services provided by the team were beyond exceptional! We saw an incredible transformation.",
        author:"Rajesh Kumar",
        role:"CEO, TechSolutions.Pvt ltd",
        rating:5 
    },
    {
        title:"Fantastic Experience",
        text:"A fantastic experience! Their attention to detail and customer service is unparalleled",
        author:"Anita Patel",
        role:"Marketing Director, Innovative India",
        rating:4
    },
    {
        title:"Outsanding REsults",
        text:"They went above and beyond to deliver an outstanding result. Our business has never been better!",
        author:"Sanjay Mehta",
        role:"Founder, Startup Ventures",
        rating:4
    }
  ];

  return (
    <section className={styles.section}>
      
      <div className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statItem}>
                <div className={styles.statNumber}>
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
            </div>
          ))}
        </div>
      </div>

      
    
<div className={styles.testimonialsSection}>
  <h2 className={styles.testimonialsHeading}>TESTIMONIAL</h2>
  <p className={styles.testimonialsSubhead}>What our customers are saying about us</p>
  
  <div className={styles.testimonialsGrid}>
    {testimonials.map((testimonial, index) => (
      <div key={index} className={styles.testimonialCard}>
        <div className={styles.ratingContainer}>
          <div className={styles.stars}>
            {'★'.repeat(testimonial.rating).padEnd(5, '☆')}
          </div>
          <button className={styles.contactButton}>
            <span className={styles.contactSymbol}>💬</span>
          </button>
        </div>
        <h4 className={styles.testimonialTitle}>{testimonial.title}</h4>
        <p className={styles.testimonialText}>{testimonial.text}</p>
        <div className={styles.authorContainer}>
          <div className={styles.authorDetails}>
            <h5 className={styles.authorName}>{testimonial.author}</h5>
            <p className={styles.authorRole}>{testimonial.role}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
    </section>
  );
};
export default StatsTestimonialsSection;