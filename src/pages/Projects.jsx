import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

export default function Projects() {
  return (
    <div>
      <Header />
      <Link to="/StarWars-Planetsearch">StarWars</Link>
    </div>
  )
}
