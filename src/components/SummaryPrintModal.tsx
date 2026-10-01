import React from 'react';
import { X, Printer, Download, BookOpen, CheckCircle, Award } from 'lucide-react';

interface SummaryPrintModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SummaryPrintModal: React.FC<SummaryPrintModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl border border-stone-300 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-stone-900 text-white p-5 flex items-center justify-between border-b border-amber-900/40">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              📄
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg text-amber-100">
                Опорний конспект до уроку (Шпаргалка для 7 класу)
              </h3>
              <p className="text-xs text-stone-400">
                Параграфи 9–10: Араби та Великий Степ • Готово до друку / збереження в PDF
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.print()}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold shadow transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Друкувати</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper View */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-stone-800 font-sans text-xs sm:text-sm leading-relaxed scrollbar-thin bg-amber-50/20">
          {/* Paper Title Header */}
          <div className="text-center border-b-2 border-stone-800 pb-4">
            <h2 className="text-xl sm:text-2xl font-serif font-black uppercase text-stone-900">
              ОПОРНИЙ КОНСПЕКТ З ВСЕСВІТНЬОЇ ІСТОРІЇ (7 КЛАС)
            </h2>
            <p className="text-xs font-semibold text-stone-600 mt-1">
              Тема: «Араби та народження ісламського світу. Етнічна мозаїка Великого Степу» (§ 9–10)
            </p>
          </div>

          {/* Section 1: Arab World */}
          <div className="space-y-3">
            <h3 className="text-base font-serif font-bold text-amber-950 border-b border-amber-300 pb-1 flex items-center gap-2">
              <span>🕌</span> І. Арабський світ та виникнення ісламу (§ 9)
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-stone-700">
              <li><strong>Батьківщина:</strong> Аравійський півострів (пустелі, бедуїни-скотарі, оазиси Мекка та Ясриб).</li>
              <li><strong>Пророк Мухаммад (570–632 рр.):</strong> чесний купець з Мекки, у 610 р. проголосив віру в єдиного Бога (Аллаха).</li>
              <li><strong>622 рік — ХІДЖРА:</strong> переселення Мухаммада з Мекки до Медини. <em>Початок мусульманського літочислення!</em></li>
              <li><strong>5 Стовпів Ісламу:</strong> 1) Шагада (символ віри), 2) Намаз (5 молитов), 3) Закят (милостиня 2.5%), 4) Саум (піст у Рамадан), 5) Хадж (паломництво до Мекки).</li>
              <li><strong>Священні джерела:</strong> Коран (114 сур) та Сунна (шаріат — правові та моральні норми).</li>
              <li><strong>Еволюція Халіфату:</strong> Праведні халіфи (632–661) → Омеяди (661–750, Дамаск, похід до Іспанії 711 р.) → Аббасиди (750–1258, Багдад, Золота доба).</li>
              <li><strong>732 р. — Битва при Пуатьє:</strong> Карл Мартел зупинив арабів у Західній Європі.</li>
              <li><strong>Наукові досягнення:</strong> Аль-Хорезмі (алгебра, алгоритми, арабські цифри та нуль), Ібн Сіна / Авіценна («Канон лікарської науки»), Байт аль-Хікма («Будинок мудрості»).</li>
            </ul>
          </div>

          {/* Section 2: Great Steppe */}
          <div className="space-y-3">
            <h3 className="text-base font-serif font-bold text-amber-950 border-b border-amber-300 pb-1 flex items-center gap-2">
              <span>🐎</span> ІІ. Етнічна мозаїка Великого Степу (§ 10)
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-stone-700">
              <li><strong>Великий Степ:</strong> простір від Хінгану/Маньчжурії до Дунаю (понад 7000 км без гірських перешкод).</li>
              <li><strong>Спосіб життя:</strong> екстенсивне кочове скотарство (табуни коней, вівці), розбірна повстяна <strong>юрта</strong> (шанирак, кереге, вогнище).</li>
              <li><strong>Еволюція народів:</strong> Гуни (Аттіла, IV–V ст.) → Тюркський каганат (551–744 рр., рунічні написи) → Хозари (VII–X ст., столиця Ітіль, юдаїзм) → Печеніги (IX–XI ст.) → Половці/Кипчаки (XI–XIII ст., «Дешт-і-Кипчак», камʼяні баби) → Монголи (Чингісхан, 1206 р.).</li>
              <li><strong>Військова тактика:</strong> складений рефлексивний лук (до 300 м), залізні стремена, тактика удаваного відступу, «карусель».</li>
              <li><strong>Духовний світ:</strong> <em>Тенгріанство</em> (культ Вічного Синього Неба — Тенгрі), культ предків, половецькі <strong>камʼяні баби</strong> на курганах.</li>
            </ul>
          </div>

          {/* Section 3: Relations with Rus */}
          <div className="space-y-3">
            <h3 className="text-base font-serif font-bold text-amber-950 border-b border-amber-300 pb-1 flex items-center gap-2">
              <span>🤝</span> ІІІ. Взаємодія з Київською Руссю
            </h3>
            <ul className="list-disc list-inside space-y-1.5 text-stone-700">
              <li><strong>965 р.:</strong> Князь Святослав Ігорович розгромив Хозарський каганат.</li>
              <li><strong>1036 р.:</strong> Ярослав Мудрий розгромив печенігів під Києвом (зведення Софійського собору).</li>
              <li><strong>Симбіоз:</strong> Династичні шлюби князів із половчанками, союзні племена <em>«чорні клобуки»</em> на річці Рось, торгівля (коні в обмін на хліб і ремесла).</li>
              <li><strong>1223 р. — Битва на Калці:</strong> перший трагічний бій русько-половецьких сил проти монголів.</li>
            </ul>
          </div>

          {/* Key Dates Table */}
          <div className="border border-stone-300 rounded-xl overflow-hidden">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-stone-900 text-white font-serif">
                <tr>
                  <th className="p-2 w-1/4">Рік</th>
                  <th className="p-2 w-3/4">Історична подія</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200">
                <tr className="bg-white"><td className="p-2 font-bold font-mono">551 р.</td><td className="p-2">Утворення Першого Тюркського каганату</td></tr>
                <tr className="bg-stone-50"><td className="p-2 font-bold font-mono">622 р.</td><td className="p-2">Хіджра (переселення Мухаммада з Мекки до Медини) — початок ісламської ери</td></tr>
                <tr className="bg-white"><td className="p-2 font-bold font-mono">732 р.</td><td className="p-2">Битва при Пуатьє (Карл Мартел зупинив арабів у Європі)</td></tr>
                <tr className="bg-stone-50"><td className="p-2 font-bold font-mono">750–1258 рр.</td><td className="p-2">Аббасидський халіфат у Багдаді («Золота доба ісламської науки»)</td></tr>
                <tr className="bg-white"><td className="p-2 font-bold font-mono">965 р.</td><td className="p-2">Князь Святослав розгромив Хозарський каганат</td></tr>
                <tr className="bg-stone-50"><td className="p-2 font-bold font-mono">1036 р.</td><td className="p-2">Ярослав Мудрий розгромив печенігів під Києвом</td></tr>
                <tr className="bg-white"><td className="p-2 font-bold font-mono">1223 р.</td><td className="p-2">Битва на річці Калка (русичі й половці проти монголів)</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-stone-100 border-t border-stone-200 flex justify-between items-center text-xs text-stone-500">
          <span>Складено за критеріями оцінювання МОН (12 балів)</span>
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
