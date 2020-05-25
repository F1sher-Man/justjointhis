/* eslint-disable no-empty-pattern */
import * as React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, ReactElement } from "react";

import "./navigation.shared.scss";

export interface DropdownProps {
  defaultItem: string;
  items: Array<string>;
}

const DropdownComponent = ({
  defaultItem,
  items,
}: DropdownProps): ReactElement => {
  const [currentItem, setCurrentItem] = useState(defaultItem);
  const [btnVariant, setBtnVariant]: any = useState("secondary");

  function handleItemChange(item: string) {
    setBtnVariant(item === defaultItem ? "secondary" : "primary");
    setCurrentItem(item);
  }
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant={btnVariant}
          id="dropdown-basic"
          className="dropdown-btn"
        >
          {currentItem}
        </Dropdown.Toggle>

        {/* ponizej margin na zero bo w innym wypadku bootstrap rzuca bledy do konsoli o cos? */}
        <Dropdown.Menu style={{ margin: "0px" }}>
          {items.map((item, index) => {
            return (
              <Dropdown.Item key={index} onClick={() => handleItemChange(item)}>
                {item}
              </Dropdown.Item>
            );
          })}
          <Dropdown.Item onClick={() => handleItemChange(defaultItem)}>
            Dowolna...
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownComponent;
