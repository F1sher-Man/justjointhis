import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "../../../styles/common/Menu/MenuItem.scss";

export interface MenuItemProps {
  icon: IconProp;
  description: string;
  route: string;
  isSpinnning?: boolean;
  isHeaderItem?: boolean;
  classname?: string;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  let iconClass: string = props.isHeaderItem ? "icon" : "";

  return (
    <div className={props.classname}>
      <FontAwesomeIcon
        className={iconClass}
        icon={props.icon}
        spin={props.isSpinnning}
        color={props.isSpinnning ? "red" : "black"}
      />
      <a href={props.route}>{props.description}</a>
    </div>
  );
};

export default MenuItem;
