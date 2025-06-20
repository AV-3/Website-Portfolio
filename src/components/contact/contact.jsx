import './contact.css';
import emailIcon from '../../assets/Mail_(iOS).svg.png';
import githubIcon from '../../assets/images.png';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title">Get in Touch</h2>
        <p className="contact__description">
          I'm currently looking for new opportunities and would love to hear from you! Feel free to reach out.
        </p>
        <ul className="contact__socials__list">
          <li className="contact__socials__item">
            <a href="https://www.linkedin.com/in/alan-velez-e/">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg" alt="LinkedIn Link"></img>
            </a>
          </li>
          <li className="contact__socials__item">
            <a href="https://github.com//AV-3">
              <img src={githubIcon} alt="Github Link"></img>
            </a>
          </li>
          <li className="contact__socials__item">
            <a href="mailto:alan.velez.e@gmail.com">
              <img src={emailIcon} alt="Email Link"></img>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;