import * as React from "react";
import { slide as Menu } from "react-burger-menu";
import "../styles/BurgerMenu.css";
import "../styles/Header.css";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div>
      <Menu right>
        <h2>Menu</h2>
        <hr />
        <div>
          <svg focusable="false" aria-hidden="true">
            <path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path>
          </svg>
          <a id="matchmaking" className="menu-item" href="/">
            Matchmaking
          </a>
        </div>

        <div>
          <svg focusable="false" aria-hidden="true">
            <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path>
          </svg>
          <a id="jobOffers" className="menu-item" href="/about">
            Job offers
          </a>
        </div>

        <div>
          <svg focusable="false" aria-hidden="true">
            <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"></path>
          </svg>
          <a id="brandStories" className="menu-item" href="/contact">
            Brand Stories
          </a>
        </div>

        <div>
          <FontAwesomeIcon icon={faNewspaper} />
          <a id="justGeekIT" className="menu-item" href="/contact">
            Just Geek IT
          </a>
        </div>
        <a id="live" className="menu-item" href="/contact">
          LIVE
        </a>
        <div>
          <svg focusable="false" aria-hidden="true">
            <path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path>
          </svg>
          <a id="help" className="menu-item" href="/contact">
            Help
          </a>
        </div>
      </Menu>
      <h1 className="header-sign">justjoin.this</h1>
      <hr />
    </div>
  );
};

export default Header;
