import React from 'react';
import { useTranslation } from 'react-i18next';

// Styles
import './styles.css';

// Components
import LanguageToggle from '../LanguageSwitcher';
import logo from '../../assets/vox-mex.webp'; // Importar la imagen

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header>
      <div className="logoContainer">
        <a href="/" className="logoLink">
          <img src={logo} alt="VoxMex Logo" className="logoImage" />
          <h1 className="headerColor">VoxMex</h1>
        </a>
      </div>
      <nav className="nav">
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
      <LanguageToggle />
    </header>
  );
};

export default Header;
