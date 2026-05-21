import Icon from '@/components/ui/icon';

const steps = [
  { num: 1, icon: 'Heart', title: 'Будьте терпеливы', desc: 'Помните, что новые технологии непривычны. То, что вам кажется простым, для близкого — настоящее открытие.' },
  { num: 2, icon: 'Eye', title: 'Покажите, не рассказывайте', desc: 'Лучший способ объяснить — сделать это руками: возьмите телефон и пройдите путь шаг за шагом вместе.' },
  { num: 3, icon: 'RefreshCw', title: 'Повторяйте спокойно', desc: 'Один и тот же вопрос — это нормально. Если что-то спрашивают снова, просто покажите ещё раз, без раздражения.' },
  { num: 4, icon: 'MessageSquare', title: 'Говорите простыми словами', desc: 'Избегайте жаргона: вместо «кликни на иконку» — «нажми на картинку». Вместо «браузер» — «программа для сайтов».' },
  { num: 5, icon: 'CheckCircle', title: 'Хвалите за успехи', desc: 'Каждый маленький шаг — повод для похвалы. Это очень мотивирует продолжать.' },
  { num: 6, icon: 'BookOpen', title: 'Создайте инструкцию вместе', desc: 'Напишите или распечатайте шпаргалку с конкретными шагами для часто используемых функций.' },
  { num: 7, icon: 'Clock', title: 'Уделяйте регулярное время', desc: '30 минут в неделю регулярно — лучше, чем раз в месяц по три часа. Постоянство важнее объёма.' },
];

const difficulties = [
  { problem: 'Не помнит пароль', solution: 'Запишите пароль в блокнот, храните в надёжном месте. Или используйте «вход по SMS».' },
  { problem: 'Нажимает не то', solution: 'Это нормально! Ничего страшного не случится. Кнопку «Назад» (стрелочка) можно нажать всегда.' },
  { problem: 'Боится сломать телефон', solution: 'Объясните, что смартфон рассчитан на такие ситуации. Максимум — нужно будет переустановить приложение.' },
  { problem: 'Не видит мелкий текст', solution: 'Увеличьте шрифт в Настройки → Экран → Размер текста. Или включите «Простой режим» на нашем сайте.' },
  { problem: 'Интернет «тормозит»', solution: 'Перезагрузите роутер (выключите и включите через 30 секунд) или проверьте баланс мобильного интернета.' },
  { problem: 'Телефон разряжается быстро', solution: 'Закройте неиспользуемые приложения. Уменьшите яркость экрана. Подзаряжайте с вечера.' },
];

const phrases = [
  { emoji: '👍', text: 'Ты справился отлично для первого раза!' },
  { emoji: '💪', text: 'Смотри, у тебя уже получается лучше, чем вчера!' },
  { emoji: '😊', text: 'Это сначала кажется сложным, потом станет привычным.' },
  { emoji: '🤝', text: 'Давай попробуем вместе — я рядом.' },
  { emoji: '✨', text: 'Не бойся нажимать — ничего не сломается!' },
  { emoji: '❓', text: 'Что именно непонятно? Объясни своими словами.' },
];

const activities = [
  { icon: 'Video', title: 'Семейный видеозвонок', desc: 'Раз в неделю устраивайте общий видеозвонок через WhatsApp — пусть родители сами нажимают кнопки.' },
  { icon: 'Camera', title: 'Фотоархив вместе', desc: 'Создайте общий альбом в Google Фото или ВКонтакте — помогите старшим добавить семейные фотографии.' },
  { icon: 'Map', title: 'Первый маршрут в навигаторе', desc: 'Проложите вместе маршрут до магазина или поликлиники в 2ГИС или Яндекс.Картах.' },
  { icon: 'ShoppingCart', title: 'Первая онлайн-покупка', desc: 'Закажите что-то вместе на Wildberries или Ozon — покажите, как это работает шаг за шагом.' },
];

export default function CommunicationSection() {
  return (
    <section id="communication" aria-labelledby="communication-title" style={{ background: 'var(--warm-bg)', padding: '72px 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: 48 }}>
          <div className="divider" style={{ marginBottom: 20 }} />
          <p className="section-label" style={{ marginBottom: 12 }}>Раздел 3</p>
          <h2 id="communication-title" className="section-title" style={{ marginBottom: 16 }}>Общение и взаимопомощь</h2>
          <p className="section-subtitle">Как помочь близким с технологиями — и сохранить тёплые отношения</p>
        </div>

        {/* 7 steps */}
        <div className="card-soft" style={{ padding: '32px', marginBottom: 32 }}>
          <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 22, fontWeight: 700, marginBottom: 8, color: 'var(--text-main)' }}>
            7 шагов для объяснения технологий
          </h3>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', marginBottom: 28 }}>Простые принципы, которые сделают обучение приятным для обоих</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16 }}>
            {steps.map(s => (
              <div key={s.num} style={{ display: 'flex', gap: 14, padding: '16px', borderRadius: 14, background: 'var(--warm-bg)', border: '1px solid var(--border-color)' }}>
                <div style={{ flexShrink: 0 }}>
                  <span className="step-circle" style={{ width: 38, height: 38, fontSize: 14 }}>{s.num}</span>
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-main)', marginBottom: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Icon name={s.icon} fallback="Circle" size={15} style={{ color: 'var(--orange)' }} />
                    {s.title}
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }} className="two-col">

          {/* Difficulties */}
          <div className="card-soft" style={{ padding: '28px' }}>
            <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 20, fontWeight: 700, marginBottom: 20, color: 'var(--text-main)' }}>
              Типичные трудности и решения
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {difficulties.map((d, i) => (
                <div key={i} style={{ borderRadius: 12, overflow: 'hidden', border: '1px solid var(--border-color)' }}>
                  <div style={{ background: 'var(--terracotta-pale)', padding: '10px 14px', fontSize: 14, fontWeight: 700, color: 'var(--terracotta)', display: 'flex', alignItems: 'center', gap: 7 }}>
                    <Icon name="AlertCircle" size={14} style={{ color: 'var(--terracotta)', flexShrink: 0 }} />
                    {d.problem}
                  </div>
                  <div style={{ background: '#fff', padding: '10px 14px', fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    ✅ {d.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phrases */}
          <div>
            <div className="card-sage" style={{ padding: '28px', marginBottom: 20 }}>
              <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 20, fontWeight: 700, marginBottom: 20, color: 'var(--text-main)' }}>
                Поддерживающие фразы
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {phrases.map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, padding: '10px 12px', borderRadius: 10, background: '#fff', border: '1px solid rgba(90,125,101,0.15)' }}>
                    <span style={{ fontSize: 20, flexShrink: 0 }}>{p.emoji}</span>
                    <span style={{ fontSize: 15, color: 'var(--text-main)', lineHeight: 1.55 }}>«{p.text}»</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Activities */}
        <div className="card-warm" style={{ padding: '32px' }}>
          <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 20, fontWeight: 700, marginBottom: 8, color: 'var(--text-main)' }}>
            Идеи совместных активностей
          </h3>
          <p style={{ fontSize: 15, color: 'var(--text-muted)', marginBottom: 24 }}>Практика в формате семейного досуга — лучший способ учиться</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
            {activities.map((a, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: 16, padding: '20px', border: '1px solid rgba(232,96,28,0.1)' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--orange-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12 }}>
                  <Icon name={a.icon} fallback="Star" size={22} style={{ color: 'var(--orange)' }} />
                </div>
                <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-main)', marginBottom: 6 }}>{a.title}</div>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.55 }}>{a.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
