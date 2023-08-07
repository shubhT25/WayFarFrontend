import React from "react";
import { useNavigate } from "react-router-dom";

const Gardens = () => {
    const navigate = useNavigate()
  return (
    <main>
      <div className="place-row">
        <div className="city-column city-description">
          <div className="place-head">
            <span onClick = {() => {navigate(-2)}}>Popular Destinations </span>/
            <span onClick = {() => {navigate(-1)}}> Singapore </span> / Gardens by the bay
          </div>
          <br />
          <p>
            Nestled in Central Singapore, Gardens by the Bay is the
            botanic gardens of the future, the land of next-gen Supertrees
            groves, high-tech space-domes and outlandish sculptures. Home to
            almost 4,00,000 plants, Gardens by the Bay is famous for the
            awe-inspiring contemporary architecture and the hypnotic Garden
            Rhapsody, the light and sound show. The vast and colourful super
            park conservatories is spread across 250 acres of reclaimed land
            along the waterfront. Its famous Supertree structures, which are
            futuristic botanical giants connected by a commanding Skyway, offer
            a mesmerizing view as one traverse the skywalk over the gardens.
          </p>
        </div>
        <div className="city-column">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8202827508535!2d103.86142451426552!3d1.2815736621492018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1904937e1633%3A0x62099677b59fca76!2sGardens%20by%20the%20Bay!5e0!3m2!1sen!2sin!4v1583401492447!5m2!1sen!2sin"
              sandbox="allow-scripts" title="Gardens by the Bay Map"></iframe>
        </div>
      </div>
    </main>
  );
};

export default Gardens;
