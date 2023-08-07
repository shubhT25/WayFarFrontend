import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "./cities.css";
import "./main.css";
import "./responsive.css";

const PopularDestinations = () => {
  const [search, setSearch] = useState();

  const openWeblink = (e) => {
    e.preventDefault();
    if(!search){
      return
    }
    window.open(`https://en.wikipedia.org/wiki/${search}`);
  };

  const navigate = useNavigate();

  return (
    <main>
      <div className="destination-card-holder">
        <div className="d-form">
          <form onSubmit={openWeblink}>
            <input
              type="text"
              placeholder="Search a destination"
              name="destination"
              id="search"
              onChange={(e) => setSearch(e.target.value)}
              pattern="[A-Za-z]+"
            />
            <button title="search" type="submit" id="searchButton">
              <em className="fa fa-search"> </em>
            </button>
          </form>
        </div>
        <div className="d-cards">
          <div className="d-column india d-card">
            <span
              onClick={() => {
                navigate("./India");
              }}
            >
              India
            </span>
          </div>
          <div className="d-column france d-card">
          <span
              onClick={() => {
                navigate("./France");
              }}
            >
              France
            </span>
          </div>
          <div className="d-column usa d-card">
          <span
              onClick={() => {
                navigate("./USA");
              }}
            >
              USA
            </span>
          </div>
          <div className="d-column uae d-card">
          <span
              onClick={() => {
                navigate("./UAE");
              }}
            >
              UAE
            </span>
          </div>
          <div className="d-column singapore d-card">
          <span
              onClick={() => {
                navigate("./Singapore");
              }}
            >
              Singapore
            </span>
          </div>
          <div className="d-column thailand d-card">
          <span
              onClick={() => {
                navigate("./Thailand");
              }}
            >
              Thailand
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default PopularDestinations;
