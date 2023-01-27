import React from "react";
import { React, useEffect, useState } from "react";

export default function Githubprojects() {
  const [userGitRepositories, setUserGitRepositories] = useState([]);

  useEffect(() => {
    getGitHubRepositoriesData();
  }, []);

  function getGitHubRepositoriesData() {
    axios
      .get("https://api.github.com/users/Gabriel-sys-hub/repos")
      .then((result) => {
        setUserGitRepositories(result.data);
      });
  }

  return (
    <div>
      <div></div>
    </div>
  );
}
