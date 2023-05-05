import React, { useState } from "react";
import "./list.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/search/SearchItem";
import useFetch from "../../hooks/useFetch";

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);

  const { data, loading, error, reFetch } = useFetch(`/hotels?city=${destination}&min=${min || 1}&max=${max || 999}`);

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Serach</h1>
            <div className="lsItem">
              <label> Destination</label>
              <input placeholder={destination} type="text" />
            </div>
            <div className="lsItem">
              <label> Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                dates[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && <DateRange onChange={(item) => setDates([item.selection])} minDate={new Date()} ranges={dates} />}
            </div>
            <div className="isItem">
              <label>Options</label>
              <div className="isOptions">
                <div className="isOptionItem">
                  <span className="isOptionText">
                    Min Price <small> per night</small>
                  </span>
                  <input type="number" onChange={(e) => setMin(e.target.value)} className="isOptionInput" />
                </div>

                <div className="isOptionItem">
                  <span className="isOptionText">
                    Max Price <small> per night</small>
                  </span>
                  <input type="number" onChange={(e) => setMax(e.target.value)} className="isOptionInput" />
                </div>

                <div className="isOptionItem">
                  <span className="isOptionText">Adult</span>
                  <input type="number" min={1} className="isOptionInput" placeholder={options.adult} />
                </div>

                <div className="isOptionItem">
                  <span className="isOptionText">Children</span>
                  <input type="number" min={0} className="isOptionInput" placeholder={options.children} />
                </div>

                <div className="isOptionItem">
                  <span className="isOptionText">Room</span>
                  <input type="number" min={1} className="isOptionInput" placeholder={options.room} />
                </div>
              </div>
            </div>
            <button onClick={handleClick}>Search</button>
          </div>

          <div className="listResult">
            {loading ? (
              "loading"
            ) : (
              <>
                {data.map((item) => (
                  <SearchItem item={item} key={item._id} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
