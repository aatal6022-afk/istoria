import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS } from '../data/historyData';
import { QuizQuestion } from '../types';
import {
  CheckCircle,
  XCircle,
  Award,
  Sparkles,
  RotateCcw,
  HelpCircle,
  User,
  School,
  FileCheck,
  ChevronRight,
  ShieldCheck,
  Printer
} from 'lucide-react';

export const QuizSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('Учень 7-А класу');
  const [showHint, setShowHint] = useState<boolean>(false);

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const totalQuestions = QUIZ_QUESTIONS.length;

  const handleSelectOption = (optIdx: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQ.id]: optIdx
    });
  };

  const calculateScore = () => {
    let correctCount = 0;
    QUIZ_QUESTIONS.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount += 1;
      }
    });
    // 12 questions = 1-12 scale
    return correctCount;
  };

  const handleFinishQuiz = () => {
    setShowResults(true);
    const score = calculateScore();
    if (score >= 9) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const handleRestart = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setShowHint(false);
  };

  const score = calculateScore();
  const getGradeLevel = (s: number) => {
    if (s >= 10) return { title: 'Високий рівень (Відмінно!)', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-300' };
    if (s >= 7) return { title: 'Достатній рівень (Добре)', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-300' };
    if (s >= 4) return { title: 'Середній рівень (Задовільно)', color: 'text-orange-600', bg: 'bg-orange-50 border-orange-300' };
    return { title: 'Початковий рівень (Повторіть параграфи 9-10)', color: 'text-red-600', bg: 'bg-red-50 border-red-300' };
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-stone-200 space-y-6">
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-stone-200 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-emerald-700">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            Підсумковий контроль знань • 12-бальна шкала
          </div>
          <h3 className="text-xl sm:text-3xl font-serif font-extrabold text-stone-900 mt-1">
            Тест: «Араби, Іслам та Великий Степ»
          </h3>
          <p className="text-xs sm:text-sm text-stone-500 mt-0.5">
            12 питань до параграфів 9-10 із генерацією іменного сертифіката для ЄШ
          </p>
        </div>

        {/* Student Name Input */}
        <div className="flex items-center gap-2 bg-stone-100 p-2 rounded-2xl border border-stone-200">
          <User className="w-4 h-4 text-stone-500 ml-1" />
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Введіть ПІБ учня"
            className="bg-transparent text-xs font-semibold text-stone-800 outline-none w-36 sm:w-48"
          />
        </div>
      </div>

      {!showResults ? (
        <div className="space-y-6">
          {/* Progress Bar & Question Counter */}
          <div className="flex items-center justify-between text-xs font-mono text-stone-500">
            <span>Питання {currentQuestionIndex + 1} з {totalQuestions}</span>
            <div className="w-48 h-2.5 bg-stone-100 rounded-full overflow-hidden border border-stone-200">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Box */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-stone-900 to-amber-950 text-white border border-amber-800/40">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono font-bold uppercase bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded border border-amber-500/30">
                {currentQ.topic === 'chronology' ? '⏳ Хронологія та дати' :
                 currentQ.topic === 'arab' ? '🕌 Арабський світ' :
                 currentQ.topic === 'steppe' ? '🐎 Великий Степ' : '📚 Історичні терміни'}
              </span>
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-1 text-xs text-amber-300 hover:text-amber-100 transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Підказка</span>
              </button>
            </div>

            <h4 className="text-lg sm:text-xl font-bold font-serif text-amber-100 leading-snug">
              {currentQ.question}
            </h4>

            {showHint && (
              <div className="mt-3 p-3 bg-amber-950/80 rounded-xl border border-amber-700/60 text-xs text-amber-200 italic">
                💡 {currentQ.hint}
              </div>
            )}
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3">
            {currentQ.options.map((opt, idx) => {
              const isSelected = selectedAnswers[currentQ.id] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  className={`p-4 rounded-2xl border text-left text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 border-amber-600 shadow-md font-bold scale-[1.01]'
                      : 'bg-stone-50 hover:bg-stone-100 border-stone-200 text-stone-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono text-xs font-bold ${
                      isSelected ? 'bg-stone-950 text-amber-300' : 'bg-stone-200 text-stone-700'
                    }`}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{opt}</span>
                  </div>
                  {isSelected && <CheckCircle className="w-5 h-5 text-stone-950 shrink-0" />}
                </button>
              );
            })}
          </div>

          {/* Bottom navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-200">
            <button
              onClick={() => {
                setShowHint(false);
                if (currentQuestionIndex > 0) setCurrentQuestionIndex(prev => prev - 1);
              }}
              disabled={currentQuestionIndex === 0}
              className={`px-4 py-2 rounded-xl text-xs font-bold border ${
                currentQuestionIndex === 0
                  ? 'opacity-40 cursor-not-allowed bg-stone-100 text-stone-400 border-stone-200'
                  : 'bg-stone-100 hover:bg-stone-200 text-stone-700 border-stone-300'
              }`}
            >
              ← Попереднє
            </button>

            {currentQuestionIndex < totalQuestions - 1 ? (
              <button
                onClick={() => {
                  setShowHint(false);
                  setCurrentQuestionIndex(prev => prev + 1);
                }}
                disabled={selectedAnswers[currentQ.id] === undefined}
                className={`px-5 py-2 rounded-xl text-xs font-bold border transition-all ${
                  selectedAnswers[currentQ.id] === undefined
                    ? 'opacity-50 cursor-not-allowed bg-stone-100 text-stone-400 border-stone-200'
                    : 'bg-amber-600 hover:bg-amber-700 text-white border-amber-600 shadow-md'
                }`}
              >
                Наступне →
              </button>
            ) : (
              <button
                onClick={handleFinishQuiz}
                disabled={selectedAnswers[currentQ.id] === undefined}
                className="px-6 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/30 border border-emerald-500 animate-pulse"
              >
                Завершити тест та отримати оцінку 🎉
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results & Certificate Display */
        <div className="space-y-8">
          {/* Printable Official Certificate */}
          <div className="bg-gradient-to-br from-amber-50 via-stone-50 to-amber-100/50 p-6 sm:p-10 rounded-3xl border-2 border-amber-400 shadow-xl relative overflow-hidden">
            {/* Certificate Header */}
            <div className="text-center pb-6 border-b border-amber-300">
              <div className="flex items-center justify-center gap-2 text-amber-800 font-mono text-xs font-bold uppercase tracking-wider mb-2">
                <School className="w-4 h-4" />
                Всесвітня історія • 7-А клас • Звіт до ЄШ
              </div>
              <h3 className="text-2xl sm:text-4xl font-serif font-black text-stone-900 tracking-tight">
                СЕРТИФІКАТ НАВЧАЛЬНИХ ДОСЯГНЕНЬ
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-1 italic">
                Тема: «Араби та народження ісламського світу. Етнічна мозаїка Великого Степу» (§ 9–10)
              </p>
            </div>

            {/* Certificate Content */}
            <div className="py-8 text-center space-y-4">
              <p className="text-xs sm:text-sm text-stone-600 uppercase tracking-wider font-mono">
                Видано учню / учениці:
              </p>
              <h4 className="text-2xl sm:text-3xl font-serif font-bold text-amber-950 underline decoration-amber-400 underline-offset-8">
                {studentName || 'Учень 7-А класу'}
              </h4>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <div className="bg-white p-4 rounded-2xl border border-amber-300 shadow-sm text-center min-w-[160px]">
                  <span className="text-[11px] font-mono text-stone-500 uppercase">Оцінка за 12-б. шкалою</span>
                  <div className="text-4xl sm:text-5xl font-black font-serif text-amber-600 mt-1">
                    {score} <span className="text-xl text-stone-400">/ 12</span>
                  </div>
                </div>

                <div className={`p-4 rounded-2xl border text-center ${getGradeLevel(score).bg}`}>
                  <span className="text-[11px] font-mono uppercase text-stone-600 font-bold">Рівень знань</span>
                  <div className={`text-base sm:text-lg font-bold font-serif mt-1 ${getGradeLevel(score).color}`}>
                    {getGradeLevel(score).title}
                  </div>
                  <span className="text-xs text-stone-500">Правильних відповідей: {score} з 12</span>
                </div>
              </div>
            </div>

            {/* Certificate Footer */}
            <div className="pt-6 border-t border-amber-300 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 font-mono gap-2">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Верифіковано за критеріями МОН України</span>
              </div>
              <div>Дата: {new Date().toLocaleDateString('uk-UA')}</div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs sm:text-sm border border-stone-700 shadow-md transition-all hover:scale-105"
            >
              <Printer className="w-4 h-4 text-amber-400" />
              <span>Зберегти / Роздрукувати для ЄШ</span>
            </button>

            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs sm:text-sm border border-stone-300 transition-all hover:scale-105"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Пройти тест заново</span>
            </button>
          </div>

          {/* Detailed Question Review */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold font-serif text-stone-900">
              Детальний розбір відповідей:
            </h4>
            <div className="space-y-3">
              {QUIZ_QUESTIONS.map((q) => {
                const userAns = selectedAnswers[q.id];
                const isCorrect = userAns === q.correctAnswer;
                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-2xl border ${
                      isCorrect ? 'bg-emerald-50/70 border-emerald-300' : 'bg-red-50/70 border-red-300'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-stone-500">№{q.id}</span>
                          <h5 className="text-xs sm:text-sm font-bold text-stone-900">{q.question}</h5>
                        </div>
                        <div className="text-xs text-stone-700">
                          <strong>Ваша відповідь:</strong> {userAns !== undefined ? q.options[userAns] : 'Не обрано'}
                        </div>
                        {!isCorrect && (
                          <div className="text-xs text-emerald-800 font-semibold">
                            <strong>Правильна відповідь:</strong> {q.options[q.correctAnswer]}
                          </div>
                        )}
                        <p className="text-xs text-stone-600 pt-1 border-t border-stone-200/60">
                          {q.explanation}
                        </p>
                      </div>
                      {isCorrect ? (
                        <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
