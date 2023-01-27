import { React, useEffect, useState } from "react";
/* import { DiJsBadge, DiReact } from "./react-icons/di";
import { SiFlutter, SiDart, SiTypescript } from "./react-icons/si";
import { FaNode } from "./react-icons/fa"; */
/* import axios from "axios"; */
import "./github.css";

export default function Github() {
  const [userGit, setUserGit] = useState([]);

  useEffect(() => {
    getGitHubUserData();
  }, []);

  function getGitHubUserData() {
    fetch("https://api.github.com/users/Gabriel-sys-hub").then((result) => {
      setUserGit(result.data);
    });
  }
  return (
    <div className="github-content">
      <div className="user-card">
        <div className="user-image">
          <img src={userGit.avatar_url} />
        </div>
        <div className="user-bio-github-box">
          <div>
            <h2 className="user-bio">{userGit.bio}</h2>
            <h4 className="user-bio">{userGit.location}</h4>
            <h5 className="user-bio-github">{userGit.html_url}</h5>
          </div>
          <div className="user-stacks">
            <SiDart className="user-stacks-icons"></SiDart>
            <FaNode className="user-stacks-icons"></FaNode>
            <DiJsBadge className="user-stacks-icons"></DiJsBadge>
            <DiReact className="user-stacks-icons"></DiReact>
            <SiFlutter className="user-stacks-icons"></SiFlutter>
            <SiTypescript className="user-stacks-icons"></SiTypescript>
          </div>
        </div>
      </div>
    </div>
  );
}
