'use client';
import { useTranslation } from 'next-i18next';

export default function AboutUs() {
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
}
