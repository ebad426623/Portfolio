import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm an AI Engineer who sees the world through algorithms and datasets, 
              but codes with <span className="purple">human-centric passion</span>. 
              My journey began with curiosity and now thrives at the intersection of 
              <i>
                <b className="purple"> computer vision</b>, 
                <b className="purple"> machine learning</b>, and 
                <b className="purple"> real-world problem solving</b>.
              </i>
              <br />
              <br />
              My toolkit spans from building 
              <i>
                <b className="purple"> RAG pipelines</b> and tuning 
                <b className="purple"> Machine Learning models </b>
              </i> 
              to crafting industrial vision systems with 
              <i>
                <b className="purple"> OpenCV</b> and 
                <b className="purple"> Qt</b>.
              </i>
              <br />
              <br />
              When I'm not optimizing neural networks, you'll find me bridging gaps - 
              whether developing <span className="purple">full-stack applications</span>, 
              designing <span className="purple">game mechanics</span> in Unity, or 
              mentoring fellow developers. I believe great technology speaks both 
              <i>
                <b className="purple"> binary</b> and 
                <b className="purple"> human</b>.
              </i>
              <br />
              <br />
              Currently exploring how <span className="purple">AI interpretability </span> 
              can transform industries, one algorithm at a time.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ebad426623"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/syedebadhyder/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ibad.hyder1122/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
