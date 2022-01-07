import React from 'react';
import Header from './Header';
import { reactProjects } from './Projects/Data';
import './Project.css';

export default function Projects() {
  return (
    <div id="projects-page">
      {/* <Header /> */}
      <h1 className="projects-title">Front End Projects</h1>
      <div className="window-div">
        {reactProjects.map(
          ({ name, abilities, image, description, link, projectLink }) => (
            <div key={name} className="card-div">
              <h2>{name}</h2>
              <div className="link-img-div">
                <a href={link} target="_blank" rel="noreferrer">
                  <img
                    src={image}
                    alt={`${name} logo`}
                    className="project-picture"
                  />
                </a>
              </div>
              <div className="abilities-descrip">
                <h4>Core abilities: {abilities}</h4>
                <p>{description}</p>
              </div>
              <div className="project-github-links">
                <a href={link} target="_blank" rel="noreferrer">
                  <button className="button-link">Go to Github</button>
                </a>
                <a href={projectLink} target="_blank" rel="noreferrer">
                  <button className="button-link">Go to Project</button>
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
