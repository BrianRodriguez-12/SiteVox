import React from 'react';
import { useTranslation } from 'react-i18next';

// Styles
import './styles.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer>
      <div className="footerSection">
        <h3 className="footerTitle">{t('quickLinks')}</h3>
        <li>
          <a className="footerLink" href="/">
            {t('home')}
          </a>
        </li>
        <li>
          <a className="footerLink" href="/contact">
            {t('contactUs')}
          </a>
        </li>
        <li>
          <a className="footerLink" href="/policy">
            {t('privacyPolicy')}
          </a>
        </li>
      </div>
      <div className="footerSection">
        <h3 className="footerTitle">{t('contact')}</h3>
        {/* 
          <p className="footerText">
            {t('email')}:{' '}
            <a href="mailto:info@tu-sitio.com" className="footerLink"></a>
          </p> */}
        <p className="footerText">{t('phone')}: +5656605207</p>
      </div>
      <div className="footerSection">
        <h3 className="footerTitle">{t('followUs')}</h3>
        <div className="footerSocial">
          <a
            className="footerLink"
            href="https://www.facebook.com/VoxMexOficial"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f" />
          </a>
          {/* 
            <a
              href="https://twitter.com"
              aria-label="Twitter"
              className="footerLink"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              className="footerLink"
            >
              <i className="fab fa-instagram"></i>
            </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
