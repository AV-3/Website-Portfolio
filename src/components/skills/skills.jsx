import "./skills.css";
import snowflakeLogo from '../../assets/SNOW-35164165.png';

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills__container">
                <h2 className="skills__title">My Skills</h2>
                <p className="skills__description">
                    I have a diverse skill set gained through my education, professional experience, and personal interests. 
                    Here are some of the key technologies I work with:
                </p>
                <h4 className="skills__subheading">Languages & Frameworks</h4>
                <ul className="skills__list">
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#"></img>C++</li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++"></img>C#</li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain-wordmark.svg" alt="Java"></img>Java</li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt="Python"></img>Python</li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML"></img>HTML5</li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS"></img>CSS3</li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="SQL"></img>SQL</li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React"></img>React</li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" alt=".NET Core"></img>.NET Core</li>               
                </ul>
                <h4 className="skills__subheading">Platforms & Tools</h4>
                <ul className="skills__list">
                    <li className="skills__item skills__item__purple"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"alt="Azure"></img>Azure</li>
                    <li className="skills__item skills__item__purple"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" alt="Playwright"></img>Playwright</li>
                    <li className="skills__item skills__item__purple"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman"></img>Postman</li>
                    <li className="skills__item skills__item__purple"><img src={snowflakeLogo} alt="Snowflake"></img>Snowflake</li>
                    <li className="skills__item skills__item__purple"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" alt="Salesforce"></img>Salesforce</li>
                    <li className="skills__item skills__item__purple"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg" alt="Git"></img>Git</li>
                    <li className="skills__item skills__item__purple"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg" alt="Arduino"></img>Arduino</li>
                </ul>
                <h4 className="skills__subheading">Specializations & Methodologies</h4>
                <ul className="skills__list skills__list--labels">
                    <li className="skills__label skills__item__blue">Agile/Scrum</li>
                    <li className="skills__label skills__item__blue">Object-Oriented Programming (OOP)</li>
                    <li className="skills__label skills__item__blue">ROS</li>
                    <li className="skills__label skills__item__blue">Computer Vision</li>
                    <li className="skills__label skills__item__blue">AI/Machine Learning</li>
                    <li className="skills__label skills__item__blue">Embedded Systems</li>
                    <li className="skills__label skills__item__blue">PyTorch</li>
                    <li className="skills__label skills__item__blue">OpenCV</li>
                    <li className="skills__label skills__item__blue">Systems Design</li>

                </ul>
            </div>
        </section>
    );
}

export default Skills;