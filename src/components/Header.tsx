import React from 'react';
import { BookOpen, Presentation, CheckCircle, Search, FileText, Sparkles, Compass } from 'lucide-react';

interface HeaderProps {
  activeTab: 'study' | 'presentation' | 'map' | 'timeline' | 'quiz' | 'glossary';
  setActiveTab: (tab: 'study' | 'presentation' | 'map' | 'timeline' | 'quiz' | 'glossary') => void;
  openGlossary: () => void;
  openSummary: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  openGlossary,
  openSummary
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900/90 backdrop-blur-md border-b border-amber-900/40 text-stone-100 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Title */}
          <div 
            onClick={() => setActiveTab('study')}
            className="flex items-center space-x-3 cursor-pointer group"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 flex items-center justify-center shadow-lg shadow-amber-900/30 group-hover:scale-105 transition-transform border border-amber-400/40">
              <span className="text-xl sm:text-2xl">🕌</span>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-md">
                  7 Клас • § 9–10
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 rounded-md">
                  Всесвітня історія
                </span>
              </div>
              <h1 className="text-sm sm:text-base md:text-lg font-bold font-serif text-amber-100 tracking-tight leading-tight group-hover:text-amber-300 transition-colors">
                Араби, Іслам та Великий Степ
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-stone-950/60 p-1.5 rounded-2xl border border-stone-800">
            <button
              onClick={() => setActiveTab('study')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'study'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-900/30'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Підручник</span>
            </button>

            <button
              onClick={() => setActiveTab('presentation')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'presentation'
                  ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-md shadow-amber-900/40 animate-pulse'
                  : 'text-amber-300 hover:text-white hover:bg-amber-950/40'
              }`}
            >
              <Presentation className="w-4 h-4 text-amber-400" />
              <span>Слайд-режим</span>
              <span className="text-[9px] bg-amber-400/20 text-amber-200 px-1.5 py-0.2 rounded uppercase font-mono">13 слайдів</span>
            </button>

            <button
              onClick={() => setActiveTab('map')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'map'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-900/30'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Карта</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'quiz'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-900/30'
                  : 'text-stone-300 hover:text-white hover:bg-stone-800/60'
              }`}
            >
              <CheckCircle className="w-4 h-4 text-emerald-400" />
              <span>Тест (12 б.)</span>
            </button>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center space-x-2">
            <button
              onClick={openGlossary}
              title="Термінологічний словник"
              className="flex items-center space-x-1.5 px-3 py-2 text-xs font-medium bg-stone-800 hover:bg-stone-700 text-amber-200 hover:text-amber-100 rounded-xl border border-stone-700/60 transition-colors"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Словник</span>
            </button>

            <button
              onClick={openSummary}
              title="Конспект для уроку"
              className="flex items-center space-x-1.5 px-3 py-2 text-xs font-medium bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-600 hover:to-amber-700 text-white rounded-xl shadow-md border border-amber-600/40 transition-all hover:scale-105"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Конспект</span>
            </button>
          </div>
        </div>

        {/* Mobile secondary tab bar */}
        <div className="flex lg:hidden overflow-x-auto py-2 space-x-2 border-t border-stone-800/60 scrollbar-none">
          <button
            onClick={() => setActiveTab('study')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${
              activeTab === 'study' ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-300'
            }`}
          >
            📖 Підручник
          </button>
          <button
            onClick={() => setActiveTab('presentation')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${
              activeTab === 'presentation' ? 'bg-orange-600 text-white font-bold' : 'bg-amber-950/80 text-amber-200 border border-amber-800/50'
            }`}
          >
            🎬 Слайд-презентація
          </button>
          <button
            onClick={() => setActiveTab('map')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${
              activeTab === 'map' ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-300'
            }`}
          >
            🗺️ Карта
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap ${
              activeTab === 'quiz' ? 'bg-emerald-600 text-white' : 'bg-stone-800 text-stone-300'
            }`}
          >
            📝 Тест на 12 балів
          </button>
        </div>
      </div>
    </header>
  );
};
