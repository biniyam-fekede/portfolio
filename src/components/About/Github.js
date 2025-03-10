import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        fontFamily: "Arial",
      }}
    >
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="biniyam-fekede"
        blockSize={15}
        blockMargin={5}
        color="#12c5ce"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
