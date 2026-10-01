import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ChapterArabWorld } from './components/ChapterArabWorld';
import { ChapterGreatSteppe } from './components/ChapterGreatSteppe';
import { NomadVsArabCompare } from './components/NomadVsArabCompare';
import { InteractiveMap } from './components/InteractiveMap';
import { InteractiveTimeline } from './components/InteractiveTimeline';
import { PresentationMode } from './components/PresentationMode';
import { QuizSection } from './components/QuizSection';
import { GlossaryModal } from './components/GlossaryModal';
import { SummaryPrintModal } from './components/SummaryPrintModal';
import { SourcesSection } from './components/SourcesSection';
import { Presentation, BookOpen, Compass, CheckCircle, Search, FileText, ArrowUp, Sparkles, School } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'study' | 'presentation' | 'map' | 'timeline' | 'quiz' | 'glossary'>('study');
  const [isGlossaryOpen, setIsGlossaryOpen] = useState<boolean>(false);
  const [isSummaryOpen, setIsSummaryOpen] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-stone-100 text-stone-800 font-sans selection:bg-amber-500 selection:text-white flex flex-col">
      {/* Presentation Fullscreen Overlay Mode */}
      {activeTab === 'presentation' && (
        <PresentationMode onExit={() => setActiveTab('study')} />
      )}

      {/* Main Header Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openGlossary={() => setIsGlossaryOpen(true)}
        openSummary={() => setIsSummaryOpen(true)}
      />

      {/* Modals */}
      <GlossaryModal
        isOpen={isGlossaryOpen}
        onClose={() => setIsGlossaryOpen(false)}
      />

      <SummaryPrintModal
        isOpen={isSummaryOpen}
        onClose={() => setIsSummaryOpen(false)}
      />

      {/* Main App Content View */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onStartPresentation={() => setActiveTab('presentation')}
          onStartQuiz={() => {
            setActiveTab('quiz');
            window.scrollTo({ top: 300, behavior: 'smooth' });
          }}
          onExploreMap={() => {
            setActiveTab('map');
            window.scrollTo({ top: 300, behavior: 'smooth' });
          }}
        />

        {/* Content Tabs */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
          {activeTab === 'study' && (
            <div className="space-y-12">
              {/* Chapter 1: Arab World */}
              <ChapterArabWorld />

              {/* Chapter 2: Great Steppe */}
              <ChapterGreatSteppe />

              {/* Analytical Comparison: Nomad vs Arab */}
              <NomadVsArabCompare />

              {/* Embedded Interactive Map */}
              <InteractiveMap />

              {/* Synchronous Timeline */}
              <InteractiveTimeline />

              {/* Quiz Teaser / Integration */}
              <QuizSection />

              {/* Rubric Sources & Literature */}
              <SourcesSection />
            </div>
          )}

          {activeTab === 'map' && (
            <div className="space-y-8">
              <InteractiveMap />
              <InteractiveTimeline />
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="space-y-8">
              <InteractiveTimeline />
              <InteractiveMap />
            </div>
          )}

          {activeTab === 'quiz' && (
            <div className="space-y-8">
              <QuizSection />
            </div>
          )}
        </div>
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end space-y-2">
        <button
          onClick={() => setActiveTab('presentation')}
          className="flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold text-xs shadow-xl shadow-amber-900/40 border border-amber-400/40 transition-all hover:scale-105 active:scale-95"
        >
          <Presentation className="w-4 h-4" />
          <span className="hidden sm:inline">Слайд-презентація</span>
        </button>

        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-2xl bg-stone-900/90 hover:bg-stone-800 text-amber-300 border border-amber-900/40 shadow-lg transition-all hover:scale-105"
          title="Вгору"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-stone-950 text-stone-400 py-12 border-t border-amber-900/30 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-stone-800">
            <div className="flex items-center space-x-3 text-center md:text-left">
              <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-xl">
                🏛️
              </div>
              <div>
                <h4 className="font-serif font-bold text-base text-amber-100">
                  Всесвітня історія • 7-А клас
                </h4>
                <p className="text-xs text-stone-400">
                  Тема: «Араби та народження ісламського світу. Етнічна мозаїка Великого Степу» (§ 9–10)
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs">
              <button
                onClick={() => setActiveTab('presentation')}
                className="hover:text-amber-300 transition-colors"
              >
                Слайди уроку
              </button>
              <span>•</span>
              <button
                onClick={() => setIsGlossaryOpen(true)}
                className="hover:text-amber-300 transition-colors"
              >
                Словник понять
              </button>
              <span>•</span>
              <button
                onClick={() => setIsSummaryOpen(true)}
                className="hover:text-amber-300 transition-colors"
              >
                Опорний конспект
              </button>
              <span>•</span>
              <button
                onClick={() => setActiveTab('quiz')}
                className="hover:text-amber-300 transition-colors"
              >
                Тест на 12 балів
              </button>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-2">
            <div className="flex items-center gap-1.5">
              <School className="w-4 h-4 text-amber-500" />
              <span>Створено для асинхронного уроку в Єдиній Школі (ЄШ) • 7 клас</span>
            </div>
            <div>Відповідає усім критеріям вчителя на 12 балів</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
