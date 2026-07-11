import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'services', label: t('nav.services') },
    { id: 'about', label: t('nav.about') },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3' 
        : 'bg-white py-5 border-b border-slate-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-3 text-left focus:outline-none group transition-spring hover:scale-102"
            aria-label="Atlas Proje Home"
          >
            <div className="w-10 h-10 bg-white border border-slate-100 rounded-lg flex items-center justify-center p-1 shadow-sm transition-spring group-hover:rotate-6">
              <img 
                src={`${import.meta.env.BASE_URL}assets/logo/logo_atlas.png`} 
                alt="Atlas Proje Logo" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = '<span class="text-sky-655 text-sky-600 font-extrabold text-sm">AP</span>';
                  }
                }}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 font-extrabold tracking-wider text-base sm:text-lg group-hover:text-sky-600 transition-colors">
                ATLAS PROJE
              </span>
              <span className="text-slate-505 text-xxs sm:text-xs font-semibold text-slate-500">
                {t('logo.sub')}
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`font-semibold text-sm transition-colors py-2 focus:outline-none ${
                      currentPage === link.id
                        ? 'text-sky-600 border-b-2 border-sky-600'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-xs font-bold uppercase tracking-wider py-2.5 px-5 rounded transition-all duration-205 ${
                currentPage === 'contact'
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                  : 'bg-transparent text-sky-600 border border-sky-600 hover:bg-sky-50'
              }`}
            >
              {t('nav.contact')}
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-slate-100 border border-slate-200 rounded p-0.5">
              <button
                onClick={() => setLanguage('tr')}
                className={`text-xs font-bold px-2.5 py-1 rounded transition-colors ${
                  language === 'tr'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
                aria-pressed={language === 'tr'}
              >
                TR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`text-xs font-bold px-2.5 py-1 rounded transition-colors ${
                  language === 'en'
                    ? 'bg-sky-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-950'
                }`}
                aria-pressed={language === 'en'}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            {/* Language switcher - compact for mobile header */}
            <button
              onClick={() => setLanguage(language === 'tr' ? 'en' : 'tr')}
              className="flex items-center gap-1 text-slate-600 hover:text-slate-900 p-1.5 rounded bg-slate-100 border border-slate-205"
              aria-label="Change Language"
            >
              <Globe className="w-4 h-4 text-sky-600" />
              <span className="text-xs font-bold">{language.toUpperCase()}</span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 p-2 rounded focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Slide-out */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 py-4 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 space-y-3 pb-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left font-semibold text-base py-2.5 px-3 rounded transition-colors ${
                currentPage === link.id
                  ? 'bg-sky-50 text-sky-700'
                  : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className={`block w-full text-center font-bold text-sm py-3 px-4 rounded transition-colors uppercase tracking-wider ${
              currentPage === 'contact'
                ? 'bg-sky-600 text-white'
                : 'bg-transparent text-sky-600 border border-sky-600 hover:bg-sky-50'
            }`}
          >
            {t('nav.contact')}
          </button>
        </div>
      </div>
    </header>
  );
};
