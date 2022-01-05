import React from 'react'
import Header from './Header'
import { reactProjects } from './Projects/Data'
import './Project.css'

export default function Projects() {
  return (
    <div>
      <Header />
        <div className="window-div">
          {reactProjects.map(({ name, habilities, image, description, link}) => 
          <div key={ name } className="card-div">
            <h2>{ name }</h2>
            <div className="link-img-div">
              <a href={ link } target="_blank" rel="noreferrer">
                <img src={ image } alt={ `${name} logo` } className="project-picture" /> 
              </a> 
            </div>
            <h4>Core habilities: { habilities }</h4>
            <p>{ description }</p>
          <a href={ link } target="_blank" rel="noreferrer">
            <h4 className="project-link">{ name }</h4>
          </a>
          </div>
          )}
        </div>
    </div>
  )
}
