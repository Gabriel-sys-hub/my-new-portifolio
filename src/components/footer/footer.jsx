import React from "react";
import "./fotter.css";
/* import { FaGithubAlt, FaLinkedin } from "./react-icons/fa"; */

export default function Footer() {
  return (
    <div className="footer">
      <div className="fotter-icons">
       {/*  <a
          href="https://github.com/Gabriel-sys-hub/"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubAlt className="github" role="button"></FaGithubAlt>
        </a>
        <a
          href="https://www.linkedin.com/in/gabrielpfernandes/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="linkedin"></FaLinkedin>
        </a> */}

        <h5 className="trace"></h5>
      </div>
      <div>
        <h5 className="email">gabrielfernandessilva.ba@gmail.com</h5>
        <h5 className="trace"></h5>
      </div>
    </div>
  );
}
