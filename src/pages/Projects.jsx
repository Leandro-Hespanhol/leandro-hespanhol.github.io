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
            <h1>{ name }</h1>
            <img src={ image } alt={ `${name} logo` } />
            <h2>Core habilities: { habilities }</h2>
            <h4>{ description }</h4>
          <a href={ link } target="_blank" rel="noreferrer"><h1>{ name }</h1></a>
          </div>
          )}
        </div>
      {console.log('fazer um hover tocando sweetdreams, ou não')}
    </div>
  )
}
