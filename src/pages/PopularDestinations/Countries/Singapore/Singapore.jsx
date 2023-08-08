import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import JohnsIsland from "../../../../images/StJohns.webp";
import Gardens from "../../../../images/garden by the bay.jpg";
import HajiLane from "../../../../images/haji lane.jpg";

const Singapore = () => {
  const [johnsIslandLike, setJohnsIslandLike] = useState(89);
  const [johnsIslandDislike, setJohnsIslandDislike] = useState(3);
  const [johnsIslandFlag, setJohnsIslandFlag] = useState(false);

  const [gardensLike, setGardensLike] = useState(109);
  const [gardensDislike, setGardensDislike] = useState(41);
  const [gardensFlag, setGardensFlag] = useState(false);

  const [hajiLaneLike, setHajiLaneLike] = useState(12);
  const [hajiLaneDislike, setHajiLaneDislike] = useState(22);
  const [hajiLaneFlag, setHajiLaneFlag] = useState(false);

  const navigate = useNavigate();

  const cities = [
    {
      id: 1,
      name: "St.Johns Island",
      src: JohnsIsland,
      para: "World's beautiful beaches renowned for its crystal sands and underwater nature trail.",
      href: "./JohnsIsland",
      like: johnsIslandLike,
      dislike: johnsIslandDislike,
      setLike: setJohnsIslandLike,
      setDislike: setJohnsIslandDislike,
      flag: johnsIslandFlag,
      setFlag: setJohnsIslandFlag,
    },
    {
      id: 2,
      name: "Gardens by the bay",
      src: Gardens,
      para: "The Flower Dome here is the largest glass greenhouse in the world.",
      href: "./Gardens",
      like: gardensLike,
      dislike: gardensDislike,
      setLike: setGardensLike,
      setDislike: setGardensDislike,
      flag: gardensFlag,
      setFlag: setGardensFlag,
    },
    {
      id: 3,
      name: "Haji Lane",
      src: HajiLane,
      para: "See the most authentic places for art and culture lovers filled with shops and restaurants",
      href: "./HajiLane",
      like: hajiLaneLike,
      dislike: hajiLaneDislike,
      setLike: setHajiLaneLike,
      setDislike: setHajiLaneDislike,
      flag: hajiLaneFlag,
      setFlag: setHajiLaneFlag,
    },
  ];

  const Action = (element) => {
    const city = cities[Number(element.target.id) - 1];
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
          / Singapore
        </div>
        <br />
        <div className="grid">
          {cities.map((city) => (
            <div className="place-col" key={city.id}>
              <div className="place-card">
                <div className="place-image">
                  <img src={city.src} alt="johnsIsland" />
                  <div className="place-text">Singapore</div>
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

export default Singapore;
