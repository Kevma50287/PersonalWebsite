import React, { useEffect, useRef, useState } from "react";
import "./Banner.scss";
import imagesArray from "../../images";

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
  const wordDiv = useRef(null)
  const [index, setIndex] = useState(null);

  useEffect(() => {
    const increment = () => {
      wordDiv.current.classList.add("openclose-animation")
      if (index != arrayCount - 1) {
        const newIndex = index + 1;
        setIndex(newIndex);
      } else {
        setIndex(0);
      }
    };

    // We want to increment the index every 3.5 seconds
    const timer = (ms) => {
      setTimeout(increment, ms)
    }

    // for the wordDiv we want the animation to slowly reveal the word over the course of 3 seconds and pause for .5seconds
    // use a setTimeoutPromise that resolves after 3 seconds, then we toggle the aniamiton off

    const animationTimeoutPromise = async (ms) => {
      return new Promise(resolve => setTimeout(resolve, ms))
    }

    const clearAnimation = async(ms) => {
      await animationTimeoutPromise(ms)
      wordDiv.current.classList.remove("openclose-animation")
    }

    timer(3200)
    clearAnimation(3000)
    
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
          and <div ref={wordDiv} className="word openclose-animation">{textArray[index]}</div>{" "}
          <span className="dot"></span>
        </h1>
      </div>
      <div className="image-container">
        {imagesArray.map((imageLink, index) => <img className="banner-image" src={imageLink} key={index} alt="canyon selfie" />)}
      </div>
    </>
  );
};

export default Banner;
