import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-container">
        <h2 className="contact-title">Get in Touch</h2>

        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-subtitle">Contact Information</h3>

            <div className="contact-details">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <div>
                  <h4>Email</h4>
                  <p>thotasriram17@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <Phone className="contact-icon" />
                <div>
                  <h4>Phone</h4>
                  <p>+1 (732) 522-1896</p>
                </div>
              </div>

              <div className="contact-item">
                <MapPin className="contact-icon" />
                <div>
                  <h4>Location</h4>
                  <p>Lake Grove, NY</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/sriramthota14"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github />
              </a>
              <a
                href="www.linkedin.com/in/sri-ram-thota-6b53a3118"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
              <a
                href="https://x.com/SriramThota14"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter />
              </a>
              <a
                href="https://www.instagram.com/_s.r.i.r.a.m1414/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram />
              </a>
            </div>
          </div>

          <div className="contact-form">
            <h3 className="contact-subtitle">Send me a Message</h3>
            <form className="form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
