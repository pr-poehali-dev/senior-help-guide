import Icon from '@/components/ui/icon';

const pdfs = [
  { title: 'Памятка по безопасности в интернете', desc: 'Крупный шрифт, 5 правил на одной странице', icon: 'Shield', pages: 1 },
  { title: 'Шпаргалка по смартфону', desc: 'Основные жесты и кнопки с картинками', icon: 'Smartphone', pages: 2 },
  { title: 'Чек-лист «Госуслуги — первые шаги»', desc: 'Пошаговый список с полями для пометок', icon: 'CheckSquare', pages: 2 },
  { title: 'Словарик цифровых терминов', desc: '20 понятий простым языком, формат А5', icon: 'BookOpen', pages: 4 },
  { title: 'Инструкция по видеозвонку', desc: 'WhatsApp и Zoom — с картинками', icon: 'Video', pages: 3 },
];

const videos = [
  { title: 'Как включить крупный шрифт на телефоне', duration: '1:30', platform: 'YouTube', icon: 'Play' },
  { title: 'Первый вход в Госуслуги', duration: '2:00', platform: 'YouTube', icon: 'Play' },
  { title: 'Видеозвонок в WhatsApp за 2 минуты', duration: '1:45', platform: 'YouTube', icon: 'Play' },
  { title: 'Как не стать жертвой мошенников', duration: '1:50', platform: 'YouTube', icon: 'Play' },
];

const services = [
  { name: 'gosuslugi.ru', desc: 'Государственные услуги онлайн', icon: 'FileText', verified: true },
  { name: 'mos.ru', desc: 'Портал мэра Москвы — городские сервисы', icon: 'Building', verified: true },
  { name: 'yandex.ru', desc: 'Поиск, карты, новости', icon: 'Search', verified: true },
  { name: '2gis.ru', desc: 'Карты городов, маршруты', icon: 'Map', verified: true },
  { name: 'sberbank.ru', desc: 'Интернет-банк Сбербанка', icon: 'CreditCard', verified: true },
  { name: 'wildberries.ru', desc: 'Онлайн-магазин товаров', icon: 'ShoppingBag', verified: true },
];

const centers = [
  { name: 'Центры «Мои документы» (МФЦ)', desc: 'Помощь с Госуслугами и цифровыми документами', phone: 'Найти ближайший: mos.ru/mfc' },
  { name: 'Библиотеки — курсы компьютерной грамотности', desc: 'Бесплатные занятия для пенсионеров во многих городах', phone: 'Уточните расписание в местной библиотеке' },
  { name: 'ПФР/СФР — цифровая помощь', desc: 'Помощь в личном кабинете на Госуслугах', phone: '8-800-600-0000 (бесплатно)' },
  { name: 'Ростелеком — «Цифровой возраст»', desc: 'Программа цифровой грамотности для пенсионеров', phone: 'rt.ru/projects/digital-age/' },
];

export default function ResourcesGuide() {
  const handleDownload = (title: string) => {
    alert(`Скачивание: "${title}"\n\nЭто демонстрационная версия. Нажмите, чтобы настроить реальные файлы.`);
  };

  return (
    <section id="resources" aria-labelledby="resources-title" style={{ background: 'var(--warm-bg-alt)', padding: '72px 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: 48 }}>
          <div className="divider" style={{ marginBottom: 20 }} />
          <p className="section-label" style={{ marginBottom: 12 }}>Раздел 4</p>
          <h2 id="resources-title" className="section-title" style={{ marginBottom: 16 }}>Ресурсы</h2>
          <p className="section-subtitle">Скачайте, распечатайте, посмотрите — всё в одном месте</p>
        </div>

        {/* PDFs */}
        <div style={{ marginBottom: 40 }}>
          <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 22, fontWeight: 700, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 24 }}>📄</span> PDF‑памятки с крупным шрифтом
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
            {pdfs.map((pdf, i) => (
              <div key={i} className="card-soft" style={{ padding: '20px', display: 'flex', gap: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'var(--orange-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={pdf.icon} fallback="File" size={22} style={{ color: 'var(--orange)' }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-main)', marginBottom: 4 }}>{pdf.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 12, lineHeight: 1.5 }}>{pdf.desc}</div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: 12, color: 'var(--text-light)' }}>{pdf.pages} {pdf.pages === 1 ? 'страница' : 'страницы'} · Крупный шрифт</span>
                    <button
                      className="btn-primary"
                      style={{ padding: '8px 16px', fontSize: 13, minHeight: 36 }}
                      onClick={() => handleDownload(pdf.title)}
                      aria-label={`Скачать PDF: ${pdf.title}`}
                    >
                      <Icon name="Download" size={14} />
                      PDF
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Videos */}
        <div style={{ marginBottom: 40 }}>
          <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 22, fontWeight: 700, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 24 }}>🎬</span> Короткие видеоинструкции
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
            {videos.map((v, i) => (
              <button
                key={i}
                className="card-soft"
                style={{ padding: '20px', textAlign: 'left', cursor: 'pointer', background: '#fff', border: '1px solid var(--border-color)', borderRadius: 16 }}
                onClick={() => alert(`Видео: "${v.title}"\nПродолжительность: ${v.duration}\n\nЗдесь будет встроенный видеоплеер.`)}
                aria-label={`Смотреть видео: ${v.title}`}
              >
                <div style={{ width: '100%', height: 120, borderRadius: 10, background: 'linear-gradient(135deg, #1a1410 0%, #3d2b1f 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 50, background: 'rgba(232,96,28,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="Play" size={20} style={{ color: '#fff', marginLeft: 3 }} />
                  </div>
                  <div style={{ position: 'absolute', bottom: 8, right: 8, background: 'rgba(0,0,0,0.7)', borderRadius: 6, padding: '2px 8px', fontSize: 12, color: '#fff', fontWeight: 600 }}>
                    {v.duration}
                  </div>
                </div>
                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-main)', lineHeight: 1.45 }}>{v.title}</div>
                <div style={{ fontSize: 12, color: 'var(--text-light)', marginTop: 4 }}>{v.platform}</div>
              </button>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="two-col">
          {/* Safe services */}
          <div>
            <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 20, fontWeight: 700, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 22 }}>✅</span> Безопасные сервисы
            </h3>
            <div className="card-soft" style={{ padding: '6px 0', overflow: 'hidden' }}>
              {services.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 20px', borderBottom: i < services.length - 1 ? '1px solid var(--border-color)' : 'none', alignItems: 'center' }}>
                  <div style={{ width: 36, height: 36, borderRadius: 9, background: 'var(--sage-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={s.icon} fallback="Globe" size={16} style={{ color: 'var(--sage)' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--orange)' }}>{s.name}</div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{s.desc}</div>
                  </div>
                  {s.verified && <Icon name="ShieldCheck" size={16} style={{ color: 'var(--sage)', flexShrink: 0 }} />}
                </div>
              ))}
            </div>
          </div>

          {/* Centers */}
          <div>
            <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 20, fontWeight: 700, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 22 }}>📍</span> Центры компьютерной грамотности
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {centers.map((c, i) => (
                <div key={i} className="card-soft" style={{ padding: '18px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-main)', marginBottom: 4 }}>{c.name}</div>
                  <div style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 8, lineHeight: 1.5 }}>{c.desc}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--orange)', fontWeight: 600 }}>
                    <Icon name="ExternalLink" size={13} style={{ color: 'var(--orange)' }} />
                    {c.phone}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
