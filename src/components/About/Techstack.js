import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiCss3,
  DiGit,
  DiHtml5,
  DiJava,
  DiJavascript1,
  DiPython,
  DiReact,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import Tooltip from "react-tooltip";

function Techstack() {
  return (
    <Row className="tech-stack">
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-right">
        <a className="my-tooltip-python" style={{ color: "#98A2B3" }}>
          {" "}
          <DiPython />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-down">
        <a className="my-tooltip-java" style={{ color: "#98A2B3" }}>
          {" "}
          <DiJava />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-down">
        <a className="my-tooltip-ts" style={{ color: "#98A2B3" }}>
          {" "}
          <SiTypescript />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-down">
        <a className="my-tooltip-js" style={{ color: "#98A2B3" }}>
          {" "}
          <DiJavascript1 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-left">
        <a className="my-tooltip-react" style={{ color: "#98A2B3" }}>
          {" "}
          <DiReact />{" "}
        </a>
      </Col>

      <Col xs={4} md={3} className="tech-icons" data-aos="fade-up-right">
        <a className="my-tooltip-html" style={{ color: "#98A2B3" }}>
          {" "}
          <DiHtml5 />{" "}
        </a>
      </Col>
      <Col xs={4} md={3} className="tech-icons" data-aos="fade-up">
        <a className="my-tooltip-git" style={{ color: "#98A2B3" }}>
          {" "}
          <DiGit />{" "}
        </a>
      </Col>
      <Col xs={4} md={3} className="tech-icons" data-aos="fade-up-left">
        <a className="my-tooltip-css" style={{ color: "#98A2B3" }}>
          {" "}
          <DiCss3 />
        </a>
      </Col>
      <Tooltip anchorSelect=".my-tooltip-python" place="middle">
        Python
      </Tooltip>
      <Tooltip anchorSelect=".my-tooltip-java" place="middle">
        Java
      </Tooltip>
      <Tooltip anchorSelect=".my-tooltip-ts" place="middle">
        TypeScript
      </Tooltip>
      <Tooltip anchorSelect=".my-tooltip-js" place="middle">
        JavaScript
      </Tooltip>
      <Tooltip anchorSelect=".my-tooltip-react" place="middle">
        React
      </Tooltip>
      <Tooltip anchorSelect=".my-tooltip-html" place="middle">
        HTML
      </Tooltip>
      <Tooltip anchorSelect=".my-tooltip-git" place="middle">
        Git
      </Tooltip>
      <Tooltip anchorSelect=".my-tooltip-css" place="middle">
        CSS
      </Tooltip>
    </Row>
  );
}

export default Techstack;
