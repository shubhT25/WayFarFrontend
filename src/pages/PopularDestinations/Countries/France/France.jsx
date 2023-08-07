import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Paris from "../../../../images/paris.webp";
import Riviera from "../../../../images/French riviera.webp";
import Biarritz from "../../../../images/Biarritz.webp";

const France = () => {
  const [parisLike, setParisLike] = useState(89);
  const [parisDislike, setParisDislike] = useState(3);
  const [parisFlag, setParisFlag] = useState(false);

  const [rivieraLike, setRivieraLike] = useState(109);
  const [rivieraDislike, setRivieraDislike] = useState(41);
  const [rivieraFlag, setRivieraFlag] = useState(false);

  const [biarritzLike, setBiarritzLike] = useState(12);
  const [biarritzDislike, setBiarritzDislike] = useState(22);
  const [biarritzFlag, setBiarritzFlag] = useState(false);

  const navigate = useNavigate();

  const cities = [
    {
      id: 1,
      name: "Paris",
      src: Paris,
      para: "Dream holiday destination with monuments, muesuems and exotic cuisine",
      href: "./Paris",
      like: parisLike,
      dislike: parisDislike,
      setLike: setParisLike,
      setDislike: setParisDislike,
      flag: parisFlag,
      setFlag: setParisFlag,
    },
    {
      id: 2,
      name: "Riviera",
      src: Riviera,
      para: "Established holiday destination with the glamarous beach resorts",
      href: "./Riviera",
      like: rivieraLike,
      dislike: rivieraDislike,
      setLike: setRivieraLike,
      setDislike: setRivieraDislike,
      flag: rivieraFlag,
      setFlag: setRivieraFlag,
    },
    {
      id: 3,
      name: "Biarritz",
      src: Biarritz,
      para: "Seaside town with long sandy beaches and surf schools",
      href: "./Biarritz",
      like: biarritzLike,
      dislike: biarritzDislike,
      setLike: setBiarritzLike,
      setDislike: setBiarritzDislike,
      flag: biarritzFlag,
      setFlag: setBiarritzFlag,
    },
  ];

  const Action = (element) => {
    const city = cities[Number(element.target.id) - 1];
    console.log(city.flag);
    if (!city.flag) {
      if (element.target.className === "fa fa-thumbs-o-up") {
        element.target.className = "fa fa-thumbs-up";
        const btn = document.getElementById(city.name + "dislike");
        btn.classList.add("fa-disabled");
        city.setLike(city.like + 1);
        city.setFlag(true);
      } else if (element.target.className === "fa fa-thumbs-o-down") {
        element.target.className = "fa fa-thumbs-down";
        const btn = document.getElementById(city.name + "like");
        btn.classList.add("fa-disabled");
        city.setDislike(city.dislike + 1);
        city.setFlag(true);
      }
    } else {
      if (element.target.className === "fa fa-thumbs-up") {
        element.target.className = "fa fa-thumbs-o-up";
        const btn = document.getElementById(city.name + "dislike");
        btn.classList.remove("fa-disabled");
        city.setLike(city.like - 1);
        city.setFlag(false);
      } else if (element.target.className === "fa fa-thumbs-down") {
        const btn = document.getElementById(city.name + "like");
        btn.classList.remove("fa-disabled");
        element.target.className = "fa fa-thumbs-o-down";
        city.setDislike(city.dislike - 1);
        city.setFlag(false);
      }
    }
  };

  return (
    <main>
      <div className="place-row">
        <div className="place-head">
          <span
            onClick={() => {
              navigate(-1);
            }}
          >
            Popular Destinations{" "}
          </span>
          / France
        </div>
        <br />
        <div className="grid">
          {cities.map((city) => (
            <div className="place-col" key={city.id}>
              <div className="place-card">
                <div className="place-image">
                  <img src={city.src} alt="paris" />
                  <div className="place-text">{city.name}</div>
                </div>
                <div className="place-container">
                  <h4>
                    <strong>{city.name}</strong>
                  </h4>
                  <p>
                    {city.para}
                    <span
                      className="see-more"
                      onClick={() => {
                        navigate(`${city.href}`);
                      }}
                    >
                      {" "}
                      See More{" "}
                    </span>
                  </p>
                  <br />
                  <span className="enclosure">
                    <span className="like">
                      <button
                        className="like fa-enabled"
                        id={city.name + "like"}
                      >
                        <i
                          className="fa fa-thumbs-o-up"
                          aria-hidden="true"
                          id={city.id}
                          onClick={(e) => {
                            Action(e);
                          }}
                        />
                      </button>
                      <span id="Counterlike">{city.like}</span>
                    </span>
                    <span className="dislike">
                      <button
                        className="dislike fa-enabled"
                        id={city.name + "dislike"}
                      >
                        <i
                          className="fa fa-thumbs-o-down"
                          aria-hidden="true"
                          id={city.id}
                          onClick={(e) => {
                            Action(e);
                          }}
                        />
                      </button>
                      <span id="Counterdislike">{city.dislike}</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default France;
