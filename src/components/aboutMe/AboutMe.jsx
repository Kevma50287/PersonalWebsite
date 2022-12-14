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
        a bunch of turtle and polygons take shape and action. However, I was
        intimidated by my peers who had the innate aptitude or intellect for
        programming as they created wildly fantastical worlds and proejcts I
        never thought possible. Meanwhile, I found writing a simple recursive
        function difficult. Although I enjoyed the challenge, and the jolt of
        euphoria when one finally corrects that one bug or have a function
        working properly, I simply held the thought that 'I wasn't good enough'.
      </p>
      <p>
        So I went to college and graduate school at SUNY Binghamton. Got a
        Master's in Accounting degree and became a licensed CPA. Worked for
        mid-size and Big 4 accounting firms, and volunteered for the IRS.
      </p>
      <p>
        It was the safe path to a stable life my parents wanted for me, but I
        felt like I was a zombie; mindlessly wandering through life on a
        predetermined track, just half-living. Literally. Half the year -
        October through April - I worked 80-100 hour weeks and the other half I
        did barely 20 hours.
      </p>
      <p>
        And one day I really thought to myself - What was it that I used to do
        that made me feel happy and gave me an eagerness to continue learning,
        face new problems and challenges, and find inspiration?
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
