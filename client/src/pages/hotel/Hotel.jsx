import React, { useContext, useState } from "react";
import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
import { SearchContext } from "../../contex/SearchContext";

const Hotel = () => {
  const location = useLocation();
  console.log(location);
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const { data, loading, error } = useFetch(`/hotels/find/${id}`);

  const { dates, options } = useContext(SearchContext);
  console.log(dates);
  const MILLISECONDS_PER_DAY = 1000 * 60 * 60 * 24;

  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2.getTime() - date1.getTime());
    const diffDays = Math.ceil(timeDiff / MILLISECONDS_PER_DAY);
    return diffDays;
  }
  // console.log(dayDifference(dates[0].endDate, dates[0].startDate));

  const days = dayDifference(dates[0].endDate, dates[0].startDate);
  // console.log(days);
  // const photos = [
  //   {
  //     src: { spi },
  //   },
  // ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "Loading"
      ) : (
        <>
          <div className="hotelContainer">
            {open && (
              <div className="slider">
                <FontAwesomeIcon icon={faCircleXmark} />
                <FontAwesomeIcon icon={faCircleArrowLeft} />
                <div className="sliderWrapper">
                  <img src={data.photos[slideNumber]} alt="" className="sliderImg" />
                </div>
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </div>
            )}
            <div className="hotelWrapper">
              <button className="bookNow">Reserve or Book Now!</button>
              <h1 className="hotelTitle"> {data.name}</h1>
              <div className="hotelAddress">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>{data.address}</span>
              </div>
              <span className="hotelDistance">Excellent location - {data.distance}m from center</span>
              <span className="hotelPriceHighlight">Book a stay over ${data.cheapestPrice} at this property and get a free airport taxi.</span>
              <div className="hotelImages">
                {data.photos?.map((photo, i) => (
                  <div className="hotelImgWrapper">
                    <img onClick={() => handleOpen(i)} src={photo} alt="" className="hotelImg" />
                  </div>
                ))}
              </div>
              <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                  <h1 className="hotelTitle"> {data.title}</h1>
                  <p className="hotelDesc">
                    {data.desc}
                    {/* Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Aparetment has accommodate with air condtioning and free
                    wifi. the units come with hardwood floors and features a fully equipped kitchenette with a microwave, a flat-screen Tv, and a
                    private bathroom with shower and hairdryer. A fridge is also offered, as well as an electric tea pot and a coffee machine, Popular
                    points of interest near the apartment include cloth Hall, Main Market Square and Town Hall Tower. The nearest airport is john pul
                    II International Krak6w-Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service. */}
                  </p>
                </div>
                <div className="hotelDetailsPrice">
                  <h1> Perfect for a {days}-night stay!</h1>
                  <span> Located in the real heart Krakow, this property has an excellent location score of 9.8!</span>
                  <h2>
                    <b> ${days * data.cheapestPrice * options.room}</b> ({days} nights)
                  </h2>
                  <button>Reserve or Book Now!</button>
                </div>
              </div>
            </div>
            <MailList />
            <Footer />
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Hotel;
