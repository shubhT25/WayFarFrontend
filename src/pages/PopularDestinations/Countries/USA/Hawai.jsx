import React from "react";
import { useNavigate } from "react-router-dom";

const Hawai = () => {
    const navigate = useNavigate()
  return (
    <main>
      <div className="place-row">
        <div className="city-column city-description">
          <div className="place-head">
            <span onClick = {() => {navigate(-2)}}>Popular Destinations </span>/
            <span onClick = {() => {navigate(-1)}}> USA </span> / Hawai
          </div>
          <br />
          <p>
            The Hawaiian Islands are an archipelago of eight major islands,
            several atolls, numerous smaller islets, and seamounts in the North
            Pacific Ocean, extending some 1,500 miles (2,400 kilometers) from
            the island of Hawaii in the south to northernmost Kure Atoll.
            Formerly the group was known to Europeans and Americans as the
            Sandwich Islands, a name that James Cook chose in honor of the then
            First Lord of the Admiralty John Montagu, 4th Earl of Sandwich. The
            contemporary name is derived from the name of the largest island,
            Hawaii Island. Although Hawaii is a U.S. state, it is only part of
            the U.S. politically and not geographically connected to North
            America.
          </p>
        </div>
        <div className="city-column">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d962271.1135038161!2d-155.99468922817542!3d19.590003548004777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7953e7c1c5f73a59%3A0x1455a492f9d78134!2sIsland%20of%20Hawai&#39;i!5e0!3m2!1sen!2sin!4v1583399762147!5m2!1sen!2sin"
              sandbox="allow-scripts" title="Hawaii Map"></iframe>
        </div>
      </div>
    </main>
  );
};

export default Hawai;
