import Icon from '@/components/ui/icon';

interface HeroGuideProps {
  onNavigate: (s: string) => void;
}

const carouselItems = [
  { icon: 'Wifi', title: 'Как устроен интернет', desc: 'Понятное объяснение без сложных слов', color: 'var(--orange-pale)', accent: 'var(--orange)', section: 'basics' },
  { icon: 'Smartphone', title: 'Смартфон для начинающих', desc: 'Главные функции шаг за шагом', color: 'var(--sage-pale)', accent: 'var(--sage)', section: 'basics' },
  { icon: 'Shield', title: 'Безопасность в сети', desc: '5 правил, которые защитят вас', color: 'var(--terracotta-pale)', accent: 'var(--terracotta)', section: 'basics' },
  { icon: 'Video', title: 'Видеозвонок с родными', desc: 'WhatsApp и Zoom — просто и понятно', color: 'var(--orange-pale)', accent: 'var(--orange)', section: 'instructions' },
  { icon: 'FileText', title: 'Госуслуги', desc: 'Регистрация и первые шаги', color: 'var(--sage-pale)', accent: 'var(--sage)', section: 'instructions' },
];

export default function HeroGuide({ onNavigate }: HeroGuideProps) {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      style={{ background: 'var(--warm-bg)', paddingTop: 0 }}
    >
      {/* Main hero */}
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '64px 24px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'center' }} className="grid-hero">
          {/* Left */}
          <div>
            <div className="badge badge-orange anim-fade-up d1" style={{ marginBottom: 20 }}>
              <Icon name="Heart" size={12} />
              Для всей семьи
            </div>
            <h1
              id="hero-title"
              className="anim-fade-up d2"
              style={{ fontFamily: 'Merriweather, serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 700, lineHeight: 1.2, marginBottom: 24, color: 'var(--text-main)' }}
            >
              Помогаем старшим:<br />
              <span style={{ color: 'var(--orange)' }}>вместе в цифровой мир</span>
            </h1>
            <p className="anim-fade-up d3" style={{ fontSize: 19, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 36, maxWidth: 480 }}>
              Простые инструкции, пошаговые руководства и добрые советы —
              всё, чтобы помочь родным освоить смартфон, интернет и полезные сервисы.
            </p>
            <div className="anim-fade-up d4" style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
              <button className="btn-primary" onClick={() => onNavigate('basics')} aria-label="Перейти к основам для начинающих">
                <Icon name="BookOpen" size={18} />
                Для начинающих
              </button>
              <button className="btn-outline" onClick={() => onNavigate('instructions')} aria-label="Популярные темы и инструкции">
                <Icon name="List" size={18} />
                Инструкции
              </button>
              <button className="btn-ghost" onClick={() => onNavigate('resources')} aria-label="Полезные инструменты и ресурсы" style={{ border: '1px solid var(--border-color)' }}>
                <Icon name="Download" size={16} />
                Скачать PDF
              </button>
            </div>

            {/* Trust badges */}
            <div className="anim-fade-up d5" style={{ display: 'flex', flexWrap: 'wrap', gap: 20, marginTop: 40 }}>
              {[
                { icon: 'Users', text: '5 разделов' },
                { icon: 'CheckSquare', text: 'Чек-листы' },
                { icon: 'Eye', text: 'Крупный текст' },
              ].map(b => (
                <div key={b.text} style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', fontSize: 15 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--orange-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name={b.icon} fallback="Circle" size={16} style={{ color: 'var(--orange)' }} />
                  </div>
                  <span style={{ fontWeight: 500 }}>{b.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - illustration */}
          <div className="anim-fade-up d3 hidden md:block" style={{ position: 'relative' }}>
            <div style={{
              borderRadius: 28, overflow: 'hidden', boxShadow: '0 20px 60px rgba(20,10,0,0.12)',
              border: '1px solid var(--border-color)',
            }}>
              <img
                src="https://cdn.poehali.dev/projects/dab19ba1-96ba-4b86-8c36-7d038e3df605/files/6a10e24a-1907-48f1-a111-b13c518f43c2.jpg"
                alt="Бабушка и внук вместе изучают планшет"
                style={{ width: '100%', display: 'block', aspectRatio: '1/1', objectFit: 'cover' }}
              />
            </div>
            {/* Floating card */}
            <div style={{
              position: 'absolute', bottom: -20, left: -20, background: '#fff',
              borderRadius: 16, padding: '14px 20px', boxShadow: '0 8px 32px rgba(20,10,0,0.1)',
              border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: 12,
            }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--sage-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name="CheckCircle" size={22} style={{ color: 'var(--sage)' }} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--text-main)' }}>Всё понятно!</div>
                <div style={{ fontSize: 12, color: 'var(--text-light)' }}>Простые объяснения</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel strip */}
      <div style={{ background: 'var(--warm-bg-alt)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)', padding: '32px 0' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px' }}>
          <p style={{ fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-light)', marginBottom: 20 }}>
            Ключевые темы пособия
          </p>
          <div style={{ display: 'flex', gap: 16, overflowX: 'auto', paddingBottom: 8 }} role="list" aria-label="Темы пособия">
            {carouselItems.map((item, i) => (
              <button
                key={i}
                role="listitem"
                onClick={() => onNavigate(item.section)}
                style={{
                  flexShrink: 0, width: 220, padding: '20px', borderRadius: 16,
                  background: item.color, border: `1px solid ${item.accent}25`,
                  cursor: 'pointer', textAlign: 'left', transition: 'all 0.2s',
                }}
                className="card-hover-effect"
                aria-label={item.title}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)'; (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 24px rgba(20,10,0,0.1)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = ''; (e.currentTarget as HTMLButtonElement).style.boxShadow = ''; }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, boxShadow: '0 2px 8px rgba(20,10,0,0.08)' }}>
                  <Icon name={item.icon} fallback="Circle" size={20} style={{ color: item.accent }} />
                </div>
                <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--text-main)', marginBottom: 4 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.4 }}>{item.desc}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
