import { useLanguage } from '../context/LanguageContext';
import { Handshake, ShieldCheck, Cpu } from 'lucide-react';

export const TechneosSpotlight = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-slate-50 border-y border-slate-200 py-16 relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 lg:p-12 shadow-xl shadow-slate-105/10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-700 border border-sky-200 text-xxs sm:text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                <Handshake className="w-4 h-4 text-sky-600" />
                {t('techneos.label')}
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {t('techneos.title')}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                {t('techneos.desc')}
              </p>

              {/* Partnership Highlights */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-slate-800 font-bold text-sm">{t('techneos.badge')}</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      {t('techneos.scope_desc')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Cpu className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-slate-800 font-bold text-sm">{t('techneos.scope')}</h4>
                    <p className="text-slate-500 text-xs mt-1 leading-relaxed">
                      Remote data science pipelines, automated machine learning workflows, and custom LLM agent systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Visual Logos and Connecting Line */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center bg-slate-50 border border-slate-200 rounded-xl p-8 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/5 rounded-full blur-xl pointer-events-none" />
              
              {/* Partnership Connector Graphic */}
              <div className="flex items-center justify-between w-full max-w-xs relative z-10">
                {/* Atlas Proje Logo Block */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-20 h-20 bg-white border border-slate-200 rounded-xl flex items-center justify-center p-3 shadow-sm transition-all group-hover:border-sky-500 duration-300">
                    <img 
                      src={`${import.meta.env.BASE_URL}assets/logo/logo_atlas.png`} 
                      alt="Atlas Proje" 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = '<span class="text-slate-900 font-extrabold text-lg">AP</span>';
                        }
                      }}
                    />
                  </div>
                  <span className="text-slate-700 font-bold text-xs">Atlas Proje</span>
                  <span className="text-slate-400 text-xxs font-semibold uppercase">Turkey</span>
                </div>

                {/* Animated Connector Line */}
                <div className="flex-1 px-2 relative flex flex-col items-center justify-center">
                  <svg className="w-full h-6" fill="none" viewBox="0 0 100 24">
                    {/* Background line */}
                    <path d="M 0 12 L 100 12" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="3 3" />
                    {/* Pulsing overlay line */}
                    <path 
                      d="M 0 12 L 100 12" 
                      stroke="url(#pulseGrad)" 
                      strokeWidth="3" 
                      strokeDasharray="6 12"
                      className="animate-pulse-flow"
                      style={{ strokeDashoffset: 24 }}
                    />
                    <defs>
                      <linearGradient id="pulseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="50%" stopColor="#14b8a6" />
                        <stop offset="100%" stopColor="#0ea5e9" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <span className="text-[9px] text-sky-600 font-extrabold tracking-widest mt-1 uppercase select-none">
                    Data Pipeline
                  </span>
                </div>

                {/* Techneos Logo Block */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-20 h-20 bg-white border border-slate-200 rounded-xl flex items-center justify-center p-3 shadow-sm transition-all group-hover:border-sky-500 duration-300">
                    <img 
                      src={`${import.meta.env.BASE_URL}assets/logo/logo_techneos.png`} 
                      alt="Techneos" 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = '<span class="text-sky-600 font-extrabold text-base">TECHNEOS</span>';
                        }
                      }}
                    />
                  </div>
                  <span className="text-slate-700 font-bold text-xs">Techneos</span>
                  <span className="text-slate-400 text-xxs font-semibold uppercase">Italy</span>
                </div>
              </div>

              {/* Tagline */}
              <div className="mt-8 text-center text-slate-400 text-xs font-light">
                Exclusive Turkish Technical Partnership
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
