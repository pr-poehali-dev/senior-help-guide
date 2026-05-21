import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface NavbarProps {
  activeSection: string;
  onNavigate: (s: string) => void;
  simpleMode: boolean;
  onToggleSimple: () => void;
}

const navItems = [
  { id: 'hero', label: 'Главная' },
  { id: 'basics', label: 'Основы' },
  { id: 'instructions', label: 'Инструкции' },
  { id: 'communication', label: 'Общение' },
  { id: 'resources', label: 'Ресурсы' },
  { id: 'faq', label: 'Вопросы' },
];

export default function SiteNavbar({ activeSection, onNavigate, simpleMode, onToggleSimple }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      role="banner"
      style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(250,247,242,0.95)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--border-color)',
        boxShadow: '0 2px 12px rgba(20,10,0,0.06)',
      }}
    >
      <nav
        role="navigation"
        aria-label="Основная навигация"
        style={{ maxWidth: 1140, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', gap: 8, height: 68 }}
      >
        {/* Logo */}
        <button
          onClick={() => onNavigate('hero')}
          style={{ display: 'flex', alignItems: 'center', gap: 10, marginRight: 8, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'none', padding: '4px 0' }}
          aria-label="На главную"
        >
          <div style={{
            width: 38, height: 38, borderRadius: 10, background: 'var(--orange)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(232,96,28,0.3)',
          }}>
            <Icon name="Heart" size={20} style={{ color: '#fff' }} />
          </div>
          <span style={{ fontFamily: 'Merriweather, serif', fontWeight: 700, fontSize: 16, color: 'var(--text-main)', lineHeight: 1.2 }}>
            Вместе<br />
            <span style={{ color: 'var(--orange)', fontSize: 12, fontWeight: 400, fontFamily: 'Rubik, sans-serif' }}>в цифровой мир</span>
          </span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex" style={{ flex: 1, alignItems: 'center', gap: 2 }}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 10 }}>
          {/* Simple mode toggle */}
          <button
            onClick={onToggleSimple}
            className={`mode-toggle ${simpleMode ? 'active' : ''}`}
            aria-pressed={simpleMode}
            title="Простой режим: крупный текст"
          >
            <Icon name={simpleMode ? 'ZoomIn' : 'Type'} size={16} />
            <span className="hidden sm:inline">{simpleMode ? 'Простой' : 'Крупный текст'}</span>
          </button>

          {/* Mobile burger */}
          <button
            className="flex md:hidden btn-ghost"
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-label="Открыть меню"
            style={{ padding: '8px', minHeight: 'auto' }}
          >
            <Icon name={menuOpen ? 'X' : 'Menu'} size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{ borderTop: '1px solid var(--border-color)', background: '#fff', padding: '12px 24px 16px' }}
          role="menu"
        >
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              style={{ display: 'block', width: '100%', textAlign: 'left', marginBottom: 4 }}
              role="menuitem"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
