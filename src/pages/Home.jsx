import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Type from '../components/TypeWritter';
import foto from '../images/leandro-port.jpeg';
import Contact from './Contact';
import Header from './Header';
import './Home.css';
import Projects from './Projects';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-body-content">
          <div className="title-typewriter-div">
              <h1 className="title-user">
                Hi!  I'm Leandro Hespanhol 
              </h1>
            <Draggable handle="#textHandle">
              <h1 className="title-user type-writter" id="textHandle">{<Type />}</h1>
            </Draggable>
            <p className="intro-description">Its a new career for me and I must say, its being such a joy!
            <br></br>
            Please take a look and I hope you find what you seek!</p>
          </div>
          <div className="img-div">
            <img src={ foto } alt="Leandro Hespanhol" id="foto" className="port-image" />
          </div>
        </div>
        <Projects />
        <Contact />
      </div>
    );
  }
}
