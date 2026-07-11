import { useLanguage } from '../context/LanguageContext';
import { Wrench, Terminal } from 'lucide-react';

export const Team = () => {
  const { t } = useLanguage();

  const members = [
    {
      initials: 'İÜ',
      name: 'İlmiz Ünlü',
      title: t('team.ilmaz_ttl'),
      bio: t('team.ilmaz_bio'),
      avatarBg: 'bg-slate-50 border border-slate-200 text-sky-600 shadow-inner',
      icon: <Wrench className="w-4 h-4 text-sky-600" />,
      tags: [
        t('tag.mech_eng'),
        t('tag.tech_draw'),
        t('tag.structural'),
        t('tag.constr_mgmt'),
        t('tag.proj_cons')
      ]
    },
    {
      initials: 'MÜ',
      name: 'Metin Ünlü',
      title: t('team.aysuhan_ttl'),
      bio: t('team.aysuhan_bio'),
      avatarBg: 'bg-slate-55 bg-slate-50 border border-slate-200 text-teal-605 text-teal-600 shadow-inner',
      icon: <Terminal className="w-4 h-4 text-teal-600" />,
      tags: [
        t('tag.sw_dev'),
        t('tag.data_sci'),
        t('tag.ml'),
        t('tag.api'),
        t('tag.db'),
        t('tag.intl'),
        t('tag.ai_eng'),
        t('tag.llm')
      ]
    }
  ];

  return (
    <section className="py-16 text-left">
      <div className="space-y-12">
        {/* Header */}
        <div className="border-b border-slate-200 pb-6 max-w-3xl">
          <span className="text-sky-700 text-xs font-extrabold uppercase tracking-widest bg-sky-50 border border-sky-200/60 px-3.5 py-1 rounded-full">
            {t('team.label')}
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-4 tracking-tight">
            {t('team.title')}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base font-light mt-2 leading-relaxed">
            {t('team.sub')}
          </p>
        </div>

        {/* Co-founder Synergy Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {members.map((member, idx) => (
            <article 
              key={idx}
              className="bg-white border border-slate-205 border-slate-200 p-6 sm:p-8 rounded-xl shadow-md flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div className="space-y-6">
                {/* Header Block */}
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center font-black text-xl ${member.avatarBg}`}>
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                      {member.name}
                    </h3>
                    <p className="text-sky-655 text-sky-600 text-xs sm:text-sm font-semibold mt-0.5 flex items-center gap-1.5">
                      {member.icon}
                      {member.title}
                    </p>
                  </div>
                </div>

                {/* Biography */}
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  {member.bio}
                </p>
              </div>

              {/* Tags Grid */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <span className="text-xxs font-extrabold uppercase tracking-widest text-slate-400 block mb-3">
                  Key Focus Areas
                </span>
                <div className="flex flex-wrap gap-2">
                  {member.tags.map((tag, tagIdx) => (
                    <span 
                      key={tagIdx}
                      className="bg-slate-50 border border-slate-150 text-slate-655 text-slate-700 font-semibold text-xxs px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
