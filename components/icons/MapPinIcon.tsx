import React from 'react';

interface MapPinIconProps {
  selected: boolean;
}

const MapPinIcon: React.FC<MapPinIconProps> = ({ selected }) => {
  const primaryColor = selected ? 'indigo' : 'blue';
  const scale = selected ? 'scale(1.2)' : 'scale(1)';

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      className="transition-transform duration-300"
      style={{ transform: scale, transformOrigin: 'bottom center' }}
    >
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.3"/>
        </filter>
      </defs>
      <g style={{ filter: 'url(#shadow)' }}>
        <path 
          fill={selected ? '#4f46e5' : '#2563eb'} // Indigo-600 vs Blue-600
          stroke="#FFFFFF"
          strokeWidth="1.5"
          d="M12 0C7.03 0 3 4.03 3 9c0 5.25 9 15 9 15s9-9.75 9-15c0-4.97-4.03-9-9-9z"
        />
        <circle cx="12" cy="9" r="3" fill="#FFFFFF"/>
      </g>
    </svg>
  );
};

export default MapPinIcon;
