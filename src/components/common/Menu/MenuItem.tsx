import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface MenuItemProps {
  icon: IconProp;
  description: string;
  isSpinnning?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={props.icon}
        spin={props.isSpinnning}
        color={props.isSpinnning ? "red" : "black"}
      />
      <a href={`/${props.description.toLocaleLowerCase().split(" ").join("")}`}>
        {props.description}
      </a>
    </div>
  );
};

export default MenuItem;
