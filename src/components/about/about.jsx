import './about.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title">About Me</h2>
        <p className="about__description">
          I am a Computer Science graduate and incoming <span className="highlight-gold">Georgia Tech</span> Master's student specializing in Computer Perception, Robotics and AI.
        </p>
        <p className="about__description">
          With over 2 years of professional backend software engineering in <span className="highlight-gold">C# and .NET</span>, I'm constantly expanding my skills
          including <span className="highlight-gold">C++ and Python</span> to create innovative solutions in robotics, computer vision, embedded systems, and AI.
        </p>
        <p className="about__description">
          Before my career in software, I served over 7 years in the <span className="highlight-gold">U.S. Air Force</span>, 
          where I honed my skills in leadership, teamwork, and problem-solving under pressure.
        </p>
        <h2 className="about__subtitle">Education</h2>
        <div className="about__education__container first__education__container">
          <h3>Georgia Institute of Technology</h3>
          <h4>Master of Science in Computer Science</h4>
          <h5>Computer Perception & Robotics Specialization</h5>
          <p>Incoming: 2025</p>
        </div>
        <div className="about__education__container">
          <h3>Western Governors University</h3>
          <h4>Bachelor of Science in Computer Science</h4>
          <p>Graduated: 2025</p>
        </div>
      </div>
    </section>
  );
}

export default About;