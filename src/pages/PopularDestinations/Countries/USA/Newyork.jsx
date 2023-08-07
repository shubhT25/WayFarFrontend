import React from "react";
import { useNavigate } from "react-router-dom";

const Newyork = () => {
    const navigate = useNavigate()
  return (
    <main>
      <div className="place-row">
        <div className="city-column city-description">
          <div className="place-head">
            <span onClick = {() => {navigate(-2)}}>Popular Destinations </span>/
            <span onClick = {() => {navigate(-1)}}> USA </span> / Newyork
          </div>
          <br />
          <p>
            An iconic global centre of the world that has inspired the
            world with its brilliant architecture, movies, and art. Also known
            as the Big Apple, New York is well-known for its magnificent
            skyscrapers, a perfect destination for travellers from all over the
            world.From the flashy neon lights and the hustle and bustle of Times
            Square to the skyscrapers of Wall Street and the verdant ways of
            Central Park, New York City never ceases to amaze with its energy
            and vibrancy. Broadway shows, ethnic enclaves and shops, memorable
            lanes of stately brownstones, in vogue bars and diners all add to
            the urban buzz. Rightly nicknamed 'The city that never sleeps', it
            is known for its extravagant nightlife - full of music, fashion and
            life.
          </p>
        </div>
        <div className="city-column">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.279909073!2d-74.25987368715491!3d40.69767006458873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1583399454469!5m2!1sen!2sin"
              sandbox="allow-scripts" title="New York Map"></iframe>
        </div>
      </div>
    </main>
  );
};

export default Newyork;
