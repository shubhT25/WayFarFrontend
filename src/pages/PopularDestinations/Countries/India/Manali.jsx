import React from "react";
import { useNavigate } from "react-router-dom";

const Manali = () => {
    const navigate = useNavigate()
  return (
    <main>
      <div className="place-row">
        <div className="city-column city-description">
          <div className="place-head">
            <span onClick = {() => {navigate(-2)}}>Popular Destinations </span>/
            <span onClick = {() => {navigate(-1)}}> India </span> / Manali
          </div>
          <br />
          <p>
            Nestled in between the snow-capped slopes of the Pir Panjal and the
            Dhauladhar ranges. Manali is one of the most popular hill stations
            in India,with jaw-dropping views, lush green forests, a perpetual
            fairy-tale - Manali has been blessed with extraordinary scenic
            beauty. From museums to temples, from quaint little hippie villages
            to bustling upscale streets, river adventures to trekking trails,
            Manali has every reason to be the tourist magnet it is, all year
            round. Manali is a high-altitude Himalayan resort town in India’s
            northern Himachal Pradesh state. It has a reputation as a
            backpacking center and honeymoon destination. It’s a gateway for
            skiing in the Solang Valley and trekking in Parvati Valley. It's
            also a jumping-off point for paragliding, rafting and mountaineering
            in the Pir Panjal mountains.
          </p>
        </div>
        <div className="city-column">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26997.521594303595!2d77.16961016069348!3d32.23950714205165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39048708163fd03f%3A0x8129a80ebe5076cd!2sManali%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1583378996972!5m2!1sen!2sin"
            sandbox="allow-scripts"
            title="Manali Map"
          />
        </div>
      </div>
    </main>
  );
};

export default Manali;
