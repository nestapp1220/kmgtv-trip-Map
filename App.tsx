import React, { useState, useMemo, useEffect } from 'react';
import { travelData } from './data/travelData';
import type { TravelLocation } from './types';
import Header from './components/Header';
import MapComponent from './components/MapComponent';
import DetailSidebar from './components/DetailSidebar';

export type Language = 'ja' | 'en' | 'zh' | 'ko';

const uiStrings = {
  headerTitle: {
    ja: 'こむぎんTV <span class="text-blue-600">Travel</span>',
    en: 'KMGtv <span class="text-blue-600">Travel</span>',
    zh: 'KMGtv <span class="text-blue-600">旅行</span>',
    ko: 'KMGtv <span class="text-blue-600">여행</span>',
  },
  searchInputPlaceholder: {
    ja: '都市名やキーワードで検索...',
    en: 'Search city or keyword...',
    zh: '搜索城市或关键字...',
    ko: '도시 또는 키워드 검색...',
  },
  allCountries: {
    ja: 'すべての国',
    en: 'All Countries',
    zh: '所有国家',
    ko: '모든 국가',
  },
  watchTheAdventure: {
    ja: '冒険を見る',
    en: 'Watch the Adventure',
    zh: '观看冒险',
    ko: '모험 보기',
  },
  close: {
    ja: '閉じる',
    en: 'Close',
    zh: '关闭',
    ko: '닫기'
  }
};


const App: React.FC = () => {
  const [locations] = useState<TravelLocation[]>(travelData);
  const [filteredLocations, setFilteredLocations] = useState<TravelLocation[]>(locations);
  const [selectedLocation, setSelectedLocation] = useState<TravelLocation | null>(null);
  
  const [language, setLanguage] = useState<Language>('ja');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');

  const t = (key: keyof typeof uiStrings) => uiStrings[key][language] || uiStrings[key]['en'];

  const uniqueCountries = useMemo(() => [...new Set(locations.map(loc => loc.country[language]))], [locations, language]);

  useEffect(() => {
    let result = locations;

    if (searchQuery) {
      result = result.filter(loc =>
        loc.city[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.description[language].toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCountry) {
      result = result.filter(loc => loc.country[language] === selectedCountry);
    }

    setFilteredLocations(result);
    // Reset selected country if it's not in the new list of unique countries when language changes
    if (!uniqueCountries.includes(selectedCountry) && selectedCountry !== '') {
        setSelectedCountry('');
    }
  }, [searchQuery, selectedCountry, locations, language, uniqueCountries]);

  const handleMarkerClick = (location: TravelLocation) => {
    setSelectedLocation(location);
  };
  
  const handleCloseSidebar = () => {
    setSelectedLocation(null);
  };

  return (
    <div className="h-screen w-screen flex flex-col font-sans">
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        uniqueCountries={uniqueCountries}
        language={language}
        setLanguage={setLanguage}
        t={t}
      />
      <main className="flex-grow relative">
        <MapComponent
          locations={filteredLocations}
          selectedLocation={selectedLocation}
          onMarkerClick={handleMarkerClick}
          language={language}
        />
        <DetailSidebar
          location={selectedLocation}
          onClose={handleCloseSidebar}
          language={language}
          t={t}
        />
      </main>
    </div>
  );
};

export default App;