import React from "react";

const ContactUs = () => {
  return (
    <main className="contact-main">
      <section className="contact-section">
        <header>
          <h3 className="contact-head">Our Offices</h3>
        </header>
        <br />
        <p>
          Please contact our customer care center at
          <strong>1800-200-300</strong> or write to us at
          <strong>
            <em>care@wayfar.in</em>
          </strong>
          <br />
          <br />
          <strong>
            <u>Business timings:</u>
          </strong>
          Monday through Saturday 9.30 AM to 6.30 PM. Closed on Sundays and
          National Holidays
        </p>
        <br />
        <dl>
          <dt>WayFar Ltd.</dt>
          <dd>
            <address>
              Electronics City, <br />
              Hosur Road <br />
              Bengaluru - 560 100
            </address>
          </dd>
          <br />
          <dt>Corporate Office :</dt>
          <dd>
            <address>
              Travel Towers, <br />
              1st Floor, "B" Wing, <br />
              Navi Mumbai <br />
              Mumbai - 400 018.
            </address>
          </dd>
        </dl>
      </section>
    </main>
  );
};

export default ContactUs;
