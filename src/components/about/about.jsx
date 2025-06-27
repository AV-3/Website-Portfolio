import './about.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <h2 className="about__title">About Me</h2>
        <p className="about__description">
          Hi! I'm a <span className="highlight-gold">Georgia Tech</span> MSCS student specializing in Computational Perception and Robotics. 
          My focus is on creating the intelligent systems that enable autonomous vehicles, drones, and robots to see and think.
        </p>
        <p className="about__description">
          My professional experience is in backend development, where I spent two years building scalable backend services with
          <span className="highlight-gold"> C# and .NET on the Azure cloud.</span> Now, my career focus is on bridging the gap between software and the physical 
          world using <span className="highlight-gold">C++, Python, and Artificial Intelligence</span>. 

        </p>
        <p className="about__description">
          Before my tech career, I served almost 8 years in the <span className="highlight-gold">U.S. Air Force</span> managing the logistics for aviation fuel and cryogenics. 
          That experience developed my skills in leadership, teamwork, and high-stakes problem-solving.
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