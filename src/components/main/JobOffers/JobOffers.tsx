import * as React from "react";
import DropdownLocation from "./DropdownLocation";
import Technologies from "./Technologies";
import '../../../styles/main/JobOffers/JobOffers.scss';

export interface JobOffersProps { }

const JobOffers: React.FC<JobOffersProps> = () => {

  return <div className="page-container">
    <div className="topbar">
      <DropdownLocation />
      <Technologies />
    </div>
    <div className="content-container">
      <div className="offers">
        ppp<br />
        pp<br />
        ppp<br />
        pp<br />ppp<br />
        pp<br />
        ppp<br />
        pp<br />
        ppp<br />
        pp<br />ppp<br />
        pp<br />ppp<br />
        pp<br />
        ppp<br />
        pp<br />ppp<br />
        pp<br />ppp<br />
        pp<br />
        ppp<br />
        pp<br />ppp<br />
        pp<br />ppp<br />
        pp<br />
        ppp<br />
        pp<br />ppp<br />
        pp<br />ppp<br />
        pp<br />
        ppp<br />
        pp<br />ppp<br />
        pp<br />ppp<br />
        pp<br />
        ppp<br />
        pp<br />ppp<br />
        pp<br />ppp<br />
        pp<br />
        ppp<br />
        pp<br />ppp<br />
        pp<br />
      </div>
      <div className="map">
        ss
      </div>
    </div>


  </div >;
};

export default JobOffers;
