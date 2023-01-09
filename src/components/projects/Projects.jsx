import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const allProjects = [
    {
      name: "Pokedex/Who's That Pokemon?",
      github: "https://github.com/Kevma50287/phase-1-Personal-Project",
      demo: "In Progress",
      description:
        "First ever programming project - Simple pokedex and Who's That Pokemon? game using the Pokemon API",
      technologies: ["JS", "CSS", "HTML"],
    },
    {
      name: "WonderHouseSupply",
      github: "https://github.com/Kevma50287/WonderHouseSupply",
      demo: "In Progress",
      description:
        "Created front-end website for my mother's hardware store. Users can login and add items to their cart to be held at the store for pickup",
      technologies: [
        "React.js",
        "React Router V6",
        "Material UI",
        "JSON Server",
      ],
    },
    {
      name: "Yumo/BulletJournal",
      github: "https://github.com/Kevma50287/Phase-4-BulletJournal",
      demo: "In Progress",
      description:
        "A bullet journal/diary application where users can sign up create text journal entries, and utilize clickable icons to quickly record daily activities",
      technologies: [
        "React.js",
        "Redux",
        "Ruby on Rails",
        "TypeScript",
        "Axios",
      ],
    },
  ];

  const projectsArray = allProjects.map((e, i) => (
    <ProjectCard props={e} key={i} />
  ));

  return (
    <div id="projects">
      <div className="general-container">
        <h1 className="gradient-highlight">Project Portfolio</h1>
        <div id="card-container">{projectsArray}</div>
      </div>
    </div>
  );
};

export default Projects;
