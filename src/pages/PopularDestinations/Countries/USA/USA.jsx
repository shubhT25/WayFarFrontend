import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Disney from "../../../../images/Disney Land park.webp";
import Walt from "../../../../images/Walt disney world.jpg";
import Hawai from "../../../../images/islandofhawai.jpg";
import Newyork from "../../../../images/new york.jpg";

const India = () => {
  const [disneyLike, setDisneyLike] = useState(89);
  const [disneyDislike, setDisneyDislike] = useState(3);
  const [disneyFlag, setDisneyFlag] = useState(false);

  const [waltLike, setWaltLike] = useState(109);
  const [waltDislike, setWaltDislike] = useState(41);
  const [waltFlag, setWaltFlag] = useState(false);

  const [hawaiLike, setHawaiLike] = useState(12);
  const [hawaiDislike, setHawaiDislike] = useState(22);
  const [hawaiFlag, setHawaiFlag] = useState(false);

  const [newyorkLike, setNewyorkLike] = useState(23);
  const [newyorkDislike, setNewyorkDislike] = useState(8);
  const [newyorkFlag, setNewyorkFlag] = useState(false);

  const navigate = useNavigate();

  const cities = [
    {
      id: 1,
      name: "Disney Land",
      src: Disney,
      para: "Most-visited theme park dedicated to fairy tales and Disney characters",
      href: "./Disney",
      like: disneyLike,
      dislike: disneyDislike,
      setLike: setDisneyLike,
      setDislike: setDisneyDislike,
      flag: disneyFlag,
      setFlag: setDisneyFlag,
    },
    {
      id: 2,
      name: "Walt Disney",
      src: Walt,
      para: "World famous resort with four theme parks and two water parks.",
      href: "./Walt",
      like: waltLike,
      dislike: waltDislike,
      setLike: setWaltLike,
      setDislike: setWaltDislike,
      flag: waltFlag,
      setFlag: setWaltFlag,
    },
    {
      id: 3,
      name: "Hawaii",
      src: Hawai,
      para: "Largest island in US with active volcanoes.",
      href: "./Hawai",
      like: hawaiLike,
      dislike: hawaiDislike,
      setLike: setHawaiLike,
      setDislike: setHawaiDislike,
      flag: hawaiFlag,
      setFlag: setHawaiFlag,
    },
    {
      id: 4,
      name: "Newyork",
      src: Newyork,
      para: "Offers best art exhibitions, fantastic Broadway theatre, and hundreds of museums.",
      href: "./Newyork",
      like: newyorkLike,
      dislike: newyorkDislike,
      setLike: setNewyorkLike,
      setDislike: setNewyorkDislike,
      flag: newyorkFlag,
      setFlag: setNewyorkFlag,
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
          USA
        </div>
        <br />
        <div className="grid">
          {cities.map((city) => (
            <div className="place-col" key={city.id}>
              <div className="place-card">
                <div className="place-image">
                  <img src={city.src} alt="disney" />
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
