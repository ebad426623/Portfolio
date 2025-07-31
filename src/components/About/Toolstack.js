import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiJupyter,
  SiDigitalocean,
  SiFigma,
  SiClickup,
  SiLinux,
  SiWindows,
  SiPycharm,
  SiDocker,
  SiSlack,
} from "react-icons/si";

// Custom RoboFlow Icon Component
function RoboFlowIcon() {
  return (
    <div style={{ 
      fontSize: "4.5rem",
      fontWeight: "bold", 
      color: "#ffffffff",
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      lineHeight: '1.5'
    }}>
      RF
    </div>
  );
}

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Development Environments & IDEs */}
      <Col xs={4} md={2} className="tech-icons" title="VS Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PyCharm">
        <SiPycharm />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jupyter">
        <SiJupyter />
      </Col>

      {/* Version Control & Collaboration */}
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <SiGithub />
      </Col>

      {/* DevOps & Deployment */}
      <Col xs={4} md={2} className="tech-icons" title="Docker">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="DigitalOcean">
        <SiDigitalocean />
      </Col>

      {/* API & Testing Tools */}
      <Col xs={4} md={2} className="tech-icons" title="Postman">
        <SiPostman />
      </Col>

      {/* Project Management & Design */}
      <Col xs={4} md={2} className="tech-icons" title="ClickUp">
        <SiClickup />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Figma">
        <SiFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Slack">
        <SiSlack />
      </Col>

      {/* AI/ML Specialized Tools */}
      <Col xs={4} md={2} className="tech-icons" title="RoboFlow">
        <RoboFlowIcon />
      </Col>

      {/* Operating Systems */}
      <Col xs={4} md={2} className="tech-icons" title="Linux">
        <SiLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Windows">
        <SiWindows />
      </Col>
    </Row>
  );
}

export default Toolstack;