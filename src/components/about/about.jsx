import './about.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title">About Me</h2>
        <p className="about__description">
          A <span className="highlight-gold">Georgia Tech</span> graduate student 
          pursuing a M.S. in Computer Science with a specialization in Computational Perception and Robotics.
          Targeting a career in creating the intelligent systems that 
          power autonomous vehicles, drones, and advanced robotics.
        </p>
        <p className="about__description">
          My studies build upon a foundational two years as a professional software engineer, developing robust and scalable Azure backend services with
          <span className="highlight-gold"> C# and the .NET framework.</span> Now, my career focus is on bridging the gap between software and the physical world using <span className="highlight-gold">C++ and Python</span>. 

        </p>
        <p className="about__description">
          Before my career in software, I served over 7 years in the <span className="highlight-gold">U.S. Air Force</span> managing the logistics for aviation fuel and cryogenics. 
          There I honed my skills in leadership, teamwork, and problem-solving in high-stress scenarios.
        </p>
        <h2 className="about__subtitle">Education</h2>
        <div className="about__education__container first__education__container">
          <h3>Georgia Institute of Technology</h3>
          <h4>Master of Science in Computer Science</h4>
          <h5>Specialization: Computational Perception & Robotics</h5>
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