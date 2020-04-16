import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "../../../styles/common/Menu/MenuItem.scss";

export interface MenuItemProps {
  icon: IconProp;
  description: string;
  isSpinnning?: boolean;
  classname?: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  return (
    <div className={props.classname}>
      <FontAwesomeIcon
        className={"icon"}
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
