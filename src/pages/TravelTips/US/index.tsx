import React from 'react';
import { useTranslation } from 'react-i18next';

const USTips: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <ul>
        <li>
          <h3>{t('travelTips.us.packing')}</h3>
          {t('travelTips.us.packingDetails')}
        </li>
        <li>
          <h3>{t('travelTips.us.meds')}</h3>
          {t('travelTips.us.medsDetails')}
        </li>
        <li>
          <h3>{t('travelTips.us.insurance')}</h3>
          {t('travelTips.us.insuranceDetails')}
        </li>
        <li>
          <h3>{t('travelTips.us.currency')}</h3>
          {t('travelTips.us.currencyDetails')}
        </li>
        <li>
          <h3>{t('travelTips.us.vaccines')}</h3>
          {t('travelTips.us.vaccinesDetails')}
        </li>
        <li>
          <h3>{t('travelTips.us.emergency')}</h3>
          {t('travelTips.us.emergencyDetails')}
        </li>
      </ul>
    </div>
  );
};

export default USTips;
