import React from "react";
import { useNavigate } from "react-router-dom";

const Riviera = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="place-row">
        <div className="city-column city-description">
          <div className="place-head">
            <span
              onClick={() => {
                navigate(-2);
              }}
            >
              Popular Destinations{" "}
            </span>
            /
            <span
              onClick={() => {
                navigate(-1);
              }}
            >
              {" "}
              France{" "}
            </span>{" "}
            / French Riviera
          </div>
          <br />
          <p>
            Renowned as world's most famous and most visited tourist
            destination, France is nestled in Western Europe holding some of the
            greatest treasure troves. The country is an irresistible assortment
            of picture perfect landscapes, cultural foible, remarkable fashion
            sense, historical bequest and of course gastronomic adventures.
            Basking in the glory of Mother Nature, France offers distinct
            geographical features from rolling countryside and majestic
            mountains to stunning white sand beaches and sun-drenched vineyards.
            With its dash of contemporary finesse and lavish lifestyle, this
            country will leave you in absolute awe.
          </p>
        </div>
        <div className="city-column">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d742250.9697681474!2d5.960288005402026!3d43.3891950726898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12cebc738732d97f%3A0x594966412c5651c0!2sFrench%20Riviera%2C%20France!5e0!3m2!1sen!2sin!4v1583398432557!5m2!1sen!2sin"
            sandbox="allow-scripts"
            title="French Riviera Map"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Riviera;
