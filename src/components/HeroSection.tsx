import React from 'react';
import { Sparkles, Presentation, CheckCircle, ShieldCheck, MapPin, Award, BookOpen } from 'lucide-react';

interface HeroSectionProps {
  onStartPresentation: () => void;
  onStartQuiz: () => void;
  onExploreMap: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartPresentation,
  onStartQuiz,
  onExploreMap,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-amber-950/40 text-white pt-10 pb-16 border-b border-amber-900/30">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Всесвітня історія • 7-А клас
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            Параграфи 9–10 за програмою МОН
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/30">
            <Award className="w-3.5 h-3.5 text-purple-400" />
            Критерії оцінювання: 12 / 12 балів
          </span>
        </div>

        {/* Main Title & Brief */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black font-serif tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-300 leading-tight mb-4 drop-shadow-md">
            Араби та народження ісламського світу. <br />
            <span className="text-amber-100 font-normal italic">Етнічна мозаїка Великого Степу</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-stone-300 font-light leading-relaxed max-w-3xl mx-auto">
            Інтерактивний мультимедійний веб-проєкт та презентація: від пісків Аравії та виникнення світової релігії — до безкрайніх кочових імперій, що оточували Русь-Україну.
          </p>
        </div>

        {/* Quick Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={onStartPresentation}
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-600 via-orange-600 to-amber-700 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-amber-900/40 hover:scale-105 transition-all active:scale-95 border border-amber-400/40"
          >
            <Presentation className="w-5 h-5 text-amber-200" />
            <span>Відкрити Слайди для уроку (13 слайдів)</span>
          </button>

          <button
            onClick={onExploreMap}
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-stone-800/90 hover:bg-stone-700/90 text-amber-200 hover:text-white font-semibold text-sm sm:text-base border border-stone-700 transition-all hover:scale-105"
          >
            <MapPin className="w-5 h-5 text-amber-400" />
            <span>Інтерактивна Карта</span>
          </button>

          <button
            onClick={onStartQuiz}
            className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-200 hover:text-white font-semibold text-sm sm:text-base border border-emerald-700/60 transition-all hover:scale-105"
          >
            <CheckCircle className="w-5 h-5 text-emerald-400" />
            <span>Пройти тест (Оцінка в ЄШ)</span>
          </button>
        </div>

        {/* Quick Stat / Criteria Cards for Grade 7 Rubric */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-stone-900/80 backdrop-blur border border-amber-900/40 rounded-2xl p-4.5 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-base">
                1
              </div>
              <div>
                <h4 className="text-xs font-bold text-amber-200 uppercase tracking-wider">Історична точність</h4>
                <p className="text-[11px] text-stone-400">До 4 балів</p>
              </div>
            </div>
            <p className="text-xs text-stone-300 leading-normal">
              Хіджра 622 р., 5 стовпів ісламу, халіфати, тюрки, хозари, половці, звʼязок із Руссю.
            </p>
          </div>

          <div className="bg-stone-900/80 backdrop-blur border border-amber-900/40 rounded-2xl p-4.5 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-base">
                2
              </div>
              <div>
                <h4 className="text-xs font-bold text-orange-200 uppercase tracking-wider">Правило 6х6 & Дизайн</h4>
                <p className="text-[11px] text-stone-400">До 3 балів</p>
              </div>
            </div>
            <p className="text-xs text-stone-300 leading-normal">
              Лаконічні тези, контрастні кольори, великі шрифти від 28-36 пт, жодних «стін тексту».
            </p>
          </div>

          <div className="bg-stone-900/80 backdrop-blur border border-amber-900/40 rounded-2xl p-4.5 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-base">
                3
              </div>
              <div>
                <h4 className="text-xs font-bold text-cyan-200 uppercase tracking-wider">Карти та Ілюстрації</h4>
                <p className="text-[11px] text-stone-400">До 2 балів</p>
              </div>
            </div>
            <p className="text-xs text-stone-300 leading-normal">
              Інтерактивні карти походів, Шовкового шляху, схеми юрти, мечеті та зброї вершника.
            </p>
          </div>

          <div className="bg-stone-900/80 backdrop-blur border border-amber-900/40 rounded-2xl p-4.5 hover:border-amber-500/40 transition-colors">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-base">
                4
              </div>
              <div>
                <h4 className="text-xs font-bold text-emerald-200 uppercase tracking-wider">Мовна культура</h4>
                <p className="text-[11px] text-stone-400">До 1 бала</p>
              </div>
            </div>
            <p className="text-xs text-stone-300 leading-normal">
              Бездоганна українська термінологія за програмою МОН та перелік академічних джерел.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
