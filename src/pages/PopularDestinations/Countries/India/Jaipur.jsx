import React from "react";
import { useNavigate } from "react-router-dom";

const Jaipur = () => {
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
              India{" "}
            </span>{" "}
            / Jaipur
          </div>
          <br />
          <p>
            Jaipur is a vibrant amalgamation of the old and the new. Also called
            the Pink City, The capital of the royal state of Rajasthan, Jaipur
            has been ruled by Rajput kingdoms for many centuries and developed
            as a planned city in the 17th century AD. Along with Delhi and Agra,
            Jaipur forms the Golden Triangle, one of the most famous tourist
            circuits of the country.With the old city surrounded by walls and
            gates decorated with drawings on the backdrop of a beautiful pink
            hue, Jaipur, the pink city successfully manages to retain its old
            world charm. Home to a few UNESCO World Heritage sites including
            Amer Fort and Jantar Mantar, Jaipur is home to many magnificent
            forts, palaces. Jaipur is filled to the brim with bustling local
            bazaars.
          </p>
        </div>
        <div className="city-column">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.3825634854!2d75.65047013538643!3d26.885447917452552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1583392352493!5m2!1sen!2sin"
            sandbox="allow-scripts"
            title="Jaipur Map"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Jaipur;
