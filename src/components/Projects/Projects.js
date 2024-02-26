import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          Meus trabalhos <strong className="purple">recentes </strong>
        </h1>
        <p style={{ color: "white" }}>
          Alguns projetos da minha autoria
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="NOME"
              description="DESCRIÇÃO"
              ghLink="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="NOME"
              description="DESCRIÇÃO"
              ghLink="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="NOME"
              description="DESCRIÇÃO"
              ghLink="https://github.com/"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="NOME"
              description="DESCRIÇÃO"
              ghLink="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="NOME"
              description="DESCRIÇÃO"
              ghLink="https://github.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="NOME"
              description="DESCRIÇÃO"
              ghLink="https://github.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
