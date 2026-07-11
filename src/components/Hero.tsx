import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, CalendarRange } from 'lucide-react';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

export const Hero = ({ setCurrentPage }: HeroProps) => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-slate-50 text-slate-900 py-16 lg:py-24 border-b border-slate-100">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-sky-200/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 border border-sky-200/60 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <CalendarRange className="w-3.5 h-3.5 text-sky-600" />
              <span dangerouslySetInnerHTML={{ __html: t('hero.eyebrow') }} />
            </span>

            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900"
              dangerouslySetInnerHTML={{ __html: t('hero.title').replace('text-sky-500', 'text-sky-600') }}
            />

            <p className="text-slate-650 text-base sm:text-lg leading-relaxed max-w-2xl font-light text-slate-600">
              {t('hero.desc')}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setCurrentPage('services')}
                className="bg-sky-650 hover:bg-sky-600 bg-sky-600 text-white font-bold text-sm px-6 py-3.5 rounded shadow-md shadow-sky-600/15 transition-all flex items-center gap-2"
              >
                {t('hero.btn_services')}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-bold text-sm px-6 py-3.5 rounded transition-colors shadow-sm"
              >
                {t('hero.btn_contact')}
              </button>
            </div>

            {/* Quick Stats Banner */}
            <div className="grid grid-cols-3 gap-6 pt-10 border-t border-slate-200 max-w-xl">
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-sky-600 tracking-tight">18+</p>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold mt-1">{t('hero.stat1_lbl')}</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-sky-600 tracking-tight">2</p>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold mt-1">{t('hero.stat2_lbl')}</p>
              </div>
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-sky-600 tracking-tight">2</p>
                <p className="text-slate-500 text-xs sm:text-sm font-semibold mt-1">{t('hero.stat3_lbl')}</p>
              </div>
            </div>
          </div>

          {/* Right Side Visual (Vector Illustration) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            <div className="w-full max-w-md bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-xl shadow-slate-100 hover:shadow-2xl transition-all duration-300">
              <img 
                src="/assets/illustrations/undraw_code-thinking_tqs9.svg" 
                alt="Engineering and Software Solutions" 
                className="w-full h-auto max-h-[300px] object-contain"
                onError={(e) => {
                  // Fallback if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              
              {/* Context Tag under illustration */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-slate-500 uppercase tracking-widest">
                <span>Precision Engineering</span>
                <span className="text-sky-600">•</span>
                <span>AI Transformation</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
