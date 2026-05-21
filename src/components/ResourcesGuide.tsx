import Icon from '@/components/ui/icon';

/* ──────────────────────────────────────
   Раздел «Ресурсы»
────────────────────────────────────── */

const PDFS = [
  { icon: 'Shield',       title: 'Безопасность в интернете',   desc: 'Крупный шрифт · 5 правил · 1 страница', pages: 1 },
  { icon: 'Smartphone',   title: 'Шпаргалка по смартфону',     desc: 'Кнопки и жесты · с картинками · 2 стр.', pages: 2 },
  { icon: 'MessageCircle', title: 'Как написать в WhatsApp',   desc: 'Пошаговая инструкция · крупный текст',   pages: 2 },
  { icon: 'FileText',     title: 'Госуслуги — первые шаги',    desc: 'Чек-лист с полями для отметок · 2 стр.', pages: 2 },
  { icon: 'Users',        title: 'Поиск клубов по интересам',  desc: 'Список сайтов и соцсетей · 1 страница', pages: 1 },
  { icon: 'Heart',        title: 'Советы для родных',          desc: 'Как помочь пожилым · 7 принципов',       pages: 3 },
];

const VIDEOS = [
  { title: 'Как включить крупный шрифт', duration: '1:20' },
  { title: 'Первый вход в Одноклассники', duration: '2:00' },
  { title: 'Видеозвонок в WhatsApp',      duration: '1:45' },
  { title: 'Запись к врачу на Госуслугах', duration: '1:55' },
];

const SAFE_NETWORKS = [
  { name: 'Одноклассники',  desc: 'ok.ru — самая популярная соцсеть для старшего поколения в России', icon: 'Users' },
  { name: 'ВКонтакте',      desc: 'vk.com — миллионы групп по интересам, книжные клубы, культура',   icon: 'MessageSquare' },
  { name: 'Telegram',       desc: 'Безопасный мессенджер с удобным поиском каналов по темам',         icon: 'Send' },
  { name: 'WhatsApp',       desc: 'Для общения с семьёй — звонки и видеозвонки бесплатно',            icon: 'Phone' },
  { name: 'YouTube',        desc: 'Видео на любую тему: путешествия, кулинария, история',              icon: 'Play' },
];

const CENTERS = [
  { name: 'Центры активного долголетия',  desc: 'Кружки, курсы, общение — во многих районах есть компьютерный класс', contact: 'Ищите на сайте местной администрации' },
  { name: 'МФЦ «Мои документы»',         desc: 'Помогут с Госуслугами и цифровыми документами', contact: 'Найдите адрес: мфц.рф' },
  { name: 'Библиотеки — курсы «Интернет»', desc: 'Бесплатные занятия для пенсионеров каждую неделю', contact: 'Уточните расписание в местной библиотеке' },
  { name: 'СФР (ПФР) — цифровая помощь', desc: 'Помощь с личным кабинетом и Госуслугами', contact: '8-800-600-0000 (бесплатно)' },
];

export default function ResourcesSection() {
  const download = (t: string) => alert(`Скачать: «${t}»\n\nСкоро здесь будут готовые PDF-памятки.`);

  return (
    <section id="resources" aria-labelledby="res-title" style={{ background: 'var(--cream-dark)', padding: '72px 0' }} className="sec-pad">
      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="divider" style={{ marginBottom: 18 }} />
          <p className="sec-label" style={{ marginBottom: 10 }}>Раздел 4</p>
          <h2 id="res-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, marginBottom: 14 }}>Ресурсы</h2>
          <p style={{ fontSize: 18, color: 'var(--ink-soft)' }}>Скачайте, распечатайте и посмотрите — всё бесплатно</p>
        </div>

        {/* PDFs */}
        <div style={{ marginBottom: 44 }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>📄</span> PDF-памятки с крупным шрифтом
          </h3>
          <div className="grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
            {PDFS.map((p, i) => (
              <div key={i} className="card" style={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'flex-start' }}>
                  <div className="icon-wrap icon-wrap-terra" style={{ width: 44, height: 44, flexShrink: 0 }}>
                    <Icon name={p.icon} fallback="File" size={20} style={{ color: 'var(--terra)' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink)', lineHeight: 1.3, marginBottom: 4 }}>{p.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-muted)' }}>{p.desc}</div>
                  </div>
                </div>
                <button
                  className="btn-main" onClick={() => download(p.title)}
                  style={{ padding: '10px 18px', fontSize: 14, minHeight: 40, marginTop: 'auto' }}
                  aria-label={`Скачать PDF: ${p.title}`}
                >
                  <Icon name="Download" size={15} /> PDF
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Videos */}
        <div style={{ marginBottom: 44 }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span>🎬</span> Видеоинструкции (1–2 минуты)
          </h3>
          <div className="grid2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            {VIDEOS.map((v, i) => (
              <button
                key={i} className="card"
                style={{ padding: '16px 20px', display: 'flex', gap: 14, alignItems: 'center', background: '#fff', border: '1px solid var(--line)', borderRadius: 18, cursor: 'pointer', textAlign: 'left' }}
                onClick={() => alert(`Видео: «${v.title}»\nПродолжительность: ${v.duration}`)}
                aria-label={`Смотреть: ${v.title}`}
              >
                <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--terra)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="Play" size={22} style={{ color: '#fff', marginLeft: 3 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink)', marginBottom: 4 }}>{v.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--ink-muted)' }}>⏱ {v.duration}</div>
                </div>
                <Icon name="ChevronRight" size={18} style={{ color: 'var(--ink-muted)', flexShrink: 0 }} />
              </button>
            ))}
          </div>
        </div>

        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Safe networks */}
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, marginBottom: 18 }}>
              ✅ Безопасные соцсети для пожилых
            </h3>
            <div className="card" style={{ overflow: 'hidden' }}>
              {SAFE_NETWORKS.map((n, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, padding: '14px 18px', borderBottom: i < SAFE_NETWORKS.length - 1 ? '1px solid var(--line)' : 'none', alignItems: 'center' }}>
                  <div className="icon-wrap icon-wrap-sage" style={{ width: 36, height: 36, flexShrink: 0 }}>
                    <Icon name={n.icon} fallback="Globe" size={16} style={{ color: 'var(--sage)' }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--terra)', marginBottom: 2 }}>{n.name}</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>{n.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Centers */}
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, marginBottom: 18 }}>
              📍 Местные клубы и центры
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {CENTERS.map((c, i) => (
                <div key={i} className="card" style={{ padding: '18px' }}>
                  <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink)', marginBottom: 4 }}>{c.name}</div>
                  <div style={{ fontSize: 14, color: 'var(--ink-soft)', marginBottom: 8, lineHeight: 1.5 }}>{c.desc}</div>
                  <div style={{ fontSize: 13, color: 'var(--terra)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 5 }}>
                    <Icon name="ArrowRight" size={12} style={{ color: 'var(--terra)' }} />{c.contact}
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
