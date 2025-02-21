'use client';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import FlightIcon from '@mui/icons-material/Flight';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

// Components
import TravelToJapan from './Japan';
import TravelToUS from './UnitedStates';

export default function OurServices() {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState('japan');
  return (
    <div className="content">
      <h1>{t('travelPlansTitle')}</h1>
      <p>{t('servicesDescription')}</p>
      <div className="tabs">
        <button
          className={`tabButton ${selectedTab === 'japan' ? 'active' : ''}`}
          onClick={() => setSelectedTab('japan')}
        >
          <FlightIcon className="icon" />
          {t('travelToJapan')}
        </button>
        <button
          className={`tabButton ${selectedTab === 'us' ? 'active' : ''}`}
          onClick={() => setSelectedTab('us')}
        >
          <TravelExploreIcon className="icon" />
          {t('travelToUS')}
        </button>
      </div>
      {selectedTab === 'japan' && <TravelToJapan />}
      {selectedTab === 'us' && <TravelToUS />}
    </div>
  );
}
