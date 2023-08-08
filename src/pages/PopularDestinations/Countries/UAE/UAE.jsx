import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BurjKhalifa from "../../../../images/Burj khalifa.webp";
import DubaiMall from "../../../../images/dubai mall.jpg";
import SafariDesert from "../../../../images/Safari desert.webp";

const Singapore = () => {
  const [burjKhalifaLike, setBurjKhalifaLike] = useState(89);
  const [burjKhalifaDislike, setBurjKhalifaDislike] = useState(3);
  const [burjKhalifaFlag, setBurjKhalifaFlag] = useState(false);

  const [dubaiMallLike, setDubaiMallLike] = useState(109);
  const [dubaiMallDislike, setDubaiMallDislike] = useState(41);
  const [dubaiMallFlag, setDubaiMallFlag] = useState(false);

  const [safariDesertLike, setSafariDesertLike] = useState(12);
  const [safariDesertDislike, setSafariDesertDislike] = useState(22);
  const [safariDesertFlag, setSafariDesertFlag] = useState(false);

  const navigate = useNavigate();

  const cities = [
    {
      id: 1,
      name: "Burj Khalifa",
      src: BurjKhalifa,
      para: "Grab the beauty of tallest freestanding structure in the world with naked eyes.",
      href: "./BurjKhalifa",
      like: burjKhalifaLike,
      dislike: burjKhalifaDislike,
      setLike: setBurjKhalifaLike,
      setDislike: setBurjKhalifaDislike,
      flag: burjKhalifaFlag,
      setFlag: setBurjKhalifaFlag,
    },
    {
      id: 2,
      name: "Dubai Mall",
      src: DubaiMall,
      para: "Largest mall in the world with the world's biggest indoor aquarium.",
      href: "./DubaiMall",
      like: dubaiMallLike,
      dislike: dubaiMallDislike,
      setLike: setDubaiMallLike,
      setDislike: setDubaiMallDislike,
      flag: dubaiMallFlag,
      setFlag: setDubaiMallFlag,
    },
    {
      id: 3,
      name: "Safari Desert",
      src: SafariDesert,
      para: "Offers thrilling experience of dune bashing and enjoy quad biking, camel ride and sand skiing.",
      href: "./SafariDesert",
      like: safariDesertLike,
      dislike: safariDesertDislike,
      setLike: setSafariDesertLike,
      setDislike: setSafariDesertDislike,
      flag: safariDesertFlag,
      setFlag: setSafariDesertFlag,
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
          / UAE
        </div>
        <br />
        <div className="grid">
          {cities.map((city) => (
            <div className="place-col" key={city.id}>
              <div className="place-card">
                <div className="place-image">
                  <img src={city.src} alt="burjKhalifa" />
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

export default Singapore;
