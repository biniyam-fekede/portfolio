import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ProjectCard from "../Projects/ProjectCards";

// Updated Images for Balanced Layout
import projectPlaceholder from "../../Assets/Dr.AI_Assistant.png";
import aiResearchImage from "../../Assets/UE_LAB.png";
import interestsImage from "../../Assets/I_am_reading.png";

function Home() {
  return (
    <section
      style={{
        backgroundColor: "#121212",
        color: "#ffffff",
        paddingBottom: "40px",
      }}
    >
      <Container
        fluid
        className="home-section"
        id="home"
        style={{ fontFamily: "Arial" }}
      >
        <Container className="home-content">
          {/* Bio Section */}
          <Row
            className="left-side-home"
            style={{ textAlign: "center", marginBottom: "30px" }}
          >
            <Col md={8} className="home-header">
              <h1 className="heading-name" style={{ fontWeight: "bold" }}>
                Bini GebreYohannes
              </h1>
              <div className="sectors">
                <p
                  className="home-description"
                  style={{ fontSize: "18px", fontWeight: "bold" }}
                >
                  I'm a Seattle-based software engineer who loves turning ideas
                  into reality with code. Whether it's web development, machine
                  learning, or building scalable software, I'm all about
                  creating tech that makes a real difference.
                </p>
              </div>
            </Col>
          </Row>

          {/* Three Info Cards Section - Titles Above Images */}
          <Row
            className="info-section"
            style={{
              justifyContent: "center",
              textAlign: "center",
              paddingBottom: "40px",
            }}
          >
            {/* What I'm Building Card */}
            {/* <Col md={4} className="project-card" data-aos="fade-up">
              <h2
                style={{
                  textAlign: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                What I'm Building 💡
              </h2>
              <ProjectCard
                imgPath={projectPlaceholder}
                isBlog={false}
                description={
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "16px",
                      fontFamily: "Arial",
                      fontWeight: "normal",
                      color: "#ffffff",
                      lineHeight: "1.8",
                    }}
                  >
                    Ever wondered how much you "could've" saved if you started
                    years ago? Or how much time you’d have spent reading if you
                    read 1 page/day for 20 years? I’m building a "regret
                    calculator app" to answer all those 'what if' questions!
                    It’s more than just a calculator—it's a tool for reflection
                    and better decision-making. Whether it’s savings,
                    productivity, or lost time, this app helps visualize what
                    could have been. Data-driven insights will provide
                    meaningful takeaways so users can plan their future wisely.
                  </p>
                }
              />
            </Col> */}

            <Col md={4} className="project-card" data-aos="fade-up">
              <h2
                style={{
                  textAlign: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                What I'm Building 💡
              </h2>
              <ProjectCard
                imgPath={projectPlaceholder}
                isBlog={false}
                description={
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "16px",
                      fontFamily: "Arial",
                      fontWeight: "normal",
                      color: "#ffffff",
                      lineHeight: "1.8",
                    }}
                  >
                    Dr.AI Assistant is a state-of-the-art model fine-tuned to
                    support health professionals in Ethiopia. It assists in
                    diagnosing patients in areas where fully trained doctors are
                    scarce, with the goal of reducing the patient-to-doctor
                    ratio from roughly 1:9,000 to 1:1,000 as recommended by WHO.
                    This tool leverages advanced AI to provide reliable
                    insights, aiming to bridge critical gaps in healthcare
                    accessibility.
                  </p>
                }
              />
            </Col>
            {/* What I'm Working On Card */}
            <Col md={4} className="project-card" data-aos="fade-up">
              <h2
                style={{
                  textAlign: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                What I'm Working On 🤖
              </h2>
              <ProjectCard
                imgPath={aiResearchImage}
                isBlog={false}
                description={
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "16px",
                      fontFamily: "Arial",
                      fontWeight: "normal",
                      color: "#ffffff",
                      lineHeight: "1.8",
                    }}
                  >
                    I'm deep into an "AI research project" that I "can't" really
                    talk about yet 👀... but it's super interesting! Stay
                    tuned—I'll share the "research paper" once it's out! 🚀 This
                    research involves advanced AI models and analyzing
                    real-world applications. We are pushing the limits of what
                    AI can do and exploring ethical AI implications. The final
                    findings will be a valuable contribution to AI development
                    and best practices. If you're curious about groundbreaking
                    AI research, you won’t want to miss this.
                  </p>
                }
              />
            </Col>

            {/* What I'm Into Card - Enhanced Content */}
            <Col md={4} className="project-card" data-aos="fade-up">
              <h2
                style={{
                  textAlign: "center",
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                }}
              >
                What I'm Into 📚
              </h2>
              <ProjectCard
                imgPath={interestsImage}
                isBlog={false}
                description={
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "16px",
                      fontFamily: "Arial",
                      fontWeight: "normal",
                      color: "#ffffff",
                      lineHeight: "1.8",
                    }}
                  >
                    Right now, I'm diving into "AI & software engineering
                    books," keeping up with "TechCrunch," and exploring how AI
                    is shaping the future. I also research AI advancements and
                    summarize key findings for professionals. If you're
                    interested in AI insights and discussions, check out my page
                    here:
                    <br />
                    <a
                      href="https://www.linkedin.com/in/bin-lab/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#4da6ff",
                        fontWeight: "bold",
                        display: "block",
                        marginTop: "10px",
                      }}
                    >
                      https://www.linkedin.com/in/bin-lab/
                    </a>
                  </p>
                }
              />
            </Col>
          </Row>

          {/* Contact Links - Moved Below Cards with Padding */}
          <Row
            className="home-about-social"
            style={{
              textAlign: "center",
              paddingTop: "30px",
              paddingBottom: "20px",
            }}
          >
            <Col md="12">
              <ul className="footer-icons">
                <li className="social-icons">
                  <a
                    href="https://github.com/biniyam-fekede"
                    className="social-icons-home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <AiFillGithub size={22} />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="mailto:biniyamgebreyohannes@gmail.com"
                    className="social-icons-home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MdEmail size={22} />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/biniyam-gebreyohannes-5a5883219/"
                    className="social-icons-home"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn size={22} />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
