import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Bot, Database, Compass, GraduationCap, ChevronRight, ArrowRight, Layers, CheckCircle2 } from 'lucide-react';

interface ServiceCatalogProps {
  layout?: 'preview' | 'full';
  setCurrentPage?: (page: string) => void;
}

export const ServiceCatalog: React.FC<ServiceCatalogProps> = ({ layout = 'preview', setCurrentPage }) => {
  const { t } = useLanguage();

  const services = [
    {
      id: 'ai-workflows',
      num: '01',
      title: t('svc.ai_title'),
      desc: t('svc.ai_desc'),
      icon: <Bot className="w-8 h-8 text-sky-600" />,
      illustration: import.meta.env.BASE_URL + 'assets/illustrations/undraw_solution-mindset_5xp7.svg',
      bullets: [
        t('svc.ai_bullet1'),
        t('svc.ai_bullet2'),
        t('svc.ai_bullet3'),
        t('svc.ai_bullet4'),
      ],
      badge: 'Advanced Tech',
      badgeColor: 'bg-sky-50 text-sky-700 border-sky-200',
      bgGlow: 'hover:shadow-sky-500/5',
      accentColor: 'text-sky-600 hover:text-sky-700'
    },
    {
      id: 'data-science',
      num: '02',
      title: t('svc.ds_title'),
      desc: t('svc.ds_desc'),
      icon: <Database className="w-8 h-8 text-teal-600" />,
      illustration: import.meta.env.BASE_URL + 'assets/illustrations/undraw_growth-analytics_vzjz.svg',
      bullets: [
        t('svc.ds_bullet1'),
        t('svc.ds_bullet2'),
        t('svc.ds_bullet3'),
        t('svc.ds_bullet4'),
      ],
      badge: 'Data & Analytics',
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
      bgGlow: 'hover:shadow-teal-500/5',
      accentColor: 'text-teal-600 hover:text-teal-700'
    },
    {
      id: 'mechanical-mep',
      num: '03',
      title: t('svc.mep_title'),
      desc: t('svc.mep_desc'),
      icon: <Compass className="w-8 h-8 text-orange-650 text-orange-600" />,
      illustration: import.meta.env.BASE_URL + 'assets/illustrations/undraw_design-components_c2hs.svg',
      bullets: [
        t('svc.mep_bullet1'),
        t('svc.mep_bullet2'),
        t('svc.mep_bullet3'),
        t('svc.mep_bullet4'),
      ],
      badge: 'Traditional Strength',
      badgeColor: 'bg-orange-50 text-orange-705 text-orange-700 border-orange-200',
      bgGlow: 'hover:shadow-orange-500/5',
      accentColor: 'text-orange-600 hover:text-orange-700'
    },
    {
      id: 'transformation-training',
      num: '04',
      title: t('svc.training_title'),
      desc: t('svc.training_desc'),
      icon: <GraduationCap className="w-8 h-8 text-indigo-600" />,
      illustration: import.meta.env.BASE_URL + 'assets/illustrations/undraw_teacher_n0ow.svg',
      bullets: [
        t('svc.training_bullet1'),
        t('svc.training_bullet2'),
        t('svc.training_bullet3'),
        t('svc.training_bullet4'),
      ],
      badge: t('svc.training_upcoming'),
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      bgGlow: 'hover:shadow-indigo-500/5',
      accentColor: 'text-indigo-600 hover:text-indigo-700'
    }
  ];

  if (layout === 'preview') {
    return (
      <section className="bg-white text-slate-900 py-20 relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-sky-700 text-xs font-extrabold uppercase tracking-widest bg-sky-50 border border-sky-200/60 px-3.5 py-1 rounded-full">
              {t('idx.svc_label')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              {t('idx.svc_title')}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed">
              {t('idx.svc_sub')}
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((svc) => (
              <article 
                key={svc.id}
                className="bg-white border border-slate-200 p-8 rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-slate-350 flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                      {svc.icon}
                    </div>
                    <span className="text-3xl font-black text-slate-100 tracking-wider">
                      {svc.num}
                    </span>
                  </div>

                  <span className={`inline-block text-xxs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded border mb-4 ${svc.badgeColor}`}>
                    {svc.badge}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {svc.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6 font-light">
                    {svc.desc}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {svc.bullets.slice(0, 3).map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-slate-500 text-xs leading-relaxed">
                        <ChevronRight className="w-3.5 h-3.5 text-sky-600 mt-0.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {setCurrentPage && (
                  <button 
                    onClick={() => {
                      setCurrentPage('services');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider focus:outline-none transition-colors ${svc.accentColor}`}
                  >
                    Details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </article>
            ))}
          </div>

          {/* CTA Preview */}
          {setCurrentPage && (
            <div className="mt-16 text-center">
              <button
                onClick={() => {
                  setCurrentPage('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-sky-50 text-sky-700 hover:bg-sky-600 hover:text-white border border-sky-200 hover:border-sky-650 px-6 py-3 rounded font-bold text-sm tracking-wide transition-all shadow-sm"
              >
                View Full Service Matrix
              </button>
            </div>
          )}

        </div>
      </section>
    );
  }

  // Full Page Detail Layout
  return (
    <div className="bg-white text-slate-905">
      {/* Page Hero */}
      <section className="bg-slate-50 border-b border-slate-200 pt-16 pb-20 relative">
        <div className="absolute top-10 left-10 w-72 h-72 bg-sky-200/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-sky-750 text-sky-600 text-xs font-extrabold uppercase tracking-widest bg-sky-100/50 border border-sky-200 px-3.5 py-1 rounded-full">
              {t('svc.hero_label')}
            </span>
            <h1 
              className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900"
              dangerouslySetInnerHTML={{ __html: t('svc.hero_title') }}
            />
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light">
              {t('svc.hero_sub')}
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Block Lists */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {services.map((svc) => (
            <div 
              key={svc.id} 
              id={svc.id}
              className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start text-left border-b border-slate-100 pb-16 last:border-b-0 last:pb-0"
            >
              {/* Left Service Meta Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-black text-slate-200 tracking-wider">
                      {svc.num}
                    </span>
                    <span className={`text-xxs font-bold uppercase tracking-widest px-2.5 py-0.5 rounded border ${svc.badgeColor}`}>
                      {svc.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {svc.title}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                    {svc.desc}
                  </p>
                  <div className="inline-flex p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    {svc.icon}
                  </div>
                </div>

                {/* Vector Illustration representing the service */}
                <div className="border border-slate-150 p-4 rounded-xl shadow-sm bg-slate-50/50 max-w-xs transition-shadow duration-300 hover:shadow-md">
                  <img 
                    src={svc.illustration} 
                    alt={svc.title} 
                    className="w-full h-auto max-h-[140px] object-contain mx-auto"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Right Sub-Services Detail Matrix */}
              <div className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6 shadow-sm">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-2">
                  Technical Capabilities & Scope
                </h4>
                <div className="grid sm:grid-cols-2 gap-6">
                  {svc.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-slate-800 text-sm font-semibold">
                          {bullet}
                        </p>
                        <p className="text-slate-500 text-xxs mt-1 font-light leading-relaxed">
                          Rigorous engineering assurance adhering to international code compliance and standards.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Integrated Solutions Callout Block */}
      <section className="bg-slate-50 border-y border-slate-200 py-20 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                  {t('svc.b3_label')}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {t('svc.intg_h')}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-light">
                  {t('svc.intg_p')}
                </p>
                {setCurrentPage && (
                  <button
                    onClick={() => {
                      setCurrentPage('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="bg-sky-655 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm px-6 py-3 rounded shadow-md shadow-sky-600/10 transition-all inline-flex items-center gap-2"
                  >
                    {t('svc.intg_btn')}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-4 shadow-inner">
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4 border-b border-slate-200 pb-2 flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-teal-600" />
                  Synergy Features
                </h4>
                <ul className="space-y-3.5">
                  {[
                    t('svc.feat1'),
                    t('svc.feat2'),
                    t('svc.feat3'),
                    t('svc.feat4'),
                    t('svc.feat5')
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-600 text-xs leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-white py-20 text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <span className="text-sky-600 text-xs font-extrabold uppercase tracking-widest">
            {t('svc.cta_label')}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            {t('svc.cta_title')}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-light max-w-xl mx-auto">
            {t('svc.cta_sub')}
          </p>
          {setCurrentPage && (
            <button
              onClick={() => {
                setCurrentPage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-sky-600 hover:bg-sky-505 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm px-8 py-3.5 rounded shadow-md shadow-sky-600/15 transition-all inline-flex items-center gap-2"
            >
              {t('svc.cta_btn')}
            </button>
          )}
        </div>
      </section>

    </div>
  );
};
