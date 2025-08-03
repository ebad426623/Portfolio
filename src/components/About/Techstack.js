import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiPostgresql,
  SiFirebase,
  SiNextdotjs,
  SiJson,
  SiPhp,
  SiMysql,
  SiScikitlearn,
  SiOpencv,
  SiPytorch,
  SiTensorflow,
  SiDjango,
  SiUnity,
  SiYolo,
  SiReactrouter,
  SiLatex,
  SiQt,
  SiFlutter,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming Languages */}
      <Col xs={4} md={2} className="tech-icons" title="C++">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Java">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PHP">
        <SiPhp />
      </Col>

      {/* Web Technologies */}
      <Col xs={4} md={2} className="tech-icons" title="HTML5">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS3">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Next.js">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React Router">
        <SiReactrouter />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Django">
        <SiDjango />
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons" title="MongoDB">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PostgreSQL">
        <SiPostgresql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Firebase">
        <SiFirebase />
      </Col>

      {/* AI/ML Libraries */}
      <Col xs={4} md={2} className="tech-icons" title="TensorFlow">
        <SiTensorflow />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="PyTorch">
        <SiPytorch />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Scikit-learn">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="OpenCV">
        <SiOpencv />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="YOLO">
        <SiYolo />
      </Col>

      {/* Mobile & Desktop Frameworks */}
      <Col xs={4} md={2} className="tech-icons" title="Flutter">
        <SiFlutter />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Qt">
        <SiQt />
      </Col>

      {/* Game Development */}
      <Col xs={4} md={2} className="tech-icons" title="Unity">
        <SiUnity />
      </Col>

      {/* Other Technologies */}
      <Col xs={4} md={2} className="tech-icons" title="JSON">
        <SiJson />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="LaTeX">
        <SiLatex />
      </Col>
    </Row>
  );
}

export default Techstack;