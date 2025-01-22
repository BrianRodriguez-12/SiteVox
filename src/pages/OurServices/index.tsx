import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPlaneDeparture, FaGlobeAmericas } from 'react-icons/fa';

// Components
import TravelToJapan from './Japan';
import TravelToUS from './UnitedStates';

// Styles
import './styles.css';

const OurServices: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState('japan');
  return (
    <div>
      <div className="servicesContainer">
        <h1>{t('servicesTitle')}</h1>
        <p>{t('servicesDescription')}</p>
      </div>
      <div className="tabs">
        <button
          className={selectedTab === 'japan' ? 'active' : ''}
          onClick={() => setSelectedTab('japan')}
        >
          <FaPlaneDeparture className="icon" />
          {t('travelToJapan')}
        </button>
        <button
          className={selectedTab === 'us' ? 'active' : ''}
          onClick={() => setSelectedTab('us')}
        >
          <FaGlobeAmericas className="icon" />
          {t('travelToUS')}
        </button>
      </div>
      {selectedTab === 'japan' && <TravelToJapan />}
      {selectedTab === 'us' && <TravelToUS />}
    </div>
  );
};

export default OurServices;
