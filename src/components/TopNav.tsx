import { useState } from 'react';
import Icon from '@/components/ui/icon';

const NAV = [
  { id: 'hero',         label: 'Главная' },
  { id: 'online',       label: 'Общение онлайн' },
  { id: 'instructions', label: 'Инструкции' },
  { id: 'activities',   label: 'Активности' },
  { id: 'resources',    label: 'Ресурсы' },
  { id: 'faq',          label: 'Вопросы' },
];

interface Props {
  active: string;
  onNav: (s: string) => void;
  simple: boolean;
  onToggleSimple: () => void;
}

export default function TopNav({ active, onNav, simple, onToggleSimple }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header
      role="banner"
      style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(250,246,240,0.94)',
        backdropFilter: 'blur(18px)',
        borderBottom: '1px solid var(--line)',
        boxShadow: '0 2px 16px rgba(28,22,15,0.06)',
      }}
    >
      <nav
        aria-label="Основная навигация"
        style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px', height: 66, display: 'flex', alignItems: 'center', gap: 6 }}
      >
        {/* Logo */}
        <button
          onClick={() => { onNav('hero'); setOpen(false); }}
          aria-label="На главную"
          style={{ display: 'flex', alignItems: 'center', gap: 10, background: 'none', border: 'none', cursor: 'pointer', padding: '4px 6px 4px 0', marginRight: 4, flexShrink: 0 }}
        >
          <div style={{ width: 38, height: 38, borderRadius: 11, background: 'var(--terra)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(212,82,30,0.3)' }}>
            <Icon name="Users" size={20} style={{ color: '#fff' }} />
          </div>
          <div style={{ lineHeight: 1.2, textAlign: 'left' }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 15, color: 'var(--ink)' }}>Вместе активны</div>
            <div style={{ fontFamily: "'Nunito', sans-serif", fontSize: 11, fontWeight: 700, color: 'var(--terra)', letterSpacing: '0.05em' }}>Цифровая социализация</div>
          </div>
        </button>

        {/* Desktop links */}
        <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: 2, flex: 1 }}>
          {NAV.map(n => (
            <button key={n.id} className={`nav-btn ${active === n.id ? 'active' : ''}`} onClick={() => onNav(n.id)} aria-current={active === n.id ? 'page' : undefined}>
              {n.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          <button className={`simple-toggle ${simple ? 'on' : ''}`} onClick={onToggleSimple} aria-pressed={simple} title="Простой режим — крупный текст">
            <Icon name={simple ? 'ZoomIn' : 'Type'} size={16} />
            <span className="hide-mobile">{simple ? 'Простой' : 'Аа'}</span>
          </button>
          {/* Mobile burger */}
          <button
            aria-label="Меню" aria-expanded={open}
            onClick={() => setOpen(o => !o)}
            style={{ display: 'none', padding: 8, borderRadius: 10, background: 'none', border: 'none' }}
            className="mobile-burger"
          >
            <Icon name={open ? 'X' : 'Menu'} size={24} style={{ color: 'var(--ink)' }} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div style={{ borderTop: '1px solid var(--line)', background: '#fff', padding: '10px 24px 16px' }} role="menu">
          {NAV.map(n => (
            <button key={n.id} className={`nav-btn ${active === n.id ? 'active' : ''}`}
              style={{ display: 'block', width: '100%', textAlign: 'left', marginBottom: 4 }}
              role="menuitem"
              onClick={() => { onNav(n.id); setOpen(false); }}
            >
              {n.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .mobile-burger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
