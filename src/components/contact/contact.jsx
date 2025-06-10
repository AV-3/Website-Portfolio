import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title">Get in Touch</h2>
        <p className="contact__description">
          I would love to hear from you! Whether you have a question, want to collaborate, or just want to say hello, feel free to reach out.
        </p>
        <form className="contact__form">
          <input type="text" placeholder="Your Name" required className="contact__input" />
          <input type="email" placeholder="Your Email" required className="contact__input" />
          <textarea placeholder="Your Message" required className="contact__textarea"></textarea>
          <button type="submit" className="contact__button">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;