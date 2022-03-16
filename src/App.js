import React, { useEffect } from 'react';
import './App.css'
import ProfileProvider from './context/ContextAPI';

import Home from './pages/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';

import i18n from './services/languageDetector';

export default function App() {

  useEffect(() => {
    Aos.init({ duration: 800 });
    Aos.refresh();
  }, [])

    return (
      <ProfileProvider>
        <Home />
      </ProfileProvider>
    )
}
