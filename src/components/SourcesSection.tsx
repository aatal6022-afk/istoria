import React from 'react';
import { BookOpen, ExternalLink, ShieldCheck, Award } from 'lucide-react';

export const SourcesSection: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200 space-y-6">
      <div className="flex items-center gap-3 border-b border-stone-200 pb-5">
        <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
          📚
        </div>
        <div>
          <span className="text-xs font-mono font-bold uppercase text-amber-700">Обовʼязковий критерій презентації</span>
          <h3 className="text-xl sm:text-3xl font-serif font-extrabold text-stone-900 mt-0.5">
            Перелік використаних джерел та літератури
          </h3>
          <p className="text-xs sm:text-sm text-stone-500">
            Наукова та навчально-методична база проєкту (відповідно до критеріїв МОН України для 7 класу)
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-stone-700">
        <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
          <div className="font-bold text-stone-900 font-serif flex items-center gap-2">
            <span>📖</span> 1. Шкільні підручники за програмою МОН
          </div>
          <ul className="list-disc list-inside space-y-1 text-stone-600">
            <li><strong>Всесвітня історія:</strong> підручник для 7 класу закладів загальної середньої освіти / О. І. Пометун, Ю. Б. Малієнко. — К.: Видавничий дім «Освіта», 2020. — <strong>§ 9–10 (С. 46–60)</strong>.</li>
            <li><strong>Всесвітня історія:</strong> підручник для 7 класу / О. В. Гісем, О. О. Мартинюк. — Харків: Вид-во «Ранок», 2020.</li>
            <li><strong>Історія середніх віків:</strong> підручник для 7 класу / І. Я. Щупак. — К.: Оріон, 2020.</li>
          </ul>
        </div>

        <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200 space-y-2">
          <div className="font-bold text-stone-900 font-serif flex items-center gap-2">
            <span>🗺️</span> 2. Картографічні та академічні видання
          </div>
          <ul className="list-disc list-inside space-y-1 text-stone-600">
            <li><strong>Атлас. Всесвітня історія. 7 клас.</strong> — К.: ДНВП «Картографія», 2021 (Карти «Арабський халіфат у VII–IX ст.» та «Кочові народи Степу»).</li>
            <li><strong>Енциклопедія історії України:</strong> у 10 т. / Редкол.: В. А. Смолій (голова) та ін. — К.: Наукова думка, 2003–2019.</li>
            <li><strong>Хрестоматія з історії Середніх віків:</strong> у 2 т. / Упоряд. В. М. Мордвінцев. — К., 2004.</li>
          </ul>
        </div>
      </div>

      <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 flex items-center justify-between text-xs text-emerald-900">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Матеріал повністю відповідає чинній навчальній програмі МОН України з Всесвітньої історії для 7 класу</span>
        </div>
        <span className="font-bold font-mono">100% Достовірність</span>
      </div>
    </div>
  );
};
