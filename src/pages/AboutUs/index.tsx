import React from "react";
import { useTranslation } from "react-i18next";
// Styles
import "./AboutUs.css";

const AboutUs: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="about-us">
      <h1>{t('aboutUsTitle')}</h1>
      <p>
        {t('aboutUsDescription')}
      </p>
      <h2>{t('ourMission')}</h2>
      <p>
        {t('missionDescription')}
      </p>
      <h2>{t('ourVision')}</h2>
      <p>
        {t('visionDescription')}
      </p>
    </div>
  );
};

export default AboutUs;
