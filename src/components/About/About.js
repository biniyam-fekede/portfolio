import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Tooltip from "react-tooltip";
import leetcode from "../../Assets/leetcode.png";
import Aboutcard from "./AboutCard";
import { Experience } from "./Experience";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container fluid className="about-section" style={{ fontFamily: "Arial" }}>
      <Container>
        <Row style={{ justifyContent: "center", textAlign: "center" }}>
          <Col
            md={8}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <Aboutcard />
          </Col>
          {/* <Col
            md={5}
            style={{
              paddingTop: "30px",
              paddingBottom: "100px",
              paddingLeft: "50px",
            }}
            className="about-img"
          >
            <img
              src={Bini}
              alt="about"
              className="img-fluid"
              style={{ marginTop: "-25px" }}
              data-aos="fade-down"
            />
          </Col> */}
        </Row>
        <Row>
          <h1 className="project-heading">
            Recent <strong className="purple">Experiences </strong>
          </h1>
          <Experience />
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Row>
          <h1 className="project-heading" style={{ marginBottom: "40px" }}>
            See My <strong className="purple">Leetcode Challenge</strong>
          </h1>
          <a
            href="https://leetcode.com/u/Biniyam09/"
            target="_blank"
            rel="noreferrer"
            className="my-tooltip-leetcode"
            style={{ padding: "0 50px" }}
          >
            <img
              src={leetcode}
              alt="leetcode"
              data-aos="zoom-in"
              className="leetcode"
            />
          </a>
        </Row> */}
        <Tooltip anchorSelect=".my-tooltip-leetcode" place="top">
          Click to see my leetcode profile
        </Tooltip>
        {/* <Github /> */}
      </Container>
    </Container>
  );
}

export default About;
