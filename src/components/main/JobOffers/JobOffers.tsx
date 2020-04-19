import * as React from "react";
import DropdownLocation from "./DropdownLocation";
import '../../../styles/main/JobOffers/JobOffers.scss';

export interface JobOffersProps { }

const JobOffers: React.FC<JobOffersProps> = () => {
 
  return <div className="containerssx">
    <DropdownLocation />


  </div >;
};

export default JobOffers;
