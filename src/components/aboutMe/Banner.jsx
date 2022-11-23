import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div id="banner">
      <h1>Hi! <span className="highlight">I'm Kevin Ma!</span></h1>
      <h1>Software Engineer, </h1>
      <h1>Former Auditor,</h1>
      <h1>and Life-Time Learner <span className="dot"></span></h1>
    </div>
  );
};

export default Banner;
