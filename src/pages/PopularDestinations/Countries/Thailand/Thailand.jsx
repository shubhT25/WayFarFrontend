import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Phuket from "../../../../images/phuket.webp";
import Krabi from "../../../../images/Krabi.webp";
import Bangkok from "../../../../images/bangkok-temple.jpg";
import Similan from "../../../../images/similan-island.webp";

const Thailand = () => {
  const [phuketLike, setPhuketLike] = useState(89);
  const [phuketDislike, setPhuketDislike] = useState(3);
  const [phuketFlag, setPhuketFlag] = useState(false);

  const [krabiLike, setKrabiLike] = useState(109);
  const [krabiDislike, setKrabiDislike] = useState(41);
  const [krabiFlag, setKrabiFlag] = useState(false);

  const [bangkokLike, setBangkokLike] = useState(12);
  const [bangkokDislike, setBangkokDislike] = useState(22);
  const [bangkokFlag, setBangkokFlag] = useState(false);

  const [SimilanLike, setSimilanLike] = useState(23);
  const [SimilanDislike, setSimilanDislike] = useState(8);
  const [SimilanFlag, setSimilanFlag] = useState(false);

  const navigate = useNavigate();

  const cities = [
    {
      id: 1,
      name: "Phuket",
      src: Phuket,
      para: "Relish the beauty of white sands, nodding palm trees, glittering seas and lively towns.",
      href: "./Phuket",
      like: phuketLike,
      dislike: phuketDislike,
      setLike: setPhuketLike,
      setDislike: setPhuketDislike,
      flag: phuketFlag,
      setFlag: setPhuketFlag,
    },
    {
      id: 2,
      name: "Krabi",
      src: Krabi,
      para: "Enjoy the art of cultivation and feel the nature in its natural forests.",
      href: "./Krabi",
      like: krabiLike,
      dislike: krabiDislike,
      setLike: setKrabiLike,
      setDislike: setKrabiDislike,
      flag: krabiFlag,
      setFlag: setKrabiFlag,
    },
    {
      id: 3,
      name: "Bangkok",
      src: Bangkok,
      para: 'The heart of modernization and the "World Best City" as per Leisure magazine survey',
      href: "./Bangkok",
      like: bangkokLike,
      dislike: bangkokDislike,
      setLike: setBangkokLike,
      setDislike: setBangkokDislike,
      flag: bangkokFlag,
      setFlag: setBangkokFlag,
    },
    {
      id: 4,
      name: "Similan",
      src: Similan,
      para: "One of the best diving areas in the world and a favourite destination for yachties and boat tours.",
      href: "./Similan",
      like: SimilanLike,
      dislike: SimilanDislike,
      setLike: setSimilanLike,
      setDislike: setSimilanDislike,
      flag: SimilanFlag,
      setFlag: setSimilanFlag,
    },
  ];

  const Action = (element) => {
    const city = cities[Number(element.target.id) - 1];
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
          Thailand
        </div>
        <br />
        <div className="grid">
          {cities.map((city) => (
            <div className="place-col" key={city.id}>
              <div className="place-card">
                <div className="place-image">
                  <img src={city.src} alt="phuket" />
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

export default Thailand;
