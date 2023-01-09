import React from "react";
import "./searchItem.css";
import spi from "../featured/spi.jpg";
const SearchItem = () => {
  return (
    <div className="searchItem">
      <img src={spi} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartment</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">Studio Apartment with Air conditioning</span>
        <span className="siFeatures">Entire studio .1 bathroom 21m 1 full bed </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">You can cancel later, so lock this great price today!</span>
      </div>

      <div className="siDetails"> details</div>
    </div>
  );
};

export default SearchItem;
