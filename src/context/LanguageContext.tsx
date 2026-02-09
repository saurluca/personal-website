import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import translations from '../content/translations';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

export const LanguageProvider = ({ children, initialLanguage }: LanguageProviderProps) => {
  // Determine initial language: prioritize URL language (initialLanguage), then localStorage, then browser
  const getInitialLanguage = (): Language => {
    // URL language takes highest priority
    if (initialLanguage) return initialLanguage;

    // Fallback to localStorage if no URL language
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('language') as Language | null;
      if (stored && (stored === 'en' || stored === 'de')) {
        return stored;
      }
    }
    return 'en';
  };

  const [language, setLanguageState] = useState<Language>(getInitialLanguage());

  useEffect(() => {
    // When initialLanguage changes (e.g., URL changes), update state immediately
    if (initialLanguage) {
      setLanguageState(initialLanguage);
      localStorage.setItem('language', initialLanguage);
    }
  }, [initialLanguage]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: any = translations[language] || translations.en;

    for (const k of keys) {
      value = value?.[k];
      if (value === undefined) {
        // Fallback to English
        value = translations.en;
        for (const k2 of keys) {
          value = value?.[k2];
        }
        break;
      }
    }

    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
