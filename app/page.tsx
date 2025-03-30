'use client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import { motion } from 'framer-motion';

// Icons
import FlightIcon from '@mui/icons-material/Flight';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import dynamic from 'next/dynamic';

// Services
import { RouteData } from '@/services/types/routes';
import { getRouteData } from '@/services/api';

// Components
import Loading from '@/components/Loading';
const MapWithRoutes = dynamic(() => import('@/components/MapWithRoutes'), {
  ssr: false,
});

// Enums
import { Country } from '@/utils/enums';

// Utils
import { routeInfoMapper } from './utils';

export default function OurServices() {
  const { t, i18n } = useTranslation();
  const [selectedTab, setSelectedTab] = useState(Country.JAPAN);

  const [routes, setRoutes] = useState<RouteData[]>([]);
  const [loading, setLoading] = useState(true);
  const routeInfo = routeInfoMapper(t, selectedTab);

  useEffect(() => {
    getRouteData(selectedTab, i18n.language)
      .then((data) => {
        setRoutes(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error:', err);
        setLoading(false);
      });
  }, [selectedTab, i18n.language]);

  if (loading) return <Loading />;

  return (
    <div className="content">
      <h1>{t('travelPlansTitle')}</h1>
      <p>{t('servicesDescription')}</p>
      <div className="tabs">
        <button
          className={`tabButton ${selectedTab === Country.JAPAN ? 'active' : ''}`}
          onClick={() => setSelectedTab(Country.JAPAN)}
        >
          <FlightIcon className="icon" />
          {t('travelToJapan')}
        </button>
        <button
          className={`tabButton ${selectedTab === Country.UNITED_STATES ? 'active' : ''}`}
          onClick={() => setSelectedTab(Country.UNITED_STATES)}
        >
          <TravelExploreIcon className="icon" />
          {t('travelToUS')}
        </button>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h2>{routeInfo.title}</h2>
          <p>{routeInfo.description}</p>
          <ul>
            <li>{routeInfo.idealDates}</li>
            <li>{routeInfo.howToUseCBX}</li>
            <li>{routeInfo.transportOptions}</li>
          </ul>
          {!routes || routes.length === 0 ? (
            <p>{t('routeNotFound')}</p>
          ) : (
            routes.map((route) => {
              return (
                <div key={route._id}>
                  <h2>{route.name}</h2>
                  {route.places.map((place) => (
                    <div key={place._id}>
                      <ul>
                        <li key={place._id}>
                          <strong>{place.name}</strong> - {place.description}
                        </li>
                      </ul>
                    </div>
                  ))}
                  <MapWithRoutes
                    locations={route.places.map((place) => ({
                      name: place.name,
                      coords: [place.location.lat, place.location.lng],
                    }))}
                  />
                </div>
              );
            })
          )}
        </div>
      </motion.div>
    </div>
  );
}
