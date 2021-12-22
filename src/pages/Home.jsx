import React, { Component } from 'react';
import foto from '../images/leandro-port.jpeg';
import Header from './Header';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="img-user">
          <h1 className="title-user">
            Hi! Nice to meet you, my name is Leandro Hespanhol 
          </h1>
          <img src={foto} alt="Leandro Hespanhol" id="foto" />
        </div>
      </div>
    );
  }
}
