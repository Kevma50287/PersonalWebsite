import React from "react";
import "./Banner.scss";
import image1 from "/assets/images/pic1.jpg";
import image2 from "/assets/images/pic2.jpg";
import image3 from "/assets/images/pic3.jpg";

const Banner = () => {
  return (
    <>
      <div id="banner">
        <h1>
          Hi, <span className="highlight">I'm Kevin Ma!</span>
        </h1>
        <h1>Software Engineer, </h1>
        <h1>Former Auditor,</h1>
        <h1>
          and Life-Time Learner <span className="dot"></span>
        </h1>
      </div>
      <div className="image-container">
        <img src={image1} alt="canyon selfie" />
        <img src={image2} alt="suit selfie" />
        <img src={image3} alt="dancers" />
      </div>
    </>
  );
};

export default Banner;
