import React from "react";
import { useTranslation } from "react-i18next";

const TravelToJapan: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('planTripToJapan')}</h2>
      <p>{t('japanDescription')}</p>
      <ul>
        <li>{t('bestDates')}</li>
        <li>{t('publicTransport')}</li>
        <li>{t('recommendedRoutes')}</li>
      </ul>
    </div>
  );
};

export default TravelToJapan;
