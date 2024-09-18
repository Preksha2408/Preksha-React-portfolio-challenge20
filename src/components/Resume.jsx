// Importing necessary modules and components
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../style/Resume.css";
import PDF from "../documentation/Preksha_Resume10.pdf";


// Resume component
function Resume() {
  return (
    <section id="resume" className="resume-margin">
      <Container className="resume-section">
        <Row>
          <Col className="text-center">
            <h1>Resume</h1>
            <hr className="star-primary" />
            <Button variant="dark" href={PDF} download>
              Download Resume
            </Button>
          </Col>
        </Row>
        <Row>
          <Col>
          <hr className="star-secondary" />
          <h3>Professional Summary</h3>
            <div className="resume-item">
              <ul>
                <p>
                  Highly qualified and motivated Full Stack Web Developer, recently graduated from the University of California's Computer Science Bootcamp September 2024, seeking a junior developer or internship position to enhance my technical skills and understanding of project management principles. 
                  With 14 years of demonstrated experience in business operations, customer qualification, and project management, I specialize in merging technical expertise with superior interpersonal communication across all management levels. Dedicated to continuous learning and eager to contribute to and advance within your esteemed organization.  
                </p>
              </ul>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
              <hr className="star-secondary" />
              <h3> Top Projects (3) </h3>
                <div className="resume-item">
                <h4><a href="https://github.com/Preksha2408/Preksha-Employee-tracker-challenge12.git" target="_blank" rel="noopener noreferrer">Human Resources SQL Employee Tracker (Jan 2023 - Apr 2023)</a></h4>
                    <ul>
                        <li><strong>Technology:</strong> GitHub | JavaScript | Node.js | Inquirer | MySQL</li>
                        <li>SQL Database Management: : Developed a command-line interface(CLI)application, leveraging Node.js,Inquirer.js, and PostgreSQL, to facilitate dynamic CRUD operations on an SQL Human Resources employee database tracker.</li>
                        <li>User-Centric CLI: Engineered user-friendly (CLI)that enables both developers & non developers to seamlessly manage employee data, emphasizing a deep understanding of user experience (UX) and the translation of complex operations into user-friendly prompts.</li>
                    </ul>
                </div>
                <div className="resume-item">
                <h4><a href="https://github.com/Preksha2408/Event-finder-project01.git " target="_blank" rel="noopener noreferrer">Full Stack Engineer & Architect | Event Finder Application (June 2024-Sept 2024)</a></h4>
                  <ul>
                    <li><strong>Technology:</strong> GitHub | JavaScript | React | Node.js | Express.js | MongoDB | Google Maps API | Ticketmaster API</li>
                    <li>Developed a sophisticated web application integrating the Google Maps API and Ticketmaster API, allowing users to discover and explore events based on their preferences, and providing detailed event information through interactive cards.</li>
                    <li>Designed an intuitive and responsive interface using Bulma and Bootstrap, focusing on a seamless user experience (UX) for event search, filtering, and detailed exploration, ensuring ease of use across different devices and platforms.</li>
                    <li>Combined Node.js, Express.js, and Sequelize ORM for robust backend, with secure session management.</li>
                  </ul>
                </div>
                <div className="resume-item">
                <h4><a href=": https://github.com/Preksha2408/Weather-dashboard-challenge06.git " target="_blank" rel="noopener noreferrer">Full Stack Engineer & Architect | Weather Dashboard (June 2024- Sept 2024)</a></h4>
                  <ul>
                      <li><strong>Technology:</strong> GitHub | JavaScript | HTML | CSS | OpenWeatherMap API | Bootstrap</li>
                      <li>Developed a real-time weather dashboard application utilizing the OpenWeatherMap API, providing users with current weather conditions and a 5-day forecast based on their selected location.</li>
                      <li>Engineered a user-friendly and responsive UI with Bootstrap, ensuring optimal performance across various devices while offering an intuitive user experience for weather data visualization.</li>
                      <li>Applied Agile methodologies, using Kanban for team collaboration and efficient MVP delivery.</li>
                  </ul>
                </div>
            </Col>
        </Row>
        <Row>
          <Col>
          <hr className="star-secondary" />
            <h3>Full Stack Development Skills</h3>
            {/* <hr className="star-secondary" /> */}
            <ul className="list-inline">
            <li className="list-inline-item">
                <strong>Languages:</strong> HTML5, CSS3, JavaScript, Python</li>
            <li className="list-inline-item">
                <strong>Libraries & Frameworks:</strong> Bootstrap, jQuery, React, Node.js,
                Express.js, Angular, Handlebars, Sequelize.js.</li>
            <li className="list-inline-item">
                <strong>Databases:</strong> NoSQL, MongoDB, PostgreSQL.</li>
            <li className="list-inline-item">
                <strong>DevOps & Tools:</strong> VS Code, Git, GitHub, GitLab, Apollo,Microsoft Azure,
                Microsoft Office 365, MongoDB Compass, NPM, Insomnia, (CLI).</li>
            <li className="list-inline-item">
                <strong>Methodologies:</strong> Agile Project Managment, Scrum, Kanban, Version Control,(CI/CD) </li>
              <li className="list-inline-item">
                <strong>Operating Systems:</strong> Windows, macOS, Linux, iOS</li>
            <li className="list-inline-item">
                <strong>Skills:</strong> Styled-Components, Responsive Web Design, UI/UX Design Principles, API Integration, Express.js, GraphQL, Object-Oriented Programming (OOP), Object Relational, Mapping(ORM),
                MERN Stack, GraphQL, Wireframe Design, (CRUD) operations.</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <hr className="star-secondary" />
            <h3>Education</h3>
            {/* <hr className="star-secondary" /> */}
            <div className="resume-item">
              <h4>Computer Science Degree in Software Development Spc. Full Stack Web Development</h4>
              <h5>University of California , Berkely | Berkely, California | Jun 2024 - Sept 2024</h5>
              <ul>
                  <li> Percentage: 89%</li>
             </ul>
              <ul>
                <li>Curriculum: Unit Projects: (20) Team Projects: (3)</li>
                <li>Curriculum: HTML5, CSS3, JavaScript, Git, GitHub, MongoDB, Express.js, React.js, Node.js, Full Stack, MERN Stack, DOM, MVC, ORM, CLI, PWA’s, OOP, jQuery, Bootstrap, API, SQL, MySQL, GraphQL, SWE, SDLC, Agile Methodology (SCRUM & Kanban), UI/UX Design, Principles, Wireframe, Responsive Web Design & Web Accessibility.</li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Master of science in Information Technology Project Management</h4>
              <h5> Golden Gate University | San Fransico, California | August 2022 - Decemeber 2023</h5>
              <ul>
                  <li>GPA: 4.0/4.0</li>
             </ul>
             <ul>
             <ul>
                <li>Curriculum: Introduction to PM, Agile Management for Project Managers, Data Analysis for Managers, IT Management & Digital Transformation, Project government program portfolio management, Project Risk Management, Supply chain management, Advance Project Planning, finance and control, Security privacy and compliance, Software engineering leadership, securing technology infrastructure.
                </li>
              </ul>
             </ul>
            </div>  
            <div className="resume-item">
              <h4>Bachelor of Technology, Aerospace Engineering</h4>
              <h5> R.V University | Bengaluru, India | April 2016 - October 2021</h5>
              <ul>
                  <li>GPA: 3.0</li>
  
              </ul>
            </div>  
          </Col>
          <Col>
            <hr className="star-secondary" />
            <h3>Projects</h3>
            <div>
            <h4>Full Stack Engineer and Architect | Human Resources SQL Employee Tracker    </h4>                                                                              June 2024- Sept 2024
<h3>Command Line Interface (CLI)SQL Database Management Application         </h3>                                                          GitHub| JavaScript| Node.js| Inquirer| PostgreSQL
<h2>Project Link: https://github.com/Preksha2408/Preksha-Employee-tracker-challenge12.git </h2>
<ul>
•	SQL Database Management: Developed a command-line interface(CLI)application, leveraging Node.js,Inquirer.js, and PostgreSQL, to facilitate dynamic CRUD operations on an SQL Human Resources employee database tracker.
•	User-centric CLI: Engineered user-friendly (CLI)that enables both developers & non developers to seamlessly manage employee data, emphasizing a deep understanding of user experience (UX) and the translation of complex operations into user-friendly prompts.
</ul>
<h4>Full Stack Engineer & Architect | Event Finder Application     </h4>                                                                                                                     June 2024-Sept 2024
<h3>Event Discovery & Management Platform         </h3>                        GitHub | JavaScript | React | Node.js | Express.js | MongoDB | Google Maps API | Ticketmaster API
<h2> Link: https://github.com/Preksha2408/Event-finder-project01.git </h2>
<ul>Deployed App: https://preksha2408.github.io/Event-finder-project01/
•	Event Discovery Platform: Developed a sophisticated web application integrating the Google Maps API and Ticketmaster API, allowing users to discover and explore events based on their preferences, and providing detailed event information through interactive cards.
•	User-Centric Interface: Designed an intuitive and responsive interface using Bulma and Bootstrap, focusing on a seamless user experience (UX) for event search, filtering, and detailed exploration, ensuring ease of use across different devices and platforms.
</ul>
<h4>Full Stack Engineer & Architect | Weather Dashboard         </h4>                                                                                                                         June 2024- Sept 2024
<h3>Real-Time Weather Forecasting Web Application            </h3> 
GitHub | JavaScript | HTML | CSS | OpenWeatherMap API | Bootstrap
<h2>
Project Link: https://github.com/Preksha2408/Weather-dashboard-challenge06.git 
Deployed App: https://preksha2408.github.io/Weather-dashboard-challenge06/
</h2>
<ul>
•	Dynamic Weather Forecasting: Developed a real-time weather dashboard application utilizing the OpenWeatherMap API, providing users with current weather conditions and a 5-day forecast based on their selected location.
•	Responsive User Interface: Engineered a user-friendly and responsive UI with Bootstrap, ensuring optimal performance across various devices while offering an intuitive user experience for weather data visualization.
</ul>

<h4>Project Manager & Full Stack Engineer | Event Planner      </h4>                                                                                                                            June 2024- Sept 2024
<h3> Event Management Platform      </h3>                                                GitHub | JavaScript | React | Node.js | Express.js | MongoDB | Google Calendar API | Framer Motion
<h2>
Project Link:  https://github.com/Preksha2408/Preksha-PrestigePlanner-client.git

Deployed App : https://prestigeplanners.netlify.app/
</h2>
<ul>
•	Comprehensive Event Management: Developed a sophisticated event management platform that enables users to create, update, and delete events, manage customer data, and track event timelines.
•	Seamless Integration with Google Calendar: Implemented Google Calendar API integration for synchronizing event schedules, ensuring users can manage their events efficiently.
•	Robust Backend: Leveraged Node.js and Express.js to construct a reliable server-side application, with MongoDB providing a scalable and flexible database solution.
</ul>
<h4>
Project Manager & Full Stack Engineer | Book Search Engine     </h4>                                                                                                                   June 2024- Sept 2024
<h3>Book Search Engine </h3>
<ul>
Project Link:  https://github.com/Preksha2408/Preksha-Book-Search-Engine.git           GitHub | JavaScript | Express.js | MongoDB | GraphQL | Google Books API

Deployed App: https://preksha-book-search-engine.onrender.com
</ul>
•	Advanced Book Searching: Developed a robust book search engine utilizing the Google Books API, enabling users to search for books by title, author, or ISBN.
•	Comprehensive Data Management: Employed MongoDB for efficient storage and retrieval of user search history and favorite books.
•	Optimized Data Querying: Integrated GraphQL for seamless querying and manipulation of book data, enhancing the performance and efficiency of data handling.

<h4>Full Stack Engineer & Architect | Professional Portfolio     </h4>                                                                                                                          June 2024- Sept 2024
<h3> Professional Portfolio       </h3>     
<h2>                                                                                                                   GitHub | JavaScript | React | Node.js | Express.js | MongoDB 
Project Link : https://github.com/Preksha2408/Preksha-React-portfolio-challenge20.git     
Deployed App: https://preksha-react-portfolio.netlify.app/
</h2>
<ul>
•	Showcasing Professional Skills: Developed a comprehensive professional portfolio to highlight technical skills, projects, and professional experiences.
•	Interactive User Interface: Utilized React to create a dynamic and interactive user interface, providing an engaging and seamless browsing experience.
</ul>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col>
            {/* <hr className="star-secondary" />
            <h3>Proficiencies</h3> */}
            {/* <ul>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>
                <span className="teal-color">M</span>
                ongoDB
              </li>
              <li>
                <span className="teal-color">E</span>xpress
              </li>
              <li>
                <span className="teal-color">R</span>eact
              </li>
              <li>
                <span className="teal-color">N</span>ode.js
              </li>
              <li>SQL</li>
            </ul> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
// Export Resume
export default Resume;