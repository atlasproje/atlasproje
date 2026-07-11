import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, ChevronRight } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const { t } = useLanguage();

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-900">
          
          {/* Brand */}
          <div className="lg:col-span-4 space-y-4">
            <button 
              onClick={() => handleNavClick('home')} 
              className="flex items-center gap-3 text-left focus:outline-none group transition-spring hover:scale-102"
            >
              <div className="w-10 h-10 bg-white border border-slate-800 rounded-lg flex items-center justify-center p-1 shadow-sm transition-spring group-hover:rotate-6">
                <img 
                  src="/assets/logo/logo_atlas.png" 
                  alt="Atlas Proje Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<span class="text-sky-600 font-extrabold text-sm">AP</span>';
                    }
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-extrabold tracking-wider text-base group-hover:text-sky-400 transition-colors">
                  ATLAS PROJE
                </span>
                <span className="text-slate-500 font-medium text-xxs sm:text-xs">
                  {t('logo.sub')}
                </span>
              </div>
            </button>
            <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
              {t('footer.brand_desc')}
            </p>
            <p className="text-slate-500 text-xxs font-semibold uppercase tracking-wider">
              Sicil No: 49321 — Adana Ticaret Sicil Memurluğu
            </p>
          </div>

          {/* Quick Pages */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase">
              {t('footer.pages')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              {[
                { id: 'home', label: t('nav.home') },
                { id: 'services', label: t('nav.services') },
                { id: 'about', label: t('nav.about') },
                { id: 'contact', label: t('nav.contact') }
              ].map((link) => (
                <li key={link.id}>
                  <button 
                    onClick={() => handleNavClick(link.id)} 
                    className="flex items-center gap-1 hover:text-white transition-colors py-0.5 focus:outline-none"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500/60" />
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase">
              {t('footer.svc_heading')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <button 
                  onClick={() => handleNavClick('services')}
                  className="flex items-center gap-1 hover:text-white transition-colors py-0.5 focus:outline-none"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500/60" />
                  <span>{t('footer.mech_eng')}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('services')}
                  className="flex items-center gap-1 hover:text-white transition-colors py-0.5 focus:outline-none"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500/60" />
                  <span>{t('footer.sw_dev')}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('services')}
                  className="flex items-center gap-1 hover:text-white transition-colors py-0.5 focus:outline-none"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500/60" />
                  <span>{t('footer.data_sci')}</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('services')}
                  className="flex items-center gap-1 hover:text-white transition-colors py-0.5 focus:outline-none"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-sky-500/60" />
                  <span>{t('footer.integrated')}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white font-extrabold text-xs sm:text-sm tracking-wider uppercase">
              {t('footer.cnt_heading')}
            </h4>
            <div className="flex gap-2">
              <MapPin className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm leading-relaxed text-slate-400 font-light">
                Reşatbey Mah. Cumhuriyet Cad.<br />
                Gürbiçer Apt. Asma Kat No:6<br />
                Seyhan / Adana, Turkey
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xxs sm:text-xs">
          <span 
            className="text-slate-500 font-light text-center sm:text-left leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('footer.copyright') }}
          />
          <span className="text-slate-500 font-semibold tracking-wider italic uppercase">
            {t('footer.tagline')}
          </span>
        </div>

      </div>
    </footer>
  );
};
