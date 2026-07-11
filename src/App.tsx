import { useState } from 'react';
import { useLanguage } from './context/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TechneosSpotlight } from './components/TechneosSpotlight';
import { ServiceCatalog } from './components/ServiceCatalog';
import { StoryTimeline } from './components/StoryTimeline';
import { RegistryCard } from './components/RegistryCard';
import { Team } from './components/Team';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { 
  Target, 
  Handshake, 
  Lightbulb, 
  ShieldCheck, 
  TrendingUp, 
  Globe, 
  ChevronRight, 
  MapPin, 
  CalendarRange, 
  ExternalLink,
  Building,
  UserCheck
} from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const { t } = useLanguage();

  const handleNav = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col font-sans selection:bg-sky-600 selection:text-white">
      {/* Navigation Header */}
      <Header currentPage={currentPage} setCurrentPage={handleNav} />

      {/* Main Content Area */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <div className="animate-fadeIn">
            {/* Hero Section */}
            <Hero setCurrentPage={handleNav} />

            {/* Techneos Alliance Spotlight Banner */}
            <TechneosSpotlight />

            {/* Services Preview Grid */}
            <ServiceCatalog layout="preview" setCurrentPage={handleNav} />

            {/* Home Page Call to Action */}
            <section className="bg-slate-50 border-t border-slate-200 py-20 text-center relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
              <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-6">
                <span className="text-sky-700 text-xs font-extrabold uppercase tracking-widest bg-sky-100 border border-sky-200/60 px-3 py-1 rounded-full">
                  {t('cta.label')}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {t('cta.title')}
                </h2>
                <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
                  {t('cta.sub')}
                </p>
                <div className="flex flex-wrap gap-4 justify-center pt-2">
                  <button
                    onClick={() => handleNav('contact')}
                    className="bg-sky-655 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm px-8 py-3.5 rounded shadow-md shadow-sky-600/15 transition-all"
                  >
                    {t('nav.contact')}
                  </button>
                  <button
                    onClick={() => handleNav('services')}
                    className="bg-white hover:bg-slate-50 border border-slate-350 text-slate-700 font-bold text-sm px-8 py-3.5 rounded transition-colors shadow-sm"
                  >
                    {t('nav.services')}
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'services' && (
          <div className="animate-fadeIn">
            {/* Detailed Service Catalog */}
            <ServiceCatalog layout="full" setCurrentPage={handleNav} />
          </div>
        )}

        {currentPage === 'about' && (
          <div className="animate-fadeIn">
            {/* About Page Hero */}
            <section className="bg-slate-50 border-b border-slate-200 pt-16 pb-20 relative text-left">
              <div className="absolute top-10 right-10 w-80 h-80 bg-sky-200/10 rounded-full blur-3xl pointer-events-none" />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                <nav className="flex items-center gap-1.5 text-xs text-slate-400 mb-6 font-semibold">
                  <button onClick={() => handleNav('home')} className="hover:text-sky-600">
                    {t('bc.home')}
                  </button>
                  <ChevronRight className="w-3 h-3 text-slate-400" />
                  <span className="text-slate-600">{t('bc.about')}</span>
                </nav>
                <span className="text-sky-700 text-xs font-extrabold uppercase tracking-widest bg-sky-100/50 border border-sky-200 px-3.5 py-1 rounded-full">
                  {t('about.hero_label')}
                </span>
                <h1 
                  className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900"
                  dangerouslySetInnerHTML={{ __html: t('about.hero_title') }}
                />
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light max-w-3xl">
                  {t('about.hero_sub')}
                </p>
              </div>
            </section>

            {/* Story Timeline & Registry details */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                {/* Timeline Column */}
                <div className="lg:col-span-7">
                  <StoryTimeline />
                </div>
                {/* Registry Card Column */}
                <div className="lg:col-span-5">
                  <div className="sticky top-28 space-y-6">
                    <span className="text-sky-700 text-xs font-extrabold uppercase tracking-widest block text-left">
                      Official Registry
                    </span>
                    <RegistryCard />
                    
                    {/* B2B Strategy SVG Graphic */}
                    <div className="bg-white border border-slate-200 p-6 rounded-xl shadow-md">
                      <img 
                        src="/assets/illustrations/undraw_idea-to-plan_jnei.svg" 
                        alt="Corporate Development & Strategy" 
                        className="w-full h-auto max-h-[160px] object-contain mx-auto"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Co-founder Synergy Section */}
            <section className="bg-slate-50 border-y border-slate-200 py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Team />
              </div>
            </section>

            {/* Company Values */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                  <span className="text-sky-700 text-xs font-extrabold uppercase tracking-widest bg-sky-50 border border-sky-200/60 px-3.5 py-1 rounded-full">
                    {t('val.label')}
                  </span>
                  <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
                    {t('val.title')}
                  </h2>
                  <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed">
                    {t('val.sub')}
                  </p>
                </div>

                {/* Values Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { title: t('val.prec_h'), text: t('val.prec_t'), icon: <Target className="w-5 h-5 text-sky-600" /> },
                    { title: t('val.comm_h'), text: t('val.comm_t'), icon: <Handshake className="w-5 h-5 text-teal-600" /> },
                    { title: t('val.inno_h'), text: t('val.inno_t'), icon: <Lightbulb className="w-5 h-5 text-orange-655 text-orange-600" /> },
                    { title: t('val.intg_h'), text: t('val.intg_t'), icon: <ShieldCheck className="w-5 h-5 text-green-600" /> },
                    { title: t('val.grow_h'), text: t('val.grow_t'), icon: <TrendingUp className="w-5 h-5 text-indigo-605 text-indigo-600" /> },
                    { title: t('val.glob_h'), text: t('val.glob_t'), icon: <Globe className="w-5 h-5 text-sky-600" /> },
                  ].map((value, valIdx) => (
                    <div 
                      key={valIdx}
                      className="bg-white border border-slate-200 p-6 rounded-xl hover:border-slate-350 transition-colors shadow-md hover:shadow-lg duration-300"
                    >
                      <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 w-fit mb-4">
                        {value.icon}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {value.title}
                      </h3>
                      <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                        {value.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Vision Banner */}
            <section className="bg-slate-50 border-t border-slate-202 border-slate-200 py-20 text-center relative overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-200/10 rounded-full blur-3xl pointer-events-none" />
              <div className="max-w-3xl mx-auto px-4 relative z-10 space-y-6">
                <span className="text-sky-700 text-xs font-extrabold uppercase tracking-widest bg-sky-100/50 border border-sky-200 px-3 py-1 rounded-full">
                  {t('about_vis.label')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {t('about_vis.title')}
                </h2>
                <p className="text-slate-500 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto">
                  {t('about_vis.sub')}
                </p>
                <div className="flex flex-wrap gap-4 justify-center pt-2">
                  <button
                    onClick={() => handleNav('services')}
                    className="bg-sky-655 bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm px-8 py-3.5 rounded shadow-md shadow-sky-600/15 transition-all"
                  >
                    Explore Services
                  </button>
                  <button
                    onClick={() => handleNav('contact')}
                    className="bg-white hover:bg-slate-50 border border-slate-350 text-slate-700 font-bold text-sm px-8 py-3.5 rounded transition-colors shadow-sm"
                  >
                    Start a Conversation
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'contact' && (
          <div className="animate-fadeIn">
            {/* Contact Page Hero */}
            <section className="bg-slate-50 border-b border-slate-200 pt-16 pb-20 relative text-left">
              <div className="absolute top-10 right-10 w-80 h-80 bg-sky-200/10 rounded-full blur-3xl pointer-events-none" />
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
                <nav className="flex items-center gap-1.5 text-xs text-slate-400 mb-6 font-semibold">
                  <button onClick={() => handleNav('home')} className="hover:text-sky-600">
                    {t('bc.home')}
                  </button>
                  <ChevronRight className="w-3 h-3 text-slate-400" />
                  <span className="text-slate-600">{t('bc.contact')}</span>
                </nav>
                <span className="text-sky-700 text-xs font-extrabold uppercase tracking-widest bg-sky-100/50 border border-sky-200 px-3.5 py-1 rounded-full">
                  {t('cnt.hero_label')}
                </span>
                <h1 
                  className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-slate-900"
                  dangerouslySetInnerHTML={{ __html: t('cnt.hero_title') }}
                />
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light max-w-3xl">
                  {t('cnt.hero_sub')}
                </p>
              </div>
            </section>

            {/* Contact Content Split */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                {/* Left side details */}
                <div className="lg:col-span-5 space-y-8 text-left">
                  <div className="space-y-6">
                    <span className="text-sky-600 text-xs font-extrabold uppercase tracking-widest block">
                      {t('cnt.info_label')}
                    </span>
                    
                    {/* Office Address */}
                    <div className="flex gap-4">
                      <div className="p-3 bg-slate-50 border border-slate-150 rounded-lg text-sky-655 text-sky-600 flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-slate-800 font-bold text-sm tracking-wide uppercase">
                          {t('cnt.addr_label')}
                        </h4>
                        <p className="text-slate-550 text-slate-600 text-sm leading-relaxed font-light">
                          Reşatbey Mah. Cumhuriyet Cad.<br />
                          Gürbiçer Apt. Asma Kat No:6<br />
                          Seyhan / Adana, Turkey
                        </p>
                      </div>
                    </div>

                    {/* Legal Registration */}
                    <div className="flex gap-4">
                      <div className="p-3 bg-slate-50 border border-slate-150 rounded-lg text-sky-655 text-sky-600 flex-shrink-0">
                        <Building className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-slate-800 font-bold text-sm tracking-wide uppercase">
                          {t('cnt.reg_label')}
                        </h4>
                        <p className="text-slate-550 text-slate-600 text-sm leading-relaxed font-light">
                          Adana Ticaret Sicil Memurluğu<br />
                          Sicil No: 49321
                        </p>
                      </div>
                    </div>

                    {/* Working Days */}
                    <div className="flex gap-4">
                      <div className="p-3 bg-slate-50 border border-slate-150 rounded-lg text-sky-655 text-sky-600 flex-shrink-0">
                        <CalendarRange className="w-5 h-5" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-slate-800 font-bold text-sm tracking-wide uppercase">
                          {t('cnt.work_label')}
                        </h4>
                        <p className="text-slate-550 text-slate-600 text-sm leading-relaxed font-light">
                          {t('cnt.work_value')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Process Box */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 sm:p-8 space-y-6">
                    <h4 className="text-slate-800 font-extrabold text-sm tracking-wide uppercase flex items-center gap-1.5 border-b border-slate-200 pb-2">
                      <UserCheck className="w-4 h-4 text-sky-600" />
                      {t('cnt.next_title')}
                    </h4>
                    <div className="space-y-5">
                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                          1
                        </div>
                        <div>
                          <h5 className="text-slate-800 text-xs sm:text-sm font-bold">
                            {t('cnt.step1_title')}
                          </h5>
                          <p className="text-slate-500 text-xxs sm:text-xs mt-1 font-light leading-relaxed">
                            {t('cnt.step1_text')}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                          2
                        </div>
                        <div>
                          <h5 className="text-slate-800 text-xs sm:text-sm font-bold">
                            {t('cnt.step2_title')}
                          </h5>
                          <p className="text-slate-500 text-xxs sm:text-xs mt-1 font-light leading-relaxed">
                            {t('cnt.step2_text')}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-6 h-6 rounded-full bg-sky-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0">
                          3
                        </div>
                        <div>
                          <h5 className="text-slate-800 text-xs sm:text-sm font-bold">
                            {t('cnt.step3_title')}
                          </h5>
                          <p className="text-slate-500 text-xxs sm:text-xs mt-1 font-light leading-relaxed">
                            {t('cnt.step3_text')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vector Illustration showing Inquiry/Response */}
                  <div className="border border-slate-200 p-6 rounded-xl bg-slate-50/50 shadow-sm flex items-center justify-center">
                    <img 
                      src="/assets/illustrations/undraw_detailed-answer_kys9.svg" 
                      alt="Detailed Response Support" 
                      className="w-full h-auto max-h-[140px] object-contain mx-auto"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Right side form */}
                <div className="lg:col-span-7">
                  <ContactForm />
                </div>

              </div>
            </section>

            {/* Google Map Section */}
            <section className="bg-slate-50 border-t border-slate-200 py-16 text-left">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
                <div className="max-w-3xl space-y-2">
                  <span className="text-sky-600 text-xs font-extrabold uppercase tracking-widest">
                    {t('cnt.loc_label')}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    {t('cnt.loc_title')}
                  </h3>
                  <p className="text-slate-500 text-sm font-light">
                    {t('cnt.loc_sub')}
                  </p>
                </div>

                {/* Simulated Map Container with route button */}
                <div className="bg-white border border-slate-200 rounded-2xl h-80 flex flex-col items-center justify-center p-6 gap-3 text-center relative overflow-hidden shadow-md">
                  {/* Visual Background grid and pinpoint */}
                  <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#0f172a_1.5px,transparent_1.5px)] [background-size:24px_24px]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-sky-200/10 rounded-full blur-2xl pointer-events-none" />
                  
                  <MapPin className="w-12 h-12 text-sky-655 text-sky-600 animate-bounce relative z-10" />
                  <p className="text-slate-900 font-extrabold text-sm sm:text-base relative z-10">
                    Reşatbey Mah. Cumhuriyet Cad. Gürbiçer Apt. Asma Kat No:6
                  </p>
                  <p className="text-slate-500 text-xs sm:text-sm font-light relative z-10">
                    Seyhan / Adana, Turkey
                  </p>
                  
                  <a
                    href="https://maps.google.com/?q=Reşatbey+Mahallesi+Cumhuriyet+Caddesi+Seyhan+Adana+Turkey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider px-5 py-3 rounded transition-colors inline-flex items-center gap-1.5 relative z-10 shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    {t('cnt.map_btn')}
                  </a>
                </div>
              </div>
            </section>
          </div>
        )}
      </main>

      {/* Unified Footer */}
      <Footer setCurrentPage={handleNav} />
    </div>
  );
}

export default App;
