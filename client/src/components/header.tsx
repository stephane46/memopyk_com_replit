import { useLanguage } from "@/hooks/use-language";
import { Phone, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [location, navigate] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 lg:h-24 py-4">
          {/* Logo - Left */}
          <div className="flex-shrink-0 py-2">
            <div className="flex flex-col items-center">
              <img 
                src="/logo.svg" 
                alt="MEMOPYK" 
                className="h-8 lg:h-10 w-auto"
              />
              <p className="text-xs lg:text-sm text-memopyk-blue mt-2 max-w-xs leading-relaxed text-center">
                {t('header.tagline', { 
                  fr: 'Nous transformons vos photos et vidéos personnelles en films souvenirs inoubliables',
                  en: 'We transform your personal photos and videos into unforgettable souvenir films'
                })}
              </p>
            </div>
          </div>
          
          {/* Navigation Menu - Center */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 flex-1 justify-center">
            <button 
              onClick={() => scrollToSection('accueil')}
              className="text-memopyk-blue hover:text-memopyk-highlight transition-colors"
            >
              {t('nav.home', { fr: 'Accueil', en: 'Home' })}
            </button>
            <button 
              onClick={() => scrollToSection('a-propos')}
              className="text-memopyk-blue hover:text-memopyk-highlight transition-colors"
            >
              {t('nav.about', { fr: 'À propos', en: 'About' })}
            </button>
            <button 
              onClick={() => scrollToSection('processus')}
              className="text-memopyk-blue hover:text-memopyk-highlight transition-colors"
            >
              {t('nav.process', { fr: 'Processus', en: 'Process' })}
            </button>
            <button 
              onClick={() => scrollToSection('pourquoi')}
              className="text-memopyk-blue hover:text-memopyk-highlight transition-colors"
            >
              {t('nav.why', { fr: 'Pourquoi MEMOPYK', en: 'Why MEMOPYK' })}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-memopyk-blue hover:text-memopyk-highlight transition-colors"
            >
              {t('nav.contact', { fr: 'Contact', en: 'Contact' })}
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-memopyk-blue hover:text-memopyk-highlight transition-colors"
            >
              {t('nav.faq', { fr: 'FAQ', en: 'FAQ' })}
            </button>
          </nav>
          
          {/* Language Toggle & Contact - Right */}
          <div className="flex items-center space-x-3 lg:space-x-4 flex-shrink-0">
            {/* Language Toggle */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate('/en-US')}
                className={`p-2 rounded-lg transition-all hover:bg-memopyk-cream ${
                  language === 'en-US' ? 'bg-memopyk-cream shadow-sm' : ''
                }`}
                title="English"
              >
                <span className="text-2xl">🇺🇸</span>
              </button>
              <button
                onClick={() => navigate('/fr-FR')}
                className={`p-2 rounded-lg transition-all hover:bg-memopyk-cream ${
                  language === 'fr-FR' ? 'bg-memopyk-cream shadow-sm' : ''
                }`}
                title="Français"
              >
                <span className="text-2xl">🇫🇷</span>
              </button>
            </div>
            
            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-2 text-memopyk-blue">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+33 1 234 567 89</span>
            </div>
            
            {/* Mobile Menu Toggle */}
            <Button variant="ghost" size="sm" className="md:hidden text-memopyk-blue">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
