/* eslint-disable no-empty-pattern */
import * as React from "react";
import "./navigation.component.scss";
import MenuItem from "../HamburgerMenu/HamburgerMenuItem/hamburger-menu-item.component";
import ITEMS_MOBILE from "../../enums/menuitems.const";
import { ReactElement, useState } from "react";
import Login from "./Account/login.component";
import Register from "./Account/register.component";

export interface NavigationComponentProps {}

const NavigationComponent = ({}: NavigationComponentProps): ReactElement => {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);
  const changeOpenLoginDialog = (): void => {
    setOpenLogin(!openLogin);
  };
  const changeOpenRegisterDialog = (): void => {
    setOpenRegister(!openRegister);
  };
  const switchDialogs = (): void => {
    setOpenLogin(!openLogin);
    setOpenRegister(!openRegister);
  };

  let mobileItems = Object.values(ITEMS_MOBILE);
  mobileItems = mobileItems.filter((item) => item.description !== "Help");
  return (
    <div className="header-wrapper">
      <div className="item-container">
        <p className="header-sign">
          <b>justjoin.this</b>
        </p>
        <div className="nav-items">
          {mobileItems.map((item, index) => (
            <MenuItem
              classname={"nav-items-item"}
              key={index}
              route={item.route}
              icon={item.icon}
              description={item.description}
              isSpinnning={item.isSpinning}
              isHeaderItem={true}
            />
          ))}
        </div>
        <div className="btn-items">
          <Login
            isOpen={openLogin}
            changeIsOpen={changeOpenLoginDialog}
            switchDialogs={switchDialogs}
          />
          <Register
            isOpen={openRegister}
            changeIsOpen={changeOpenRegisterDialog}
            switchDialogs={switchDialogs}
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default NavigationComponent;
