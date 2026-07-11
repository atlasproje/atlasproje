import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, CalendarRange } from 'lucide-react';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

const LOG_SEQUENCE = [
  'systemctl start atlas-mep-calculator.service',
  'mep_calculator --fit-hydraulic --flow-rate=2.4L/s... [OK]',
  'python -m ai_agents.init --rag-source=docs/mep_spec.pdf',
  'ai_agent_rag --embed-chunking --vector-db=pgvector... [CONNECTED]',
  'curl -X POST https://api.techneos.it/v1/ml/pipelines/trigger',
  'techneos_client --stream-logs --epochs=20... [ACCURACY: 98.4%]',
];

export const Hero = ({ setCurrentPage }: HeroProps) => {
  const { t } = useLanguage();
  
  // Terminal logger states
  const [logHistory, setLogHistory] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const activePhrase = LOG_SEQUENCE[currentLineIndex];
    
    if (charIndex < activePhrase.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + activePhrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 45); // Typing speed
      return () => clearTimeout(timeout);
    } else {
      // Completed typing one line
      const timeout = setTimeout(() => {
        setLogHistory((prev) => {
          const updated = [...prev, activePhrase];
          // Keep last 3 logs
          return updated.slice(-3);
        });
        setCurrentText('');
        setCharIndex(0);
        setCurrentLineIndex((prev) => (prev + 1) % LOG_SEQUENCE.length);
      }, 1500); // Wait before next log
      return () => clearTimeout(timeout);
    }
  }, [charIndex, currentLineIndex]);

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

            <p className="text-slate-655 text-base sm:text-lg leading-relaxed max-w-2xl font-light text-slate-600">
              {t('hero.desc')}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setCurrentPage('services')}
                className="bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm px-6 py-3.5 rounded shadow-md shadow-sky-600/15 transition-all flex items-center gap-2"
              >
                {t('hero.btn_services')}
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentPage('contact')}
                className="bg-white hover:bg-slate-55 hover:bg-slate-50 border border-slate-350 border-slate-300 text-slate-700 font-bold text-sm px-6 py-3.5 rounded transition-colors shadow-sm"
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

          {/* Right Side Visual (Vector Illustration + Laser Sweep + Terminal Logger) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            <div className="w-full max-w-md bg-white border border-slate-200 p-6 sm:p-8 rounded-2xl shadow-xl shadow-slate-100 hover:shadow-2xl transition-all duration-300 relative overflow-hidden group">
              
              {/* Laser-Scan sweep line */}
              <div className="absolute left-0 w-full h-0.5 bg-sky-500/80 shadow-[0_0_8px_rgba(14,165,233,0.8)] animate-scan pointer-events-none z-20" />
              
              <div className="relative z-10">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/illustrations/undraw_code-thinking_tqs9.svg`} 
                  alt="Engineering and Software Solutions" 
                  className="w-full h-auto max-h-[220px] object-contain mx-auto"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>
              
              {/* Context Tag under illustration */}
              <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-xxs font-bold text-slate-400 uppercase tracking-widest">
                <span>Precision MEP</span>
                <span className="text-sky-500">•</span>
                <span>AI Engineering</span>
              </div>

              {/* Ticker terminal window */}
              <div className="mt-4 bg-slate-950 rounded-lg p-3 border border-slate-900 text-left font-mono text-[9px] sm:text-[10px] text-teal-400 select-none">
                <div className="flex items-center justify-between border-b border-slate-900 pb-1.5 mb-1.5">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-slate-650 text-slate-500 text-xxxs uppercase tracking-wider font-semibold">
                    agentic-engine.sh
                  </span>
                </div>
                <div className="space-y-1 h-[55px] overflow-hidden flex flex-col justify-end font-medium">
                  {logHistory.map((log, idx) => (
                    <p key={idx} className="truncate opacity-50">
                      <span className="text-slate-650 text-slate-600 font-bold mr-1">$</span> {log}
                    </p>
                  ))}
                  <p className="flex items-center gap-1 text-teal-300">
                    <span className="text-slate-655 text-slate-600 font-bold mr-1">$</span> {currentText}
                    <span className="w-1.5 h-3 bg-teal-400 animate-pulse inline-block" />
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
