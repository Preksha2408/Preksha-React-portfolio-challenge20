import React from "react";
import Project from "./Project";
import KanbanBoard from "../images/KanbanBoard.GIF";
import Weather from "../images/Weather-api.GIF";
import EventFinder from "../images/EventFinder.GIF";
import EmployeeTrackerchallenge12 from "../images/EmployeeTrackerchallenge12.GIF"
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/Portfolio.css";

// Portfolio component
function Portfolio() {
  return (
        // Portfolio container
    <div className="portfolio-wrapper">
      <h1 className="portfolio-title">Portfolio</h1>
      <div className="container">
        <div className="row">
          {[
            {
              title: "Event Planner",
              description: "Developed a sophisticated event management platform that enables users to create, update, and delete events, manage customer data, and track event timelines. ",
              imgSrc: EventPlanner,
              deployedLink:
                "https://prestigeplanners.netlify.app/",
              githubLink:
                "https://github.com/Preksha2408/Preksha-PrestigePlanner-client.git",

            },
        
            {
              title: "Weather Dashboard",
              description: "Server-Side APIs: (5) Day Weather Dashboard.",
              imgSrc: Weather,
              deployedLink:
                "https://preksha2408.github.io/Weather-dashboard-challenge06/",
              githubLink:
                "https://github.com/Preksha2408/Weather-dashboard-challenge06.git",
            },
            {
              title: "Event Finder",
              description: "The Event-Finder App is a sophisticated web application designed to streamline the process of discovering events based on user preferences. Users can enter their desired event type, city, and state, and the app presents a curated list of events displayed on interactive cards",
              imgSrc: EventFinder,
              deployedLink:
                "https://preksha2408.github.io/Event-finder-project01/",
              githubLink:
                "https://github.com/Preksha2408/Event-finder-project01.git",
            },
            {
              title: "Kanban-Board ",
              description: "This is a kanban-board with classifications of TO-DO , INPROGRESS , DONE . A calender is also available ",
              imgSrc: KanbanBoard,
              deployedLink:
                " https://preksha2408.github.io/Kanban-Board-Challenge5e/",
              githubLink:
                "https://github.com/Preksha2408/Kanban-Board-Challenge5e.git",
            },
            {
              title: "Employee-Tracker",
              description: "The Employee Tracker is a command-line application built using Node.js and PostgreSQL that allows users to manage employee data within a company. Users can view, add, and update employees, roles, and departments, making it easier to track and manage employee information and organizational structure. ",
              imgSrc: EmployeeTrackerchallenge12,
              githubLink:
                "https://github.com/Preksha2408/Preksha-Employee-tracker-challenge12.git",
            },
            {
              title: "Book-Search-Engine",
              description: "Developed a robust book search engine utilizing the Google Books API, enabling users to search for books by title, author, or ISBN. ",
              imgSrc: EmployeeTrackerchallenge12,
              githubLink:
                "https://preksha-book-search-engine.onrender.com/",
            }

          ].map((project, index) => (
            // Div container for each project
            <div className="col-12 col-md-6 col-lg-4 my-2" key={index}>
              {/* <h2>{project.title}</h2> */}
              <Project
                title={project.title}
                description={project.description}
                imgSrc={project.imgSrc}
                deployedLink={project.deployedLink}
                githubLink={project.githubLink}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
// Export Portfolio
export default Portfolio;