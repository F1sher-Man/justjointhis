import * as React from "react";
import DropdownLocation from "./DropdownLocation";
import Technologies from "./Technologies";
import Offers from "./Offers";
import MapComponent from "./Map";
import "../../../styles/main/JobOffers/JobOffers.scss";

export interface JobOffersProps {}

const JobOffers: React.FC<JobOffersProps> = () => {
  return (
    <div className="page-container">
      <div className="topbar">
        <DropdownLocation />
        <Technologies />
      </div>
      <div className="content-container">
        <div className="offers">
          <Offers />
        </div>
        <div className="map">
          <MapComponent />
        </div>
      </div>
    </div>
  );
};

export default JobOffers;
