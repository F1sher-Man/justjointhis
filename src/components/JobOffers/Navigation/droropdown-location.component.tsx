/* eslint-disable no-empty-pattern */
import * as React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useState, ReactElement } from "react";

export interface DropdownLocationProps {}

const DropdownLocation = ({}: DropdownLocationProps): ReactElement => {
  const [location, setLocation] = useState("Lokalizacja");
  const [btnVariant, setBtnVariant]: any = useState("secondary");

  function handleLocationChange(city: string) {
    setBtnVariant(city === "Lokalizacja" ? "secondary" : "primary");
    setLocation(city);
  }
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant={btnVariant}
          id="dropdown-basic"
          className="dropdown-btn"
        >
          {location}
        </Dropdown.Toggle>

        {/* ponizej margin na zero bo w innym wypadku bootstrap rzuca bledy do konsoli o cos? */}
        <Dropdown.Menu style={{ margin: "0px" }}>
          <Dropdown.Item onClick={() => handleLocationChange("Trójmiasto")}>
            Trójmiasto
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleLocationChange("Warszawa")}>
            Warszawa
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleLocationChange("Wrocław")}>
            Wrocław
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleLocationChange("Lokalizacja")}>
            Dowolna...
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropdownLocation;
