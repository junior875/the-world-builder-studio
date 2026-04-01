import React, { createContext, useContext, useState, useCallback } from 'react';

type Lang = 'en' | 'pt';

interface I18nContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (en: string, pt: string) => string;
}

const I18nContext = createContext<I18nContextType>({
  lang: 'en',
  toggleLang: () => {},
  t: (en) => en,
});

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('en');
  const toggleLang = useCallback(() => setLang(l => l === 'en' ? 'pt' : 'en'), []);
  const t = useCallback((en: string, pt: string) => lang === 'en' ? en : pt, [lang]);
  return <I18nContext.Provider value={{ lang, toggleLang, t }}>{children}</I18nContext.Provider>;
};

export const useI18n = () => useContext(I18nContext);
