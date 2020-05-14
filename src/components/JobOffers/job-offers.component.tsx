/* eslint-disable no-empty-pattern */
import * as React from "react";
import { useState, ReactElement } from "react";
import { useMediaQuery } from "@material-ui/core";
import DropdownComponent from "./Navigation/dropdown.component";
import Technologies from "./Navigation/technologies.component";
import OfferItem from "./OfferItem/offer-item-short.component";
import MapComponent from "./Map/map.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import OfferDetailed from "./OfferItem/offer-item-detailed.component";

import "./job-offers.component.scss";

export interface JobOffersProps {}

const JobOffers = ({}: JobOffersProps): ReactElement => {
  const [isMapDisplay, setIsMapDisplay] = useState(false);
  const [isShowingDetailedOffer, setIsShowingDetailedOffer] = useState(true);
  const isMobileView = useMediaQuery("(max-width: 1024px)");
  let offerStyle = {
    display: isShowingDetailedOffer ? "none" : "block",
    width: "none",
  };
  let mapStyle = {};
  if (isMobileView) {
    offerStyle = {
      display: isMapDisplay ? "none" : "block",
      width: "100%",
    };
    mapStyle = {
      display: isMapDisplay ? "inline" : "none",
      width: "100%",
    };
  }
  const switchContext = (): void => {
    setIsShowingDetailedOffer(!isShowingDetailedOffer);
  };
  return (
    <div className="page-container">
      <div className="topbar">
        <DropdownComponent
          defaultItem="Lokalizacja"
          items={["Trójmiasto", "Warszawa", "Wrocław"]}
        />
        <div className="tech-mobile">
          <DropdownComponent
            defaultItem="Technologia"
            items={["Javascript", "HTML5", "CSS3", "Python"]}
          />
        </div>
        <div className="tech-fullsize">
          <Technologies />
        </div>
      </div>
      <div className="content-container">
        <div className="offers" style={offerStyle}>
          <div className="mobile-map-btn" onClick={() => setIsMapDisplay(true)}>
            <FontAwesomeIcon icon={faMap} color="white" size="2x" />
          </div>
          <OfferItem myOnClick={switchContext} />
          <OfferItem myOnClick={switchContext} />
          <OfferItem myOnClick={switchContext} />
          <OfferItem myOnClick={switchContext} />
          <OfferItem myOnClick={switchContext} />
          <OfferItem myOnClick={switchContext} />
          <OfferItem myOnClick={switchContext} />
          <OfferItem myOnClick={switchContext} />
          <OfferItem myOnClick={switchContext} />
          <OfferItem myOnClick={switchContext} />
          <OfferItem myOnClick={switchContext} />
          <OfferItem myOnClick={switchContext} />
          <OfferItem myOnClick={switchContext} />
          <OfferItem myOnClick={switchContext} />
        </div>
        <div
          className="offers"
          style={{ display: isShowingDetailedOffer ? "block" : "none" }}
        >
          <OfferDetailed goBack={switchContext} />
          {/* <div onClick={(): void => setIsShowingDetailedOffer(false)}>
            {`<-- Powrót`}
          </div> */}
        </div>
        <div className="map" style={mapStyle}>
          <MapComponent isRendering={isMapDisplay} />
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
