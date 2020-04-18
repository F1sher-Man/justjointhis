import * as React from "react";
import "../../../styles/common/Header/Header.scss";
import MenuItem from "../Menu/MenuItem";
import Button from "@material-ui/core/Button";
import ITEMS_MOBILE from "../../../enums/menuitems.const";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  let mobileItems = Object.values(ITEMS_MOBILE);
  mobileItems = mobileItems.filter((item) => item.description !== "Help");
  return (
    <div>
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
          <Button variant="contained" className="myButton">
            <b>Post a Job</b>
          </Button>
          <Button variant="contained" className="myButton-second">
            <b>Sign in ∨</b>
          </Button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Header;
