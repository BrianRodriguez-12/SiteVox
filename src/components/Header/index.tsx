import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// Styles
import './styles.css';
import LanguageToggle from '../LanguageSwitcher';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="header">
      <div className="logoContainer">
        <h1>VoxMex</h1>
      </div>
      <div className="menuIcon" onClick={toggleMenu}>
        &#9776;
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <a href="" className="navLink">
          {t('home')}
        </a>
        <a href="about-us" className="navLink">
          {t('aboutUs')}
        </a>
        <a href="services" className="navLink">
          {t('services')}
        </a>
      </nav>
      <div className="languageContainer">
        <LanguageToggle />
      </div>
    </header>
  );
};

export default Header;
