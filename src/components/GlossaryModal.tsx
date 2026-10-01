import React, { useState } from 'react';
import { GLOSSARY_TERMS } from '../data/historyData';
import { GlossaryTerm } from '../types';
import { Search, X, Volume2, BookMarked, Sparkles } from 'lucide-react';

interface GlossaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlossaryModal: React.FC<GlossaryModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!isOpen) return null;

  const categories = ['all', 'Арабський світ', 'Великий Степ', 'Військова справа', 'Культура та побут'];

  const filteredTerms = GLOSSARY_TERMS.filter(item => {
    const matchesSearch = item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const speakTerm = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'uk-UA';
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-amber-900/20 overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="bg-stone-900 text-white p-5 flex items-center justify-between border-b border-amber-900/30">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
              <BookMarked className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-amber-100">
                Історичний словник термінів (7 клас)
              </h3>
              <p className="text-xs text-stone-400">
                Понятійний апарат до параграфів 9–10
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Category Filter */}
        <div className="p-4 bg-stone-50 border-b border-stone-200 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Пошук поняття (Хіджра, Каганат, Юрта, Шаріат...)"
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-stone-300 rounded-2xl outline-none focus:ring-2 focus:ring-amber-500 font-medium"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-600 text-white shadow'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100'
                }`}
              >
                {cat === 'all' ? 'Усі категорії' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Terms List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-3 flex-1 scrollbar-thin">
          {filteredTerms.length > 0 ? (
            filteredTerms.map((t, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 hover:border-amber-400 transition-all space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <h4 className="font-serif font-bold text-base text-stone-900">
                      {t.term}
                    </h4>
                    {t.pronunciation && (
                      <span className="text-xs text-stone-400 font-mono italic">
                        [{t.pronunciation}]
                      </span>
                    )}
                    <button
                      onClick={() => speakTerm(t.term)}
                      title="Озвучити українською"
                      className="p-1 rounded-lg hover:bg-stone-200 text-stone-500 transition-colors"
                    >
                      <Volume2 className="w-3.5 h-3.5 text-amber-600" />
                    </button>
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                    {t.category}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {t.definition}
                </p>

                <div className="text-[11px] text-stone-500 italic pt-1 border-t border-stone-200/60">
                  Походження: {t.origin}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-10 text-stone-500 text-sm">
              Понять за запитом «{searchTerm}» не знайдено.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-between items-center text-xs text-stone-500">
          <span>Всього термінів: {GLOSSARY_TERMS.length}</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-stone-800 text-white font-bold text-xs hover:bg-stone-700"
          >
            Закрити
          </button>
        </div>
      </div>
    </div>
  );
};
