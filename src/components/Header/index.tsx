import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Styles
import './styles.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logoContainer">
        <h1 className="logo">VoxMex</h1>
      </div>
      <div className="menuIcon" onClick={toggleMenu}>
        &#9776;
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <a href="#home" className="navLink">
          {t('home')}
        </a>
        <a href="#about" className="navLink">
          {t('aboutUs')}
        </a>
        <a href="#services" className="navLink">
          {t('services')}
        </a>
        <a href="#contact" className="navLink">
          {t('contactUs')}
        </a>
      </nav>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
    </header>
  );
};

export default Header;
