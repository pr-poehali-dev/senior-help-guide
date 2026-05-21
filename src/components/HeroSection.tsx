import Icon from '@/components/ui/icon';

const CAROUSEL = [
  { icon: 'MessageCircle', label: 'Аккаунт в соцсетях', color: 'var(--terra)', bg: 'var(--terra-pale)', section: 'online' },
  { icon: 'Video',         label: 'Видеозвонки',         color: 'var(--sage)',  bg: 'var(--sage-pale)',  section: 'online' },
  { icon: 'ShoppingCart',  label: 'Заказ продуктов',     color: 'var(--gold)',  bg: 'var(--gold-pale)',  section: 'instructions' },
  { icon: 'Users',         label: 'Клубы по интересам',  color: 'var(--terra)', bg: 'var(--terra-pale)', section: 'activities' },
  { icon: 'Map',           label: 'Виртуальные экскурсии', color: 'var(--sage)', bg: 'var(--sage-pale)', section: 'activities' },
  { icon: 'FileText',      label: 'Госуслуги',           color: 'var(--gold)',  bg: 'var(--gold-pale)',  section: 'instructions' },
];

const STATS = [
  { num: '6', label: 'разделов пособия', icon: 'BookOpen' },
  { num: '20+', label: 'пошаговых инструкций', icon: 'CheckSquare' },
  { num: 'Аа', label: 'Простой режим', icon: 'Eye' },
  { num: 'PDF', label: 'Памятки для печати', icon: 'Download' },
];

interface Props { onNav: (s: string) => void; }

export default function HeroSection({ onNav }: Props) {
  return (
    <section id="hero" aria-labelledby="hero-h1" style={{ background: 'var(--cream)', paddingBottom: 0 }}>

      {/* ── Hero block ── */}
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '64px 24px 48px' }}>
        <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 52, alignItems: 'center' }}>

          {/* LEFT */}
          <div>
            <div className="badge badge-terra rise d1" style={{ marginBottom: 20 }}>
              <Icon name="Heart" size={12} />Для пожилых и их близких
            </div>

            <h1 id="hero-h1" className="rise d2"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(30px, 4.5vw, 54px)', fontWeight: 800, color: 'var(--ink)', lineHeight: 1.15, marginBottom: 22 }}>
              Вместе активны:<br />
              <span style={{ color: 'var(--terra)' }}>социализация пожилых</span><br />
              <span style={{ color: 'var(--ink)' }}>в цифровом мире</span>
            </h1>

            <p className="rise d3" style={{ fontSize: 18, color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: 36, maxWidth: 490 }}>
              Простые шаги к общению, новым знакомствам и активной жизни онлайн.
              Пособие создано специально для тех, кто только начинает, — без лишних слов.
            </p>

            <div className="rise d4" style={{ display: 'flex', flexWrap: 'wrap', gap: 14, marginBottom: 44 }}>
              <button className="btn-main" onClick={() => onNav('online')}>
                <Icon name="Smartphone" size={19} />Начать знакомство
              </button>
              <button className="btn-outline" onClick={() => onNav('activities')}>
                <Icon name="Users" size={19} />Идеи для общения
              </button>
              <button className="btn-ghost" onClick={() => onNav('resources')} style={{ border: '1.5px solid var(--line)' }}>
                <Icon name="Download" size={16} />Полезные инструменты
              </button>
            </div>

            {/* Stats row */}
            <div className="rise d5" style={{ display: 'flex', flexWrap: 'wrap', gap: 20 }}>
              {STATS.map(s => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div className="icon-wrap icon-wrap-terra" style={{ width: 36, height: 36 }}>
                    <Icon name={s.icon} fallback="Circle" size={16} style={{ color: 'var(--terra)' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 17, color: 'var(--ink)', lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-muted)', lineHeight: 1.2 }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — illustration */}
          <div className="hide-mobile rise d3" style={{ position: 'relative' }}>
            <div style={{ borderRadius: 28, overflow: 'hidden', boxShadow: '0 20px 64px rgba(28,22,15,0.13)', border: '1px solid var(--line)' }}>
              <img
                src="https://cdn.poehali.dev/projects/dab19ba1-96ba-4b86-8c36-7d038e3df605/files/59fafb83-be25-43ab-854a-a6e63a847137.jpg"
                alt="Пожилые люди общаются онлайн"
                style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', display: 'block' }}
              />
            </div>
            <div style={{ position: 'absolute', bottom: -18, left: -20, background: '#fff', borderRadius: 18, padding: '14px 20px', boxShadow: '0 8px 32px rgba(28,22,15,0.12)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', gap: 12 }}>
              <div className="icon-wrap icon-wrap-sage" style={{ width: 44, height: 44 }}>
                <Icon name="MessageCircle" size={22} style={{ color: 'var(--sage)' }} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 800, color: 'var(--ink)' }}>Новые друзья онлайн!</div>
                <div style={{ fontSize: 12, color: 'var(--ink-muted)' }}>Книжный клуб → 8 участников</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Карусель тем ── */}
      <div style={{ background: 'var(--cream-dark)', borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '28px 0' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.10em', color: 'var(--ink-muted)', marginBottom: 18 }}>
            Темы пособия
          </p>
          <div style={{ display: 'flex', gap: 14, overflowX: 'auto', paddingBottom: 6 }} role="list" aria-label="Темы пособия">
            {CAROUSEL.map((c, i) => (
              <button
                key={i} role="listitem"
                onClick={() => onNav(c.section)}
                aria-label={c.label}
                style={{ flexShrink: 0, padding: '18px 20px', borderRadius: 18, background: c.bg, border: `1px solid ${c.color}22`, cursor: 'pointer', textAlign: 'left', minWidth: 160, transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 22px rgba(28,22,15,0.1)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = ''; }}
              >
                <div className="icon-wrap" style={{ width: 40, height: 40, background: '#fff', marginBottom: 10, boxShadow: '0 2px 8px rgba(28,22,15,0.07)' }}>
                  <Icon name={c.icon} fallback="Star" size={20} style={{ color: c.color }} />
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)', lineHeight: 1.3 }}>{c.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
