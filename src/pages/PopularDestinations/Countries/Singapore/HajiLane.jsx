import React from "react";
import { useNavigate } from "react-router-dom";

const HajiLane = () => {
    const navigate = useNavigate()
  return (
    <main>
      <div className="place-row">
        <div className="city-column city-description">
          <div className="place-head">
            <span onClick = {() => {navigate(-2)}}>Popular Destinations </span>/
            <span onClick = {() => {navigate(-1)}}> Singapore </span> / Haji Lane
          </div>
          <br />
          <p>
            One of the narrowest streets in Singapore, Haji Lane is a chic
            alleyway splattered with colourful independent boutiques, cafes and
            quirky stores, sitting in the heart of Kampong Glam. The Bohemian
            street is lined with yoga centres, tattoo parlours, and vintage
            Egyptian restaurants attracting the young crowd who visit Haji Lane
            to shop at Singapore's nifty shops or just hang out with friends.
            The colourful graffiti splashed all across Haji Lane is another
            major attraction beckoning indie-minded shoppers looking to buy
            trendy and affordable brands.The lane maintains a vintage rustic
            style mixed with the new edgy hipster look with hints of Peranakan
            architecture that attracts millions of pedestrians to stroll through
            the quaint street, even if it's just for the lively vibe.
          </p>
        </div>
        <div className="city-column">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.789815778596!2d103.85673691426543!3d1.3009886620940825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19b0fec607c9%3A0x67de8f62f9f68ae9!2sHaji%20Ln%2C%20Singapore!5e0!3m2!1sen!2sin!4v1583401385779!5m2!1sen!2sin"
              sandbox="allow-scripts" title="Hajilane Map"></iframe>
        </div>
      </div>
    </main>
  );
};

export default HajiLane;
