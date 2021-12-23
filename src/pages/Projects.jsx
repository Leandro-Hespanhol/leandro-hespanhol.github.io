import React from 'react'
import Draggable from 'react-draggable'
import { Link } from 'react-router-dom'
import Header from './Header'
import { reactProjects } from './Projects/Data'

export default function Projects() {
  return (
    <div>
      <Header />
      <Draggable handle="#windowHandle">
        <div className="window-div" id="windowHandle">
          {reactProjects.map(({ name, habilities, description, link}) => 
          <div key={ name } className="card-div">
            <h1>{ name }</h1>
            <h2>Core habilities: { habilities }</h2>
            <h4>{ description }</h4>
          <Link to={ link }>{ name }</Link>
          </div>
          )}
        </div>
      </Draggable>
      {console.log(reactProjects)}
    </div>
  )
}
