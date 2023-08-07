import React from "react";
import { useNavigate } from "react-router-dom";

const Krabi = () => {
    const navigate = useNavigate()
  return (
    <main>
      <div className="place-row">
        <div className="city-column city-description">
          <div className="place-head">
            <span onClick = {() => {navigate(-2)}}>Popular Destinations </span>/
            <span onClick = {() => {navigate(-1)}}> Thailand </span> / Krabi
          </div>
          <br />
          <p>
            The southern Thailand town of Krabi serves as base camp for
            exploring the lush region of jungles, limestone cliffs and idyllic
            isles floating just offshore in the Andaman Sea. The rock faces at
            Railay Beach near Ao Nang have attracted climbers from all over the
            world.  Railay has numerous multi-pitch areas most of which start
            from the beach itself. Kayaking, sailing, bird watching, snorkeling
            are also among top activities. The riverside pier links travellers
            with ferries and longboats to the best scuba diving, rock climbing
            and white sand beaches on the coast. Ko Lanta National Park, also in
            Krabi Province, includes several coral-fringed islands with
            well-known diving sites. The province includes over 80 smaller
            islands well-known to adventurers, yachtsmen, scuba-divers,
            snorkelers, and day-trippers.
          </p>
        </div>
        <div className="city-column">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1011351.3166156673!2d98.43341984676051!3d8.04102504014663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30518d792d7f9309%3A0x10223bc2c364c90!2sKrabi%2C%20Thailand!5e0!3m2!1sen!2sin!4v1583402106154!5m2!1sen!2sin"
              sandbox="allow-scripts" title="Krabi Map"></iframe>
        </div>
      </div>
    </main>
  );
};

export default Krabi;
