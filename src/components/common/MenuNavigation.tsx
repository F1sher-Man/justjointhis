import * as React from "react";
import { useState } from "react";
import MenuItem from "./detailed/MenuItem";
import "../../styles/BurgerMenu.scss";
import { slide as MenuComponent } from "react-burger-menu";
import ITEMS_MOBILE from "../../enums/menuitems.const";
import { ITEMS_DESKTOP } from "../../enums/menuitems.const";

export interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  const [windowSize, setWindowSize] = useState(
    window.matchMedia("(max-width: 700px)")
  );
  function updateView() {
    setWindowSize(window.matchMedia("(max-width: 700px)"));
  }
  windowSize.addListener(updateView);
  let items = Object.values(ITEMS_DESKTOP);
  if (windowSize.matches) items = Object.values(ITEMS_MOBILE);
  return (
    <MenuComponent right>
      <h2>Menu</h2>
      <hr />
      <div className="menu-item">
        {items.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            description={item.description}
            isSpinnning={item.isSpinning}
          />
        ))}
      </div>
    </MenuComponent>
  );
};

export default Menu;
