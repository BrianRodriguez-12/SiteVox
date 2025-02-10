import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

// Components
import MapWithRoutes from '../../../components/MapWithRoutes';

const TravelToUS: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2>{t('planTripToUS')}</h2>
        <p>{t('cbxDescription')}</p>
        <ul>
          <li>{t('idealDates')}</li>
          <li>{t('howToUseCBX')}</li>
          <li>{t('transportOptions')}</li>
        </ul>
        <MapWithRoutes />
      </div>
    </motion.div>
  );
};

export default TravelToUS;
