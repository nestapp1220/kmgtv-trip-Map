import React from 'react';
import type { Language } from '../App';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCountry: string;
  setSelectedCountry: (country: string) => void;
  uniqueCountries: string[];
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const Header: React.FC<HeaderProps> = ({
  searchQuery,
  setSearchQuery,
  selectedCountry,
  setSelectedCountry,
  uniqueCountries,
  language,
  setLanguage,
  t,
}) => {
  return (
    <header className="bg-white shadow-md p-4 z-10 w-full">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-800" dangerouslySetInnerHTML={{ __html: t('headerTitle') }}/>
        <div className="flex flex-wrap items-center gap-2 md:gap-4">
          <input
            type="text"
            placeholder={t('searchInputPlaceholder')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="">{t('allCountries')}</option>
            {uniqueCountries.map(country => (
              <option key={country} value={country}>{country}</option>
            ))}
          </select>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            aria-label="Select language"
          >
            <option value="ja">日本語</option>
            <option value="en">English</option>
            <option value="zh">中文</option>
            <option value="ko">한국어</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
