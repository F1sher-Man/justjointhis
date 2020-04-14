import * as React from "react";
import MenuItem from "./detailed/MenuItem";
import "../../styles/BurgerMenu.css";
import { slide as MenuComponent } from "react-burger-menu";
import ITEMS_MOBILE from "../../enums/menuitems.const";

export interface MenuProps {}

const Menu: React.FC<MenuProps> = () => {
  return (
    <MenuComponent right>
      <h2>Menu</h2>
      <hr />
      <div className="menu-item">
        <MenuItem
          icon={ITEMS_MOBILE.MATCHMAKING.icon}
          description={ITEMS_MOBILE.MATCHMAKING.description}
        />
        <MenuItem
          icon={ITEMS_MOBILE.JOB_OFFERS.icon}
          description={ITEMS_MOBILE.JOB_OFFERS.description}
        />
        <MenuItem
          icon={ITEMS_MOBILE.BRAND_STORIES.icon}
          description={ITEMS_MOBILE.BRAND_STORIES.description}
        />
        <MenuItem
          icon={ITEMS_MOBILE.JUST_GEEK_IT.icon}
          description={ITEMS_MOBILE.JUST_GEEK_IT.description}
        />
        <MenuItem
          icon={ITEMS_MOBILE.LIVE.icon}
          description={ITEMS_MOBILE.LIVE.description}
          isSpinnning={true}
        />
        <MenuItem
          icon={ITEMS_MOBILE.HELP.icon}
          description={ITEMS_MOBILE.HELP.description}
        />
      </div>
    </MenuComponent>
  );
};

export default Menu;
