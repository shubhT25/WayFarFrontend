import React from "react";
import "./main.css";
import "./responsive.css";

const Offers = () => {
  return (
    <main>
      <div className="wrapper">
        <section className="offer-usa">
          <div className="superSaver-image">
            <div className="discountTag">Super-saver deal on USA</div>
          </div>
          <div className="superSaver-text">
            <p></p>
            <h2>American Dreams</h2>
            <span className="redCol">Save 35%</span>
            <br />
            <br />
            There is more to America than coffee, movies, baseball and huge
            architectural beauties. Relive your childhood in DisneyLand Park and
            Walt Disney World Resort, see active volcanoes in Island of Hawaii,
            capture the architectural brilliance in New York and have
            adventurous ride in Grand Canyon National Park.
            <br />
            <br />
            <strong>
              1D - DisneyLand Park, 2N- Walt Disney World Resort, 3N - Island of
              Hawaii, 4N - New York, 1D - Grand Canyon National Park{" "}
            </strong>
            <br />
            <br />
            <strong>Offer Price:</strong>
            <del>₹ 245000</del>
            <span className="redCol"> ₹159250</span>&nbsp;
            <p />
          </div>
        </section>
        <section className="offer-dubai">
          <div className="shopping-festival">
            <div className="dubaiOffers-image">
              <div className="dubaiOffers-heading">Dubai Shopping Festival</div>
            </div>
            <div className="dubaiOffers-text">
              <p></p>
              <h2>Delightful Dubai</h2>
              <span className="redCol">Save 30%</span>
              <br />
              <br />
              Relish the beauty of Burj Khalifa, have an exclusive shopping in
              Dubai Mall, enjoy a thrilling dune bashing experience in Safari
              Desert.
              <br />
              <br />
              <strong>
                1N - Burj Khalifa, 1N - Dubai Mall, 1N - Safari Desert
              </strong>
              <br />
              <br />
              <strong>Offer Price:</strong>
              <del>₹ 85200</del>
              <span className="redCol"> ₹59640</span>&nbsp;
              <p />
            </div>
          </div>
          <div className="india-offer">
            <div className="indiaOffer-image">
              <div className="indiaOffer-heading">India Travelogue</div>
            </div>
            <div className="indiaOffer-text">
              <p></p>
              <h2>Incredible India</h2>
              <span className="redCol">Save 25%</span>
              <br />
              <br /> Enjoy an exciting 7-day trip in India and explore the gifts
              of nature in Manali and Shimla and art and architecture in New
              Delhi and Jaipur.
              <br />
              <br />
              <strong>2N - Manali, 2N - Shilla, 1N -Agra, 2N - Jaipur </strong>
              <br />
              <br />
              <strong>Offer Price:</strong>
              <del>₹ 55000</del>
              <span className="redCol"> ₹41250</span>&nbsp;
              <p />
            </div>
          </div>
          <div className="france-offer">
            <div className="franceOffer-image">
              <div className="franceOffer-heading">France Bonanza</div>
            </div>
            <div className="franceOffer-text">
              <p></p>
              <h2>Romantic France</h2>
              <span className="redCol">Save 25%</span>
              <br />
              <br />
              Visit Paris - home to the Eiffel tower, have a pleasant stay at
              French Riviera and thriving nightlife at Biarritz.
              <br />
              <br />
              <strong>3N - Paris, 2N - French Riviera, 1N - Biarritz</strong>
              <br />
              <br />
              <strong>Offer Price:</strong>
              <del>₹ 120000</del>
              <span className="redCol"> ₹108000</span>&nbsp;
              <p />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Offers;
