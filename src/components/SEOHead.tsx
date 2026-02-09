import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { useLocation } from 'react-router-dom';

export const SEOHead = () => {
    const { language } = useLanguage();
    const location = useLocation();
    const isGerman = language === 'de';
    const baseUrl = 'https://lucasaur.com';
    const currentUrl = `${baseUrl}${location.pathname}`;

    useEffect(() => {
        // Update document title
        document.title = isGerman
            ? 'Luca Saur - KI Lösungen & Webentwicklung | Automatisierung für Ihr Unternehmen'
            : 'Luca Saur - AI Solutions & Web Development | Automate Your Business';

        // Update meta description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', isGerman
                ? 'Ich automatisiere Ihre Routineaufgaben durch intelligente KI-Software und erstelle professionelle Websites. Mehr Zeit für Ihr Kerngeschäft.'
                : 'I automate your routine tasks through intelligent AI software and create professional websites. More time for your core business.'
            );
        }

        // Update meta title
        const metaTitle = document.querySelector('meta[name="title"]');
        if (metaTitle) {
            metaTitle.setAttribute('content', document.title);
        }

        // Update canonical URL
        const canonical = document.querySelector('link[rel="canonical"]');
        if (canonical) {
            canonical.setAttribute('href', currentUrl);
        }

        // Update hreflang tags
        const hreflangEn = document.querySelector('link[hreflang="en"]');
        const hreflangDe = document.querySelector('link[hreflang="de"]');
        if (hreflangEn) hreflangEn.setAttribute('href', `${baseUrl}/`);
        if (hreflangDe) hreflangDe.setAttribute('href', `${baseUrl}/de`);

        // Update OG tags
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) {
            ogUrl.setAttribute('content', currentUrl);
        }

        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) {
            ogTitle.setAttribute('content', document.title);
        }

        const ogDescription = document.querySelector('meta[property="og:description"]');
        if (ogDescription && metaDescription) {
            ogDescription.setAttribute('content', metaDescription.getAttribute('content') || '');
        }

        const ogLocale = document.querySelector('meta[property="og:locale"]');
        if (ogLocale) {
            ogLocale.setAttribute('content', isGerman ? 'de_DE' : 'en_US');
        }

        // Update Twitter tags
        const twitterTitle = document.querySelector('meta[property="twitter:title"]');
        if (twitterTitle) {
            twitterTitle.setAttribute('content', document.title);
        }

        const twitterDescription = document.querySelector('meta[property="twitter:description"]');
        if (twitterDescription && metaDescription) {
            twitterDescription.setAttribute('content', metaDescription.getAttribute('content') || '');
        }

        const twitterUrl = document.querySelector('meta[property="twitter:url"]');
        if (twitterUrl) {
            twitterUrl.setAttribute('content', currentUrl);
        }
    }, [language, isGerman, currentUrl, location.pathname]);

    return null;
};
