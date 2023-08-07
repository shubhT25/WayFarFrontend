import React from "react";
import { useNavigate } from "react-router-dom";

const Shimla = () => {
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
              India{" "}
            </span>{" "}
            / Shimla
          </div>
          <br />
          <p>
            Situated at a height of 2200m, Shimla is the capital and the largest
            city of Himachal Pradesh in India. Set amidst beautiful hills and
            mystical woods, Shimla has been a very popular hill-station among
            Indian families and honeymooners since the last 50 years. British
            loved this city so much that they made Shimla their summer capital
            in 1864 and used to rule the sub-continent from here whenever the
            temperature rose in the nearby plains. Shimla still retains its old
            world charm with beautiful colonial architecture,
            pedestrian-friendly Mall Road and beautiful churches. The weather is
            pleasant for most of the months with tourists flocking especially
            during the summer months. The winters are cold with some days of
            snow from mid-December till February end.
          </p>
        </div>
        <div className="city-column">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54674.09294742726!2d77.12400160564128!3d31.078288180747787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390578e3e35d6e67%3A0x1f7e7ff6ff9f54b7!2sShimla%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1583392429093!5m2!1sen!2sin"
            sandbox="allow-scripts"
            title="Shimla Map"
          ></iframe>
        </div>
      </div>
    </main>
  );
};

export default Shimla;
