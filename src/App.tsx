import { BrowserRouter, Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';
import { useLanguage } from './hooks/useLanguage';

function AppContent() {
  const { language } = useLanguage();

  useEffect(() => {
    // Update HTML lang attribute for accessibility and SEO
    document.documentElement.lang = language;
  }, [language]);

  return (
    <div className="min-h-screen bg-background">
      <SEOHead />
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
}

function LanguageRoute() {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if pathname starts with /de
  const isGermanUrl = location.pathname.startsWith('/de');

  // Determine language: Check browser language if on root path
  const determineLanguage = (): 'en' | 'de' => {
    // If URL explicitly says /de → German
    if (isGermanUrl) return 'de';

    // On root path, check browser language
    if (location.pathname === '/') {
      // Check navigator.languages array first (more reliable in Firefox)
      const languages = navigator.languages || [navigator.language];
      const browserLang = languages[0]?.split('-')[0] || navigator.language.split('-')[0];

      if (browserLang === 'de') {
        // German browser on root, return German immediately
        // (redirect happens in useEffect, but we set language to German immediately)
        return 'de';
      }
    }

    // Default to English
    return 'en';
  };

  const urlLang = determineLanguage();

  // Handle redirects for German users on root path
  useEffect(() => {
    // Only redirect if on root path and browser is German
    if (location.pathname === '/' && urlLang === 'de') {
      navigate('/de', { replace: true });
    }
  }, [location.pathname, navigate, urlLang]);

  return (
    <LanguageProvider initialLanguage={urlLang}>
      <AppContent />
    </LanguageProvider>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LanguageRoute />} />
        <Route path="/de" element={<LanguageRoute />} />
        <Route path="/de/*" element={<LanguageRoute />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
