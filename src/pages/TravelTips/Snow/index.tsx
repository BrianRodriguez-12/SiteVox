import React from 'react';
import { useTranslation } from 'react-i18next';

const SnowTips: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <ul>
        <li>
          <h3>{t('travelTips.snow.packing')}</h3>
          {t('travelTips.snow.packingDetails')}
        </li>
        <li>
          <h3>{t('travelTips.snow.meds')}</h3>
          {t('travelTips.snow.medsDetails')}
        </li>
        <li>
          <h3>{t('travelTips.snow.insurance')}</h3>
          {t('travelTips.snow.insuranceDetails')}
        </li>
        <li>
          <h3>{t('travelTips.snow.vaccines')}</h3>
          {t('travelTips.snow.vaccinesDetails')}
        </li>
        <li>
          <h3>{t('travelTips.snow.emergency')}</h3>
          {t('travelTips.snow.emergencyDetails')}
        </li>
      </ul>
    </div>
  );
};

export default SnowTips;
