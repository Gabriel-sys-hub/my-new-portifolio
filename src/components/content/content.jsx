import React from "react";
import "./content.css";

export default function Content() {
  return (
    <div className="introducing-content-box">
      <div className="introducing-content">
        <h5 className="first-intro">Oi, meu nome é</h5>
        <h1 className="name">Gabriel Pimentel.</h1>
        <h1 className="second-intro">
          Trabalho desenvolvendo aplicações web e mobile.
        </h1>
        <div className="thrird-intro-box">
          <h5>
            Sou um engenheiro de software especializado em criar experiências
            digitais. Atualmente meu foco é desenvolver aplicações pessoais para
            fins de estudo / aprendizado.
          </h5>
        </div>
      </div>
    </div>
  );
}
