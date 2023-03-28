import React from "react";
import "./AboutMe.scss";

const AboutMe = () => {
  return (
    <div id="aboutme">
      <br></br>
      
      <div className="aboutme-content">

      <h1 className="gradient-highlight">About Me</h1>
      <p>
        Hello! My name is Kevin Ma, and I am passionate, New York based bootcamp graduate with a current focus
        on front-end web development and backend unit integration testing. I am currently open for full-time job opportunities and potential personal project collaborations. If you are interested please contact me using the information listed below.
      </p>

      <br></br>
      <h1 className="gradient-highlight">Background</h1>
      <p>
        My first programming experience came from high school, in which I took a
        computer science course that revolved around NetLogo. I recall being
        enamored by the endless possibilities and the puzzle-like magical code
        one had to peice together, like casting a magic spell that suddenly made
        a bunch of turtle and polygons take shape and action. It allows me to created a fantastical virtual world with my own rules. 
        However, it wasn't at all easy - things like dynamic programming, recursions, debugging, considering all the avenues for base cases and how someone might break my code - was hard. 
        Despite the hardships though, I enjoyed the challenge, and the jolt of
        euphoria when one finally corrects that one bug or have a function
        working properly. 
      </p>
      <p>
        As like many teenagers graduating high school, I still had no idea what I wanted in my life or career.
        So I went to college and graduate school at SUNY Binghamton. Got a
        Master's in Accounting degree and became a licensed CPA because it was what I was good at - documentation, technical writing, math, Miscrosoft Excel, etc. 
        I worked for mid-size and Big 4 accounting firms, and volunteered for the IRS.
      </p>
      <p>
        The job itself wasn't too difficult and paid well - I made great friends, connections, and became exposed to 
        the little intricacies and practices companies used to turn a profit. Being able to
        dive deep into large quantities of data, nitpicking tiny details, trying to understand what, when, and why some transaction occurred was fun.
        However, the more I worked in the field, the more I realized that the most satisfaction I gained was when I dealt directly with the data itself. Extracting, transforming, loading the data, creating macros on excel to automate calculations and tedious procedures,
        and generating insights into how to better optimize the audit process to save time and preserve or enhance quality - that was satisfying.
      </p>
      <p>
        With the support of my invaluable friends and family I quit my old job
        and am now on my journey to becoming a full fledged Software Engineer,
        hoping to learn new skills in order to create solutions, websites, and
        applications that can benefit those people around me.
      </p>
      <p>I started this transition on March 31, 2022.</p>
      <p>
        Since then I have completed the Flatiron School Software Engineering
        BootCamp and have learned:
      </p>
      <ul>
        <li>HTML, CSS, JavaScript(ES6+)</li>
        <li>Data Structures and Algorithms in Python</li>
        <li>RESTful APIs using Ruby on Rails</li>
        <li>Dynamic Front-end Web Apps with React.js and Redux</li>
        <li>DRY and SOLID principles</li>
        <li>MVC (Model View Controller) Framework</li>
        <li>SQL and PostgreSQL</li>
        <li>Java and Java Spring Boot</li>
      </ul>
      </div>
    </div>
  );
};

export default AboutMe;
