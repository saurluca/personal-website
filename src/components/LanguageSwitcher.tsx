import { useLanguage } from '../hooks/useLanguage';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
      className="px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-text transition-colors border border-border rounded-md hover:border-primary/30"
      aria-label="Switch language"
    >
      {language === 'en' ? 'DE' : 'EN'}
    </button>
  );
};
