import React from "react";
import "./projects.scss";
import GitHubLogo from "../../assets/icons8-github.svg";
import YoutubeLogo from "../../assets/icons8-youtube.svg";

const ProjectCard = ({ props }) => {
  const { name, github, demo, description, technologies } = props;
  const techArray = technologies.map((e, i) => {
    return (
      <div className="tag gradient-highlight" key={i}>
        {e}
      </div>
    );
  });
  return (
    <div className="project-card-wrapper">
      <div className="project-card">
        <h2 className="gradient-highlight">{name}</h2>
        <p>{description}</p>
        <div>{techArray}</div>

        <div className="icon-container">
          <a href={`${github}`}>
            <img className="logo" src={GitHubLogo} alt="Github Logo" />
          </a>
          <a href={`${demo}`}>
            <img className="logo" src={YoutubeLogo} alt="Youtube Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
