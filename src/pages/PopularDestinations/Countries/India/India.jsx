import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Manali from "../../../../images/manalithumbnail.jpg";
import Shimla from "../../../../images/Shimla.jpg";
import Agra from "../../../../images/AgraFort.JPG";
import Jaipur from "../../../../images/jaipurthumbnail.webp";

const India = () => {
  const [manaliLike, setManaliLike] = useState(89);
  const [manaliDislike, setManaliDislike] = useState(3);
  const [manaliFlag, setManaliFlag] = useState(false);

  const [shimlaLike, setShimlaLike] = useState(109);
  const [shimlaDislike, setShimlaDislike] = useState(41);
  const [shimlaFlag, setShimlaFlag] = useState(false);

  const [agraLike, setAgraLike] = useState(12);
  const [agraDislike, setAgraDislike] = useState(22);
  const [agraFlag, setAgraFlag] = useState(false);

  const [jaipurLike, setJaipurLike] = useState(23);
  const [jaipurDislike, setJaipurDislike] = useState(8);
  const [jaipurFlag, setJaipurFlag] = useState(false);

  const navigate = useNavigate();

  const cities = [
    {
      id: 1,
      name: "Manali",
      src: Manali,
      para: "Experience the natural sceneries and calmness at its best in winter of manali.",
      href: "./Manali",
      like: manaliLike,
      dislike: manaliDislike,
      setLike: setManaliLike,
      setDislike: setManaliDislike,
      flag: manaliFlag,
      setFlag: setManaliFlag,
    },
    {
      id: 2,
      name: "Shimla",
      src: Shimla,
      para: "Explore the colonial structures and heritage of the summer capital of Kashmir, Shimla",
      href: "./Shimla",
      like: shimlaLike,
      dislike: shimlaDislike,
      setLike: setShimlaLike,
      setDislike: setShimlaDislike,
      flag: shimlaFlag,
      setFlag: setShimlaFlag,
    },
    {
      id: 3,
      name: "Agra",
      src: Agra,
      para: "Home to one of the Seven Wonders of the World and UNESCO World Heritage Sites",
      href: "./Agra",
      like: agraLike,
      dislike: agraDislike,
      setLike: setAgraLike,
      setDislike: setAgraDislike,
      flag: agraFlag,
      setFlag: setAgraFlag,
    },
    {
      id: 4,
      name: "Jaipur",
      src: Jaipur,
      para: "Pink and a Clean City with a Wonderful cultural retreat and architectural wonders",
      href: "./Jaipur",
      like: jaipurLike,
      dislike: jaipurDislike,
      setLike: setJaipurLike,
      setDislike: setJaipurDislike,
      flag: jaipurFlag,
      setFlag: setJaipurFlag,
    },
  ];

  const Action = (element) => {
    const city = cities[Number(element.target.id) - 1];
    console.log(city.flag)
    if (!city.flag) {
      if (element.target.className === "fa fa-thumbs-o-up") {
        element.target.className = "fa fa-thumbs-up";
        const btn = document.getElementById(city.name + "dislike")
        btn.classList.add("fa-disabled")
        city.setLike(city.like + 1);
        city.setFlag(true);
      } else if (element.target.className === "fa fa-thumbs-o-down") {
        element.target.className = "fa fa-thumbs-down";
        const btn = document.getElementById(city.name + "like")
        btn.classList.add("fa-disabled")
        city.setDislike(city.dislike + 1);
        city.setFlag(true);
      }
    } else {
      if (element.target.className === "fa fa-thumbs-up") {
        element.target.className = "fa fa-thumbs-o-up";
        const btn = document.getElementById(city.name + "dislike")
        btn.classList.remove("fa-disabled")
        city.setLike(city.like - 1);
        city.setFlag(false);
      } else if (element.target.className === "fa fa-thumbs-down") {
        const btn = document.getElementById(city.name + "like")
        btn.classList.remove("fa-disabled")
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
          <span onClick={() => {navigate(-1)}}>Popular Destinations </span>/
          India
        </div>
        <br />
        <div className="grid">
          {cities.map((city) => (
            <div className="place-col" key={city.id}>
              <div className="place-card">
                <div className="place-image">
                  <img src={city.src} alt="manali" />
                  <div className="place-text">{city.name}</div>
                </div>
                <div className="place-container">
                  <h4>
                    <strong>{city.name}</strong>
                  </h4>
                  <p>
                    {city.para}
                    <span className="see-more" onClick={() => {navigate(`${city.href}`)}}> See More </span>
                  </p>
                  <br />
                  <span className="enclosure">
                    <span className="like">
                      <button className="like fa-enabled" id={city.name + "like"}>
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
                      <button className="dislike fa-enabled" id={city.name + "dislike"}>
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

export default India;
