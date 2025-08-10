import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import mask_detection from "../../Assets/Projects/mask_detection.png";
import laundry_buddy from "../../Assets/Projects/laundry_buddy.png";

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
          { 
            
          <><Col md={4} className="project-card">
              <ProjectCard
                imgPath={mask_detection}
                isBlog={false}
                title="Mask Detection"
                description="A real-time mask detection system using YOLO for AI-powered face mask recognition. Built with FastAPI for the backend, React for the frontend, and Docker for containerization. Deployed on Render for scalable cloud access, this tool helps enforce public safety by detecting mask compliance in live video streams."
                ghLink="https://github.com/ebad426623/Mask_Detector_Backend"
                demoLink="https://youtu.be/qNxTTSTxODc" />
            </Col><Col md={4} className="project-card">
                <ProjectCard
                  imgPath={laundry_buddy}
                  isBlog={false}
                  title="LaundryBuddy++"
                  description="The ultimate app to manage your clothes, understand care labels, find compatible laundry batches, and get personalized style advice. Features smart wardrobe management, AI-powered label scanning, automatic laundry batch creation, and intelligent outfit recommendations. Never ruin your clothes again!"
                  ghLink={null} // No GitHub link available
                  demoLink="https://senior.ceng.metu.edu.tr/2025/LB++/" />
              </Col></>

          }
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
