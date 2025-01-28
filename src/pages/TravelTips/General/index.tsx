import React from 'react';
import { useTranslation } from 'react-i18next';

const GeneralTips: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div>
      <ul>
        <li>
          <h3>{t('travelTips.general.packing')}</h3>
          {t('travelTips.general.packingDetails')}
        </li>
        <li>
          <h3>{t('travelTips.general.meds')}</h3>
          {t('travelTips.general.medsDetails')}
        </li>
        <li>
          <h3>{t('travelTips.general.insurance')}</h3>
          {t('travelTips.general.insuranceDetails')}
        </li>
        <li>
          <h3>{t('travelTips.general.currency')}</h3>
          {t('travelTips.general.currencyDetails')}
        </li>
        <li>
          <h3>{t('travelTips.general.vaccines')}</h3>
          {t('travelTips.general.vaccinesDetails')}
        </li>
        <li>
          <h3>{t('travelTips.general.emergency')}</h3>
          {t('travelTips.general.emergencyDetails')}
        </li>
        <li>
          <h3>{t('travelTips.us.transportation')}</h3>
          {t('travelTips.us.transportationDetails')}
        </li>
        <li>
          <h3>{t('travelTips.us.accommodation')}</h3>
          {t('travelTips.us.accommodationDetails')}
        </li>
        <li>
          <h3>{t('travelTips.us.food')}</h3>
          {t('travelTips.us.foodDetails')}
        </li>
        <li>
          <h3>{t('travelTips.us.safety')}</h3>
          {t('travelTips.us.safetyDetails')}
        </li>
      </ul>
    </div>
  );
};

export default GeneralTips;
