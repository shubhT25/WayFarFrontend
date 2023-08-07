import React from "react";
import { useNavigate } from "react-router-dom";

const DubaiMall = () => {
    const navigate = useNavigate()
  return (
    <main>
      <div className="place-row">
        <div className="city-column city-description">
          <div className="place-head">
            <span onClick = {() => {navigate(-2)}}>Popular Destinations </span>/
            <span onClick = {() => {navigate(-1)}}> UAE </span> / Dubai Mall
          </div>
          <br />
          <p>
            The Dubai Mall, also known as the home of the Dubai shopping
            festival, is one of the world's largest shopping malls with an area
            of over 500,000 square meters! With more than 1200 stores, a large
            walk-through aquarium, a world-class ic rink, 14,000 parking spaces
            and more exciting experiences for shoppers, the mall was voted the
            best shopping experience in the world by Grazia Magazine in 2010.
            Dubai Mall is one of the city's premier malls, offering entry to the
            world of amusement and entertainment. It is home to the famous
            Underwater Zoo, which is a walk-through aquarium with a collection
            of over 300 species of marine animals. Another favourite activity
            here apart from shopping is the Dubai Ice Rink.
          </p>
        </div>
        <div className="city-column">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7220.342445543446!2d55.27512052304875!3d25.197447643554725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f682829c85c07%3A0xa5eda9fb3c93b69d!2sThe%20Dubai%20Mall!5e0!3m2!1sen!2sin!4v1583400736988!5m2!1sen!2sin"
              sandbox="allow-scripts" title="Dubai Mall Map"></iframe>
        </div>
      </div>
    </main>
  );
};

export default DubaiMall;
