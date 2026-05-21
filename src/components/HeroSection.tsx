import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const stats = [
  { value: '12', label: 'Модулей', icon: 'BookOpen' },
  { value: '48', label: 'Уроков', icon: 'Play' },
  { value: '320', label: 'Участников', icon: 'Users' },
  { value: '94%', label: 'Завершают курс', icon: 'TrendingUp' },
];

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 py-20">
      {/* Background orbs */}
      <div className="orb orb-green" style={{ top: '10%', left: '-5%', opacity: 0.8 }} />
      <div className="orb orb-purple" style={{ bottom: '20%', right: '5%', opacity: 0.9 }} />
      <div className="orb orb-green" style={{ top: '60%', left: '50%', opacity: 0.4, width: '200px', height: '200px' }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Badge */}
        <div className="animate-slide-up delay-100 opacity-0 inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-[rgba(0,255,179,0.3)] bg-[rgba(0,255,179,0.05)]">
          <span className="w-2 h-2 rounded-full bg-[#00ffb3] animate-glow-pulse" />
          <span className="text-sm font-golos text-[#00ffb3] font-medium tracking-wide">Новый сезон открыт</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            {/* Heading */}
            <h1 className="font-oswald text-6xl lg:text-8xl font-bold leading-none mb-6 animate-slide-up delay-200 opacity-0">
              <span className="text-white">УЧИСЬ</span>
              <br />
              <span className="gradient-text">БЫСТРЕЕ.</span>
              <br />
              <span className="text-white">ЛУЧШЕ.</span>
            </h1>

            <p className="font-golos text-lg text-white/60 leading-relaxed mb-10 max-w-lg animate-slide-up delay-300 opacity-0">
              Интерактивные модули с чек-листами, мини-тесты после каждой темы и возможность скачать прогресс в PDF — всё в одном месте.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-slide-up delay-400 opacity-0">
              <button
                onClick={() => onNavigate('modules')}
                className="group relative px-8 py-4 rounded-xl font-golos font-semibold text-[#0a0c12] bg-[#00ffb3] hover:bg-[#00e6a1] transition-all duration-300 neon-glow hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Начать обучение
                  <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button
                onClick={() => onNavigate('resources')}
                className="px-8 py-4 rounded-xl font-golos font-semibold text-white border border-white/15 hover:border-white/30 hover:bg-white/5 transition-all duration-300"
              >
                Ресурсы
              </button>
            </div>
          </div>

          {/* Floating card */}
          <div className="hidden lg:block relative animate-slide-up delay-500 opacity-0">
            <div className="animate-float">
              <div className="glass-card rounded-2xl p-6 neon-glow-purple max-w-sm ml-auto">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[rgba(168,85,247,0.2)] flex items-center justify-center">
                    <Icon name="Zap" size={20} className="text-[#a855f7]" />
                  </div>
                  <div>
                    <p className="font-golos font-semibold text-white text-sm">Текущий модуль</p>
                    <p className="font-golos text-white/40 text-xs">Урок 3 из 8</p>
                  </div>
                  <span className="ml-auto text-[#00ffb3] font-oswald font-bold text-lg">38%</span>
                </div>
                <div className="progress-bar mb-5">
                  <div className="progress-fill" style={{ width: '38%' }} />
                </div>
                <div className="space-y-3">
                  {['Введение в тему', 'Основные концепции', 'Практика'].map((item, i) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className={`custom-check ${i < 2 ? 'checked' : ''}`}>
                        {i < 2 && <Icon name="Check" size={12} className="text-[#0a0c12]" />}
                      </div>
                      <span className={`font-golos text-sm ${i < 2 ? 'text-white/60 line-through' : 'text-white'}`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Second mini card */}
            <div className="glass-card rounded-xl p-4 absolute -bottom-6 -left-4 max-w-48 animate-float" style={{ animationDelay: '1s' }}>
              <div className="flex items-center gap-2 mb-1">
                <Icon name="Trophy" size={14} className="text-[#00ffb3]" />
                <span className="font-golos text-xs font-semibold text-white">Тест пройден!</span>
              </div>
              <p className="font-oswald text-2xl font-bold text-[#00ffb3]">9/10</p>
              <p className="font-golos text-xs text-white/40">правильных ответов</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 animate-slide-up delay-500 opacity-0">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card rounded-xl p-5 text-center group cursor-default">
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,255,179,0.1)] flex items-center justify-center group-hover:bg-[rgba(0,255,179,0.2)] transition-colors">
                  <Icon name={stat.icon} fallback="Star" size={18} className="text-[#00ffb3]" />
                </div>
              </div>
              <p className="font-oswald text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="font-golos text-sm text-white/40">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}