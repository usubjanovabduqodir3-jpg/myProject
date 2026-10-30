'use client';

import React from 'react';
import { ArrowRight, Sparkles, Mic, BookOpen, CheckCircle2, Globe2 } from 'lucide-react';
import { Language, UILocale } from '@/lib/types';
import { UI_TRANSLATIONS } from '@/data/languagesData';

interface LanguageSelectorProps {
  languages: Language[];
  onSelectLanguage: (language: Language) => void;
  uiLocale: UILocale;
  masteredWordsCount: number;
}

export function LanguageSelector({
  languages,
  onSelectLanguage,
  uiLocale,
  masteredWordsCount,
}: LanguageSelectorProps) {
  const t = UI_TRANSLATIONS[uiLocale] || UI_TRANSLATIONS.uz;

  return (
    <div className="space-y-10 py-6 sm:py-10">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto space-y-4 px-2">
        <div className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-200/80 dark:border-blue-800/80 shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-red-500 animate-spin" style={{ animationDuration: '4s' }} />
          <span>{languages.length} ta jahon tili · Har birida 1,000+ so&apos;z va Web Speech API</span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-balance text-slate-900 dark:text-white">
          {uiLocale === 'uz' ? (
            <>
              Dunyoni yangi tillarda kashf eting:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-600 to-blue-500">
                LingoSphere
              </span>
            </>
          ) : uiLocale === 'ru' ? (
            <>
              Откройте мир на новых языках:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-600 to-blue-500">
                LingoSphere
              </span>
            </>
          ) : (
            <>
              Explore the World in New Languages:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-red-600 to-blue-500">
                LingoSphere
              </span>
            </>
          )}
        </h1>

        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed text-balance max-w-2xl mx-auto">
          {t.selectLanguageDesc}
        </p>

        {/* Quick Highlights Strip */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-500 dark:text-slate-400">
          <div className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
            <Mic className="w-4 h-4 text-red-500 shrink-0" />
            <span>Ovozli tekshirish (Speech Recognition)</span>
          </div>
          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
            <BookOpen className="w-4 h-4 text-blue-500 shrink-0" />
            <span>1,000+ so&apos;zlik lug&apos;at va alifbo</span>
          </div>
          <span className="text-slate-300 dark:text-slate-700 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5 font-semibold text-slate-700 dark:text-slate-300">
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{masteredWordsCount} ta o&apos;zlashtirilgan so&apos;z</span>
          </div>
        </div>
      </div>

      {/* Language Grid (12 Languages) */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 grid-language-cards">
          {languages.map((lang) => (
            <div
              key={lang.id}
              onClick={() => onSelectLanguage(lang)}
              className="group relative bg-white dark:bg-[#0b0f19] rounded-2xl border border-slate-200 dark:border-slate-800 p-5 shadow-xs hover:shadow-lg hover:border-red-500/50 dark:hover:border-blue-500/50 transition-all duration-200 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Header: Flag & Difficulty */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl sm:text-4xl leading-none select-none drop-shadow-xs group-hover:scale-110 transition-transform">
                      {lang.flag}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {lang.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {lang.localName}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-bold text-slate-700 dark:text-slate-300 px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-md">
                    {lang.difficulty}
                  </span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
                  {lang.description}
                </p>
              </div>

              {/* Footer info: 1,000+ words badge & CTA */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-[11px] font-bold text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950/40 px-2 py-0.5 rounded-md">
                  1,000+ so&apos;z
                </span>

                <button
                  type="button"
                  className="inline-flex items-center gap-1 font-bold text-blue-600 dark:text-blue-400 group-hover:text-red-600 dark:group-hover:text-red-400 group-hover:translate-x-0.5 transition-all text-xs"
                >
                  <span>{t.startLearning}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
