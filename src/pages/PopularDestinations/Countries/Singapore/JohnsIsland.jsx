import React from "react";
import { useNavigate } from "react-router-dom";

const JohnsIsland = () => {
    const navigate = useNavigate()
  return (
    <main>
      <div className="place-row">
        <div className="city-column city-description">
          <div className="place-head">
            <span onClick = {() => {navigate(-2)}}>Popular Destinations </span>/
            <span onClick = {() => {navigate(-1)}}> Singapore </span> / Johns Island
          </div>
          <br />
          <p>
            St. John's Island is a stunning island known for its chequered past
            and the former prison feel, located approximately 6.5 km south off
            of the main island of Singapore. The mesmerising sight is visited
            for the small patch of mangrove trees and turquoise water beaches
            used by the families for picnicking. It is also frequented for a
            spot of fishing. This, as well as its closeness to the main island,
            has made St. John's Island an ideal day trip from Singapore. Serving
            as a quarantine station for the immigrants during the 1930s, St
            Johns Island became a political prison and later a rehabilitation
            centre for the opium addicts. The prison-feel still lingers with
            barbed wire fences and watchtowers doting the island's landscape.
          </p>
        </div>
        <div className="city-column">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.675124618063!2d103.8412452188986!3d1.216688138759935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1ef42d167849%3A0xa758b8baf03cf625!2sSaint%20John&#39;s%20Island!5e0!3m2!1sen!2sin!4v1583401630324!5m2!1sen!2sin"
              sandbox="allow-scripts" title="Johns Island Map"></iframe>
        </div>
      </div>
    </main>
  );
};

export default JohnsIsland;
