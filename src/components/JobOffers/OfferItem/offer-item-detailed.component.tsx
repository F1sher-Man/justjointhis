import React, { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreativeCommonsSampling } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

import "./offer-item-detailed.component.scss";

export interface OfferDetailedProps {
  goBack(): void;
}

// eslint-disable-next-line no-empty-pattern
const OfferDetailed = ({ goBack }: OfferDetailedProps): ReactElement => {
  const myIcon = faCreativeCommonsSampling;
  const money = "12000 - 13000 PLN net/month";
  const shortDesc = "Senior Javascript developer";
  const address = "Jana Pawła II, 10, Wrocław";

  return (
    <div className="offer-container">
      <div className="offer-container-item">
        <div className="go-back-btn" onClick={(): void => goBack()}>
          <svg>
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </div>
        <div className="offer-container-item-top">
          <FontAwesomeIcon className="brand-icon" icon={myIcon} size="8x" />
          <div className="offer-container-item-top-details">
            <span>{money}</span>
            <span>{shortDesc}</span>
            <span>{address}</span>
          </div>
          <div className="apply-btn">
            <FontAwesomeIcon icon={faEnvelopeOpenText} size="2x" />
            <span>Aplikuj!</span>
          </div>
        </div>
        <div className="offer-container-item">HALO HALO</div>
      </div>
    </div>
  );
};

export default OfferDetailed;
