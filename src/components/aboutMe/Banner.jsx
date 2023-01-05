import React from "react";
import "./Banner.scss";

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
        <img src="/images/pic1.jpg" alt="canyon selfie" />
        <img src="/images/pic2.jpg" alt="suit selfie" />
        <img src="/images/pic3.jpg" alt="dancers" />
      </div>
    </>
  );
};

export default Banner;
