/* eslint-disable no-empty-pattern */
// ss
import * as React from "react";
import MenuItem from "./HamburgerMenuItem/hamburger-menu-item.component";
import "./hamburger-menu.component.scss";
import { slide as MenuComponent } from "react-burger-menu";
import ITEMS_MOBILE from "../../enums/menuitems.const";
import { ITEMS_DESKTOP } from "../../enums/menuitems.const";
import { ReactElement } from "react";

export interface HamburgerMenuProps {}

const HamburgerMenuComponent = ({}: HamburgerMenuProps): ReactElement => {
  const desktopItems = Object.values(ITEMS_DESKTOP);
  const mobileItems = Object.values(ITEMS_MOBILE);
  return (
    <MenuComponent right>
      <h2>Menu</h2>
      <hr />
      <div className="menu-item">
        <div className="desktop">
          {desktopItems.map((item, index) => (
            <MenuItem
              key={index}
              route={item.route}
              icon={item.icon}
              description={item.description}
              isSpinnning={item.isSpinning}
            />
          ))}
        </div>
        <div className="mobile">
          {mobileItems.map((item, index) => (
            <MenuItem
              key={index}
              route={item.route}
              icon={item.icon}
              description={item.description}
              isSpinnning={item.isSpinning}
            />
          ))}
        </div>
      </div>
    </MenuComponent>
  );
};

export default HamburgerMenuComponent;
