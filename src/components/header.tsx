import * as React from "react";
import { slide as Menu } from "react-burger-menu";
import "../styles/BurgerMenu.css";
import "../styles/Header.css";
import MenuItem from "./detailed/menuItem";
import {
  faNewspaper,
  faLink,
  faBriefcase,
  faBuilding,
  faQuestionCircle,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div>
      <Menu right>
        <h2>Menu</h2>
        <hr />
        <div className="menu-item">
          <MenuItem icon={faLink} description={"Matchmaking"} />
          <MenuItem icon={faBriefcase} description={"Job offers"} />
          <MenuItem icon={faBuilding} description={"Brand Stories"} />
          <MenuItem icon={faNewspaper} description={"Just Geek IT"} />
          <MenuItem
            icon={faStarOfLife}
            description={"LIVE"}
            isSpinnning={true}
          />
          <MenuItem icon={faQuestionCircle} description={"Help"} />
        </div>
      </Menu>
      <h1 className="header-sign">justjoin.this</h1>
      <hr />
    </div>
  );
};

export default Header;
