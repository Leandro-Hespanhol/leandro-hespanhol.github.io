import React from 'react';
import whatsappImage from '../images/whatsapp-logo.png';
import telegramImage from '../images/telegram-logo.png';
import signalImage from '../images/signal-logo.png';
import gmailImage from '../images/gmail.png';
import './Footer.css';

export default function Footer() {
  return (
    <div className="phone-email-contact" data-aos="fade-up">
      <div>
        <a
          href={'https://whatsa.me/5531994522000'}
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsappImage} alt="Whatsapp logo" />
        </a>
        <img src={telegramImage} alt="Telegram logo" />
        <img src={signalImage} alt="Signal logo" />
        <br></br>
        <span className="phone-number">+55 31 99452 2000</span>
      </div>
      <div>
        <img src={gmailImage} alt="Gmail logo" />
        <span className="phone-number">leandrohespanhol@gmail.com</span>
      </div>
    </div>
  );
}
