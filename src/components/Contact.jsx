import "@/styles/components/contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Let's work together on something great</p>

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

          <form className="contact-form" action="#" method="POST">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
