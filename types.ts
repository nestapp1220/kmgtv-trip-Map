export interface LocalizedString {
  ja: string;
  en: string;
  zh: string;
  ko: string;
}

export interface TravelLocation {
  id: number;
  city: LocalizedString;
  country: LocalizedString;
  coordinates: [number, number]; // [latitude, longitude]
  description: LocalizedString;
  youtubeVideoIds: string[];
}