import * as React from "react";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IJobOffer from "../../../interfaces/IJobOffer";
import "../../../styles/main/JobOffers/Map.scss";

export interface JobMarkerProps {
  position: [number, number];
  techIcon: string;
  offer: IJobOffer;
}

const JobMarker: React.SFC<JobMarkerProps> = (props) => {
  const { position, techIcon, offer } = props;
  const icons = require("@fortawesome/free-brands-svg-icons");

  const icon = (icon: string) =>
    L.icon({
      iconUrl: require(`../../../icons/${icon}.svg`),
      iconSize: [30, 30],
      popupAnchor: [2, -10],
    });

  return (
    <Marker
      position={position}
      icon={icon(techIcon)}
      onMouseOver={(e: any) => {
        e.target.openPopup();
      }}
      onMouseOut={(e: any) => {
        e.target.closePopup();
      }}
      onclick={(e: any) => {
        console.log("any");
      }}
    >
      <Popup>
        <div className="container-popup">
          <FontAwesomeIcon
            size="3x"
            className="popup-icon"
            icon={icons[offer.icon]}
          />
          <div className="container-offer">
            <span>{offer.shortDesc}</span>
            <span className="salary-green">{offer.salary}</span>
            <span>{offer.companyName}</span>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default JobMarker;
