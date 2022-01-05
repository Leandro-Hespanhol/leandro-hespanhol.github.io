import React, { Component } from 'react';
import Draggable from 'react-draggable';
import Footer from '../components/Footer';
import Type from '../components/TypeWritter';
import foto from '../images/leandro-port.jpeg';
import Header from './Header';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home-body-content">
          <div className="title-typewriter-div">
              <h1 className="title-user">
                Hi! I'm Leandro Hespanhol 
              </h1>
            <Draggable handle="#textHandle">
              <h1 className="title-user type-writter" id="textHandle">{<Type />}</h1>
            </Draggable>
          </div>
          <div className="img-div">
            <img src={ foto } alt="Leandro Hespanhol" id="foto" className="port-image" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
