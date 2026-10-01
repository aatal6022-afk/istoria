import React, { useState } from 'react';
import { TIMELINE_EVENTS } from '../data/historyData';
import { TimelineEvent } from '../types';
import { Clock, Calendar, CheckCircle2, ChevronRight, Filter } from 'lucide-react';

export const InteractiveTimeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'islam' | 'steppe' | 'interaction'>('all');
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent>(TIMELINE_EVENTS[3]); // 622 Hijra default

  const filteredEvents = TIMELINE_EVENTS.filter(e => {
    if (filter === 'all') return true;
    return e.category === filter;
  });

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200 space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-amber-700">
            <Clock className="w-4 h-4 text-amber-600" />
            Стрічка часу (551 – 1258 рр.)
          </div>
          <h3 className="text-xl sm:text-3xl font-serif font-extrabold text-stone-900 mt-1">
            Синхроністична хронологія Середньовіччя
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
            Як паралельно розвивалися Арабський халіфат, народи Великого Степу та Київська Русь
          </p>
        </div>

        {/* Filter */}
        <div className="flex flex-wrap gap-1.5 bg-stone-100 p-1.5 rounded-2xl border border-stone-200">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'all' ? 'bg-amber-600 text-white shadow' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Усі дати ({TIMELINE_EVENTS.length})
          </button>
          <button
            onClick={() => setFilter('islam')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'islam' ? 'bg-emerald-600 text-white shadow' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            🕌 Ісламський світ
          </button>
          <button
            onClick={() => setFilter('steppe')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'steppe' ? 'bg-amber-600 text-white shadow' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            🐎 Великий Степ
          </button>
          <button
            onClick={() => setFilter('interaction')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              filter === 'interaction' ? 'bg-blue-600 text-white shadow' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            ⚔️ Взаємодія з Руссю
          </button>
        </div>
      </div>

      {/* Timeline List & Event Details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Timeline Events Scroll Area */}
        <div className="lg:col-span-2 space-y-3 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
          {filteredEvents.map((evt) => {
            const isSelected = selectedEvent.id === evt.id;
            return (
              <div
                key={evt.id}
                onClick={() => setSelectedEvent(evt)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-amber-50/90 border-amber-500 shadow-md ring-1 ring-amber-400'
                    : 'bg-stone-50/60 hover:bg-stone-100 border-stone-200'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`px-3 py-1.5 rounded-xl font-mono font-bold text-xs sm:text-sm whitespace-nowrap ${
                    evt.category === 'islam' ? 'bg-emerald-100 text-emerald-900 border border-emerald-300' :
                    evt.category === 'steppe' ? 'bg-amber-100 text-amber-900 border border-amber-300' :
                    'bg-blue-100 text-blue-900 border border-blue-300'
                  }`}>
                    {evt.year}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-stone-900 font-serif">
                      {evt.title}
                    </h4>
                    <p className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                      {evt.description}
                    </p>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-amber-600 translate-x-1' : 'text-stone-400'}`} />
              </div>
            );
          })}
        </div>

        {/* Selected Event Detail Spotlight */}
        <div className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-2xl p-6 border border-amber-800/40 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold uppercase bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-md border border-amber-500/30">
                {selectedEvent.year}
              </span>
              <span className="text-xs text-stone-400">
                {selectedEvent.category === 'islam' ? 'Ісламська цивілізація' :
                 selectedEvent.category === 'steppe' ? 'Степовий світ' : 'Зіткнення та контакти'}
              </span>
            </div>

            <h4 className="text-xl font-bold font-serif text-amber-100 mb-3 leading-snug">
              {selectedEvent.title}
            </h4>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-4">
              {selectedEvent.description}
            </p>

            <div className="p-3.5 bg-stone-950/80 rounded-xl border border-amber-700/40 text-xs text-amber-200">
              <div className="font-bold text-amber-400 mb-1 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                Історичне значення для уроку:
              </div>
              <p className="leading-relaxed text-stone-200">
                {selectedEvent.significance}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-3 border-t border-amber-900/40 text-[11px] text-stone-400 font-mono text-center">
            Всесвітня історія • 7 клас • Хронологічний мінімум
          </div>
        </div>
      </div>
    </div>
  );
};
