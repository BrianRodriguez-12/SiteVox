import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Components
import TravelToJapan from "./Japan";
import TravelToUS from "./UnitedStates";

const OurServices: React.FC = () => {

  const { t } = useTranslation();
  return (
    <div className="services">
      <h1>{t('servicesTitle')}</h1>
      <p>{t('servicesDescription')}</p>
      <ul>
        <li>
          <Link to="/services/travel-to-japan">Viajes a Japón</Link>
        </li>
        <li>
          <Link to="/services/travel-to-us">Viajes a Estados Unidos</Link>
        </li>
      </ul>

      <Routes>
        <Route path="travel-to-japan" element={<TravelToJapan />} />
        <Route path="travel-to-us" element={<TravelToUS />} />
      </Routes>
    </div>
  );
};

export default OurServices;
