import React, { useEffect, useState } from "react";
import "./Banner.scss";
import image1 from "/assets/images/pic1.jpg";
import image2 from "/assets/images/pic2.jpg";
import image3 from "/assets/images/pic3.jpg";

const Banner = () => {
  const textArray = [
    "Lifetime Learner",
    "Dancer",
    "Hiker",
    "Tech Enthusiast",
    "Creative Thinker",
    "Collaborator",
    "Traveller",
    "Gamer",
    "Visionary",
  ];
  const arrayCount = textArray.length;

  const [index, setIndex] = useState(null);
  useEffect(() => {
    const increment = () => {
      if (index != arrayCount - 1) {
        const newIndex = index + 1;
        setIndex(newIndex);
      } else {
        setIndex(0);
      }
    };

    // const timer = setTimeout(() => {
    //   const interval = setInterval(increment, 3000)
    // }, 5000)

    const timer = setTimeout(increment, 3000);
    // return () => clearTimeout(timer)
  }, [index]);

  return (
    <>
      <div id="banner">
        <h1>
          Hi, <span className="highlight">I'm Kevin Ma!</span>
        </h1>
        <h1>Software Engineer, </h1>
        <h1>Senior Auditor & CPA,</h1>
        <h1>
          and <div className={index != null ? 'word' : ''}>{textArray[index]}</div>{" "}
          <span className="dot"></span>
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
