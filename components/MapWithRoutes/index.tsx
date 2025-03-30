import { renderToStaticMarkup } from 'react-dom/server';
import { JSX, useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import { MapContainerProps } from 'react-leaflet';

// Icons
import RoomIcon from '@mui/icons-material/Room';

const MapWithNoSSR = dynamic<MapContainerProps>(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Polyline = dynamic(
  () => import('react-leaflet').then((mod) => mod.Polyline),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(() => import('react-leaflet').then((mod) => mod.Popup), {
  ssr: false,
});

const createDivIcon = (component: JSX.Element): L.DivIcon => {
  return new L.DivIcon({
    html: renderToStaticMarkup(component),
    className: '',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
};

const MapWithRoutes = ({
  locations,
}: {
  locations: { name: string; coords: [number, number] }[];
}) => {
  const { t } = useTranslation();
  const [L, setL] = useState<typeof import('leaflet') | null>(null);

  useEffect(() => {
    import('leaflet').then((leaflet) => {
      setL(leaflet);
    });
  }, []);

  if (!L) {
    return null;
  }

  if (!Array.isArray(locations) || locations.length === 0) {
    return <p>{t('mapUnableToLoad')}</p>;
  }

  const calculateDistance = (
    coords1: [number, number],
    coords2: [number, number]
  ) => {
    const [lat1, lon1] = coords1;
    const [lat2, lon2] = coords2;
    const R = 6371; // Radius of the Earth in km
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  const sortedLocations = locations.slice(1).sort((a, b) => {
    const distanceA = calculateDistance(locations[0].coords, a.coords);
    const distanceB = calculateDistance(locations[0].coords, b.coords);
    return distanceA - distanceB;
  });

  const routes = [
    [locations[0].coords, ...sortedLocations.map((loc) => loc.coords)],
  ];

  return (
    <MapWithNoSSR
      center={locations[0].coords as [number, number]}
      zoom={6}
      className="h-[400px] w-full rounded-lg pt-6 md:h-[300px]"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker
          key={location.name}
          position={location.coords as [number, number]}
          icon={createDivIcon(
            <RoomIcon style={{ color: 'red', fontSize: '32px' }} />
          )}
        >
          <Popup>{t(location.name)}</Popup>
        </Marker>
      ))}
      {routes.map((route, index) => (
        <Polyline
          key={index}
          positions={route as [number, number][]}
          color={index === 0 ? 'blue' : 'green'}
        />
      ))}
    </MapWithNoSSR>
  );
};

export default MapWithRoutes;
