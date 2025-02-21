import { useTranslation } from 'next-i18next';

export default function TropicalTips() {
  const { t } = useTranslation();
  return (
    <div>
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
    </div>
  );
}
