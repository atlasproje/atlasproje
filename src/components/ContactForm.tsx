import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Send, CheckCircle2, AlertTriangle } from 'lucide-react';

interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [fields, setFields] = useState<FormFields>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [touched, setTouched] = useState<Record<keyof FormFields, boolean>>({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    company: false,
    service: false,
    message: false,
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      fields.firstName.trim().length > 0 &&
      fields.lastName.trim().length > 0 &&
      emailRegex.test(fields.email) &&
      fields.service.trim().length > 0 &&
      fields.message.trim().length > 0
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setTouched({
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      company: true,
      service: true,
      message: true,
    });

    if (!validate()) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFields({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
      });
      setTouched({
        firstName: false,
        lastName: false,
        email: false,
        phone: false,
        company: false,
        service: false,
        message: false,
      });
    }, 1500);
  };

  return (
    <div className="bg-white border border-slate-200 p-6 sm:p-10 rounded-2xl shadow-xl text-left relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 rounded-full blur-2xl pointer-events-none" />
      
      <div className="mb-8">
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          {t('cnt.form_title')}
        </h3>
        <p className="text-slate-500 text-xs sm:text-sm mt-1 leading-relaxed font-light">
          {t('cnt.form_sub')}
        </p>
      </div>

      {status === 'success' && (
        <div className="bg-teal-50 border border-teal-200 text-teal-700 p-4 rounded-lg flex items-start gap-3 mb-6 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-teal-605 text-teal-600 flex-shrink-0 mt-0.5" />
          <span className="text-xs sm:text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t('cnt.success') }} />
        </div>
      )}

      {status === 'error' && (
        <div className="bg-orange-50 border border-orange-200 text-orange-700 p-4 rounded-lg flex items-start gap-3 mb-6 animate-fadeIn">
          <AlertTriangle className="w-5 h-5 text-orange-605 text-orange-600 flex-shrink-0 mt-0.5" />
          <span className="text-xs sm:text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: t('cnt.error') }} />
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        <div className="grid sm:grid-cols-2 gap-5">
          {/* First Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="firstName" className="text-slate-705 text-slate-700 font-bold text-xs">
              {t('cnt.fname_lbl').replace(' *', '')} <span className="text-sky-600">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={fields.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t('cnt.fname_ph')}
              className={`bg-white border text-slate-800 text-sm px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-600 transition-colors ${
                touched.firstName && !fields.firstName.trim() ? 'border-orange-300 bg-orange-50/50' : 'border-slate-300'
              }`}
              required
            />
          </div>

          {/* Last Name */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="lastName" className="text-slate-705 text-slate-700 font-bold text-xs">
              {t('cnt.lname_lbl').replace(' *', '')} <span className="text-sky-600">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={fields.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={t('cnt.lname_ph')}
              className={`bg-white border text-slate-800 text-sm px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-600 transition-colors ${
                touched.lastName && !fields.lastName.trim() ? 'border-orange-300 bg-orange-50/50' : 'border-slate-300'
              }`}
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-slate-705 text-slate-700 font-bold text-xs">
              {t('cnt.email_lbl').replace(' *', '')} <span className="text-sky-600">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="name@company.com"
              className={`bg-white border text-slate-800 text-sm px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-600 transition-colors ${
                touched.email && (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) ? 'border-orange-300 bg-orange-50/50' : 'border-slate-300'
              }`}
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-slate-705 text-slate-700 font-bold text-xs">
              {t('cnt.phone_lbl')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={fields.phone}
              onChange={handleChange}
              placeholder="+90 555 000 00 00"
              className="bg-white border border-slate-300 text-slate-800 text-sm px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-600 transition-colors"
            />
          </div>

          {/* Company */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="company" className="text-slate-705 text-slate-700 font-bold text-xs">
              {t('cnt.company_lbl')}
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={fields.company}
              onChange={handleChange}
              placeholder={t('cnt.company_ph')}
              className="bg-white border border-slate-300 text-slate-800 text-sm px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-600 transition-colors"
            />
          </div>

          {/* Service Area */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="service" className="text-slate-705 text-slate-700 font-bold text-xs">
              {t('cnt.service_lbl').replace(' *', '')} <span className="text-sky-600">*</span>
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                value={fields.service}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full bg-white border text-slate-700 text-sm px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-600 transition-colors appearance-none ${
                  touched.service && !fields.service ? 'border-orange-300 bg-orange-50/50' : 'border-slate-300'
                }`}
                required
              >
                <option value="" disabled>{t('cnt.service_def')}</option>
                <optgroup label={t('cnt.og_eng')}>
                  <option value="technical-drawing">{t('cnt.opt_draw')}</option>
                  <option value="structural-design">{t('cnt.opt_struct')}</option>
                  <option value="construction-mgmt">{t('cnt.opt_constr')}</option>
                  <option value="engineering-consulting">{t('cnt.opt_consult')}</option>
                </optgroup>
                <optgroup label={t('cnt.og_sw')}>
                  <option value="software-dev">{t('cnt.opt_sw')}</option>
                  <option value="data-science">{t('cnt.opt_data')}</option>
                  <option value="machine-learning">{t('cnt.opt_ml')}</option>
                  <option value="api-integration">{t('cnt.opt_api')}</option>
                </optgroup>
                <optgroup label={t('cnt.og_int')}>
                  <option value="integrated">{t('cnt.opt_int')}</option>
                </optgroup>
                <option value="other">{t('cnt.opt_other')}</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-slate-705 text-slate-700 font-bold text-xs">
            {t('cnt.msg_lbl').replace(' *', '')} <span className="text-sky-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={fields.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows={5}
            placeholder={t('cnt.msg_ph')}
            className={`bg-white border text-slate-800 text-sm px-4 py-3 rounded-lg focus:outline-none focus:ring-1 focus:ring-sky-600 transition-colors ${
              touched.message && !fields.message.trim() ? 'border-orange-300 bg-orange-50/50' : 'border-slate-300'
            }`}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-sky-655 bg-sky-600 hover:bg-sky-500 disabled:bg-slate-100 disabled:text-slate-400 text-white font-extrabold text-sm py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 shadow-md shadow-sky-600/10"
        >
          {status === 'sending' ? (
            <span>{t('cnt.btn_sending')}</span>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>{t('cnt.btn_submit')}</span>
            </>
          )}
        </button>

        {/* KVKK / Privacy Disclaimer */}
        <p className="text-slate-400 text-[10px] sm:text-xs text-center leading-relaxed max-w-md mx-auto">
          Fields marked with <span className="text-sky-600 font-extrabold">*</span> are required. Your information is protected under KVKK regulations.
        </p>
      </form>
    </div>
  );
};
