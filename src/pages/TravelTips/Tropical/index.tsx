import React from 'react';
import { useTranslation } from 'react-i18next';

const TropicalTips: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <ul>
        <li>
          <h3>{t('travelTips.tropical.packing')}</h3>
          {t('travelTips.tropical.packingDetails')}
        </li>
        <li>
          <h3>{t('travelTips.tropical.meds')}</h3>
          {t('travelTips.tropical.medsDetails')}
        </li>
        <li>
          <h3>{t('travelTips.tropical.insurance')}</h3>
          {t('travelTips.tropical.insuranceDetails')}
        </li>
        <li>
          <h3>{t('travelTips.tropical.vaccines')}</h3>
          {t('travelTips.tropical.vaccinesDetails')}
        </li>
        <li>
          <h3>{t('travelTips.tropical.emergency')}</h3>
          {t('travelTips.tropical.emergencyDetails')}
        </li>
      </ul>
    </div>
  );
};

export default TropicalTips;
