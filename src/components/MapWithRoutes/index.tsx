import React from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const customIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/684/684908.png', // Cambia por el ícono que desees
  iconSize: [32, 32],
});

const MapWithRoutes: React.FC = () => {
  const tijuana = [32.525, -117.037]; // Tijuana
  const cbx = [32.546, -117.043]; // CBX
  const santaFeTrail = [35.686, -105.937]; // Santa Fe

  const routeToCBX = [tijuana, cbx];
  const routeToSantaFe = [cbx, santaFeTrail];
return (
    <MapContainer center={tijuana as [number, number]} zoom={6} style={{ height: '500px', width: '100%' }}>

        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={tijuana as [number, number]} icon={customIcon}>
            <Popup>Tijuana</Popup>
        </Marker>
        <Marker position={cbx as [number, number]} icon={customIcon}>
            <Popup>CBX Border Crossing</Popup>
        </Marker>
        <Marker position={santaFeTrail as [number, number]} icon={customIcon}>
            <Popup>Santa Fe Trail</Popup>
        </Marker>
        <Polyline positions={routeToCBX as [number, number][]} color="blue" />
        <Polyline positions={routeToSantaFe as [number, number][]} color="green" />
    </MapContainer>
);
};

export default MapWithRoutes;
