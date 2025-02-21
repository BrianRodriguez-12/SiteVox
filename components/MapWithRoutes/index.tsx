import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';

const MapContainer = dynamic(
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

export default function MapWithRoutes() {
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

  const customIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // Cambia por el ícono que desees
    iconSize: [32, 32],
  });

  const tijuana = [32.525, -117.037]; // Tijuana
  const cbx = [32.546, -117.043]; // CBX
  const santaFeTrail = [35.686, -105.937]; // Santa Fe

  const routeToCBX = [tijuana, cbx];
  const routeToSantaFe = [cbx, santaFeTrail];

  return (
    <MapContainer
      center={tijuana as [number, number]}
      zoom={6}
      className="h-[400px] w-full rounded-lg pt-6 md:h-[300px]"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={tijuana as [number, number]} icon={customIcon}>
        <Popup>{t('tijuana')}</Popup>
      </Marker>
      <Marker position={cbx as [number, number]} icon={customIcon}>
        <Popup>{t('cbxBorderCrossing')}</Popup>
      </Marker>
      <Marker position={santaFeTrail as [number, number]} icon={customIcon}>
        <Popup>{t('santaFeTrail')}</Popup>
      </Marker>
      <Polyline positions={routeToCBX as [number, number][]} color="blue" />
      <Polyline
        positions={routeToSantaFe as [number, number][]}
        color="green"
      />
    </MapContainer>
  );
}
