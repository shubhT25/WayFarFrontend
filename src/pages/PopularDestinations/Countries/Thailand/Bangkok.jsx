import React from "react";
import { useNavigate } from "react-router-dom";

const Bangkok = () => {
    const navigate = useNavigate()
  return (
    <main>
      <div className="place-row">
        <div className="city-column city-description">
          <div className="place-head">
            <span onClick = {() => {navigate(-2)}}>Popular Destinations </span>/
            <span onClick = {() => {navigate(-1)}}> Thailand </span> / Bangkok
          </div>
          <br />
          <p>
            A city that never sleeps, Bangkok, the capital of Thailand is
            a modern-day melting pot of various faiths and cultures.The
            nightlife of Bangkok,revolves around flashy nightclubs, rooftop
            bars, bright neon light signs and cheap drinks.It also includes
            cabaret shows, muay thai and dance exhibitions and even cultural
            walking tours.Here, towering skyscrapers stand in harmony next to
            temples and monasteries.
          </p>
        </div>
        <div className="city-column">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496113.92041601305!2d100.3529071711315!3d13.72510879354118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2sBangkok%2C%20Thailand!5e0!3m2!1sen!2sin!4v1583402048857!5m2!1sen!2sin"
              sandbox="allow-scripts" title="Bangkok Map"></iframe>
        </div>
      </div>
    </main>
  );
};

export default Bangkok;
