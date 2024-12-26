import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import bookBrowsing from "../../Assets/Projects/book-browsing.png";
import globalWeather from "../../Assets/Projects/global-weather.png";
import secret from "../../Assets/Projects/my-portfolio.png";
import stuckinthemud from "../../Assets/Projects/stuckinthemud.png";
import productivityBotImage from "../../Assets/Projects/productivityBotImage.png";
import stockWiseImage from "../../Assets/Projects/stockWiseImage.png";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <>
      <Container fluid className="project-section">
        {/* <Particle /> */}
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "#C2C3C5" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {/* StockWise Project Card */}
            <Col md={4} className="project-card" data-aos="fade-up">
              <ProjectCard
                imgPath={stockWiseImage}
                isBlog={false}
                title="StockWise"
                description="Developed StockWise, an AI-powered news aggregator using LLaMA for real-time sentiment analysis, boosting portfolio profitability by 18% through 25+ automated alerts. Led a team of engineers to build StockWise, managing workflows and ensuring project success."
                //ghLink="https://github.com/your-stockwise-link"
              />
            </Col>

            <Col md={4} className="project-card" data-aos="fade-up">
              <ProjectCard
                imgPath={stuckinthemud}
                isBlog={false}
                title="Stuck in the Mud"
                description="Stuck in the Mud is a Java-based dice game using a circular linked list and custom iterators. Players roll dice, and any 2s or 5s get “stuck,” affecting the turn. The game ends when a player reaches 100 points. This project showcases linked list operations, custom iterators, and basic game logic."
                demoLink="https://youtu.be/22usGVhaMZs"
                ghLink="https://github.com/biniyam-fekede/StuckInTheMud-Game"
              />
            </Col>

            <Col md={4} className="project-card" data-aos="fade-up">
              <ProjectCard
                imgPath={globalWeather}
                isBlog={false}
                title="Global Weather Manager"
                description="The Global Weather project is a Java-based application that processes a large weather dataset using ArrayList, Binary Search, and Linear Regression. It involves creating a GlobalWeatherManager class to manage the data and implement sorting, searching, and statistical analysis for various cities. The project aims to enhance skills in data structures, file handling, and algorithm optimization."
                demoLink="https://youtu.be/skoZaBpgKtg"
                ghLink="https://github.com/biniyam-fekede/Global-Weather-Manager"
              />
            </Col>

            <Col md={4} className="project-card" data-aos="fade-up">
              <ProjectCard
                imgPath={bookBrowsing}
                isBlog={false}
                title="The Book Browsing"
                description="The Book Browsing by Selected Field project is a Java application that allows users to browse a collection of over 9,000 books using a graphical interface. The project uses data structures like Binary Search Trees (BST) and TreeMap to sort and display books by fields such as ISBN, title, or average rating. The GUI includes navigation buttons for easy browsing, allowing users to move through the book collection and filter by selected fields."
                demoLink="https://youtu.be/fxn8qjG3zgI"
                ghLink="https://github.com/biniyam-fekede/Book-Browsing-App"
              />
            </Col>

            <Col md={4} className="project-card" data-aos="fade-right">
              <ProjectCard
                imgPath={secret}
                isBlog={false}
                title="My Portfolio"
                description="I created a simple yet modern portfolio to showcase my projects and skills. Built with React, CSS, and Bootstrap, the design features a clean layout and intuitive navigation, allowing visitors to explore my work effortlessly. The aesthetic blends vibrant visuals with a user-friendly interface, highlighting my passion for both design and functionality. This project not only reflects my technical abilities but also my commitment to delivering a seamless user experience. Explore my portfolio to see my journey and creativity in action!"
                demoLink="https://biniyamgebreyohannes.vercel.app/project"
                ghLink="https://github.com/biniyam-fekede/portfolio"
              />
            </Col>

            {/* Team Productivity Bot Project Card */}
            <Col md={4} className="project-card" data-aos="fade-right">
              <ProjectCard
                imgPath={productivityBotImage}
                isBlog={false}
                title="Team Productivity Bot"
                description="Developed a Python app to query a Discord server and AWS EC2 instance via EC2_metadata API, automating over 20+ routine tasks and reducing manual interventions by 80%."
                //ghLink="https://github.com/your-productivity-bot-link"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Projects;
