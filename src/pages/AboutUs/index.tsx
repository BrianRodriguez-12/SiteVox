import React from 'react';
import { useTranslation } from 'react-i18next';
// Styles
import './styles.css';

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <h1>{t('aboutUsTitle')}</h1>
      <p>{t('aboutUsDescription')}</p>
      <div className="cardsContainer">
        <div className="card">
          <h2>{t('ourMission')}</h2>
          <p>{t('missionDescription')}</p>
        </div>
        <div className="card">
          <h2>{t('ourVision')}</h2>
          <p>{t('visionDescription')}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
