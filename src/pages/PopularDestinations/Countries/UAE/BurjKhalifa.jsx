import React from "react";
import { useNavigate } from "react-router-dom";

const BurjKhalifa = () => {
    const navigate = useNavigate()
  return (
    <main>
      <div className="place-row">
        <div className="city-column city-description">
          <div className="place-head">
            <span onClick = {() => {navigate(-2)}}>Popular Destinations </span>/
            <span onClick = {() => {navigate(-1)}}> UAE </span> / Burj Khalifa
          </div>
          <br />
          <p>
            Towering at a height of 2,700 feet, the Burj Khalifa is currently
            the tallest tower in the world. With two observation decks, a Las
            Vegas-inspired fountain, nine of the city's best luxury hotels and
            multiple restaurants, this 21st-century architectural marvel must be
            your number one place to visit when in Dubai or even the UAE. Also,
            make sure to book your tickets in advance well to avoid last moment
            hassles.
          </p>
        </div>
        <div className="city-column">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.1785100243164!2d55.272187714484424!3d25.197201837884773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xff45e502e1ceb7e2!2sBurj%20Khalifa!5e0!3m2!1sen!2sin!4v1583400799244!5m2!1sen!2sin"
              sandbox="allow-scripts" title="Burj Khalifa Map"></iframe>
        </div>
      </div>
    </main>
  );
};

export default BurjKhalifa;
