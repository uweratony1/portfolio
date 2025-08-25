import { useState } from 'react';
import "@/styles/components/contact.css";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In real app: send data to Formspree/Netlify/etc.
    setIsSubmitted(true);
    e.target.reset(); // Optional: clear form

    // Auto-hide success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Let's work together on something great</p>

        {isSubmitted && (
          <div className="success-message">
            Thanks! Your message was sent successfully. I'll get back to you soon.
          </div>
        )}

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>tonyblaire@example.com</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>+250 788 000 000</p>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Kigali, Rwanda</p>
            </div>
            <div className="info-item">
              <i className="fas fa-clock"></i>
              <p>Available for new opportunities</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Your Name" name="name" required />
            <input type="email" placeholder="Your Email" name="email" required />
            <input type="text" placeholder="Subject" name="subject" required />
            <textarea rows="5" placeholder="Your Message" name="message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
