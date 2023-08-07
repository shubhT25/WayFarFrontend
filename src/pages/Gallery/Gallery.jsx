import React from "react";
import ThailandGallery from "../../images/ThailandGallery.webp";
import GalleryPic from "../../images/GalleryPic.webp";
import SingaporeGallery from "../../images/singaporeGallery.jpg";
import Sunglasses from "../../images/woman-holding-sunglasses.jpg";
import Friends from "../../images/friends-backpacking-together.jpg";
import Selfie from "../../images/selfie-hikers-on-cobblestone-hill.jpg";
import Mysore from "../../images/MysoreDC.mp4";
import "./main.css";
import "./responsive.css";

const Gallery = () => {
  return (
    <main>
      <section className="main-gallery">
        <div className="gallery-head">Photo Gallery</div>
        <div className="gallery-row">
          <div className="gallery-column">
            <img
              src={ThailandGallery}
              style={{ width: "100%" }}
              alt=""
            />
            <img
              src={GalleryPic}
              style={{ width: "100%" }}
              alt=""
            />
          </div>
          <div className="gallery-column">
            <img
              src={Sunglasses}
              style={{ width: "100%" }}
              alt=""
            />
            <img
              src={SingaporeGallery}
              style={{ width: "100%" }}
              alt=""
            />
          </div>
          <div className="gallery-column">
            <img
              src={Friends}
              style={{ width: "100%" }}
              alt=""
            />
            <img
              src={Selfie}
              style={{ width: "100%" }}
              alt=""
            />
          </div>
        </div>
        <hr />
        <br />
        <div className="gallery-head" id="video">
          Video Gallery
        </div>
        <div className="grid-container">
          <div className="item2">
            <video controls={true}>
              <source src={Mysore} type="video/mp4" />
            </video>
          </div>
          <div className="item3">
            <video controls={true}>
              <source src={Mysore} type="video/mp4" />
            </video>
          </div>
          <div className="item4">
            <video controls={true}>
              <source src={Mysore} type="video/mp4" />
            </video>
          </div>
          <div className="item5">
            <video controls={true}>
              <source src={Mysore} type="video/mp4" />
            </video>
          </div>
        </div>
        <br />
        <br />
      </section>
      {/* <a href="#">
    <div className="top">^</div>
  </a> */}
    </main>
  );
};

export default Gallery;
