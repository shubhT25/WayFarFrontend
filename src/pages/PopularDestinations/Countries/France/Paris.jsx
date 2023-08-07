import React from "react";
import { useNavigate } from "react-router-dom";

const Paris = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="place-row">
        <div className="city-column city-description">
          <div className="place-head">
            <span
              onClick={() => {
                navigate(-2);
              }}
            >
              Popular Destinations{" "}
            </span>
            /
            <span
              onClick={() => {
                navigate(-1);
              }}
            >
              {" "}
              France{" "}
            </span>{" "}
            / Paris
          </div>
          <br />
          <p>
            Paris needs no formal introduction - synonymous with culture,
            architecture, food and fashion. The French capital makes it the
            dream destination for many. So would you want to leave Paris 'Before
            Sunset' or would you take our word and spend a 'Midnight in
            Paris'?!One of the greatest art repositories in the world,
            harbouring artistic pedigree in the likes of Renoir, Rodin, Picasso,
            Monet and Van Gogh. The magnificent Louvre, exceptional
            impressionist collections and the Centre Pompidou's modern and
            contemporary art, a plethora of smaller museums showcasing
            collections in every genre imaginable.
          </p>
        </div>
        <div className="city-column">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.75769393811!2d2.2770197739280174!3d48.85895068137428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sin!4v1583398568628!5m2!1sen!2sin"
            sandbox="allow-scripts"
            title="Paris Map"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Paris;
