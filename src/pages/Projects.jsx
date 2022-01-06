import React from 'react';
import Header from './Header';
import { reactProjects } from './Projects/Data';
import './Project.css';

export default function Projects() {
  return (
    <div>
      <Header />
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
              <h4>Core habilities: {abilities}</h4>
              <p>{description}</p>
              <div className="project-github-links">
                <a href={link} target="_blank" rel="noreferrer">
                  <h4 className="button-link">Go to Github</h4>
                </a>
                <a href={projectLink} target="_blank" rel="noreferrer">
                  <h4 className="button-link">Go to Project</h4>
                </a>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
