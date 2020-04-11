import * as React from "react";
import { slide as Menu } from "react-burger-menu";
import "../styles/BurgerMenu.css";
import "../styles/Header.css";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className="container">
      <Menu right>
        <h2>Menu</h2>

        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
      </Menu>
      <h1 className="header-sign">justjointhat</h1>
    </div>
  );
};

export default Header;
