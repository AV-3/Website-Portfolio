import "./hero.css";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container hero__container">
        <h3>Hi, my name is</h3>
        <h1 className="hero__title">Alan Velez .</h1>
        <p className="hero__description">
          I am a passionate software engineer with a love for creating innovative solutions. Explore my work and let's connect!
        </p>
        <a href="#contact" className="hero__button">Get in Touch</a>
      </div>
    </section>
  );
}

export default Hero;