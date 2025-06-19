import "./skills.css";
import snowflakeLogo from '../../assets/SNOW-35164165.png';

const Skills = () => {
    return (
        <section className="skills" id="skills">
            <div className="skills__container">
                <h2 className="skills__title">My Skills</h2>
                <p className="skills__description">
                    I have a diverse skill set gained through my education, professional experience, and personal interests. 
                    Here are some of the key technologies and languages I work with:
                </p>
                <ul className="skills__list">
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" alt="C#"></img></li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" alt="C++"></img></li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain-wordmark.svg" alt="Java"></img></li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" alt=".NET Core"></img></li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"alt="Azure"></img></li>
                    <li className="skills__item"><img src={snowflakeLogo} alt="Snowflake"></img></li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/salesforce/salesforce-original.svg" alt="Salesforce"></img></li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" alt="Postman"></img></li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" alt="Microsoft SQL Server"></img></li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" alt="Playwright"></img></li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg" alt="Git"></img></li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" alt="Python"></img></li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML"></img></li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS"></img></li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" alt="React"></img></li>
                    <li className="skills__item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg" alt="Arduino"></img></li>

                </ul>
            </div>
        </section>
    );
}

export default Skills;