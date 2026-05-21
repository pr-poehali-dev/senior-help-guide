import { useState, useEffect, useRef } from 'react';
import TopNav from '@/components/TopNav';
import HeroSection from '@/components/HeroSection';
import OnlineCommunicationSection from '@/components/ModulesSection';
import InstructionsSection from '@/components/ResourcesSection';
import ActivitiesSection from '@/components/Navbar';
import ResourcesSection from '@/components/ResourcesGuide';
import FAQSection from '@/components/FAQSection';
import Icon from '@/components/ui/icon';

type Section = 'hero' | 'online' | 'instructions' | 'activities' | 'resources' | 'faq';
const SECTIONS: Section[] = ['hero', 'online', 'instructions', 'activities', 'resources', 'faq'];

const Index = () => {
  const [active, setActive] = useState<Section>('hero');
  const [simple, setSimple] = useState(false);

  const refs = {
    hero:         useRef<HTMLDivElement>(null),
    online:       useRef<HTMLDivElement>(null),
    instructions: useRef<HTMLDivElement>(null),
    activities:   useRef<HTMLDivElement>(null),
    resources:    useRef<HTMLDivElement>(null),
    faq:          useRef<HTMLDivElement>(null),
  };

  const onNav = (s: string) => {
    const sec = s as Section;
    setActive(sec);
    refs[sec]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleSimple = () => {
    const next = !simple;
    setSimple(next);
    document.body.classList.toggle('simple', next);
  };

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          const id = e.target.getAttribute('data-sec') as Section;
          if (id) setActive(id);
        }
      }),
      { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
    );
    SECTIONS.forEach(s => { if (refs[s].current) obs.observe(refs[s].current!); });
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: 'var(--cream)', minHeight: '100vh' }}>
      {/* Skip navigation */}
      <a href="#main"
        style={{ position: 'absolute', top: -50, left: 0, background: 'var(--terra)', color: '#fff', padding: '10px 20px', zIndex: 9999, borderRadius: '0 0 10px 0', fontWeight: 700, transition: 'top 0.2s' }}
        onFocus={e => { e.currentTarget.style.top = '0'; }}
        onBlur={e => { e.currentTarget.style.top = '-50px'; }}
      >
        Перейти к содержимому
      </a>

      <TopNav active={active} onNav={onNav} simple={simple} onToggleSimple={toggleSimple} />

      <main id="main" role="main">
        <div ref={refs.hero} data-sec="hero"><HeroSection onNav={onNav} /></div>
        <div ref={refs.online} data-sec="online"><OnlineCommunicationSection /></div>
        <div ref={refs.instructions} data-sec="instructions"><InstructionsSection /></div>
        <div ref={refs.activities} data-sec="activities"><ActivitiesSection /></div>
        <div ref={refs.resources} data-sec="resources"><ResourcesSection /></div>
        <div ref={refs.faq} data-sec="faq"><FAQSection /></div>
      </main>

      {/* Footer */}
      <footer role="contentinfo" style={{ background: '#1c160f', color: '#fff', padding: '52px 24px 36px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 36, marginBottom: 40 }}>
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: 'var(--terra)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="Users" size={20} style={{ color: '#fff' }} />
                </div>
                <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 16 }}>Вместе активны</span>
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
                Электронное пособие по социализации пожилых людей в цифровом мире
              </p>
            </div>

            {/* Nav links */}
            {[
              { title: 'Разделы', links: [['hero','Главная'],['online','Общение онлайн'],['instructions','Инструкции'],['activities','Активности']] },
              { title: 'Помощь',  links: [['resources','Ресурсы'],['faq','Вопросы и ответы'],['faq','Обратная связь'],['resources','PDF-памятки']] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontWeight: 800, fontSize: 12, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 14 }}>{col.title}</div>
                {col.links.map(([sec, label]) => (
                  <button key={label} onClick={() => onNav(sec)}
                    style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: 'rgba(255,255,255,0.4)', marginBottom: 10, padding: 0, textAlign: 'left', transition: 'color 0.2s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--terra-light)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.4)'; }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 22, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.28)' }}>© 2024 Вместе активны. Все права защищены.</span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.28)' }}>Соответствует WCAG 2.1</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
