import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mask_detection from "../../Assets/Projects/mask_detection.png";
import laundry_buddy from "../../Assets/Projects/laundry_buddy.png";
import flappy_bird from "../../Assets/Projects/flappy_bird.png";
import balloon_splash from "../../Assets/Projects/balloon_splash.png";
import profile_laser from "../../Assets/Projects/profile_laser.png";
import error_map from "../../Assets/Projects/error_map.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={error_map}
              isBlog={false}
              title="Error Map"
              description="A modular C++ application built with OOP principles and a QT GUI for high-speed industrial inspection. Interfaces with Hikrobot 3D laser scanners and OPT PCP structured light to capture surface profiles and generate precise error maps, detecting sub-millimeter defects invisible to the naked eye."
              ghLink={null}
              demoLink="https://youtu.be/Tn4axLMsB98"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={profile_laser}
              isBlog={false}
              title="3D Laser Profile Sensor"
              description="Developed a modular C++ application using OOP principles to interface with the Hikrobot 3D Laser Profile Sensor SDK. Designed a structured QT-based GUI for real-time control, emphasizing maintainability through encapsulation, abstraction, and reusable components."
              ghLink={null}
              demoLink="https://youtu.be/ynnqgplYaPY"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mask_detection}
              isBlog={false}
              title="Mask Detection"
              description="A real-time mask detection system using YOLO for AI-powered face mask recognition. Built with FastAPI for the backend, React for the frontend, and Docker for containerization. Deployed on Render for scalable cloud access, this tool helps enforce public safety by detecting mask compliance in live video streams."
              ghLink="https://github.com/ebad426623/Mask_Detector_Backend"
              demoLink="https://youtu.be/qNxTTSTxODc"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={laundry_buddy}
              isBlog={false}
              title="LaundryBuddy++"
              description="The ultimate app to manage your clothes, understand care labels, find compatible laundry batches, and get personalized style advice. Features smart wardrobe management, AI-powered label scanning, automatic laundry batch creation, and intelligent outfit recommendations. Never ruin your clothes again!"
              ghLink={null}
              demoLink="https://senior.ceng.metu.edu.tr/2025/LB++/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flappy_bird}
              isBlog={false}
              title="Flappy Bird Lite"
              description="A lightweight Unity/C# implementation of the classic Flappy Bird game with custom physics and scoring system. Features smooth gameplay, responsive controls, and adjustable difficulty levels. Developed as an exercise in game mechanics and Unity development."
              ghLink="https://github.com/ebad426623/Flappy-Bird-Lite"
              demoLink={null}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={balloon_splash}
              isBlog={false}
              title="Balloon Splash (Mindstorm Studios Internship)"
              description="Developed during my internship at Mindstorm Studios, this hyper-casual 2D Android game features slingshot mechanics built with Unity/C# using OOP principles. Managed the full development cycle from design to testing, collaborating via version control. A fun, addictive game with colorful visuals and satisfying gameplay mechanics."
              ghLink="https://github.com/ebad426623/Balloon-Splash"
              demoLink={null}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;