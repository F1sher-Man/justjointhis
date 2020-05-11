import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import "./hamburger-menu-item.component.scss";
// import "../../../styles/common/Menu/MenuItem.scss";
import { ReactElement } from "react";

export interface HamburgerMenuItemProps {
  icon: IconProp;
  description: string;
  route: string;
  isSpinnning?: boolean;
  isHeaderItem?: boolean;
  classname?: string;
}
const HamburgerMenuItem = ({
  icon,
  description,
  route,
  isSpinnning,
  isHeaderItem,
  classname,
}: HamburgerMenuItemProps): ReactElement => {
  let iconClass: string = isHeaderItem ? "icon" : "";

  return (
    <div className={classname}>
      <FontAwesomeIcon
        className={iconClass}
        icon={icon}
        spin={isSpinnning}
        color={isSpinnning ? "red" : "black"}
      />
      <a href={route}>{description}</a>
    </div>
  );
};

export default HamburgerMenuItem;
