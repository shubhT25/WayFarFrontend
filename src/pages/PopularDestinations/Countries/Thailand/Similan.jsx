import React from "react";
import { useNavigate } from "react-router-dom";

const Similan = () => {
    const navigate = useNavigate()
  return (
    <main>
      <div className="place-row">
        <div className="city-column city-description">
          <div className="place-head">
            <span onClick = {() => {navigate(-2)}}>Popular Destinations </span>/
            <span onClick = {() => {navigate(-1)}}> Thailand </span> / Similan Island
          </div>
          <br />
          <p>
            Similan is an archipelago of 9 small islands which has Malay roots.
            The Similan islands national park is a UNESCO World heritage site.
            These are one of Thailand's most stunning places with beautiful
            marine life underwater and also great birds in the air. There are
            splendidly pictursque white sand beaches with pristine blue waters.
            The islands also have many hiking trails for the adventurous soul.
            The Similan islands are an archipelago of nine islands (as
            translated in the local Moken language) which are Ko Bn, Ko Bayu, Ko
            Similan, Ko Payu, Ko Miang (two adjoining), Ko Payan, Ko Payang, and
            Ko Huyong. The Similan islands are considered to be the best diving
            spot in Thailand with coral reefs over 5000 years old and extensive
            marine life.
          </p>
        </div>
        <div className="city-column">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31555.591840185716!2d97.6277507364938!3d8.64877708007825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305a71a2bdeee5fd%3A0xe8d3e2bd15fe3719!2sSimilan%20Islands!5e0!3m2!1sen!2sin!4v1583401951390!5m2!1sen!2sin"
              sandbox="allow-scripts" title="Similan Island Map"></iframe>
        </div>
      </div>
    </main>
  );
};

export default Similan;
