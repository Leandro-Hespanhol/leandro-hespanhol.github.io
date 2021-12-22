import React, { Component } from 'react';
import Type from '../components/TypeWritter';
import foto from '../images/leandro-port.jpeg';
import Header from './Header';

export default class Home extends Component {
  render() {
    return (
      <div>
          <Header />
        <div className="img-user">
            <h1 className="title-user">
              Hi! I'm Leandro Hespanhol 
            </h1>
          <img src={foto} alt="Leandro Hespanhol" id="foto" className="port-image" />
        </div>
          <h1 className="title-user type-writter">{<Type />}</h1>
      </div>
    );
  }
}
