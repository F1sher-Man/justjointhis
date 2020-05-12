/* eslint-disable no-empty-pattern */
import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TECH } from "../../../enums/tech.const";
import { useState, ReactElement } from "react";

import "./navigation.shared.scss";

export interface TechnologiesProps {}

const Technologies = ({}: TechnologiesProps): ReactElement => {
  const [currentTech, setCurrentTech] = useState("all");
  let tech = Object.values(TECH);

  function handleTechChange(tech: string) {
    setCurrentTech(tech);
  }
  return (
    <div className="container">
      <div className="round" onClick={() => handleTechChange("all")}>
        All
      </div>
      {tech.map((item, index) => (
        <div
          key={index}
          color="green"
          className={item.value === currentTech ? "round-active" : "round"}
          onClick={() => handleTechChange(item.value)}
        >
          <FontAwesomeIcon size="2x" icon={item.icon} />
        </div>
      ))}
    </div>
  );
};

export default Technologies;
