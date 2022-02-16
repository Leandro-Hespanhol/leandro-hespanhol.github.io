import React from 'react'
import whatsappImage from '../images/whatsapp-logo.png'
import telegramImage from '../images/telegram-logo.png'
import signalImage from '../images/signal-logo.png'
import gmailImage from '../images/gmail.png'
import './Footer.css'

export default function Footer() {
  return (
    <div className="phone-email-contact">
      <div>
        <img src={ whatsappImage } alt="Whatsapp logo" />
        <img src={ telegramImage } alt="Telegram logo" />
        <img src={ signalImage } alt="Signal logo" />
        <br></br>
        <span className="phone-number">+55 31 99452 2000</span>
      </div>
      <div>
        <img src={ gmailImage } alt="Gmail logo" />
        <span className="phone-number">leandrohespanhol@gmail.com</span>
      </div>
    </div>
  )
}
