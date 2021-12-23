import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import './App.css'

import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectsReact from './pages/Projects/ProjectsReact';

export default function App() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={ <Home />}/>
            <Route path="/projects" element={ <Projects />}/>
            <Route path="/projects/projectsReact" element={ <ProjectsReact />}/>
            <Route path="/contact" element={ <Contact />}/>
            <Route path="/experiences" element={ <Experiences />}/>
          </Routes>
        </BrowserRouter>
      </div>
    )
}
