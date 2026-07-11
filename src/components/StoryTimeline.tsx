import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Flag, Compass, Code, Link as LinkIcon } from 'lucide-react';

export const StoryTimeline: React.FC = () => {
  const { t } = useLanguage();

  const timelineItems = [
    {
      year: t('tl.apr2006'),
      title: t('tl.founded_h'),
      desc: t('tl.founded_t'),
      icon: <Flag className="w-4 h-4 text-white" />,
      glowColor: 'bg-sky-600 shadow-md shadow-sky-600/20',
    },
    {
      year: t('tl.era1'),
      title: t('tl.excel_h'),
      desc: t('tl.excel_t'),
      icon: <Compass className="w-4 h-4 text-white" />,
      glowColor: 'bg-slate-500 shadow-md shadow-slate-500/10',
    },
    {
      year: t('tl.era2'),
      title: t('tl.tech_h'),
      desc: t('tl.tech_t'),
      icon: <Code className="w-4 h-4 text-white" />,
      glowColor: 'bg-teal-600 shadow-md shadow-teal-600/15',
    },
    {
      year: t('tl.today'),
      title: t('tl.intgr_h'),
      desc: t('tl.intgr_t'),
      icon: <LinkIcon className="w-4 h-4 text-white" />,
      glowColor: 'bg-sky-500 shadow-md shadow-sky-500/20',
    }
  ];

  return (
    <div className="space-y-10 text-left">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight border-b border-slate-200 pb-3 mb-8">
        {t('about.journey_title')}
      </h2>

      <div className="relative pl-8 border-l-2 border-slate-200 space-y-12">
        {timelineItems.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <div className={`absolute -left-[45px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-115 z-10 ${item.glowColor}`}>
              {item.icon}
            </div>

            <div className="space-y-1.5">
              <span className="text-sky-600 font-extrabold text-xs sm:text-sm tracking-wider uppercase">
                {item.year}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-light max-w-xl">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
