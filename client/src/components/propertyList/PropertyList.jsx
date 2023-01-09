import React from "react";
import "./propertyList.css";
import spi from "../featured/spi.jpg";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img src={spi} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1> Hotel</h1>
          <h2>233 Hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={spi} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1> Appartment</h1>
          <h2>203 Hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={spi} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1> Resort</h1>
          <h2>233 Hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={spi} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1> Villas</h1>
          <h2>233 Hotels</h2>
        </div>
      </div>

      <div className="pListItem">
        <img src={spi} alt="" className="pListImg" />
        <div className="pListTitles">
          <h1> Cabin</h1>
          <h2>233 Hotels</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
