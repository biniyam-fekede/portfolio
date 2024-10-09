import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiAmazonec2,
  SiAmazons3,
  SiMicrosoftazure,
  SiOpencv,
  SiPandas,
  SiVisualstudiocode,
} from "react-icons/si";

import { DiGithubBadge } from "react-icons/di";
import Tooltip from "react-tooltip";

function Toolstack() {
  return (
    <Row
      className="tech-stack"
      // style={{ justifyContent: "center", paddingBottom: "50px" }}
    >
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <a className="my-tooltip-opencv" style={{ color: "#98A2B3" }}>
          {" "}
          <SiOpencv />{" "}
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <a className="my-tooltip-m-azure" style={{ color: "#98A2B3" }}>
          {" "}
          <SiMicrosoftazure />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <a className="my-tooltip-c2" style={{ color: "#98A2B3" }}>
          {" "}
          <SiAmazonec2 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <a className="my-tooltip-s3" style={{ color: "#98A2B3" }}>
          {" "}
          <SiAmazons3 />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="fade-up">
        <a className="my-tooltip-pandas" style={{ color: "#98A2B3" }}>
          {" "}
          <SiPandas />
        </a>
      </Col>

      <Col xs={4} md={4} className="tech-icons" data-aos="fade-right">
        <a className="my-tooltip-git" style={{ color: "#98A2B3" }}>
          {" "}
          <DiGithubBadge />
        </a>
      </Col>
      <Col xs={4} md={4} className="tech-icons" data-aos="fade-left">
        <a className="my-tooltip-vscode" style={{ color: "#98A2B3" }}>
          {" "}
          <SiVisualstudiocode />
        </a>
      </Col>

      <Tooltip anchorSelect=".my-tooltip-opencv" place="middle">
        OpenCV
      </Tooltip>
      <Tooltip anchorSelect=".my-tooltip-m-azure" place="middle">
        Microsoft Azure
      </Tooltip>
      <Tooltip anchorSelect=".my-tooltip-c2" place="middle">
        Amazon EC2
      </Tooltip>
      <Tooltip anchorSelect=".my-tooltip-s3" place="middle">
        Amazon S3
      </Tooltip>
      <Tooltip anchorSelect=".my-tooltip-pandas" place="middle">
        Pandas
      </Tooltip>
      <Tooltip anchorSelect=".my-tooltip-git" place="middle">
        Git
      </Tooltip>
      <Tooltip anchorSelect=".my-tooltip-vscode" place="middle">
        VS Code
      </Tooltip>
    </Row>
  );
}

export default Toolstack;
