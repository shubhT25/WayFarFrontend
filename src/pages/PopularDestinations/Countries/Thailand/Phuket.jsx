import React from "react";
import { useNavigate } from "react-router-dom";

const Phuket = () => {
    const navigate = useNavigate()
  return (
    <main>
      <div className="place-row">
        <div className="city-column city-description">
          <div className="place-head">
            <span onClick = {() => {navigate(-2)}}>Popular Destinations </span>/
            <span onClick = {() => {navigate(-1)}}> Thailand </span> / Phuket
          </div>
          <br />
          <p>
            Phuket is one of the southern provinces of Thailand. Phuket's south
            coast offers its most popular beaches. Phuket offers a rainbow
            spectrum of spectacular holiday sights from blue lagoons and pink
            sunsets to orange-robed monks.Koh Phi Phi, Phang Nga Bay and Patong
            Beach are popular spots. The Shrine of the Serene Light is a Chinese
            temple with Taoist etchings on its walls and ceramic sculptures on
            its roof. Wat Put Jaw is a C    hinese Buddhist temple dedicated to Kuan
            Yin, the goddess of mercy. Then we have Jui Tui Shrine, with ornate
            carvings of guardians on the doors. The Phuket Trickeye Museum is an
            interactive art gallery with 3D effect paintings.The major
            attractions in Phuket are Two Heroines Monument, Thalang National
            Museum,Hat Karon, Kamala Beach, etc.
          </p>
        </div>
        <div className="city-column">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31616.896062337357!2d98.37445888627393!3d7.883348496768826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x305031fd2d6380a3%3A0x8df88000bd82f66b!2sPhuket%2C%20Mueang%20Phuket%20District%2C%20Phuket%2083000%2C%20Thailand!5e0!3m2!1sen!2sin!4v1583402164312!5m2!1sen!2sin"
              sandbox="allow-scripts" title="Phuket Map"></iframe>
        </div>
      </div>
    </main>
  );
};

export default Phuket;
