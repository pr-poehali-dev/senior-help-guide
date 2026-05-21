import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface CheckItem {
  id: number;
  text: string;
  done: boolean;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
}

interface Module {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  lessons: number;
  duration: string;
  checklist: CheckItem[];
  quiz: QuizQuestion[];
  progress: number;
}

const modulesData: Module[] = [
  {
    id: 1,
    title: 'Основы продукта',
    subtitle: 'Фундаментальные принципы',
    icon: 'Layers',
    color: '#00ffb3',
    lessons: 6,
    duration: '2ч 30м',
    progress: 75,
    checklist: [
      { id: 1, text: 'Прочитать введение', done: true },
      { id: 2, text: 'Изучить ключевые термины', done: true },
      { id: 3, text: 'Просмотреть примеры', done: true },
      { id: 4, text: 'Выполнить практику', done: false },
      { id: 5, text: 'Сдать итоговый тест', done: false },
    ],
    quiz: [
      { question: 'Что является основой продуктового мышления?', options: ['Технические навыки', 'Понимание пользователя', 'Маркетинг', 'Финансы'], correct: 1 },
      { question: 'Какой метод используется для приоритизации задач?', options: ['SWOT', 'RICE', 'PEST', 'SMART'], correct: 1 },
    ],
  },
  {
    id: 2,
    title: 'Аналитика данных',
    subtitle: 'Работа с метриками',
    icon: 'BarChart2',
    color: '#a855f7',
    lessons: 8,
    duration: '3ч 15м',
    progress: 40,
    checklist: [
      { id: 1, text: 'Настроить аналитику', done: true },
      { id: 2, text: 'Изучить основные метрики', done: true },
      { id: 3, text: 'Создать дашборд', done: false },
      { id: 4, text: 'Провести A/B тест', done: false },
    ],
    quiz: [
      { question: 'Что такое конверсия?', options: ['Число посетителей', 'Доля целевых действий', 'Время на сайте', 'Показатель отказов'], correct: 1 },
      { question: 'Какая метрика показывает удержание пользователей?', options: ['DAU', 'Retention Rate', 'CTR', 'CPC'], correct: 1 },
    ],
  },
  {
    id: 3,
    title: 'UX Дизайн',
    subtitle: 'Проектирование интерфейсов',
    icon: 'Palette',
    color: '#f59e0b',
    lessons: 10,
    duration: '4ч',
    progress: 10,
    checklist: [
      { id: 1, text: 'Изучить принципы UX', done: true },
      { id: 2, text: 'Создать прототип', done: false },
      { id: 3, text: 'Провести юзер-тест', done: false },
      { id: 4, text: 'Внести правки', done: false },
      { id: 5, text: 'Финальное ревью', done: false },
    ],
    quiz: [
      { question: 'Что означает принцип "Закон Хика"?', options: ['Чем меньше выбор, тем быстрее решение', 'Пользователи читают слева направо', 'Простота важнее функциональности', 'Цвет влияет на эмоции'], correct: 0 },
    ],
  },
];

interface ModuleCardProps {
  module: Module;
}

function ModuleCard({ module }: ModuleCardProps) {
  const [tab, setTab] = useState<'checklist' | 'quiz'>('checklist');
  const [items, setItems] = useState(module.checklist);
  const [quizStep, setQuizStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [quizDone, setQuizDone] = useState(false);
  const [score, setScore] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const toggleCheck = (id: number) => {
    setItems(prev => prev.map(i => i.id === id ? { ...i, done: !i.done } : i));
  };

  const doneCount = items.filter(i => i.done).length;
  const checkProgress = Math.round((doneCount / items.length) * 100);

  const handleAnswer = (idx: number) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === module.quiz[quizStep].correct) setScore(s => s + 1);
  };

  const nextQuestion = () => {
    if (quizStep + 1 >= module.quiz.length) {
      setQuizDone(true);
    } else {
      setQuizStep(s => s + 1);
      setSelected(null);
    }
  };

  const resetQuiz = () => {
    setQuizStep(0);
    setSelected(null);
    setQuizDone(false);
    setScore(0);
  };

  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      {/* Header */}
      <div
        className="p-6 cursor-pointer"
        onClick={() => setExpanded(e => !e)}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${module.color}20`, boxShadow: `0 0 20px ${module.color}30` }}
          >
            <Icon name={module.icon} fallback="BookOpen" size={22} style={{ color: module.color }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h3 className="font-oswald text-xl font-bold text-white">{module.title}</h3>
                <p className="font-golos text-sm text-white/40 mt-0.5">{module.subtitle}</p>
              </div>
              <div className="flex items-center gap-3 flex-shrink-0">
                <span className="font-oswald font-bold text-lg" style={{ color: module.color }}>{module.progress}%</span>
                <Icon name={expanded ? 'ChevronUp' : 'ChevronDown'} size={18} className="text-white/40" />
              </div>
            </div>
            <div className="flex items-center gap-4 mt-3">
              <span className="flex items-center gap-1.5 font-golos text-xs text-white/40">
                <Icon name="Play" size={12} className="text-white/40" />
                {module.lessons} уроков
              </span>
              <span className="flex items-center gap-1.5 font-golos text-xs text-white/40">
                <Icon name="Clock" size={12} className="text-white/40" />
                {module.duration}
              </span>
              <span className="flex items-center gap-1.5 font-golos text-xs text-white/40">
                <Icon name="CheckSquare" size={12} className="text-white/40" />
                {doneCount}/{items.length} задач
              </span>
            </div>
          </div>
        </div>

        <div className="progress-bar mt-4">
          <div className="progress-fill" style={{ width: `${module.progress}%` }} />
        </div>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="border-t border-white/5 px-6 pb-6">
          {/* Tabs */}
          <div className="flex gap-2 mt-5 mb-5 p-1 bg-black/30 rounded-xl w-fit">
            {(['checklist', 'quiz'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-4 py-2 rounded-lg font-golos text-sm font-medium transition-all ${
                  tab === t
                    ? 'text-[#0a0c12] bg-[#00ffb3] shadow-lg'
                    : 'text-white/50 hover:text-white'
                }`}
              >
                {t === 'checklist' ? '✅ Чек-лист' : '🧠 Тест'}
              </button>
            ))}
          </div>

          {tab === 'checklist' && (
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-golos text-sm text-white/40">Прогресс: {doneCount}/{items.length}</span>
                <span className="font-oswald font-bold text-[#00ffb3]">{checkProgress}%</span>
              </div>
              <div className="space-y-3">
                {items.map(item => (
                  <div
                    key={item.id}
                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/3 cursor-pointer transition-colors group"
                    onClick={() => toggleCheck(item.id)}
                  >
                    <div className={`custom-check ${item.done ? 'checked' : ''}`}>
                      {item.done && <Icon name="Check" size={12} className="text-[#0a0c12]" />}
                    </div>
                    <span className={`font-golos text-sm flex-1 ${item.done ? 'line-through text-white/30' : 'text-white/80'}`}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === 'quiz' && (
            <div>
              {!quizDone ? (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-golos text-sm text-white/40">Вопрос {quizStep + 1} из {module.quiz.length}</span>
                    <div className="progress-bar w-24">
                      <div className="progress-fill" style={{ width: `${((quizStep) / module.quiz.length) * 100}%` }} />
                    </div>
                  </div>

                  <p className="font-golos font-semibold text-white text-base mb-5 leading-relaxed">
                    {module.quiz[quizStep].question}
                  </p>

                  <div className="space-y-3">
                    {module.quiz[quizStep].options.map((opt, idx) => {
                      const isCorrect = idx === module.quiz[quizStep].correct;
                      const isSelected = idx === selected;
                      let cls = 'border border-white/10 text-white/70';
                      if (selected !== null) {
                        if (isCorrect) cls = 'border border-[#00ffb3] bg-[rgba(0,255,179,0.1)] text-[#00ffb3]';
                        else if (isSelected) cls = 'border border-red-500 bg-[rgba(239,68,68,0.1)] text-red-400';
                      } else {
                        cls = 'border border-white/10 text-white/70 hover:border-white/30 hover:text-white hover:bg-white/5';
                      }
                      return (
                        <button
                          key={idx}
                          onClick={() => handleAnswer(idx)}
                          className={`w-full text-left px-4 py-3 rounded-xl font-golos text-sm transition-all ${cls}`}
                        >
                          <span className="font-bold mr-3 opacity-50">{String.fromCharCode(65 + idx)}.</span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {selected !== null && (
                    <button
                      onClick={nextQuestion}
                      className="mt-5 w-full py-3 rounded-xl font-golos font-semibold text-[#0a0c12] bg-[#00ffb3] hover:bg-[#00e6a1] transition-colors"
                    >
                      {quizStep + 1 >= module.quiz.length ? 'Завершить тест' : 'Следующий вопрос →'}
                    </button>
                  )}
                </div>
              ) : (
                <div className="text-center py-6">
                  <div className="w-16 h-16 rounded-full bg-[rgba(0,255,179,0.15)] flex items-center justify-center mx-auto mb-4 neon-glow">
                    <Icon name="Trophy" size={28} className="text-[#00ffb3]" />
                  </div>
                  <p className="font-oswald text-4xl font-bold text-[#00ffb3] mb-1">{score}/{module.quiz.length}</p>
                  <p className="font-golos text-white/50 mb-6">правильных ответов</p>
                  <button onClick={resetQuiz} className="px-6 py-2.5 rounded-xl font-golos text-sm font-medium border border-white/15 text-white hover:border-white/30 hover:bg-white/5 transition-all">
                    Пройти снова
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function ModulesSection() {
  return (
    <section className="relative px-6 py-20 min-h-screen">
      <div className="orb orb-purple" style={{ top: '10%', right: '-10%', opacity: 0.6 }} />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-[rgba(168,85,247,0.3)] bg-[rgba(168,85,247,0.05)]">
            <Icon name="Layers" size={14} className="text-[#a855f7]" />
            <span className="font-golos text-sm text-[#a855f7]">Программа обучения</span>
          </div>
          <h2 className="font-oswald text-5xl lg:text-6xl font-bold text-white mb-4">
            МОДУЛИ
          </h2>
          <p className="font-golos text-white/50 text-lg">
            Кликни на модуль, чтобы открыть чек-лист и пройти тест
          </p>
        </div>

        <div className="space-y-4">
          {modulesData.map(m => (
            <ModuleCard key={m.id} module={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
