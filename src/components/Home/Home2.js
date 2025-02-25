import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiLogoMongodb } from "react-icons/bi";
import { FaJava, FaPython } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { SiPostgresql, SiTailwindcss } from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import Tilt from "react-parallax-tilt";
import myImg from "../../Assets/developer.jpg";
import ContactMe from "../ContactMe";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="home2-wrapper">
          <h1 className="services-heading">Services I Provide</h1>
          <Col md={7} className="home-about-description">
            <h3 className="home-about-body">
              I'm a dedicated full-stack web developer with{" "}
              <strong>over a year</strong> of hands-on experience crafting
              responsive and dynamic websites. <br />
              <span style={{ marginTop: "25px" }} className="expertise-title">
                Here are my areas of expertise:{" "}
              </span>
              <div className="flex-container">
                <div style={{ marginTop: "5px" }} className="expertise-area">
                  <p className="flex-item2 items">
                    <FaPython
                      style={{ marginRight: "8px", marginBottom: "2.3px" }}
                    />
                    Python{" "}
                  </p>
                  <p className="flex-item2 items">
                    <FaJava
                      style={{ marginRight: "8px", marginBottom: "2.3px" }}
                    />
                    Java{" "}
                  </p>
                  <p className="flex-item2 items">
                    <IoLogoReact
                      style={{ marginRight: "8px", marginBottom: "2.3px" }}
                    />
                    ReactJS{" "}
                  </p>
                  <p className="flex-item2 items">
                    <SiTailwindcss
                      style={{ marginRight: "8px", marginBottom: "2.3px" }}
                    />
                    TailwindCSS
                  </p>
                </div>
                <div className="flex-item2 flex-item2-div2">
                  <p className="flex-item2 items">
                    <TbBrandTypescript
                      style={{ marginRight: "8px", marginBottom: "2.3px" }}
                    />
                    Typescript{" "}
                  </p>
                  <p className="flex-item2 items">
                    <SiPostgresql
                      style={{ marginRight: "8px", marginBottom: "2.3px" }}
                    />
                    PostgreSQL{" "}
                  </p>
                  <p className="flex-item2">
                    <BiLogoMongodb
                      style={{ marginRight: "8px", marginBottom: "2.3px" }}
                    />
                    MongoDB{" "}
                  </p>
                </div>
              </div>
            </h3>
          </Col>
          <Col md={5} className="myAvtar">
            <Tilt className="myAvtar">
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
      <ContactMe />
      <footer style={{ fontFamily: "Arial" }}>{/* Footer content */}</footer>
    </Container>
  );
}
export default Home2;
