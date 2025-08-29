import React from 'react';
import type { TravelLocation } from '../types';
import type { Language } from '../App';

interface DetailSidebarProps {
  location: TravelLocation | null;
  onClose: () => void;
  language: Language;
  t: (key: string) => string;
}

const DetailSidebar: React.FC<DetailSidebarProps> = ({ location, onClose, language, t }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-full md:w-[450px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-20 overflow-y-auto ${
        location ? 'translate-x-0' : 'translate-x-full'
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="location-details-heading"
    >
      {location && (
        <div>
          <div className="p-6 relative">
             <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-gray-100 text-gray-800 rounded-full p-2 hover:bg-gray-200 transition-colors"
              aria-label={t('close')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 id="location-details-heading" className="text-3xl font-bold text-gray-900 pr-10">{location.city[language]}</h2>
            <p className="text-md text-gray-600 mt-1">{location.country[language]}</p>
            <p className="text-gray-700 mt-4 leading-relaxed">{location.description[language]}</p>
          </div>
          <div className="px-6 pb-6">
             <h3 className="text-xl font-semibold text-gray-800 mb-3">{t('watchTheAdventure')}</h3>
             <div className="space-y-4">
              {location.youtubeVideoIds && location.youtubeVideoIds.length > 0 ? (
                location.youtubeVideoIds.map((videoId, index) => (
                  <div key={index} className="relative pt-[56.25%] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={`YouTube video player ${index + 1}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No videos available for this location.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailSidebar;