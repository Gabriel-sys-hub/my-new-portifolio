import React from "react";
import Timelineitem from "../timeline-item/timelineitem";
import "./timeline.css";

export default function Timeline() {
  return (
    <div className="timeline">
      <div className="timeline-box">
        <Timelineitem></Timelineitem>
      </div>
    </div>
  );
}
