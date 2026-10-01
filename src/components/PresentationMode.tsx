import React, { useState, useEffect } from 'react';
import { SLIDES_DATA } from '../data/historyData';
import { SlideContent } from '../types';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Mic,
  FileText,
  Clock,
  Sparkles,
  Layers,
  HelpCircle,
  X
} from 'lucide-react';

interface PresentationModeProps {
  onExit: () => void;
}

export const PresentationMode: React.FC<PresentationModeProps> = ({ onExit }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState<boolean>(true);
  const [presentationSeconds, setPresentationSeconds] = useState<number>(0);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true);

  const currentSlide: SlideContent = SLIDES_DATA[currentSlideIndex];

  // Presentation timer
  useEffect(() => {
    let interval: any;
    if (isTimerRunning) {
      interval = setInterval(() => {
        setPresentationSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning]);

  const formatTimer = (totalSec: number) => {
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Escape') {
        if (isFullscreen) {
          toggleFullscreen();
        } else {
          onExit();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlideIndex, isFullscreen]);

  const nextSlide = () => {
    if (currentSlideIndex < SLIDES_DATA.length - 1) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950 text-white flex flex-col justify-between overflow-hidden select-none">
      {/* Top Bar Controls */}
      <div className="bg-stone-900/95 border-b border-stone-800 px-4 sm:px-6 py-3 flex items-center justify-between z-20">
        <div className="flex items-center space-x-3">
          <button
            onClick={onExit}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold border border-stone-700 transition-colors"
          >
            <X className="w-4 h-4" />
            <span>Вийти з презентації</span>
          </button>

          <div className="hidden sm:flex items-center space-x-2 text-xs font-mono text-amber-300 bg-amber-950/60 px-3 py-1.5 rounded-xl border border-amber-800/40">
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Таймер виступу: {formatTimer(presentationSeconds)}</span>
          </div>

          <span className="hidden md:inline-block px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-lg font-mono">
            Правило 6х6 • Шрифт 28–36 пт
          </span>
        </div>

        {/* Slide navigation counter */}
        <div className="flex items-center space-x-2">
          <div className="bg-stone-800 px-3 py-1.5 rounded-xl text-xs font-mono font-bold text-amber-200 border border-stone-700">
            Слайд {currentSlideIndex + 1} / {SLIDES_DATA.length}
          </div>

          <button
            onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
            title="Шпаргалка для виступу перед класом"
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
              showSpeakerNotes
                ? 'bg-amber-600 border-amber-500 text-white shadow-md'
                : 'bg-stone-800 border-stone-700 text-stone-300 hover:bg-stone-700'
            }`}
          >
            <Mic className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Шпаргалка учня</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 transition-colors"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Slide Canvas Container */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        {/* The Slide Frame (Strict 6x6 rule, high contrast, 28-36pt fonts) */}
        <div className="flex-1 p-4 sm:p-8 md:p-12 flex flex-col justify-center items-center overflow-y-auto">
          <div className="w-full max-w-5xl aspect-auto md:min-h-[520px] bg-gradient-to-br from-stone-900 via-stone-900 to-amber-950/80 rounded-3xl p-6 sm:p-10 md:p-12 shadow-2xl border border-amber-600/40 flex flex-col justify-between relative overflow-hidden">
            {/* Background watermark/accent */}
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Slide Header */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    {currentSlide.badge}
                  </span>
                  <span className="text-stone-400 text-xs font-semibold">
                    {currentSlide.section}
                  </span>
                </div>
                <span className="text-amber-400/60 font-mono text-sm font-bold">
                  {currentSlideIndex + 1}/{SLIDES_DATA.length}
                </span>
              </div>

              {/* Title: 36pt font scale */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-serif text-white tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400">
                {currentSlide.title}
              </h2>

              <p className="text-amber-200/80 text-sm sm:text-base font-light italic mt-1 border-b border-amber-800/40 pb-4">
                {currentSlide.subtitle}
              </p>
            </div>

            {/* Slide Body: Rule 6x6 (Max 6 bullet points, clean text 24-28pt feel) */}
            <div className="my-6 space-y-3">
              {currentSlide.bulletPoints.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-start space-x-3 text-base sm:text-lg md:text-xl font-sans text-stone-100 leading-snug"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 mt-2 shrink-0 shadow-sm shadow-amber-400/50" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Slide Footer Highlight / Quote */}
            {currentSlide.keyDateOrQuote && (
              <div className="mt-auto pt-4 border-t border-amber-800/40 flex flex-col sm:flex-row sm:items-center justify-between bg-stone-950/60 p-4 rounded-2xl border border-amber-600/30 gap-2">
                <div className="font-serif font-black text-lg sm:text-xl text-amber-300">
                  ⚡ {currentSlide.keyDateOrQuote.highlight}
                </div>
                <div className="text-xs sm:text-sm text-stone-300 font-sans">
                  {currentSlide.keyDateOrQuote.caption}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Speaker Notes / Шпаргалка для виступу учня перед класом */}
        {showSpeakerNotes && (
          <div className="w-full lg:w-96 bg-stone-900 border-t lg:border-t-0 lg:border-l border-amber-900/40 p-5 flex flex-col justify-between z-10">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-3">
                <div className="flex items-center space-x-2 text-amber-400 font-bold text-xs uppercase tracking-wider font-mono">
                  <Mic className="w-4 h-4 text-amber-500" />
                  <span>Шпаргалка для виступу</span>
                </div>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono">
                  Усне мовлення
                </span>
              </div>

              <div className="bg-stone-950/90 p-4 rounded-2xl border border-stone-800 text-stone-200 text-xs sm:text-sm leading-relaxed max-h-[220px] lg:max-h-[360px] overflow-y-auto scrollbar-thin">
                <p className="text-amber-100/90 italic">
                  "{currentSlide.speakerNotes}"
                </p>
              </div>

              <div className="mt-3 p-3 bg-amber-950/30 rounded-xl border border-amber-900/40 text-[11px] text-amber-200/90 space-y-1">
                <div className="font-bold text-amber-300">💡 Порада вчителя:</div>
                <p>Не читайте текст зі слайду слово в слово! Слайд показує тези, а ви розповідайте своїми словами.</p>
              </div>
            </div>

            <div className="text-[11px] text-stone-500 font-mono text-center pt-2">
              Керування: ⬅️ ➡️ або Пробіл
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation Toolbar */}
      <div className="bg-stone-900/95 border-t border-stone-800 px-4 sm:px-6 py-3.5 flex items-center justify-between z-20">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          disabled={currentSlideIndex === 0}
          className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
            currentSlideIndex === 0
              ? 'bg-stone-800/40 border-stone-800 text-stone-600 cursor-not-allowed'
              : 'bg-stone-800 hover:bg-stone-700 text-white border-stone-700 shadow hover:scale-105 active:scale-95'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Попередній</span>
        </button>

        {/* Thumbnail Selector Dots */}
        <div className="flex items-center space-x-1.5 max-w-md overflow-x-auto px-2 py-1 scrollbar-none">
          {SLIDES_DATA.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`w-7 h-7 rounded-lg text-[11px] font-mono font-bold transition-all ${
                currentSlideIndex === idx
                  ? 'bg-amber-500 text-stone-950 scale-110 ring-2 ring-amber-300 shadow-md font-extrabold'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-400'
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentSlideIndex === SLIDES_DATA.length - 1}
          className={`flex items-center space-x-2 px-5 py-2 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
            currentSlideIndex === SLIDES_DATA.length - 1
              ? 'bg-stone-800/40 border-stone-800 text-stone-600 cursor-not-allowed'
              : 'bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white border-amber-500 shadow-lg shadow-amber-950 hover:scale-105 active:scale-95'
          }`}
        >
          <span>Наступний</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
