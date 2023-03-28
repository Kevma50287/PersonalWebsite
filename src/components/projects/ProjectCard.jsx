import React from "react";
import "./projects.scss";
import GitHubLogo from "/assets/icons8-github.svg";
import YoutubeLogo from "/assets/icons8-youtube.svg";

const ProjectCard = ({ props }) => {
  const { name, github, demo, description, technologies, thumbnail } = props;
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
        {Array.isArray(thumbnail) ? (
          <>
            <iframe
              src={thumbnail[0]}
              className="giphy-embed thumbnail"
              allowFullScreen
            ></iframe>
            <p>
              <a href={thumbnail[1]}></a>
            </p>
          </>
        ) : (
          <img src={thumbnail} className="thumbnail" />
        )}
        <p>{description}</p>
        <div>{techArray}</div>
        <div className="icon-container">
          <a className="project-card-link" href={`${github}`}>
            <img
              className="project-card-link-img"
              src={GitHubLogo}
              alt="Github Logo"
            />
          </a>
          <a className="project-card-link" href={`${demo}`}>
            <img
              className="project-card-link-img"
              src={YoutubeLogo}
              alt="Youtube Logo"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
