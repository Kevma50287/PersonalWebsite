import React from "react";
import "./projects.scss";
import GitHubLogo from "../../assets/icons8-github.svg";
import YoutubeLogo from "../../assets/icons8-youtube.svg";

const ProjectCard = ({ props }) => {
  const { name, github, demo, description, technologies } = props;
  const techArray = technologies.map((e) => {
    return <div className="tag">{e}</div>;
  });
  return (
    <div className="project-card-wrapper">
      <div className="project-card">
        <h2>{name}</h2>
        <p>{description}</p>
        <div className="flex flex-row">{techArray}</div>

        <a href={`${github}`}>
          <img className="logo" src={GitHubLogo} alt="Github Logo" />
        </a>

        <a href={`${demo}`}>
        <img className="logo" src={YoutubeLogo} alt="Youtube Logo" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
