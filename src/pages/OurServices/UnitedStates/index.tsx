import React from "react";
import { useTranslation } from "react-i18next";

const TravelToUS: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t('planTripToUS')}</h2>
      <p>{t('cbxDescription')}</p>
      <ul>
        <li>{t('idealDates')}</li>
        <li>{t('howToUseCBX')}</li>
        <li>{t('transportOptions')}</li>
      </ul>
    </div>
  );
};

export default TravelToUS;
