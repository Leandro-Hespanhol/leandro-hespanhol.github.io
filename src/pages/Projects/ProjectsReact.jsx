import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'

export default function ProjectsReact() {
  return (
    <div>
      <Header />
      <Link to="/StarWars-Planet-Search">StarWars</Link>
    </div>
  )
}
