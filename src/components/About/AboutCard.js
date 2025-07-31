import React from "react";
import Card from "react-bootstrap/Card";
import { VscCircle } from "react-icons/vsc";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Syed Ebad Hyder </span>
            from <span className="purple"> Karchi, Pakistan.</span>
            <br />
            I am currently working as a Computer Vision Engineer at Aremak Bilişim Teknolojileri.
            <br />
            I have completed my BS in Computer Engineering with Honor Standing at Middle East Technical University (METU).
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <VscCircle /> Building AI and Computer Vision solutions
            </li>
            <li className="about-activity">
              <VscCircle /> Game Development with Unity
            </li>
            <li className="about-activity">
              <VscCircle /> Machine Learning Research
            </li>
            <li className="about-activity">
              <VscCircle /> Mentoring and continuous learning
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "As long as I live, I have infinite chances"{" "}
          </p>
          <footer className="blockquote-footer">Monkey D. Luffy</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;