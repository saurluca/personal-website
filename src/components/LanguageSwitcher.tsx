import { useLanguage } from '../hooks/useLanguage';
import { useNavigate } from 'react-router-dom';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const navigate = useNavigate();

  const handleLanguageSwitch = () => {
    const newLang = language === 'en' ? 'de' : 'en';
    setLanguage(newLang);
    navigate(newLang === 'en' ? '/' : '/de', { replace: true });
  };

  return (
    <button
      onClick={handleLanguageSwitch}
      className="px-3 py-1.5 text-sm font-medium text-text-secondary hover:text-text transition-colors border border-border rounded-md hover:border-primary/30"
      aria-label="Switch language"
    >
      {language === 'en' ? 'DE' : 'EN'}
    </button>
  );
};
