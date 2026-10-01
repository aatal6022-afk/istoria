import React from 'react';
import { Scale, Check, ArrowRight, Sparkles } from 'lucide-react';

export const NomadVsArabCompare: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200 space-y-6">
      <div className="flex items-center gap-3 border-b border-stone-200 pb-5">
        <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
          ⚖️
        </div>
        <div>
          <span className="text-xs font-mono font-bold uppercase text-amber-700">Аналітичний блок • 7 клас</span>
          <h3 className="text-xl sm:text-3xl font-serif font-extrabold text-stone-900 mt-0.5">
            Порівняльний аналіз: Арабський світ vs Великий Степ
          </h3>
          <p className="text-xs sm:text-sm text-stone-500">
            Спільні та відмінні риси двох великих цивілізацій середньовіччя
          </p>
        </div>
      </div>

      {/* Comparison Matrix */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
          <thead>
            <tr className="bg-stone-900 text-white font-serif">
              <th className="p-3.5 rounded-tl-2xl font-bold w-1/4">Критерій порівняння</th>
              <th className="p-3.5 bg-emerald-950 font-bold w-3/8 text-emerald-200">
                🕌 Арабська цивілізація (Аравія / Халіфат)
              </th>
              <th className="p-3.5 rounded-tr-2xl bg-amber-950 font-bold w-3/8 text-amber-200">
                🐎 Великий Степ (Кочові каганати)
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-stone-200 text-stone-700">
            <tr className="hover:bg-stone-50">
              <td className="p-3.5 font-bold text-stone-900 bg-stone-50">1. Географічне середовище</td>
              <td className="p-3.5">Піщані та камʼянисті пустелі, рідкісні оазиси, вихід до двох морів</td>
              <td className="p-3.5">Безкраї рівнинні травʼянисті степи помірного клімату від Китаю до Дунаю</td>
            </tr>
            <tr className="hover:bg-stone-50">
              <td className="p-3.5 font-bold text-stone-900 bg-stone-50">2. Головна тварина</td>
              <td className="p-3.5"><strong>Верблюд</strong> («корабель пустелі») + арабський скакун</td>
              <td className="p-3.5"><strong>Степовий кінь</strong> (культ вершника) + вівці й барани</td>
            </tr>
            <tr className="hover:bg-stone-50">
              <td className="p-3.5 font-bold text-stone-900 bg-stone-50">3. Тип житла</td>
              <td className="p-3.5">Шкіряні/вовняні намети бедуїнів або глинобитні будинки в містах</td>
              <td className="p-3.5"><strong>Повстяна розбірна юрта</strong> на деревʼяному каркасі</td>
            </tr>
            <tr className="hover:bg-stone-50">
              <td className="p-3.5 font-bold text-stone-900 bg-stone-50">4. Релігійна еволюція</td>
              <td className="p-3.5">Перехід від язичництва до <strong>монотеїзму (Іслам)</strong>, Коран</td>
              <td className="p-3.5"><strong>Тенгріанство</strong> (культ Неба) → поступове прийняття ісламу, юдаїзму чи християнства</td>
            </tr>
            <tr className="hover:bg-stone-50">
              <td className="p-3.5 font-bold text-stone-900 bg-stone-50">5. Міста та наука</td>
              <td className="p-3.5">Величезні міста (Багдад, Дамаск, Кордова), академії («Будинок мудрості»), розвиток математики та медицини</td>
              <td className="p-3.5">Мобільні ставки ханів, торговельні вузли (Ітіль, Сарай), усна епічна традиція</td>
            </tr>
            <tr className="hover:bg-stone-50">
              <td className="p-3.5 font-bold text-stone-900 bg-stone-50 rounded-bl-2xl">6. Взаємодія з Руссю</td>
              <td className="p-3.5">Торгівля срібними дирхемами (знайдені в тисячах скарбів на території України)</td>
              <td className="p-3.5 rounded-br-2xl">Безпосереднє сусідство: війни, союзи, «чорні клобуки», династичні шлюби, спільні походи</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Synthesis / Conclusion block */}
      <div className="bg-gradient-to-r from-amber-500/10 via-emerald-500/10 to-stone-100 p-5 rounded-2xl border border-amber-300 flex flex-col sm:flex-row items-start gap-4">
        <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold text-base shrink-0 mt-0.5">
          💡
        </div>
        <div>
          <h4 className="font-serif font-bold text-sm sm:text-base text-stone-900">
            Головний учнівський висновок до уроку:
          </h4>
          <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mt-1">
            І араби, і кочовики Степу довели, що навіть суворе природне середовище (пустеля або степ) не є перешкодою для створення передових імперій. Обидві культури слугували глобальними мостами: араби зберегли й примножили античну науку для Європи, а кочовики забезпечували функціонування Великого Шовкового шляху.
          </p>
        </div>
      </div>
    </div>
  );
};
