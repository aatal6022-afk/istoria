import React, { useState } from 'react';
import { STEPPE_TRIBES } from '../data/historyData';
import { SteppeTribe } from '../types';
import { Wind, Shield, Swords, Sparkles, MapPin, CheckCircle2, ChevronRight, Layers, Flame, UserCheck } from 'lucide-react';

export const ChapterGreatSteppe: React.FC = () => {
  const [selectedTribe, setSelectedTribe] = useState<SteppeTribe>(STEPPE_TRIBES[4]); // Polovtsi by default
  const [activeYurtPart, setActiveYurtPart] = useState<'kerege' | 'shanyrak' | 'felt' | 'hearth' | 'tor'>('shanyrak');
  const [activeTactic, setActiveTactic] = useState<'bow' | 'stirrup' | 'retreat' | 'carrousel'>('bow');

  return (
    <div className="space-y-12">
      {/* Chapter Title Badge */}
      <div className="border-l-4 border-amber-600 pl-4 py-1">
        <span className="text-xs uppercase font-bold tracking-wider text-amber-700 font-mono">
          Параграф 10 • Підручник Всесвітньої історії (7 клас)
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight mt-1">
          Етнічна мозаїка Великого Степу
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-1 max-w-3xl">
          «Кочовий океан» Євразії від Маньчжурії до Дунаю: як жили, воювали, вірували та взаємодіяли з Руссю господарі степових просторів.
        </p>
      </div>

      {/* Block 1: Geography of the Great Steppe */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
            🐎
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-serif">
              1. Великий Степ — трансконтинентальний коридор народів
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">Природний простір понад 7000 км без гірських перешкод</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              <strong>Великий Степ (Євразійський степовий пояс)</strong> простягнувся від Великого Хінгану в Китаї до гирла Дунаю та Карпат на заході. Це була велетенська природна магістраль, якою кочові народи пересувалися за лічені місяці.
            </p>
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200/70 text-xs sm:text-sm space-y-2">
              <span className="font-bold text-amber-900">Головні закони степового господарства:</span>
              <ul className="list-disc list-inside space-y-1 text-stone-700">
                <li><strong>Екстенсивне кочове скотарство:</strong> постійна зміна пасовищ відповідно до пір року (весняні, літні, осінні та зимові стоянки — «кишлаки»).</li>
                <li><strong>Головне багатство — худоба:</strong> табуни витривалих коней, отари овець (мʼясо, вовна, сир) та двогорбі верблюди.</li>
                <li><strong>Відсутність міських мурів:</strong> мобільність була головним захистом кочовика.</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 text-white p-5 rounded-2xl border border-amber-800/40 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase font-bold mb-2">
                <Wind className="w-4 h-4" />
                Культ коня у степовика
              </div>
              <h4 className="text-lg font-serif font-bold text-amber-100 mb-2">
                «Кінь для кочовика — це крила»
              </h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Степовик сідав у сідло раніше, ніж починав упевнено ходити (у віці 3–4 років). Коні давали не лише швидкість і силу в бою, а й їжу: кобиляче молоко переробляли на цілющий <strong>кумис</strong>, а конину вʼялили для тривалих походів.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-800/30 flex justify-between items-center text-xs text-amber-300 font-mono">
              <span>Швидкість переходу: до 80–100 км/добу</span>
              <span className="bg-amber-500/20 px-2 py-0.5 rounded text-amber-200">2–3 коні на воїна</span>
            </div>
          </div>
        </div>
      </div>

      {/* Block 2: Interactive Steppe Tribes Explorer */}
      <div className="bg-gradient-to-br from-stone-950 via-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-800/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Етнічна карта Степу
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold font-serif text-amber-100 mt-1">
              Кочові народи та імперії Степу (IV–XIII ст.)
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm mt-1">
              Оберіть кочовий народ, щоб вивчити його історію, релігію, лідерів та взаємодію з Україною-Руссю
            </p>
          </div>
          <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-xl text-xs font-semibold self-start sm:self-auto">
            6 великих хвиль
          </span>
        </div>

        {/* Tribe Picker Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mb-6">
          {STEPPE_TRIBES.map((tribe) => {
            const isSelected = selectedTribe.id === tribe.id;
            return (
              <button
                key={tribe.id}
                onClick={() => setSelectedTribe(tribe)}
                className={`flex flex-col p-3 rounded-2xl border text-left transition-all ${
                  isSelected
                    ? 'bg-gradient-to-b from-amber-600 to-amber-800 border-amber-400 shadow-lg scale-105 text-white'
                    : 'bg-stone-900/80 hover:bg-stone-800 border-stone-700 text-stone-300'
                }`}
              >
                <span className="text-[10px] font-mono text-amber-300 font-bold uppercase">{tribe.period}</span>
                <span className="text-xs sm:text-sm font-bold font-serif mt-1 line-clamp-1">{tribe.name.split(' (')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Tribe Detailed Info */}
        <div className="bg-stone-950/80 rounded-2xl p-5 sm:p-7 border border-amber-700/50">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-stone-800 gap-2 mb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold uppercase bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-md border border-amber-500/30">
                  {selectedTribe.period}
                </span>
                <span className="text-xs text-stone-400">Регіон: {selectedTribe.region}</span>
              </div>
              <h4 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100 mt-1">
                {selectedTribe.name}
              </h4>
            </div>
            <div className="text-xs sm:text-sm bg-stone-900 px-3 py-1.5 rounded-xl border border-stone-800 text-amber-300">
              🛐 Вірування: <strong>{selectedTribe.religion}</strong>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <div>
              <h5 className="text-xs font-bold font-mono text-amber-400 uppercase tracking-wider mb-2">
                📌 Ключові історичні факти
              </h5>
              <ul className="space-y-2">
                {selectedTribe.keyFacts.map((fact, idx) => (
                  <li key={idx} className="bg-stone-900/80 p-3 rounded-xl border border-stone-800 flex items-start gap-2 text-xs sm:text-sm text-stone-300">
                    <ChevronRight className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="text-xs font-bold font-mono text-amber-400 uppercase tracking-wider mb-2">
                  🛡️ Взаємодія з Руссю-Україною
                </h5>
                <div className="p-4 bg-amber-950/40 border border-amber-800/40 rounded-xl text-xs sm:text-sm text-amber-100/90 leading-relaxed">
                  {selectedTribe.relationWithRus}
                </div>
              </div>

              <div>
                <h5 className="text-xs font-bold font-mono text-amber-400 uppercase tracking-wider mb-2">
                  ⛺ Спосіб життя та устрій
                </h5>
                <div className="p-3 bg-stone-900 border border-stone-800 rounded-xl text-xs sm:text-sm text-stone-300">
                  {selectedTribe.lifestyle}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Block 3: Interactive Yurt Architecture */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-800 flex items-center justify-center font-bold text-lg">
            ⛺
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-serif">
              2. Юрта — мобільний архітектурний шедевр кочовиків
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">
              Як влаштований кочовий дім, здатний витримати ураганний степовий вітер і морози -40°C
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Interactive Yurt Diagram */}
          <div className="bg-gradient-to-br from-stone-900 to-amber-950 p-6 rounded-2xl text-white border border-amber-900/40">
            <div className="text-xs text-amber-400 font-mono font-bold uppercase mb-4 flex items-center justify-between">
              <span>Будова юрти (натисніть вузол)</span>
              <span className="text-[10px] bg-amber-500/20 px-2 py-0.5 rounded">Збирання: 1–2 години</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
              <button
                onClick={() => setActiveYurtPart('shanyrak')}
                className={`p-2.5 rounded-xl text-xs font-semibold text-center transition-all ${
                  activeYurtPart === 'shanyrak' ? 'bg-amber-600 text-white font-bold shadow' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                ⭕ Шанирак (купол)
              </button>
              <button
                onClick={() => setActiveYurtPart('kerege')}
                className={`p-2.5 rounded-xl text-xs font-semibold text-center transition-all ${
                  activeYurtPart === 'kerege' ? 'bg-amber-600 text-white font-bold shadow' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                🪵 Кереге (стіни-грати)
              </button>
              <button
                onClick={() => setActiveYurtPart('felt')}
                className={`p-2.5 rounded-xl text-xs font-semibold text-center transition-all ${
                  activeYurtPart === 'felt' ? 'bg-amber-600 text-white font-bold shadow' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                🐑 Повсть (Кошма)
              </button>
              <button
                onClick={() => setActiveYurtPart('hearth')}
                className={`p-2.5 rounded-xl text-xs font-semibold text-center transition-all ${
                  activeYurtPart === 'hearth' ? 'bg-amber-600 text-white font-bold shadow' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                🔥 Вогнище (Оджак)
              </button>
              <button
                onClick={() => setActiveYurtPart('tor')}
                className={`col-span-2 sm:col-span-2 p-2.5 rounded-xl text-xs font-semibold text-center transition-all ${
                  activeYurtPart === 'tor' ? 'bg-amber-600 text-white font-bold shadow' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                👑 Тор (Почесне місце)
              </button>
            </div>

            <div className="bg-stone-950/90 p-4 rounded-xl border border-stone-800 text-xs sm:text-sm min-h-[110px]">
              {activeYurtPart === 'shanyrak' && (
                <div>
                  <h5 className="font-bold text-amber-300 text-sm mb-1">Шанирак (верхнє колесо-купол)</h5>
                  <p className="text-stone-300 leading-relaxed">
                    Деревʼяне кільце на вершині юрти. Слугує димоходом, вікном для світла та сонячним годинником. Передавалося від батька до молодшого сина як символ спадкоємності роду.
                  </p>
                </div>
              )}
              {activeYurtPart === 'kerege' && (
                <div>
                  <h5 className="font-bold text-amber-300 text-sm mb-1">Кереге (розкладні деревʼяні стіни)</h5>
                  <p className="text-stone-300 leading-relaxed">
                    Складана решітка з вербових або березових планок, скріплених шкіряними ремінцями. Легко розсувається гармошкою та швидко вантажиться на верблюда чи коня.
                  </p>
                </div>
              )}
              {activeYurtPart === 'felt' && (
                <div>
                  <h5 className="font-bold text-amber-300 text-sm mb-1">Повсть (валяна овеча вовна)</h5>
                  <p className="text-stone-300 leading-relaxed">
                    Кілька шарів натуральної повсті вкривають каркас. Вона не пропускає дощ і вітер, зберігає тепло взимку і прохолоду під час літньої степової спеки.
                  </p>
                </div>
              )}
              {activeYurtPart === 'hearth' && (
                <div>
                  <h5 className="font-bold text-amber-300 text-sm mb-1">Священне вогнище в центрі</h5>
                  <p className="text-stone-300 leading-relaxed">
                    Серце юрти, над яким висить казан. Вогонь шанувався як захисник сімʼї; заборонялося плювати у вогонь, кидати сміття чи торкатися його ножем.
                  </p>
                </div>
              )}
              {activeYurtPart === 'tor' && (
                <div>
                  <h5 className="font-bold text-amber-300 text-sm mb-1">Тор — почесне місце навпроти входу</h5>
                  <p className="text-stone-300 leading-relaxed">
                    Найшанованіше місце в юрті, застелене найкращими килимами. Тут садили шановних гостей, старійшин роду та главу сімʼї.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-stone-900 font-serif">Чому юрта була неперевершеною?</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
              <li className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <strong>Аеродинаміка:</strong> кругла обтічна форма не дає сильному степовому вітру перекинути житло.
              </li>
              <li className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <strong>Екологічність та легкість:</strong> уся конструкція важить від 150 до 250 кг і вміщується на двох коней або одного верблюда.
              </li>
              <li className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <strong>Орієнтація у просторі:</strong> двері юрти завжди відчинялися на південь — назустріч сонцю.
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Block 4: Military Tactics & Weaponry */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-red-100 text-red-800 flex items-center justify-center font-bold text-lg">
            🏹
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-serif">
              3. Військова революція: Складений лук, стремена та тактика
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">Чому кочова кіннота століттями перемагала європейських лицарів та піхоту</p>
          </div>
        </div>

        {/* 4 Tactics selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          <button
            onClick={() => setActiveTactic('bow')}
            className={`p-3 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
              activeTactic === 'bow' ? 'bg-amber-600 text-white shadow' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            🏹 Складений лук
          </button>
          <button
            onClick={() => setActiveTactic('stirrup')}
            className={`p-3 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
              activeTactic === 'stirrup' ? 'bg-amber-600 text-white shadow' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            🛡️ Стремена та сідло
          </button>
          <button
            onClick={() => setActiveTactic('retreat')}
            className={`p-3 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
              activeTactic === 'retreat' ? 'bg-amber-600 text-white shadow' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            🏃 Удаваний відступ
          </button>
          <button
            onClick={() => setActiveTactic('carrousel')}
            className={`p-3 rounded-2xl border text-xs sm:text-sm font-bold transition-all ${
              activeTactic === 'carrousel' ? 'bg-amber-600 text-white shadow' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            🔄 «Карусель» лучників
          </button>
        </div>

        <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200">
          {activeTactic === 'bow' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="font-serif font-bold text-lg text-stone-900 mb-2">Композитний рефлексивний лук</h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Складався з кількох порід дерева (береза, ясен), рогових пластин буйвола та сухожиль тварин. У ненатягнутому стані вигинався у зворотний бік. Сила натягу досягала 50–70 кг, а стріла летіла на 250–300 метрів, пробиваючи залізні кольчуги.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-2">
                <div className="font-bold text-amber-800">Характеристики зброї:</div>
                <div>⚡ Скорострільність: 10–12 прицільних пострілів за хвилину</div>
                <div>🎯 Стрільба: під час фази польоту коня (коли всі 4 копита відірвані від землі)</div>
              </div>
            </div>
          )}

          {activeTactic === 'stirrup' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="font-serif font-bold text-lg text-stone-900 mb-2">Винайдення стремен (IV–VI ст.)</h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Тюрки та авари принесли до Європи залізні <strong>стремена</strong> та жорстке сідло. Це дозволило вершнику міцно стояти в сідлі, обертатися на 360° для стрільби назад («парфянський постріл») та завдавати страшних рубаючих ударів шаблею.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-2">
                <div className="font-bold text-amber-800">Військовий ефект:</div>
                <div>⚔️ Поява легкої вигнутої шаблі замість важкого прямого меча</div>
                <div>🛡️ Можливість тримати рівновагу при будь-яких маневрах коня</div>
              </div>
            </div>
          )}

          {activeTactic === 'retreat' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="font-serif font-bold text-lg text-stone-900 mb-2">Тактика удаваного відступу</h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Степовий загін завʼязував бій, а потім починав панічно «втікати». Нетерплячий ворог кидався навздогін, ламаючи свої бойові порядки, і потрапляв під фланговий удар замаскованих у балках свіжих кінних туменів.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-2">
                <div className="font-bold text-amber-800">Приклади в історії:</div>
                <div>📌 Битва на річці Калка (1223 р.) — монголи заманювали руські полки 9 днів</div>
                <div>📌 Битва при Легниці (1241 р.) — розгром європейських лицарів</div>
              </div>
            </div>
          )}

          {activeTactic === 'carrousel' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h4 className="font-serif font-bold text-lg text-stone-900 mb-2">Степова лучна «Карусель»</h4>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Сотні кінних лучників шикувалися у рухоме замкнене коло. Підскакуючи на відстань пострілу, вершник пускав 2–3 стріли, розвертав коня й відходив углиб кола для заряджання, даючи дорогу наступному. Обстріл тривав годинами без пауз.
                </p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 text-xs text-stone-700 space-y-2">
                <div className="font-bold text-amber-800">Психологічний ефект:</div>
                <div>🌧️ «Стріли затьмарювали сонце» — повна дезорганізація ворожого строю</div>
                <div>🏃 Неможливість для піхоти наздогнати кінноту</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Block 5: Spiritual Culture & Polovtsian Stone Babas */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-lg">
            🗿
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-serif">
              4. Духовний світ Степу: Тенгрі та Половецькі камʼяні баби
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">Унікальні камʼяні святилища, збережені в українських степах до сьогодні</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200">
            <h4 className="font-serif font-bold text-stone-900 text-base mb-2">Тенгріанство</h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Віра у <strong>Вічне Синє Небо (Тенгрі)</strong>, що дарує життя, та богиню землі <strong>Умай</strong>. Шамани (ками) спілкувалися з духами предків через звуки бубна й трансовий танець.
            </p>
          </div>

          <div className="p-5 bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-2xl border border-amber-800/40">
            <span className="text-xs font-mono font-bold text-amber-400 uppercase">Памʼятка України</span>
            <h4 className="font-serif font-bold text-amber-100 text-base mt-1 mb-2">Камʼяні баби (балбали)</h4>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              Половці ставили камʼяні статуї (чоловічі — воїни в шоломах з шаблями, жіночі — матері-берегині) на курганах. Фігури тримають біля живота ритуальну чашу — символ причастя до роду.
            </p>
          </div>

          <div className="p-5 bg-stone-50 rounded-2xl border border-stone-200">
            <h4 className="font-serif font-bold text-stone-900 text-base mb-2">Родові тамги</h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Кожен ханський рід мав власну <strong>тамгу</strong> — знак власності. Її карбували на монетах, ставили як тавро на коней і висікали на скелях як знак кордонів володінь.
            </p>
          </div>
        </div>
      </div>

      {/* Block 6: Interaction with Rus */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 sm:p-8 border border-amber-200/80">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center font-bold text-lg">
            🤝
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-serif">
              5. Русь-Україна та Степ: Складний симбіоз сусідів
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Чому стосунки між київськими князями та кочовиками не зводилися лише до війн
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm">
            <h4 className="font-serif font-bold text-sm sm:text-base text-stone-900 mb-2">⚔️ Оборона рубежів</h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Князь Володимир Великий звів <strong>«Змієві вали»</strong> та фортеці на річках Стугна, Десна, Сула. 1036 р. Ярослав Мудрий розгромив печенігів, а Володимир Мономах провів 19 переможних походів у Половецький степ.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm">
            <h4 className="font-serif font-bold text-sm sm:text-base text-stone-900 mb-2">💍 Династичні шлюби</h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Руські князі регулярно одружувалися з половецькими князівнами. Наприклад, князь Юрій Долгорукий, Святослав Ольгович були одружені з доньками ханів Аєпи та Кончака, що забезпечувало мир і військові союзи.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-amber-200 shadow-sm">
            <h4 className="font-serif font-bold text-sm sm:text-base text-stone-900 mb-2">🛡️ «Чорні клобуки»</h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Тюркські племена торків, берендеїв та печенігів, які осіли в долині річки Рось і прийняли васалітет київських князів («Свої погані»), захищаючи південні рубежі Русі від нових степових нападів.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
