// lib/dictionary.ts
import 'server-only'; // Ensures this only runs on the server

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ar: () => import('@/dictionaries/ar.json').then((module) => module.default),
};

export const getDictionary = async (lang: 'en' | 'ar') => 
  dictionaries[lang] ? dictionaries[lang]() : dictionaries.en();