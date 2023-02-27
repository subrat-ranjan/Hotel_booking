import React from "react";
import "./searchItem.css";
import { Link } from "react-router-dom";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">{item.desc}</span>
        <span className="siFeatures">Entire studio .1 bathroom 21m 1 full bed </span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">You can cancel later, so lock this great price today!</span>
      </div>

      <div className="siDetails">
        {item.rating && (
          <div className="siRating">
            <span>Excellent</span>
            <button>{item.rating}</button>
          </div>
        )}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/hotels/${item._id}`}>
            <button className="siCheckButton"> See availibility</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
