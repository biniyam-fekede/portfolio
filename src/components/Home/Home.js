import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row className="left-side-home">
            <Col md={8} className="home-header">
              <h1 className="heading-name">Biniyam GebreYohannes</h1>

              <div className="sectors">
                <p className="home-description">
                  I’m an aspiring software engineer based in Seattle with
                  experience in Web development, machine learning, and software
                  engineering. I’m driven by a passion for leveraging technology
                  to create meaningful solutions that make a global impact.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="home-about-social">
            <Col md="12">
              <ul className="footer-icons">
                <li className="social-icons">
                  <a
                    href="https://github.com/biniyam-fekede"
                    className="social-icons-home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="mailto:biniyamgebreyohannes@gmail.com"
                    className="social-icons-home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdEmail />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/biniyam-gebreyohannes-5a5883219/"
                    className="social-icons-home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
          <Row className="copyright">
            <Col md="12" className="copyright">
              <p> © 2024 Biniyam Gebreyohannes {year}</p>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
