import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

// ContentTips
import USTips from './US';
import SnowTips from './Snow';
import GeneralTips from './General';
import TropicalTips from './Tropical';

// Styles
import './styles.css';

const TravelTips: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('general');

  const tabs = [
    { id: 'general', label: t('travelTips.tabs.general') },
    { id: 'tropical', label: t('travelTips.tabs.tropical') },
    { id: 'snow', label: t('travelTips.tabs.snow') },
    { id: 'us', label: t('travelTips.tabs.us') },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'general':
        return <GeneralTips />;
      case 'tropical':
        return <TropicalTips />;
      case 'snow':
        return <SnowTips />;
      case 'us':
        return <USTips />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <h1>{t('travelTips.title')}</h1>
      <div className="content">
        <div className="tabs">
          {tabs.map((tab) => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)}>
              {tab.label}
            </button>
          ))}
        </div>
        <section>{renderContent()}</section>
      </div>
    </div>
  );
};

export default TravelTips;
