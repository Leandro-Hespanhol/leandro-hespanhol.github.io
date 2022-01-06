import React from 'react'
import Header from './Header'
import friends from '../images/friends-and-bikes.png'
import './About.css'

export default function Experiences() {
  return (
    <div id="about-page">
      <Header />
      <div className="image-description">
        <div className="image-div">
          <img src={ friends } alt="friends-and-bikes" />
        </div>
        <div className="about-me-desc">
          <h1>What about me?</h1>
          <p>At first I would like to present myself doing two things I love: Riding my bike and be with my friends. I also love coding but lets not get too personal right away 😉</p>
          <p>Studying usually is something that comes to me with ease. Probably because learning is such a rewarding experience to me. I like to say that <strong>Curiosity guides me.</strong> </p>
          <p>I am a graduaded lawyer, but from the beggining my technology skills made myself be seen by my bosses. After one year and a half I was called to join the technology team on my office. I was working on a suport post which gave me and incredible vision about artificial inteligence and made myself make the changing career decision!</p>
          <p>And then I found Trybe. I never thought I could learn programing so fast! Its been so little time and im ready to code on: <br></br> 
          <img align="center" alt="LeoH-HTML" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <img align="center" alt="LeoH-CSS" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg"/>
          <img align="center" alt="LeoH-JS" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" />
          <img align="center" alt="LeoH-React" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
          <img align="center" alt="LeoH-Redux" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" />
          <img align="center" alt="LeoH-mySql" height="40" width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          <br></br>
          <br></br>
          <p>And not just that! To know how to learn is one of the main skills im improving on my study. Because of that, learning a different language would not be a problem! </p>


          </p>
        </div>
      </div>
    </div>
  )
}
