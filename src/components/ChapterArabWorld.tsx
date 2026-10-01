import React, { useState } from 'react';
import { PILLARS_OF_ISLAM } from '../data/historyData';
import { PillarOfIslam } from '../types';
import { BookOpen, Star, Compass, Sparkles, HelpCircle, Shield, Award, CheckCircle2, ChevronRight, Activity, Globe, Eye } from 'lucide-react';

export const ChapterArabWorld: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<PillarOfIslam>(PILLARS_OF_ISLAM[0]);
  const [activeCaliphateTab, setActiveCaliphateTab] = useState<'early' | 'umayyad' | 'abbasid'>('early');
  const [arabicNumberInput, setArabicNumberInput] = useState<number>(7);
  const [activeMosquePart, setActiveMosquePart] = useState<'minaret' | 'dome' | 'mihrab' | 'minbar' | 'arabesque'>('mihrab');

  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
  const toEasternArabic = (num: number) => {
    return num
      .toString()
      .split('')
      .map(d => (d >= '0' && d <= '9' ? arabicDigits[parseInt(d, 10)] : d))
      .join('');
  };

  return (
    <div className="space-y-12">
      {/* Chapter Title Badge */}
      <div className="border-l-4 border-amber-500 pl-4 py-1">
        <span className="text-xs uppercase font-bold tracking-wider text-amber-700 font-mono">
          Параграф 9 • Підручник Всесвітньої історії (7 клас)
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold font-serif text-stone-900 tracking-tight mt-1">
          Араби та народження ісламського світу
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-1 max-w-3xl">
          Як бедуїнські племена Аравійського півострова обʼєдналися під прапором нової монотеїстичної релігії та створили імперію від Атлантики до річки Інд.
        </p>
      </div>

      {/* Block 1: Geography & Bedouins */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
            🐪
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-serif">
              1. Природа Аравії та життя арабів-бедуїнів
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">Умови виживання в пустелі та значення караванної торгівлі</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              Аравійський півострів — найбільший у світі. Більша його частина — це безводні пустелі (Неджд, Руб-ель-Халі). Лише на південному заході («Щаслива Аравія» / Ємен) та в окремих оазисах було можливе землеробство.
            </p>
            <div className="p-4 bg-amber-50/80 rounded-2xl border border-amber-200/60 text-xs sm:text-sm space-y-2 text-stone-800">
              <div className="font-bold text-amber-900 flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-600" />
                Два світи Аравії:
              </div>
              <ul className="list-disc list-inside space-y-1 text-stone-700">
                <li><strong>Бедуїни</strong> («мешканці степу/пустелі») — кочові скотарі, що розводили верблюдів, коней та овець. Жили родами на чолі з шейхами.</li>
                <li><strong>Міщани та купці оазисів</strong> (Мекка, Ясриб) — контролювали «Шлях пахощів», торгували шовком, золотом, ладаном і миррою.</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-stone-900 to-amber-950 text-white rounded-2xl p-5 border border-amber-900/40 flex flex-col justify-between">
            <div>
              <div className="text-amber-400 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                Історичний артефакт • До ісламу
              </div>
              <h4 className="text-lg font-serif font-bold text-amber-100 mb-2">Святилище Кааба в Мецці</h4>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                До проповіді Мухаммада араби були язичниками. У центрі Мекки стояла кубічна споруда — <strong>Кааба</strong>, у стіну якої було вмонтовано священний Чорний камінь метеоритного походження. Навколо Кааби стояло понад 300 ідолів різних племен.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-amber-800/40 flex items-center justify-between text-xs text-amber-300 font-medium">
              <span>📍 Місто Мекка, перехрестя караванів</span>
              <span className="bg-amber-500/20 px-2 py-0.5 rounded">VI століття</span>
            </div>
          </div>
        </div>
      </div>

      {/* Block 2: Muhammad & Hijra (622) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-lg">
            📜
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-serif">
              2. Пророк Мухаммад та поворотний 622 рік (Хіджра)
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">Зародження нової світової монотеїстичної релігії</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Card 1: Youth & Call */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-bold font-mono px-2 py-0.5 bg-stone-200 rounded text-stone-700">570–610 рр.</span>
            <h4 className="font-serif font-bold text-base text-stone-900 mt-2 mb-2">Життя та покликання</h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Мухаммад народився близько 570 р. в бідній гілці знатного роду Хашим. Був чесним купцем («Аль-Амін» — надійний). У 610 р. в печері Хіра йому явився архангел Джабраїл із першим велінням: <em>«Читай в імʼя Господа твого!»</em>.
            </p>
          </div>

          {/* Card 2: Hijra 622 */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-900 to-stone-900 text-white border border-emerald-700 shadow-md">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold font-mono px-2 py-0.5 bg-emerald-500 text-stone-950 rounded uppercase">Головна дата</span>
              <span className="text-emerald-300 font-bold text-xs">1 рік за місячним літом</span>
            </div>
            <h4 className="font-serif font-bold text-lg text-emerald-100 mt-2 mb-2">622 рік — Хіджра</h4>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed">
              Через переслідування знаті Мекки Мухаммад із вірянами здійснив <strong>Хіджру</strong> (переселення) до міста Ясриб (перейменоване на Медину — «Місто Пророка»).
            </p>
            <p className="text-xs text-emerald-300 mt-3 font-semibold">
              ⭐ Від 622 року ведеться все мусульманське літочислення!
            </p>
          </div>

          {/* Card 3: Ummah & Return to Mecca */}
          <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
            <span className="text-xs font-bold font-mono px-2 py-0.5 bg-stone-200 rounded text-stone-700">630–632 рр.</span>
            <h4 className="font-serif font-bold text-base text-stone-900 mt-2 mb-2">Обʼєднання арабів</h4>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              У Медині виникла <strong>умма</strong> — перша мусульманська держава-громада. У 630 р. Мухаммад без бою повернувся до Мекки, оголосив амністію та очистив Каабу від ідолів. До його смерті (632 р.) майже всі племена Аравії прийняли іслам.
            </p>
          </div>
        </div>
      </div>

      {/* Block 3: Interactive 5 Pillars of Islam */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-900 to-amber-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-amber-800/40">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Інтерактивний блок знань
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold font-serif text-amber-100 mt-1">
              Пʼять Стовпів Ісламу (Аркан аль-Іслам)
            </h3>
            <p className="text-stone-300 text-xs sm:text-sm mt-1">
              Натисніть на стовп, щоб побачити його значення, вимоги та духовний зміст для 7 класу
            </p>
          </div>
          <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-xl text-xs font-semibold self-start sm:self-auto">
            Обовʼязок кожного вірянина
          </span>
        </div>

        {/* 5 Pillar Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 mb-6">
          {PILLARS_OF_ISLAM.map((pillar) => {
            const isSelected = selectedPillar.id === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar)}
                className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl border transition-all ${
                  isSelected
                    ? 'bg-gradient-to-b from-amber-600 to-amber-800 border-amber-400 shadow-lg shadow-amber-950 scale-105 text-white'
                    : 'bg-stone-800/80 hover:bg-stone-700/80 border-stone-700 text-stone-300'
                }`}
              >
                <span className="text-2xl sm:text-3xl mb-1">{pillar.symbol}</span>
                <span className="text-[10px] font-mono text-amber-300/90 uppercase font-bold">Стовп {pillar.id}</span>
                <span className="text-xs sm:text-sm font-bold mt-0.5 leading-tight">{pillar.ukrainianName}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Details Card */}
        <div className="bg-stone-950/80 rounded-2xl p-5 sm:p-6 border border-amber-700/40">
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-4 border-b border-stone-800 gap-2 mb-4">
            <div>
              <span className="text-xs text-amber-400 font-mono font-bold uppercase tracking-wider">
                {selectedPillar.arabicName}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-serif text-white">
                {selectedPillar.ukrainianName} — {selectedPillar.translation}
              </h4>
            </div>
            <span className="text-3xl">{selectedPillar.symbol}</span>
          </div>

          <p className="text-stone-300 text-sm sm:text-base mb-4 leading-relaxed">
            {selectedPillar.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {selectedPillar.details.map((detail, idx) => (
              <div key={idx} className="bg-stone-900/90 p-3 rounded-xl border border-stone-800 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-xs text-stone-300 leading-snug">{detail}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Block 4: Caliphates Epochs */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-orange-100 text-orange-800 flex items-center justify-center font-bold text-lg">
            👑
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-serif">
              3. Еволюція Арабського халіфату: від Праведних халіфів до Багдада
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">Три головні етапи розвитку арабської державності</p>
          </div>
        </div>

        {/* Tabs for 3 epochs */}
        <div className="flex flex-wrap gap-2 border-b border-stone-200 pb-3 mb-6">
          <button
            onClick={() => setActiveCaliphateTab('early')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCaliphateTab === 'early'
                ? 'bg-amber-600 text-white shadow'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Праведні халіфи (632–661)
          </button>
          <button
            onClick={() => setActiveCaliphateTab('umayyad')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCaliphateTab === 'umayyad'
                ? 'bg-amber-600 text-white shadow'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Омеяди в Дамаску (661–750)
          </button>
          <button
            onClick={() => setActiveCaliphateTab('abbasid')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCaliphateTab === 'abbasid'
                ? 'bg-amber-600 text-white shadow'
                : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
            }`}
          >
            Аббасиди в Багдаді (750–1258)
          </button>
        </div>

        {/* Tab Content */}
        {activeCaliphateTab === 'early' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-stone-900 font-serif">Чотири Праведні наступники Пророка</h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Після смерті Мухаммада громаду очолювали його найближчі соратники: <strong>Абу Бакр, Умар, Усман та Алі</strong>. Їх обирала мусульманська рада (шура).
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>Розгром могутніх сусідів:</strong> Араби знищили Перську імперію Сасанідів та відібрали у Візантії Сирію, Палестину і Єгипет.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>Запис Корану:</strong> За халіфа Усмана було створено єдиний канонічний текст священного Корану.</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs sm:text-sm">
              <h5 className="font-bold text-amber-900 mb-2">Чому араби перемагали?</h5>
              <p className="text-stone-700 leading-relaxed mb-2">
                1. <strong>Релігійний ентузіазм:</strong> віра у священну місію та рай для полеглих воїнів.<br />
                2. <strong>Швидка легка кіннота:</strong> раптові удари та витривалість арабських скакунів.<br />
                3. <strong>Виснаженість Візантії та Персії:</strong> тривалі війни підірвали сили старих імперій.
              </p>
            </div>
          </div>
        )}

        {activeCaliphateTab === 'umayyad' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-stone-900 font-serif">Омеядська експансія від Іспанії до Індії</h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                Влада стала спадковою. Халіф Муавія переніс столицю до розкішного міста <strong>Дамаск</strong> (Сирія).
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>Західний похід (711 р.):</strong> полководець Тарік ібн Зіяд перетнув Гібралтар та завоював майже весь Піренейський півострів (Аль-Андалус).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span><strong>732 р. — Битва при Пуатьє:</strong> Франкський вождь Карл Мартел зупинив арабів у Франції.</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-orange-50 rounded-2xl border border-orange-200 text-xs sm:text-sm">
              <h5 className="font-bold text-orange-950 mb-2">Історичний парадокс</h5>
              <p className="text-stone-700 leading-relaxed">
                Омеяди створили імперію площею понад 11 млн км². Проте привілейоване становище лише арабів викликало повстання серед навернених у мусульманство персів та сирійців, що призвело до повалення Омеядів 750 року.
              </p>
            </div>
          </div>
        )}

        {activeCaliphateTab === 'abbasid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="space-y-3">
              <h4 className="text-lg font-bold text-stone-900 font-serif">Аббасидський розквіт і столиця Багдад</h4>
              <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                У 750 р. до влади прийшла династія Аббасидів на чолі з Абу аль-Аббасом. У 762 р. халіф аль-Мансур заснував на річці Тигр величне кругле місто <strong>Багдад</strong> («Місто миру»).
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>Рівноправність усіх народів халіфату (арабів, персів, тюрків).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <span>Правління знаменитого халіфа <strong>Гаруна аль-Рашида</strong> (героя казок «1001 ніч»).</span>
                </li>
              </ul>
            </div>
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs sm:text-sm">
              <h5 className="font-bold text-emerald-950 mb-2">«Золота доба» науки</h5>
              <p className="text-stone-700 leading-relaxed">
                Багдад став світовим інтелектуальним центром. Тут діяв науковий інститут «Будинок мудрості», де перекладали грецькі, римські та індійські рукописи арабською мовою.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Block 5: Golden Age of Science & Interactive Converter */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center font-bold text-lg">
            🔭
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-serif">
              4. Наукові відкриття ісламського світу: спадщина для людства
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">Алгебра, медицина, астрономія, оптика та географія</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-amber-700 uppercase">Математика та астрономія</div>
              <h4 className="font-serif font-bold text-base text-stone-900 mt-1 mb-2">Аль-Хорезмі (783–850)</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Написав працю <em>«Аль-джабр»</em>, від якої походить термін <strong>«алгебра»</strong>. Його імʼя породило слово <strong>«алгоритм»</strong>. Запровадив індійські цифри (які ми зараз називаємо арабськими) та поняття <strong>«нуль» (сифр)</strong>.
              </p>
            </div>
          </div>

          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-emerald-700 uppercase">Медицина</div>
              <h4 className="font-serif font-bold text-base text-stone-900 mt-1 mb-2">Ібн Сіна / Авіценна (980–1037)</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Створив енциклопедію <em>«Канон лікарської науки»</em>. Описав інфекційні хвороби, знеболення під час операцій, пульс та гігієну. Понад 500 років ця книга була головним підручником лікарів у Європі.
              </p>
            </div>
          </div>

          <div className="bg-stone-50 p-5 rounded-2xl border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono font-bold text-blue-700 uppercase">Географія та Оптика</div>
              <h4 className="font-serif font-bold text-base text-stone-900 mt-1 mb-2">Аль-Біруні та Ібн аль-Хайсам</h4>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                Аль-Біруні обчислив радіус Землі з дивовижною точністю (похибка лише 1%). Ібн аль-Хайсам (Альхазен) розробив закони оптики та винайшов камеру-обскуру — прабабусю сучасного фотоапарата.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive mini-widget: Arabic numerals calculator / comparison */}
        <div className="bg-gradient-to-r from-amber-900/10 via-stone-100 to-amber-900/10 p-5 rounded-2xl border border-amber-300/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h5 className="font-bold text-sm text-stone-900 font-serif flex items-center gap-2">
              <span>🔢</span> Інтерактивна демонстрація: Арабські цифри
            </h5>
            <p className="text-xs text-stone-600 mt-0.5">
              Введіть число 7-го класу або свій вік, щоб побачити його східно-арабським написанням:
            </p>
          </div>

          <div className="flex items-center gap-3">
            <input
              type="number"
              value={arabicNumberInput}
              onChange={(e) => setArabicNumberInput(parseInt(e.target.value) || 0)}
              className="w-24 px-3 py-1.5 text-center font-bold text-stone-800 bg-white border border-stone-300 rounded-xl focus:ring-2 focus:ring-amber-500 outline-none"
            />
            <div className="flex items-center gap-2 bg-stone-900 text-amber-300 px-4 py-1.5 rounded-xl font-mono text-lg font-bold">
              <span>Східно-арабське:</span>
              <span className="text-2xl text-white">{toEasternArabic(arabicNumberInput)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Block 6: Architecture & Mosque structure */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200/80">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-lg">
            🕌
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-900 font-serif">
              5. Архітектура та мистецтво: Будова мусульманської мечеті
            </h3>
            <p className="text-xs sm:text-sm text-stone-500">Чому в ісламі заборонено зображати людей та що таке арабеска</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          {/* Mosque Schematic Visualizer */}
          <div className="bg-gradient-to-b from-stone-900 to-amber-950 p-6 rounded-2xl text-white border border-amber-900/40">
            <div className="text-xs text-amber-400 font-mono font-bold uppercase mb-3">
              Схема класичної мечеті (натисніть елемент)
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
              <button
                onClick={() => setActiveMosquePart('minaret')}
                className={`px-3 py-2 rounded-xl text-xs font-semibold text-center transition-all ${
                  activeMosquePart === 'minaret' ? 'bg-amber-600 text-white font-bold' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                🗼 Мінарет
              </button>
              <button
                onClick={() => setActiveMosquePart('dome')}
                className={`px-3 py-2 rounded-xl text-xs font-semibold text-center transition-all ${
                  activeMosquePart === 'dome' ? 'bg-amber-600 text-white font-bold' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                🔘 Купол (Кубба)
              </button>
              <button
                onClick={() => setActiveMosquePart('mihrab')}
                className={`px-3 py-2 rounded-xl text-xs font-semibold text-center transition-all ${
                  activeMosquePart === 'mihrab' ? 'bg-amber-600 text-white font-bold' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                🧭 Міхраб
              </button>
              <button
                onClick={() => setActiveMosquePart('minbar')}
                className={`px-3 py-2 rounded-xl text-xs font-semibold text-center transition-all ${
                  activeMosquePart === 'minbar' ? 'bg-amber-600 text-white font-bold' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                🪜 Мінбар
              </button>
              <button
                onClick={() => setActiveMosquePart('arabesque')}
                className={`col-span-2 sm:col-span-2 px-3 py-2 rounded-xl text-xs font-semibold text-center transition-all ${
                  activeMosquePart === 'arabesque' ? 'bg-amber-600 text-white font-bold' : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                }`}
              >
                🌿 Арабески та Каліграфія
              </button>
            </div>

            <div className="bg-stone-950/80 p-4 rounded-xl border border-stone-800 text-xs sm:text-sm">
              {activeMosquePart === 'minaret' && (
                <div>
                  <h5 className="font-bold text-amber-300 text-sm mb-1">Мінарет (вежа)</h5>
                  <p className="text-stone-300 leading-relaxed">
                    Висока вежа біля мечеті, з якої муедзин пʼять разів на добу закликає вірян на молитву (азан).
                  </p>
                </div>
              )}
              {activeMosquePart === 'dome' && (
                <div>
                  <h5 className="font-bold text-amber-300 text-sm mb-1">Купол (символ неба)</h5>
                  <p className="text-stone-300 leading-relaxed">
                    Перекриває головну молитовну залу, символізує склепіння неба над землею та забезпечує чудову акустику під час читання Корану.
                  </p>
                </div>
              )}
              {activeMosquePart === 'mihrab' && (
                <div>
                  <h5 className="font-bold text-amber-300 text-sm mb-1">Міхраб (орієнтир на Мекку)</h5>
                  <p className="text-stone-300 leading-relaxed">
                    Напівкругла молитовна ніша в стіні мечеті, орієнтована у бік священної Кааби в Мецці (кібла). Саме перед нею молиться імам.
                  </p>
                </div>
              )}
              {activeMosquePart === 'minbar' && (
                <div>
                  <h5 className="font-bold text-amber-300 text-sm mb-1">Мінбар (кафедра проповідника)</h5>
                  <p className="text-stone-300 leading-relaxed">
                    Східчаста піднесена трибуна, з якої імам виголошує пʼятничну проповідь (хутбу) перед громадою.
                  </p>
                </div>
              )}
              {activeMosquePart === 'arabesque' && (
                <div>
                  <h5 className="font-bold text-amber-300 text-sm mb-1">Арабески та витончена Каліграфія</h5>
                  <p className="text-stone-300 leading-relaxed">
                    Оскільки іслам забороняє зображати Бога і живих істот (щоб уникнути ідолопоклонства), мусульманські митці досягли досконалості в геометричних і рослинних візерунках (арабесках) та написах цитат з Корану.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-bold text-stone-900 font-serif">Шедеври ісламського зодчества</h4>
            <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
              <li className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <strong>Мечеть Купол Скелі (Куббат ас-Сахра) в Єрусалимі:</strong> зведена наприкінці VII ст. із золотим куполом на місці нічного вознесіння пророка.
              </li>
              <li className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <strong>Велика мечеть Омеядів у Дамаску:</strong> прикрашена унікальними золотими мозаїками садів раю.
              </li>
              <li className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                <strong>Мескіта в Кордові (Іспанія):</strong> ліс із 850 мармурових колон та двоярусних смугастих арок.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
