import React, { useEffect, useRef } from "react";
import L from "leaflet";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import JobMarker from "./JobMarker";
import "../../../styles/main/JobOffers/Map.scss";

export interface MapComponentProps {
  isRendering: boolean;
}

const MapComponent: React.FC<MapComponentProps> = ({ isRendering }) => {
  const mapRef: any = useRef();
  if (isRendering) {
    setTimeout(() => {
      mapRef.current.leafletElement.invalidateSize();
    }, 100);
  }

  const position: [number, number] = [52.45, 19.0];
  let icon = (icon: string) =>
    L.icon({
      iconUrl: require(`../../../icons/${icon}.svg`),
      iconSize: [30, 30],
      popupAnchor: [2, -10],
    });

  return (
    <div className="map-container">
      <Map center={position} zoom={7.0} ref={mapRef}>
        <TileLayer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='http://osm.org/copyright'>OpenStreetMap</a> contributors"
        />
        <Marker
          position={position}
          icon={icon("css")}
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
            <div style={{ display: "flex", flexDirection: "row" }}>
              <FontAwesomeIcon
                className="some-iconx"
                icon={faJs}
                style={{ height: "3rem", width: "3rem" }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "0.7rem",
                }}
              >
                <span>Frontend</span>
                <span>10000-12000 PLN</span>
                <span>Boring Company</span>
              </div>
            </div>
          </Popup>
        </Marker>
        <JobMarker
          position={[50.5, 18.1]}
          techIcon="css"
          offer={{
            icon: "faEthereum",
            shortDesc: "CSS GUI Engineer",
            companyName: "MakeMoney Inc",
            city: "Warszawa",
            salary: "14000 - 19000 PLN",
            techStack: ["CSS", "UI", "UX"],
          }}
        />
        <JobMarker
          position={[50.6, 18.1]}
          techIcon="js"
          offer={{
            icon: "faAndroid",
            shortDesc: "JS Remote Dev",
            companyName: "Tick Company",
            city: "Gdańsk",
            salary: "8000 - 10000 PLN",
            techStack: ["JS", "TS", "Vue"],
          }}
        />
      </Map>
    </div>
  );
};

export default MapComponent;

// const map = (
//   <Map center={position} zoom={13}>
//     <TileLayer
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//     />
//     <Marker position={position}>
//       <Popup>
//         A pretty CSS3 popup.
//         <br />
//         Easily customizable.
//       </Popup>
//     </Marker>
//   </Map>
// );

// render(map, document.getElementById("map-container"));
