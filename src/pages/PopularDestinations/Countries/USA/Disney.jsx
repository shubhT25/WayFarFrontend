import React from "react";
import { useNavigate } from "react-router-dom";

const Disney = () => {
    const navigate = useNavigate()
  return (
    <main>
      <div className="place-row">
        <div className="city-column city-description">
          <div className="place-head">
            <span onClick = {() => {navigate(-2)}}>Popular Destinations </span>/
            <span onClick = {() => {navigate(-1)}}> USA </span> / Disney Land
          </div>
          <br />
          <p>
            This Disneyland Park is one of the biggest Disneylands in the world,
            and was designed and constructed under the instructions of Walt
            Disney himself!. Opened way back in 1955, the Disneyland Park is
            perhaps one of the best Disney theme parks in the world, if not the
            best. This park in particular was the first physical manifestation
            of Walt Disney's idea of a Disneyland, an idea that hit him after he
            visited various parks with his daughters. The park is absolutely
            massive, spread across 8 huge lands, with the first being - as usual
            - the Main Street, USA. Just like you'd expect, it's like revisiting
            every single Disney show you've ever seen. The park has huge castles
            and models, rides and shops, it's like a giant land of happiness!
          </p>
        </div>
        <div className="city-column">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.1268069289904!2d-81.56606268544617!3d28.38523770198205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88dd7ee634caa5f7%3A0xa71e391fd01cf1a0!2sWalt%20Disney%20World%20Resort!5e0!3m2!1sen!2sin!4v1583400341962!5m2!1sen!2sin"
              sandbox="allow-scripts" title="Walt Disney Map"></iframe>
        </div>
      </div>
    </main>
  );
};

export default Disney;
