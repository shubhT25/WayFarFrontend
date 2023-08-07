import React from "react";
import { useNavigate } from "react-router-dom";

const SafariDesert = () => {
    const navigate = useNavigate()
  return (
    <main>
      <div className="place-row">
        <div className="city-column city-description">
          <div className="place-head">
            <span onClick = {() => {navigate(-2)}}>Popular Destinations </span>/
            <span onClick = {() => {navigate(-1)}}> UAE </span> / Safari Desert
          </div>
          <br />
          <p>
            Dubai, mainly renowned for its great infrastructure, is also known
            for its adventurous streak. At the heart of Dubai is still its
            desolated desert. And so, to enjoy the desert a bit more
            effectively, the city presents various Desert Safari options. The
            experience is one of its kind and worth every penny spent! Visitors
            can experience desert camping with a delicious Arabian dinner, belly
            dancers and other traditional performers. Day safaris hold you in
            for an adventure as you get to try out Dune Bashing, sandboarding,
            quad biking, camel rides and more.
          </p>
        </div>
        <div className="city-column">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231113.8199152096!2d55.152145426725056!3d25.164296456273778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d98998eab01%3A0x534f5854e341a3cf!2sDesert%20Safari%20Dubai!5e0!3m2!1sen!2sin!4v1583400683270!5m2!1sen!2sin"
              sandbox="allow-scripts" title="Safari Desert Map"></iframe>
        </div>
      </div>
    </main>
  );
};

export default SafariDesert;
