import React from "react";

const AboutUs = () => {
  return (
    <main>
      <section className="about-content">
        <section>
          <header>
            <h3>About Us</h3> <br />
            <h4>WayFar - Making Moments to Memories</h4>
          </header>
          <br />
          <p>
            At the heart of everything we do at WayFar, is add magic to our
            customers' trips. We do this by offering them over 500 unforgettable
            experiences like staying in a floating cottage, dining like the
            royals,dining in houseboats and many more. Be it in India or abroad,
            each of our trips has something unique for families to love
            together,laugh together and grow together.
          </p>
          <br />
        </section>
        <hr />
        <br />
        <article>
          <header>
            <h4>Trip Testimonials</h4>
          </header>
          <article>
            <br />
            <p>
              For travellers who want to explore the world at their own pace and
              space, WayFar is the right choice. With handy packages and awesome
              destinations, this is the best, one can get.
              <em>- Adam and Eve</em>
            </p>
          </article>{" "}
          <br />
          <article>
            <p>
              We had the most remarkable family tour with WayFar. The guides
              truly took care of us, and did their best to make this trip
              memorable.
              <em>- John and Cindy</em>
            </p>
          </article>
          <br />
        </article>
        <hr />
        <br />
        <section className="container">
          <section className="awards-section">
            <header>
              <h4>Awards</h4>
              <br />
            </header>
            <ol>
              <li>
                WayFar is rated India’s Most Popular Resort Chain by the Times
                Travel Award, 2021.
              </li>
              <li>
                WayFar is voted India’s Favourite Resort Chain by Vacation IQ,
                2018.
              </li>
              <li>
                Bestowed with the prestigious Silver Peacock Award for
                Sustainability 2016.
              </li>
            </ol>
          </section>
          <aside className="knowmore-section">
            <header>
              <h4>Know more about : </h4>
            </header>
            <ul>
              <li>
                <a
                  href="https://www.thetimes.co.uk/travel/awards"
                  target="_"
                  rel="noopener noreferrer"
                >
                  Times Travel Award
                </a>
              </li>
              <li>
                <a
                  href="https://vacationaward.com/"
                  target="_"
                  rel="noopener noreferrer"
                >
                  Vacation IQ
                </a>
              </li>
              <li>
                <a
                  href="https://economictimes.indiatimes.com/topic/The-Silver-Peacock-award"
                  target="_"
                  rel="noopener noreferrer"
                >
                  Silver Peacock Award
                </a>
              </li>
            </ul>
          </aside>
        </section>
        <br />
      </section>
    </main>
  );
};

export default AboutUs;
