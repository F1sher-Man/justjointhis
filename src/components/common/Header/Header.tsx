import * as React from "react";
import "../../../styles/common/Header/Header.scss";

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div>
      <h1 className="header-sign">justjoin.this</h1>
      <hr />
    </div>
  );
};

export default Header;
