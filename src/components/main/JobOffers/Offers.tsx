import * as React from "react";
import "../../../styles/main/JobOffers/Offers.scss";
import Offer from "./OfferComponent";
export interface OffersProps {}

const Offers: React.FC<OffersProps> = () => {
  return (
    <div className="offer-container">
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
      <Offer />
    </div>
  );
};

export default Offers;
