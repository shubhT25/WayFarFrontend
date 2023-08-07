import React from "react";
import { useNavigate } from "react-router-dom";

const Walt = () => {
    const navigate = useNavigate()
  return (
    <main>
      <div className="place-row">
        <div className="city-column city-description">
          <div className="place-head">
            <span onClick = {() => {navigate(-2)}}>Popular Destinations </span>/
            <span onClick = {() => {navigate(-1)}}> USA </span> / Walt Disney
          </div>
          <br />
          <p>
            You really can't miss the world's largest theme park resort;
            which comprises of 4 theme parks, 2 water parks, numerous hotels,
            shops restaurants and a lot of recreational activities. Walt Disney
            Resort is the top-most reason why people visit Orlando. You don't
            need to be a kid to enjoy here- you're going to have a great time no
            matter which age group you belong to. The four amazing theme parks
            are Magic World, Epcot, Disney's Hollywood Studios and Disney's
            Animal Kingdom. For some adventure, you've got two exciting water
            parks: Disney's Typhoon Lagoon and Disney's Blizzard Beach.
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

export default Walt;
