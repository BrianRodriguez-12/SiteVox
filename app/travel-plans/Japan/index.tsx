import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'next-i18next';

const TravelToJapan: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2>{t('planTripToJapan')}</h2>
        <p>{t('japanDescription')}</p>
        <ul>
          <li>{t('bestDates')}</li>
          <li>{t('publicTransport')}</li>
          <li>{t('recommendedRoutes')}</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default TravelToJapan;
