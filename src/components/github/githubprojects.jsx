import { React, useEffect, useState } from "react";
/* import axios from "axios"; */
/* import { FaGithubAlt } from "./react-icons/fa"; */
import "./githubprojects.css";
import Button from "../button/button";

export default function Githubprojects() {
  const [userGitRepositories, setUserGitRepositories] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getGitHubRepositoriesData();
  }, []);

  function getGitHubRepositoriesData() {
    fetch("https://api.github.com/users/Gabriel-sys-hub/repos")
      .then((result) => {
        const resultOrderedByDate = result.data
          .sort((a, b) => b.created_at.localeCompare(a.created_at))
          .map((eachItem) => {
            let dataBrLang = eachItem.created_at
              .split("T")[0]
              .split("-")
              .reverse()
              .join("/");
            eachItem.created_at = dataBrLang;

            return eachItem;
          });
        console.log(resultOrderedByDate);
        setUserGitRepositories(resultOrderedByDate);
      });
  }

  return (
    <div className="githubproject-title">
      <div className="githubproject-title-h1">
        <h1>Github Projects / Studies</h1>
      </div>
      <div className="githubprojects">
        <div className="githubprojects-box">
          {userGitRepositories.slice(page, page + 6).map((eachItem) => {
            return (
              <div key={eachItem.id} className="githubproject-card">
                <div>
                  <h3>{eachItem.name}</h3>
                  <h5>Criado em: {dataBrLang}</h5>
                </div>
                <div className="githuburl">
                  <a href={eachItem.html_url} target="_blank" rel="noreferrer">
                    {/*     <FaGithubAlt></FaGithubAlt> */}
                  </a>
                </div>
              </div>
            );
          })}
          <div className="github-next-back">
            <Button
              disabled={page <= 1}
              onClick={() => {
                setPage(page - 6);
              }}
              name="Anterior"
            ></Button>
            <Button
              disabled={page >= userGitRepositories.length - 6}
              onClick={() => {
                setPage(page + 6);
              }}
              name="Próximo"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}
