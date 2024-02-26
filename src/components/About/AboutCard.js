import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Fale sobre vc aqui!
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Frase de impacto"{" "}
          </p>
          <footer className="blockquote-footer">Autor</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
