import * as React from "react";
import { useState } from "react";
import DropdownLocation from "./DropdownLocation";
import Technologies from "./Technologies";
import Offers from "./Offers";
import MapComponent from "./Map";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/main/JobOffers/JobOffers.scss";

export interface JobOffersProps {}

const JobOffers: React.FC<JobOffersProps> = () => {
  const [isMapDisplay, setIsMapDisplay] = useState(false);
  const offerStyle = {
    display: isMapDisplay ? "none" : "block",
    width: "100%",
  };
  const mapStyle = {
    display: isMapDisplay ? "inline" : "none",
    width: "100%",
  };
  return (
    <div className="page-container">
      <div className="topbar">
        <DropdownLocation />
        <Technologies />
      </div>
      <div className="content-container">
        <div className="offers" style={offerStyle}>
          <div className="mobile-map-btn" onClick={() => setIsMapDisplay(true)}>
            <FontAwesomeIcon icon={faMap} color="white" size="2x" />
          </div>
          <Offers />
        </div>
        <div className="map" style={mapStyle}>
          <MapComponent />
          <div
            className="mobile-map-btn"
            onClick={() => setIsMapDisplay(false)}
          >
            <FontAwesomeIcon icon={faArrowLeft} color="white" size="2x" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobOffers;
