import Icon from '@/components/ui/icon';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Главная', icon: 'Home' },
  { id: 'modules', label: 'Модули', icon: 'Layers' },
  { id: 'resources', label: 'Ресурсы', icon: 'Library' },
];

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-4 mt-4">
        <nav
          className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3.5 rounded-2xl"
          style={{
            background: 'rgba(10, 12, 18, 0.85)',
            backdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.5)',
          }}
        >
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="w-8 h-8 rounded-lg bg-[#00ffb3] flex items-center justify-center neon-glow">
              <Icon name="Zap" size={16} className="text-[#0a0c12]" />
            </div>
            <span className="font-oswald text-lg font-bold text-white tracking-wide">LearnFlow</span>
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`nav-link px-4 py-2 rounded-xl font-golos text-sm font-medium transition-all flex items-center gap-2 ${
                  activeSection === item.id
                    ? 'text-[#00ffb3] bg-[rgba(0,255,179,0.08)]'
                    : 'text-white/50 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon name={item.icon} fallback="Circle" size={15} />
                {item.label}
              </button>
            ))}
          </div>

          {/* Progress badge */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[rgba(0,255,179,0.08)] border border-[rgba(0,255,179,0.15)]">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00ffb3] animate-glow-pulse" />
              <span className="font-golos text-xs font-medium text-[#00ffb3]">Прогресс: 42%</span>
            </div>

            {/* Mobile menu */}
            <div className="flex md:hidden items-center gap-1">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`p-2 rounded-lg transition-colors ${
                    activeSection === item.id ? 'text-[#00ffb3] bg-[rgba(0,255,179,0.1)]' : 'text-white/40 hover:text-white'
                  }`}
                >
                  <Icon name={item.icon} fallback="Circle" size={18} />
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
