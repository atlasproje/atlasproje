import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ClipboardList, Shield } from 'lucide-react';

export const RegistryCard: React.FC = () => {
  const { t } = useLanguage();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  };

  const registryDetails = [
    { label: t('reg.legal_name'), value: t('reg.legal_name_val'), size: 'text-xxs sm:text-xs text-slate-800' },
    { label: t('reg.short_name'), value: t('reg.short_name_val') },
    { label: t('reg.registry'), value: t('reg.registry_val') },
    { label: t('reg.sicil'), value: '49321' },
    { label: t('reg.founded'), value: t('reg.founded_val') },
    { label: t('reg.type'), value: t('reg.type_val') },
    { label: t('reg.location'), value: t('reg.location_val') },
    { label: t('reg.address'), value: t('reg.address_val'), size: 'text-xxs sm:text-xs text-slate-800 text-right' }
  ];

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white border border-slate-200 p-6 sm:p-8 rounded-xl shadow-md space-y-6 text-left relative overflow-hidden backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:border-slate-300"
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      {isHovered && (
        <div 
          className="absolute pointer-events-none rounded-full w-[200px] h-[200px] bg-sky-500/8 blur-[50px] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
          style={{
            left: `${coords.x}px`,
            top: `${coords.y}px`,
          }}
        />
      )}

      {/* Card Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 text-sky-600">
            <ClipboardList className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-slate-900 font-extrabold text-sm sm:text-base">
              {t('reg.card_h')}
            </h4>
            <span className="text-xxs font-extrabold uppercase tracking-widest text-slate-400">
              Official Records
            </span>
          </div>
        </div>
        <Shield className="w-5 h-5 text-sky-600/30" />
      </div>

      {/* Details Table */}
      <div className="space-y-4 relative z-10">
        {registryDetails.map((item, idx) => (
          <div 
            key={idx} 
            className="flex justify-between items-start py-2 border-b border-slate-100 last:border-b-0 last:pb-0"
          >
            <span className="text-slate-500 font-bold text-xs sm:text-sm mr-4 flex-shrink-0">
              {item.label}
            </span>
            <span className={`text-slate-800 font-medium text-xs sm:text-sm text-right ${item.size || ''}`}>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
