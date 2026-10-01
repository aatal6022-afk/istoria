import React, { useState } from 'react';
import { MAP_LOCATIONS } from '../data/historyData';
import { MapLocation } from '../types';
import { Compass, MapPin, Layers, Info, Filter, ArrowRight, Shield, Award } from 'lucide-react';

export const InteractiveMap: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<MapLocation>(MAP_LOCATIONS[0]);
  const [activeFilter, setActiveFilter] = useState<'all' | 'arab' | 'steppe' | 'rus' | 'trade'>('all');

  const filteredLocations = MAP_LOCATIONS.filter(loc => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'arab') return loc.category === 'arab';
    if (activeFilter === 'steppe') return loc.category === 'steppe';
    if (activeFilter === 'rus') return loc.category === 'rus' || loc.category === 'byzantine';
    return true;
  });

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-amber-700">
            <Compass className="w-4 h-4 text-amber-600" />
            Критерій 3: Карти — найкращі друзі історика
          </div>
          <h3 className="text-xl sm:text-3xl font-serif font-extrabold text-stone-900 mt-1">
            Історична карта: Халіфат, Великий Степ та Русь
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
            Натискайте на ключові міста, фортеці та поля битв для детального історичного аналізу
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-1.5 bg-stone-100 p-1.5 rounded-2xl border border-stone-200 self-start md:self-auto">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === 'all' ? 'bg-amber-600 text-white shadow' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            Усі обʼєкти
          </button>
          <button
            onClick={() => setActiveFilter('arab')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === 'arab' ? 'bg-amber-600 text-white shadow' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            🕌 Арабський світ
          </button>
          <button
            onClick={() => setActiveFilter('steppe')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === 'steppe' ? 'bg-amber-600 text-white shadow' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            🐎 Великий Степ
          </button>
          <button
            onClick={() => setActiveFilter('rus')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              activeFilter === 'rus' ? 'bg-amber-600 text-white shadow' : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            ⚔️ Русь та Візантія
          </button>
        </div>
      </div>

      {/* Map Display & Legend */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* SVG Interactive Map Area */}
        <div className="lg:col-span-2 relative bg-stone-950 rounded-2xl overflow-hidden border border-amber-900/30 p-2 sm:p-4 shadow-inner min-h-[380px] sm:min-h-[440px]">
          {/* Legend Overlay */}
          <div className="absolute top-4 left-4 z-20 bg-stone-900/90 backdrop-blur-md p-2.5 rounded-xl border border-stone-700/60 text-[11px] text-stone-200 space-y-1 shadow-lg pointer-events-none">
            <div className="font-bold text-amber-300 mb-1">Легенда карти:</div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
              <span>Арабський халіфат</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
              <span>Великий Степ (кочовики)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 inline-block" />
              <span>Київська Русь / Візантія</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500 inline-block" />
              <span>Поля вирішальних битв</span>
            </div>
          </div>

          {/* SVG Map Canvas */}
          <svg viewBox="0 0 1000 650" className="w-full h-full object-cover">
            <defs>
              <linearGradient id="desertGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#451a03" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#78350f" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="steppeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#854d0e" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#365314" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="rusGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0369a1" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#0c4a6e" stopOpacity="0.5" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Background continent outlines abstraction */}
            {/* Water bodies */}
            <rect width="1000" height="650" fill="#0f172a" />

            {/* Land Masses */}
            {/* Europe */}
            <path
              d="M 120 180 Q 250 140 380 180 T 520 200 L 520 320 Q 380 340 240 320 Z"
              fill="#1e293b"
              stroke="#334155"
              strokeWidth="1.5"
            />
            {/* Kyivan Rus area */}
            <path
              d="M 380 150 Q 480 130 540 180 L 520 300 Q 420 320 380 260 Z"
              fill="url(#rusGrad)"
              stroke="#0284c7"
              strokeWidth="2"
              strokeDasharray="4,4"
            />
            {/* Great Steppe corridor */}
            <path
              d="M 450 240 Q 650 200 950 220 L 980 340 Q 680 320 460 330 Z"
              fill="url(#steppeGrad)"
              stroke="#ca8a04"
              strokeWidth="2"
            />
            {/* Black Sea */}
            <ellipse cx="460" cy="290" rx="60" ry="25" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
            {/* Caspian Sea */}
            <ellipse cx="610" cy="270" rx="30" ry="60" fill="#0f172a" stroke="#38bdf8" strokeWidth="1" />
            {/* Mediterranean Sea */}
            <path
              d="M 180 330 Q 320 330 460 360 L 460 380 Q 300 370 160 350 Z"
              fill="#0f172a"
              stroke="#38bdf8"
              strokeWidth="1"
            />
            {/* North Africa & Arabian Peninsula */}
            <path
              d="M 140 370 Q 350 380 500 400 L 620 420 L 640 580 L 480 560 L 440 430 L 140 430 Z"
              fill="url(#desertGrad)"
              stroke="#f59e0b"
              strokeWidth="2"
            />
            {/* Red Sea */}
            <path d="M 500 420 L 550 560 L 530 570 L 480 430 Z" fill="#0f172a" />
            {/* Persian Gulf */}
            <path d="M 600 420 L 660 480 L 640 500 L 580 440 Z" fill="#0f172a" />

            {/* Silk Road trade route line */}
            <path
              d="M 950 260 Q 750 350 580 340 T 420 300 T 200 310"
              fill="none"
              stroke="#eab308"
              strokeWidth="2.5"
              strokeDasharray="6,4"
              opacity="0.8"
            />
            <text x="750" y="300" fill="#fef08a" fontSize="11" fontWeight="bold" fontStyle="italic">
              ← Великий Шовковий шлях →
            </text>

            {/* Incense Route */}
            <path
              d="M 560 580 L 530 460 L 490 380"
              fill="none"
              stroke="#f97316"
              strokeWidth="2"
              strokeDasharray="4,4"
              opacity="0.7"
            />
            <text x="540" y="520" fill="#fed7aa" fontSize="10" fontStyle="italic">
              Шлях пахощів
            </text>

            {/* Interactive Location Points */}
            {filteredLocations.map((loc) => {
              const isSelected = selectedLocation.id === loc.id;
              const posX = (loc.coords.x / 100) * 1000;
              const posY = (loc.coords.y / 100) * 650;

              let markerColor = '#10b981'; // green for arab
              if (loc.category === 'steppe') markerColor = '#f59e0b'; // amber
              if (loc.category === 'rus') markerColor = '#0284c7'; // blue
              if (loc.category === 'byzantine') markerColor = '#8b5cf6'; // purple
              if (loc.type === 'battle') markerColor = '#ef4444'; // red

              return (
                <g
                  key={loc.id}
                  className="cursor-pointer transition-transform duration-200"
                  onClick={() => setSelectedLocation(loc)}
                >
                  {/* Pulse circle if selected */}
                  {isSelected && (
                    <circle
                      cx={posX}
                      cy={posY}
                      r="18"
                      fill={markerColor}
                      opacity="0.35"
                      className="animate-ping"
                    />
                  )}
                  {/* Marker glow & circle */}
                  <circle
                    cx={posX}
                    cy={posY}
                    r={isSelected ? 10 : 7}
                    fill={markerColor}
                    stroke="#ffffff"
                    strokeWidth={isSelected ? 3 : 1.5}
                    filter="url(#glow)"
                  />
                  {/* Label */}
                  <text
                    x={posX + 12}
                    y={posY + 4}
                    fill={isSelected ? '#fef08a' : '#ffffff'}
                    fontSize={isSelected ? 14 : 11}
                    fontWeight={isSelected ? 'bold' : 'normal'}
                    className="drop-shadow-md select-none font-sans"
                  >
                    {loc.name.split(' (')[0]}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Selected Location Card & Historical Note */}
        <div className="bg-stone-50 rounded-2xl p-5 sm:p-6 border border-stone-200 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold uppercase px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 border border-amber-300">
                {selectedLocation.type === 'city' && '🏙️ Історичне місто'}
                {selectedLocation.type === 'battle' && '⚔️ Місце вирішальної битви'}
                {selectedLocation.type === 'region' && '🌾 Кочовий простір'}
              </span>
              <span className="text-xs font-semibold text-stone-500">
                {selectedLocation.category === 'arab' && 'Ісламський світ'}
                {selectedLocation.category === 'steppe' && 'Великий Степ'}
                {selectedLocation.category === 'rus' && 'Русь-Україна'}
                {selectedLocation.category === 'byzantine' && 'Візантія'}
              </span>
            </div>

            <h4 className="text-xl font-bold font-serif text-stone-900 mb-2">
              {selectedLocation.ukrainianTitle}
            </h4>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-4">
              {selectedLocation.description}
            </p>

            <div className="p-3.5 bg-amber-50/80 rounded-xl border border-amber-200 text-xs text-stone-800 space-y-1">
              <div className="font-bold text-amber-900 flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5 text-amber-700" />
                Підпис до карти для 7 класу:
              </div>
              <p className="italic text-stone-600">
                «{selectedLocation.historicalNote}»
              </p>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
            <span>Клікніть іншу точку на карті</span>
            <span className="font-mono text-amber-700 font-bold">12 ключових обʼєктів</span>
          </div>
        </div>
      </div>
    </div>
  );
};
