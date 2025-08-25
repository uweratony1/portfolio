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
              <p>uweratony1@gmail.com</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>+250 796028043</p>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Musanze, Rwanda</p>
            </div>
            <div className="info-item">
              <i className="fas fa-clock"></i>
              <p>Future Network Engineer</p>
            </div>
          </div>

          <form
  name="contact"
  method="POST"
  data-netlify="true"
  netlify
  className="contact-form"
>
  <input type="hidden" name="form-name" value="contact" />

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
