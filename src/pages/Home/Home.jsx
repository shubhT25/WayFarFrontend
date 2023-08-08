import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./main.css";
import "./responsive.css";
import Bangkok from "../../images/Bangkok.jpg";
import RedRocks from "../../images/c2.jpg";
import GoldenGates from "../../images/golden.jpg";
import MiamiBitch from "../../images/c6.webp";
import UAE from "../../images/unitedarab.jpg";
import Festival from "../../images/c2.webp";
import China from "../../images/China.jpg";
import Singapore from "../../images/Singapore.jpg";
import Vegas from "../../images/Vegas.jpg";

const Home = () => {
  // Next/previous controls
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const photos = [
    {
      id: 1,
      title: "Red Rocks, Arizona",
      src: RedRocks,
    },
    {
      id: 2,
      title: "Golden Gate, United States",
      src: GoldenGates,
    },
    {
      id: 3,
      title: "Miami Bitch Florida",
      src: MiamiBitch,
    },
    {
      id: 4,
      title: "United Arab Emirates",
      src: UAE,
    },
    {
      id: 5,
      title: "Festival of Lights, France",
      src: Festival,
    },
  ];

  const cards = [
    {
      id: 1,
      src: China,
      href: "./offers.html",
      head: "Offers",
      para: "We have the best offers across the world and we never compromise with the quality.",
      caption: "See the exlusive deals.",
    },
    {
      id: 2,
      src: Bangkok,
      href: "./popularDestinations",
      head: "Trips",
      para: "See our popular destinations and book your slot.Don't miss the chance to be part of our trip.",
      caption: "Enjoy the great trips.",
    },
    {
      id: 3,
      src: Singapore,
      href: "./tour-packages.html",
      head: "Packages",
      para: "Our customers are happy with our packages.That shows the quality of packages, we provide.",
      caption: "Explore our packages.",
    },
    {
      id: 4,
      src: Vegas,
      href: "./gallery.html",
      head: "Gallery",
      para: "See our customer's photos and videos of their trips. That enhance your thirst for trip",
      caption: "Get the flavour of our customer's trips.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % photos.length);
    }, 3000);
    return () => clearInterval(timer);
  });

  return (
    <main>
      <div className="welcome" id="welcome">
        Hi {localStorage.getItem("userName")}, Welcome
      </div>
      <br /> <br />
      <div className="carousel">
        <section className="slideshow">
          {photos.map((photo) => (
            <div
              className={
                photos[currentIndex].id === photo.id ? "fade" : "slides"
              }
              key={photo.id}
            >
              <div className="number">{photo.id} / 5</div>
              <img alt={photo.title} title={photo.title} src={photo.src} />
              <div className="caption">{photo.title}</div>
            </div>
          ))}
          <br />
        </section>

        <div className="dots" style={{ textAlign: "center" }}>
          <div className="dots">
            {photos.map((photo) => (
              <span
                key={photo.id}
                // highlight the dot that corresponds to the current photo
                className={
                  photos[currentIndex].id === photo.id ? "dot active" : "dot"
                }
                // when the user clicks on a dot, go to the corresponding photo
                onClick={() => setCurrentIndex(photos.indexOf(photo))}
              ></span>
            ))}
          </div>
        </div>
      </div>
      <section className="card-holder">
        <header className="header">
          <h2>Offers, Packages and More</h2>
        </header>
        <div className="cards">
          {cards.map((card) => (
            <div className="card" key={card.id}>
              <div className="card-inner">
                <div className="card-image">
                  <img
                    src={card.src}
                    alt={card.src}
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="card-text">
                  <span
                    onClick={() => {
                      navigate("/popularDestinations");
                    }}
                  >
                    <h2>{card.head}</h2>
                  </span>
                  <p>{card.para}</p>
                </div>
              </div>
              <p className="card-head">{card.caption}</p>
            </div>
          ))}
        </div>
        <div className="card-button">
          <button type="submit">Explore More</button>
        </div>
      </section>
      {/* <a href="#">
        <div className="top">^</div>
      </a> */}
    </main>
  );
};

export default Home;
