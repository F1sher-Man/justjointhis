import React, { ReactElement } from "react";
import "./tech-stack-level.component.scss";

export interface TechStackLevelProps {
  desc: String;
  level: number;
}

const drawCircles = (level: number, filled?: boolean): any => {
  let circles: Array<any> = [];
  for (let k = 0; k < level; k++) {
    circles.push(
      <div
        key={k}
        className="tech-dot"
        style={{ backgroundColor: filled ? "#ff4081" : "#bfc5d2" }}
      />
    );
  }
  return circles;
};

const TechStackLevel = ({ desc, level }: TechStackLevelProps): ReactElement => {
  return (
    <div className="tech-stack-container">
      <div className="dots-container">
        {drawCircles(level, true)}
        {drawCircles(5 - level)}
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default TechStackLevel;
