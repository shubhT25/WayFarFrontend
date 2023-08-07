import React from "react";
import { useNavigate } from "react-router-dom";

const Agra = () => {
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
            / Agra
          </div>
          <br />
          <p>
            "The city of Taj Mahal, the monument of eternal love" Home to one of
            the 7 wonders of the world, the Taj Mahal, Agra is a sneak peek into
            the architectural history with other UNESCO World Heritage Sites as
            Agra Fort and Fatehpur Sikri. History, architecture, romance all
            together create the magic of Agra and hence makes for a must-visit
            for anyone living in or visiting India. Located on the banks of
            river Yamuna, History fanatics, as well as architecture buffs, can
            have a ball here with the sheer expanse of the Mughal art and
            culture on display. Apart from its monuments, the city also has some
            exciting stuff for foodies - including the famous Agra ka Petha and
            amazing chaat and Lassi.
          </p>
        </div>
        <div className="city-column">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113579.63202975807!2d77.90997211421177!3d27.176309823138578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1583392401236!5m2!1sen!2sin"
            sandbox="allow-scripts"
            title="Agra Map"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Agra;
