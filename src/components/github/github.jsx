import { React, useEffect, useState } from "react";
import axios from "axios";
import "./github.css";

export default function Github() {
  const [userGit, setUserGit] = useState([]);
  const [userGitRepositories, setUserGitRepositories] = useState([]);

  useEffect(() => {
    getGitHubUserData();
    getGitHubRepositoriesData();
  }, []);

  function getGitHubUserData() {
    axios.get("https://api.github.com/users/Gabriel-sys-hub").then((result) => {
      setUserGit(result.data);
    });
  }
  function getGitHubRepositoriesData() {
    axios
      .get("https://api.github.com/users/Gabriel-sys-hub/repos")
      .then((result) => {
        setUserGitRepositories(result.data);
      });
  }

  return (
    <div className="github-content">
      <div className="user-card">
        <div className="user-image">
          <img src={userGit.avatar_url} />
        </div>
        <div>
          <h2>{userGit.name}</h2>
          <h4 className="user-bio">{userGit.bio}</h4>
          <h4 className="user-bio">{userGit.location}</h4>

          <h5 className="user-bio-github">{userGit.html_url}</h5>
        </div>
      </div>
    </div>
  );
}
