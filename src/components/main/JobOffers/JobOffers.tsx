import * as React from "react";
import DropdownLocation from "./DropdownLocation";
import Technologies from "./Technologies";
import '../../../styles/main/JobOffers/JobOffers.scss';

export interface JobOffersProps { }

const JobOffers: React.FC<JobOffersProps> = () => {

  return <div className="containerssx">
    <div className="topbar">
      <DropdownLocation />
      <Technologies />
    </div>


  </div >;
};

export default JobOffers;
