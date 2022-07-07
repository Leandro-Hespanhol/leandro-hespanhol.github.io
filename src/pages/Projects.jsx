import React from 'react';
import { reactProjects } from './data/projectsData';
import './Projects.scss';

export default function Projects() {
  return (
    <section id="projects-page" className="projects-page">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-container">
        {reactProjects.map(
          ({ frontBackFull, name, abilities, image, description, link, projectLink }, idx) => (
            <div key={name} className="card-div" data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left' }>
              <span className="frontBackFull">{frontBackFull}</span><h2>{name}</h2>
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
    </section>
  );
}
