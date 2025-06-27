import React from 'react';
import './experience.css';

const Experience = () => {
    return (
        <section className="experience" id="experience">
            <div className="experience__container">
                <h2 className="experience__title">Relevant</h2>
                <h2 className="experience__title">Experience</h2>
                <div className="experience__job__container">
                    <ul className="experience__job__list">
                        <h3 className="experience__job__company">Excelsior Equity Partners</h3>
                        <p className="experience__job__description">
                            At Excelsior, I created a wide range of solutions to enable critical business processes for our analyst and legal team.
                        </p>
                        <li className="experience__job__item">
                            <h3 className="experience__job__title">Junior Software Engineer</h3>
                            <p className="experience__job__duration">Jan 2024 - Present</p>
                            <ul className="experience__job__project__list">
                                <li>Designed and built various Microsoft Playwright RPAs. Including a console app capable of filing thousands of 
                                    lawsuits through the government owned PACER website, hosted on multiple virtual machines.</li>
                                <li>Created an Azure Function App that extracts crucial data from client documents used by our legal team
                                    to identify and build high profile cases.</li>
                                <li>Built multiple Azure Data Factory pipelines to move data from Azure blob storage to Snowflake to enable our analyst
                                    team to perform data analysis and create reports for the legal team.</li>
                                <li>Developed a Restful API connection between Salesforce and a partnered law firm's Salesforce-Docrio API to send vital intake 
                                    retainer documentation.</li>
                            </ul>
                        </li>
                        <li className="experience__job__item">
                            <h3 className="experience__job__title">Software Development Contractor</h3>
                            <p className="experience__job__duration">Sep 2023 - Dec 2023</p>
                            <p className="experience__job__description">
                                Created an automated Selenium testing service capable of: creating sample intakes inside of Salesforce, 
                                testing client-facing medical intake questionnaires, and ensuring compliance with DNQ (Does Not Qualify) rules.
                            </p>
                        </li>
                        <li className="experience__job__item">
                            <h3 className="experience__job__title">Software Development Intern</h3>
                            <p className="experience__job__duration">Jun 2023 - Aug 2023</p>
                            <p className="experience__job__description">
                                Built a Python/Flask-based RESTful API that allows users to input and receive medical data as a proof of concept to accept
                                inputs and return responses from a machine learning model.

                            </p>
                        </li>
                    </ul>
                </div>
                {/*<div className="experience__job__container">
                    <ul className="experience__job__list">
                        <h3 className="experience__job__company">United States Air Force</h3>
                        <li className="experience__job__item">
                            <h3 className="experience__job__title">Logistics Supervisor, Non-Commissioned Officer</h3>
                            <p className="experience__job__duration">Apr 2020 - Sep 2022</p>
                            <ul className="experience__job__project__list">
                                <li>Supervised a multidisciplinary team that directly supported petroleum and cryogenic distribution systems
                                    valued at $126M.</li>
                                <li>Forecasted product requirements and coordinated logistics for 21M gallon inventory of multi-grade fuels to
                                    support US and allied nations.</li>
                            </ul>
                        </li>
                        <li className="experience__job__item">
                            <h3 className="experience__job__title">Fuels Management Specialist</h3>
                            <p className="experience__job__duration">Feb 2015 - Mar 2020</p>
                            <p className="experience__job__description">
                                Managed the storage, distribution, and quality control of aviation, ground fuels, and cryogenics for the U.S. Air Force.
                            </p>
                        </li>
                    </ul>
                </div>*/}
            </div>
        </section>
        );
    }
    
export default Experience;