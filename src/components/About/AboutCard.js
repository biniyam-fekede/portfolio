import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote
          className="blockquote mb-0 "
          style={{
            fontSize: "0.9em",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1 className="project-heading">
            Know Who <strong className="purple">I Am </strong>
          </h1>
          <p
            style={{
              textAlign: "center",
              lineHeight: "1.8rem",
              color: "#98A2B3",
            }}
          >
            <span className="flex-item">
              Greetings! I’m Biniyam Gebreyohannes,
            </span>{" "}
            <br />
            originally from the vibrant city of Addis Ababa. My academic journey
            began at North Seattle College from 2022 to 2024, where I graduated
            with a commendable GPA of 3.9. Currently, I’m a junior at the Paul
            G. Allen School of Computer Science at the University of Washington,
            aiming to graduate in June 2026.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
