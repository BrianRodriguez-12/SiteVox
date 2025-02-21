import { useTranslation } from 'next-i18next';

export default function SnowTips() {
  const { t } = useTranslation();
  return (
    <div>
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
    </div>
  );
}
