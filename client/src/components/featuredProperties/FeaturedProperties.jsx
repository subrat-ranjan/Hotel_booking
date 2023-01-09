import React from "react";
import "./featuredProperties.css";
import spi from "../featured/spi.jpg";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img src={spi} alt="" className="fpImg" />
        <span className="fpName"> Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Staring from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span> Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img src={spi} alt="" className="fpImg" />
        <span className="fpName"> Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Staring from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span> Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img src={spi} alt="" className="fpImg" />
        <span className="fpName"> Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Staring from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span> Excellent</span>
        </div>
      </div>

      <div className="fpItem">
        <img src={spi} alt="" className="fpImg" />
        <span className="fpName"> Aparthotel Stare Miasto</span>
        <span className="fpCity">Madrid</span>
        <span className="fpPrice">Staring from $120</span>
        <div className="fpRating">
          <button>8.9</button>
          <span> Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
