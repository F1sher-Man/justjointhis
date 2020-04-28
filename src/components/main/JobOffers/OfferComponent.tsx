import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreativeCommonsSampling } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons";
import "../../../styles/main/JobOffers/Offers.scss";

export interface OfferProps {}

const Offer: React.FC<OfferProps> = () => {
  return (
    <div className="offer">
      <div className="strip-icon">
        <div className="strip" />
        <div className="company-icon">
          <FontAwesomeIcon icon={faCreativeCommonsSampling} size="4x" />
        </div>
      </div>
      <div className="mobile-wrap">
        <div className="desc-company">
          <div className="desc">
            <b>JavaScript Senior Dev</b>
          </div>
          <div className="company">
            <FontAwesomeIcon icon={faBuilding} />
            Tick Company
            <FontAwesomeIcon icon={faMapMarkedAlt} />
            Warsaw
          </div>
        </div>
        <div className="salary-stack">
          <div className="salary">14000-21000 PLN</div>
          <div className="stack">
            <div className="stack-item">JS</div>
            <div className="stack-item">Node</div>
            <div className="stack-item">Angular</div>
            <div className="stack-item">Jira</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
