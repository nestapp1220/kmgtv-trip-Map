import React, { useEffect, FC } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import type { TravelLocation } from '../types';
import { renderToStaticMarkup } from 'react-dom/server';
import MapPinIcon from './icons/MapPinIcon';
import type { Language } from '../App';

// Fix for default icon issue with webpack
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const createCustomIcon = (isSelected: boolean) => {
  return L.divIcon({
    html: renderToStaticMarkup(<MapPinIcon selected={isSelected} />),
    className: '',
    iconSize: [36, 48],
    iconAnchor: [18, 48],
  });
};

interface MapFlyToProps {
  position: [number, number];
  zoom: number;
}

const MapFlyTo: FC<MapFlyToProps> = ({ position, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.flyTo(position, zoom, {
        animate: true,
        duration: 1.5,
      });
    }
  }, [position, zoom, map]);
  return null;
};

const AutoFitBounds: FC<{ locations: TravelLocation[]; isLocationSelected: boolean }> = ({ locations, isLocationSelected }) => {
  const map = useMap();

  useEffect(() => {
    // If a specific location is selected, we don't want to fit bounds,
    // as MapFlyTo will handle zooming in on that location.
    if (isLocationSelected) {
      return;
    }

    if (!locations || locations.length === 0) {
      // No locations to show, you could reset to world view here if desired.
      // For now, we do nothing and keep the current view.
      return;
    }

    // If there is only one location, fly to it with a reasonable zoom level.
    if (locations.length === 1) {
      map.flyTo(locations[0].coordinates, 8, { animate: true, duration: 1 });
      return;
    }

    // If there are multiple locations, fit them all in the view.
    const bounds = L.latLngBounds(locations.map(loc => loc.coordinates));
    if (bounds.isValid()) {
      // pad() adds a margin around the bounds. Increased to 0.15 for a bit more space.
      map.fitBounds(bounds.pad(0.15), { animate: true, duration: 1 });
    }
  }, [locations, isLocationSelected, map]);

  return null;
}


interface MapComponentProps {
  locations: TravelLocation[];
  selectedLocation: TravelLocation | null;
  onMarkerClick: (location: TravelLocation) => void;
  language: Language;
}

const MapComponent: React.FC<MapComponentProps> = ({ locations, selectedLocation, onMarkerClick, language }) => {
  const initialPosition: [number, number] = [20, 0]; // World view

  return (
    <MapContainer center={initialPosition} zoom={2} scrollWheelZoom={true} className="w-full h-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <AutoFitBounds locations={locations} isLocationSelected={!!selectedLocation} />
      {locations.map(location => (
        <Marker
          key={location.id}
          position={location.coordinates}
          icon={createCustomIcon(selectedLocation?.id === location.id)}
          eventHandlers={{
            click: () => onMarkerClick(location),
          }}
        >
          <Popup>
            <span className="font-bold">{location.city[language]}, {location.country[language]}</span>
          </Popup>
        </Marker>
      ))}
      {selectedLocation && <MapFlyTo position={selectedLocation.coordinates} zoom={8} />}
    </MapContainer>
  );
};

export default MapComponent;