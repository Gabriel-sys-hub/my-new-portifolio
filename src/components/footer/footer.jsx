import React from "react";
import "./fotter.css";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="fotter-icons">
        <FaGithubAlt className="github"></FaGithubAlt>

        <FaLinkedin className="linkedin"></FaLinkedin>

        <h5 className="trace"></h5>
      </div>
      <div>
        <h5 className="email">gabrielfernandessilva.ba@gmail.com</h5>
        <h5 className="trace"></h5>
      </div>
    </div>
  );
}
