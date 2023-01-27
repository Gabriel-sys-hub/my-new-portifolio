import React from "react";
import "./timelineitem.css";

export default function Timelineitem() {
  const jobs = [
    {
      empresa: "Desrotulando",
      cargo: "Desenvolvedor de Software Junior",
      tempo: "15/12/2021 até 5/12/2022",
    },
    {
      empresa: "Desrotulando",
      cargo: "Desenvolvedor de Software Junior",
      tempo: "15/12/2021 até 5/12/2022",
    },
    {
      empresa: "Desrotulando",
      cargo: "Desenvolvedor de Software Junior",
      tempo: "15/12/2021 até 5/12/2022",
    },
  ];

  return jobs.map((eachitem) => (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <h3>{eachitem.empresa}</h3>
        <h5>{eachitem.cargo}</h5>
        <h5>{eachitem.tempo}</h5>
      </div>
    </div>
  ));
}
