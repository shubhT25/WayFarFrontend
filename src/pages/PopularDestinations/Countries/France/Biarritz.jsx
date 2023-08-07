import React from "react";
import { useNavigate } from "react-router-dom";

const Biarritz = () => {
    const navigate = useNavigate()
  return (
    <main>
      <div className="place-row">
        <div className="city-column city-description">
          <div className="place-head">
            <span onClick = {() => {navigate(-2)}}>Popular Destinations </span>/
            <span onClick = {() => {navigate(-1)}}> France </span> / Biarritz
          </div>
          <br />
          <p>
            Biarritz, an elegant seaside town on southwestern France’s
            Basque coast, has been a popular resort since European royalty
            began visiting in the 1800s. It’s also a major surfing
            destination, with long sandy beaches and surf schools. A symbol of
            Biarritz, the Rocher de la Vierge is a rocky outcrop topped with a
            statue of the Virgin Mary. Reached via footbridge, it offers
            sweeping views of the Bay of Biscay.
          </p>
        </div>
        <div className="city-column">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46327.997540712706!2d-1.590812045777004!3d43.47103799692883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51152b0af31e33%3A0x40665174813a830!2s64200%20Biarritz%2C%20France!5e0!3m2!1sen!2sin!4v1583397418238!5m2!1sen!2sin"
             sandbox="allow-scripts" title="Biarritz Map"></iframe>
        </div>
      </div>
    </main>
  );
};

export default Biarritz;
