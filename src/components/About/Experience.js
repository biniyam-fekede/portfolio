import React from "react";
import Intern1 from "../../Assets/intern2.JPG";
import Intern2 from "../../Assets/intern1.jpg";
import { Container, Col, Row, Card } from "react-bootstrap";
import { GoDotFill } from "react-icons/go";

export const Experience = () => {
  return (
    <Container className="experience-section">
      <Row>
        <Col md="6">
          <Card className="quote-card-view">
            <Card.Body>
              <blockquote className="experience1">
                <h1
                  style={{
                    fontSize: "1.3em",
                    // paddingBottom: "0px",
                    color: "#fff",
                    textAlign: "left",
                  }}
                >
                  Artificial Intelligence and Machine Learning Intern
                </h1>
                <p
                  style={{
                    textAlign: "left",
                    lineHeight: "1.8rem",
                    marginTop: "-8px",
                  }}
                >
                  <em>STEMTAC Foundation - Seattle, WA</em> <br />
                  <i> January 2024 – June 2024</i>
                  <br />
                  <br />
                  <GoDotFill /> Collaborated with a 20-member team to develop
                  and enhance facial recognition software using Python. <br />
                  <GoDotFill /> Designed and optimized a machine learning model
                  for face detection with OpenCV and Azure Custom Vision. <br />
                  <GoDotFill /> Implemented rigorous testing protocols, improved
                  detection efficiency through iterative refinements.
                </p>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} className="img-fluid-intern-container">
          <img
            src={Intern2}
            alt="about"
            className="img-fluid-intern"
            data-aos="fade-up"
          />
        </Col>
      </Row>
      <Row>
        <Col md={5} className="experience1-img">
          <img
            src={Intern1}
            alt="about"
            className="img-fluid-intern"
            style={{ marginTop: "-25px" }}
            data-aos="fade-right"
          />
        </Col>
        <Col md="7">
          <Card className="quote-card-view">
            <Card.Body>
              <blockquote
                className="blockquote mb-0 "
                style={{
                  fontSize: "0.9em",
                  color: "#98A2B3",
                  marginLeft: "-25px",
                  paddingRight: "20px",
                }}
              >
                <h1
                  style={{
                    fontSize: "1.3em",
                    // paddingBottom: "0px",
                    color: "#fff",
                    textAlign: "left",
                  }}
                >
                  Undergraduate Research Intern
                </h1>
                <p
                  style={{
                    textAlign: "left",
                    lineHeight: "1.8rem",
                    marginTop: "-8px",
                  }}
                >
                  <em>
                    Clean Energy Institute, University of Washington - Seattle,
                    WA
                  </em>{" "}
                  <br />
                  <i> June 2024 – August 2024</i>
                  <br />
                  <br />
                  <GoDotFill /> Used Python Pandas to analyze one year of
                  mini-grid customer data, finding key patterns and insights to
                  improve strategic planning and operational efficiency. <br />
                  <GoDotFill /> Developed predictive machine learning models for
                  forecasting electricity demand trends, correlating payment
                  behaviors with temperature and precipitation data, achieving
                  an accuracy of 82%. <br />
                </p>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
