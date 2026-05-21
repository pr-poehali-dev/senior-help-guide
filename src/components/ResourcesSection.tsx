import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: 'pdf' | 'video' | 'article' | 'template';
  tag: string;
  size?: string;
  duration?: string;
  icon: string;
  color: string;
  pages?: number;
}

const resources: Resource[] = [
  {
    id: 1,
    title: 'Гайд по продуктовому мышлению',
    description: 'Полное руководство с примерами и кейсами реальных продуктов',
    type: 'pdf',
    tag: 'Основы',
    icon: 'FileText',
    color: '#00ffb3',
    size: '4.2 МБ',
    pages: 48,
  },
  {
    id: 2,
    title: 'Мастер-класс по аналитике',
    description: 'Видео-урок о работе с данными и построении гипотез',
    type: 'video',
    tag: 'Аналитика',
    icon: 'Play',
    color: '#a855f7',
    duration: '42 мин',
  },
  {
    id: 3,
    title: 'Шаблон продуктовой стратегии',
    description: 'Готовый шаблон для составления дорожной карты продукта',
    type: 'template',
    tag: 'Инструменты',
    icon: 'LayoutTemplate',
    color: '#f59e0b',
    size: '1.8 МБ',
  },
  {
    id: 4,
    title: 'Принципы UX дизайна 2024',
    description: 'Актуальные тенденции и best practices в проектировании интерфейсов',
    type: 'article',
    tag: 'UX/UI',
    icon: 'Palette',
    color: '#3b82f6',
    duration: '15 мин чтения',
  },
  {
    id: 5,
    title: 'Чек-лист запуска продукта',
    description: '87 пунктов для успешного выхода на рынок',
    type: 'pdf',
    tag: 'Чек-листы',
    icon: 'CheckSquare',
    color: '#00ffb3',
    size: '0.9 МБ',
    pages: 12,
  },
  {
    id: 6,
    title: 'Метрики SaaS-продуктов',
    description: 'Какие KPI отслеживать и как их интерпретировать',
    type: 'article',
    tag: 'Аналитика',
    icon: 'TrendingUp',
    color: '#a855f7',
    duration: '10 мин чтения',
  },
];

const filters = ['Все', 'Основы', 'Аналитика', 'UX/UI', 'Инструменты', 'Чек-листы'];

const typeLabels: Record<string, string> = {
  pdf: 'PDF',
  video: 'Видео',
  article: 'Статья',
  template: 'Шаблон',
};

export default function ResourcesSection() {
  const [activeFilter, setActiveFilter] = useState('Все');
  const [downloadedIds, setDownloadedIds] = useState<number[]>([]);

  const filtered = activeFilter === 'Все'
    ? resources
    : resources.filter(r => r.tag === activeFilter);

  const handleDownload = (id: number) => {
    setDownloadedIds(prev => [...prev, id]);
    setTimeout(() => {
      setDownloadedIds(prev => prev.filter(i => i !== id));
    }, 2000);
  };

  const handleExportAll = () => {
    alert('Экспорт PDF-отчёта с прогрессом будет готов через несколько секунд');
  };

  return (
    <section className="relative px-6 py-20 min-h-screen">
      <div className="orb orb-green" style={{ bottom: '10%', left: '-5%', opacity: 0.5 }} />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full border border-[rgba(0,255,179,0.3)] bg-[rgba(0,255,179,0.05)]">
              <Icon name="Library" size={14} className="text-[#00ffb3]" />
              <span className="font-golos text-sm text-[#00ffb3]">База знаний</span>
            </div>
            <h2 className="font-oswald text-5xl lg:text-6xl font-bold text-white mb-4">РЕСУРСЫ</h2>
            <p className="font-golos text-white/50 text-lg">Материалы для углублённого изучения</p>
          </div>

          <button
            onClick={handleExportAll}
            className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-golos font-semibold text-[#0a0c12] bg-[#00ffb3] hover:bg-[#00e6a1] transition-all neon-glow hover:scale-105 self-start lg:self-auto"
          >
            <Icon name="Download" size={18} className="text-[#0a0c12]" />
            Скачать PDF-отчёт
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-4 py-2 rounded-lg font-golos text-sm font-medium transition-all ${
                activeFilter === f
                  ? 'bg-[#00ffb3] text-[#0a0c12] neon-glow'
                  : 'border border-white/10 text-white/50 hover:border-white/25 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Resources grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((res) => {
            const downloaded = downloadedIds.includes(res.id);
            return (
              <div key={res.id} className="glass-card rounded-2xl p-5 group">
                <div className="flex gap-4">
                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: `${res.color}15`, boxShadow: `0 0 20px ${res.color}25` }}
                  >
                    <Icon name={res.icon} fallback="File" size={22} style={{ color: res.color }} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-2 mb-1">
                      <h3 className="font-golos font-semibold text-white text-sm leading-snug flex-1">{res.title}</h3>
                      <span
                        className="flex-shrink-0 text-xs font-golos font-medium px-2 py-0.5 rounded-md"
                        style={{ background: `${res.color}20`, color: res.color }}
                      >
                        {typeLabels[res.type]}
                      </span>
                    </div>

                    <p className="font-golos text-xs text-white/40 leading-relaxed mb-3">{res.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-white/30 font-golos">
                        {res.size && (
                          <span className="flex items-center gap-1">
                            <Icon name="HardDrive" size={11} className="text-white/30" />
                            {res.size}
                          </span>
                        )}
                        {res.duration && (
                          <span className="flex items-center gap-1">
                            <Icon name="Clock" size={11} className="text-white/30" />
                            {res.duration}
                          </span>
                        )}
                        {res.pages && (
                          <span className="flex items-center gap-1">
                            <Icon name="FileText" size={11} className="text-white/30" />
                            {res.pages} стр.
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => handleDownload(res.id)}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-golos text-xs font-medium transition-all ${
                          downloaded
                            ? 'bg-[rgba(0,255,179,0.2)] text-[#00ffb3]'
                            : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white'
                        }`}
                      >
                        <Icon name={downloaded ? 'Check' : 'Download'} size={12} />
                        {downloaded ? 'Скачано' : 'Скачать'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* PDF export block */}
        <div className="mt-10 glass-card rounded-2xl p-8 neon-glow relative overflow-hidden">
          <div className="absolute inset-0 animate-shimmer pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[rgba(0,255,179,0.15)] flex items-center justify-center neon-glow flex-shrink-0">
              <Icon name="FileDown" size={30} className="text-[#00ffb3]" />
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="font-oswald text-2xl font-bold text-white mb-2">Генерация PDF-отчёта</h3>
              <p className="font-golos text-white/50 text-sm">
                Экспортируй весь прогресс обучения — заполненные чек-листы, результаты тестов и пройденные модули — в один красивый PDF-документ.
              </p>
            </div>
            <button
              onClick={handleExportAll}
              className="flex-shrink-0 px-8 py-4 rounded-xl font-golos font-bold text-[#0a0c12] bg-[#00ffb3] hover:bg-[#00e6a1] transition-all hover:scale-105 neon-glow"
            >
              Создать PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
