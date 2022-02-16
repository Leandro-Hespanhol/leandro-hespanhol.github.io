import React from 'react'
import './App.css'
import ProfileProvider from './context/ContextAPI';

import Home from './pages/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';

import i18n from './services/languageDetector';

export default function App() {

  Aos.init({ duration: 800 });

    return (
      <ProfileProvider>
        <Home />
      </ProfileProvider>
    )
}
