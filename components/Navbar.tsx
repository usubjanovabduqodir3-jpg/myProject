'use client';

import React from 'react';
import { Volume2, VolumeX, Flame, Award, Globe, ArrowLeft, Moon, Sun } from 'lucide-react';
import { Language, ThemeMode, UILocale } from '@/lib/types';
import { UI_TRANSLATIONS } from '@/data/languagesData';

interface NavbarProps {
  selectedLanguage: Language | null;
  onBackToHome: () => void;
  uiLocale: UILocale;
  onLocaleChange: (locale: UILocale) => void;
  xp: number;
  streakDays: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  theme: ThemeMode;
  onToggleTheme: () => void;
}

export function Navbar({
  selectedLanguage,
  onBackToHome,
  uiLocale,
  onLocaleChange,
  xp,
  streakDays,
  soundEnabled,
  onToggleSound,
  theme,
  onToggleTheme,
}: NavbarProps) {
  const t = UI_TRANSLATIONS[uiLocale] || UI_TRANSLATIONS.uz;

  return (
    <header className="sticky top-0 z-40 w-full bg-white/90 dark:bg-[#0b0f19]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          {selectedLanguage ? (
            <button
              onClick={onBackToHome}
              className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1.5 -ml-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
              title={t.backToHome}
            >
              <ArrowLeft className="w-5 h-5 text-slate-500 dark:text-slate-400" />
              <span className="hidden sm:inline text-xs text-slate-500 dark:text-slate-400 font-normal">
                {t.backToHome}
              </span>
            </button>
          ) : null}

          <button
            onClick={onBackToHome}
            className="flex items-center gap-2.5 text-left focus:outline-none group"
          >
            {/* Dynamic Blue-Red-Black Brand Icon */}
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 via-slate-900 to-red-600 dark:from-blue-600 dark:via-red-600 dark:to-slate-950 flex items-center justify-center text-white font-black text-lg shadow-sm shadow-red-500/20 group-hover:scale-105 transition-transform">
              L
            </div>
            <div>
              <span className="nav-brand-title text-base sm:text-lg font-black tracking-tight block whitespace-nowrap leading-tight text-slate-900 dark:text-white">
                <span className="text-blue-600 dark:text-blue-400">Lingo</span>
                <span className="text-red-600 dark:text-red-500">Sphere</span>
              </span>
              <span className="hidden md:block text-[11px] text-slate-500 dark:text-slate-400 font-medium leading-none">
                {selectedLanguage ? `${selectedLanguage.name} (${selectedLanguage.localName})` : t.appSubtitle}
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Language Context */}
        {selectedLanguage && (
          <div className="hidden lg:flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300 px-3 py-1.5 bg-slate-50 dark:bg-slate-900/80 rounded-lg border border-slate-200/80 dark:border-slate-800">
            <span className="text-base leading-none">{selectedLanguage.flag}</span>
            <span className="font-bold text-slate-900 dark:text-white">{selectedLanguage.name}</span>
            <span className="text-slate-300 dark:text-slate-600">·</span>
            <span className="text-slate-500 dark:text-slate-400 font-mono text-[11px]">{selectedLanguage.speechCode}</span>
          </div>
        )}

        {/* Zone 3: Stats, Dark Mode Toggle, Sound & Locale */}
        <div className="flex items-center gap-2 sm:gap-2.5 header-actions shrink-0">
          {/* XP Counter */}
          <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-800/60 rounded-lg text-amber-800 dark:text-amber-300 text-xs font-semibold tabular-nums">
            <Award className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
            <span>{xp}</span>
            <span className="hidden sm:inline text-[11px] text-amber-600 dark:text-amber-400 font-normal">XP</span>
          </div>

          {/* Streak Counter */}
          <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 bg-red-50 dark:bg-red-950/40 border border-red-200/60 dark:border-red-800/60 rounded-lg text-red-800 dark:text-red-300 text-xs font-semibold tabular-nums">
            <Flame className="w-3.5 h-3.5 text-red-600 dark:text-red-400 shrink-0" />
            <span>{streakDays}</span>
            <span className="hidden sm:inline text-[11px] text-red-600 dark:text-red-400 font-normal">kun</span>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={onToggleTheme}
            className={`p-2 rounded-lg border transition-all ${
              theme === 'dark'
                ? 'bg-slate-900 text-amber-400 border-slate-700 hover:bg-slate-800 ring-1 ring-amber-400/30'
                : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
            }`}
            title={theme === 'dark' ? "Yorug' rejimga o'tish" : "Qorong'u (Dark) rejimga o'tish"}
            aria-label="Toggle Dark Mode"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Audio Sound FX Toggle */}
          <button
            onClick={onToggleSound}
            className={`p-2 rounded-lg border transition-colors ${
              soundEnabled
                ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:bg-slate-200'
                : 'bg-slate-50 dark:bg-slate-900 text-slate-400 border-slate-200 dark:border-slate-800 hover:text-slate-600'
            }`}
            title={soundEnabled ? 'Ovoz effektlarini o\'chirish' : 'Ovoz effektlarini yoqish'}
            aria-label="Sound Toggle"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-blue-600 dark:text-blue-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* UI Language Selector */}
          <div className="relative flex items-center bg-slate-100 dark:bg-slate-900 rounded-lg p-0.5 border border-slate-200 dark:border-slate-800 text-xs font-medium">
            <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-0.5 hidden sm:block" />
            {(['uz', 'en', 'ru'] as UILocale[]).map((loc) => (
              <button
                key={loc}
                onClick={() => onLocaleChange(loc)}
                className={`px-1.5 sm:px-2 py-1 rounded-md transition-all uppercase text-[11px] font-bold ${
                  uiLocale === loc
                    ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                    : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
