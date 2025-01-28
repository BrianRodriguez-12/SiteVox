import React from 'react';
import { useTranslation } from 'react-i18next';

// Styles
import './styles.css';

// Components
import LanguageToggle from '../LanguageSwitcher';

// Assets
import logo from '../../assets/vox-mex.webp';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header>
      <button onClick={() => (window.location.href = '/')} className="logo">
        <img className="logoImage" src={logo} alt="VoxMex Logo" />
        <h1 className="headerColor">VoxMex</h1>
      </button>
      <nav className="nav">
        <a className="navLink" href="/">
          {t('home')}
        </a>
        <a className="navLink" href="about-us">
          {t('aboutUs')}
        </a>
        <a className="navLink" href="services">
          {t('services')}
        </a>
      </nav>
      <LanguageToggle />
    </header>
  );
};

export default Header;
