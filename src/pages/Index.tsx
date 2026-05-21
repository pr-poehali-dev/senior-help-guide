import { useState, useEffect, useRef } from 'react';
import SiteNavbar from '@/components/SiteNavbar';
import HeroGuide from '@/components/HeroGuide';
import BasicsSection from '@/components/BasicsSection';
import InstructionsSection from '@/components/InstructionsSection';
import CommunicationSection from '@/components/CommunicationSection';
import ResourcesGuide from '@/components/ResourcesGuide';
import FAQSection from '@/components/FAQSection';
import Icon from '@/components/ui/icon';

type Section = 'hero' | 'basics' | 'instructions' | 'communication' | 'resources' | 'faq';

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>('hero');
  const [simpleMode, setSimpleMode] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const basicsRef = useRef<HTMLDivElement>(null);
  const instructionsRef = useRef<HTMLDivElement>(null);
  const communicationRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const refs: Record<Section, React.RefObject<HTMLDivElement>> = {
    hero: heroRef,
    basics: basicsRef,
    instructions: instructionsRef,
    communication: communicationRef,
    resources: resourcesRef,
    faq: faqRef,
  };

  const handleNavigate = (section: string) => {
    const s = section as Section;
    setActiveSection(s);
    refs[s]?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleSimple = () => {
    const next = !simpleMode;
    setSimpleMode(next);
    document.body.classList.toggle('simple-mode', next);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-section') as Section;
            if (id) setActiveSection(id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    Object.values(refs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: 'var(--warm-bg)', minHeight: '100vh' }}>
      {/* Skip link for accessibility */}
      <a
        href="#main-content"
        style={{
          position: 'absolute', top: -40, left: 0,
          background: 'var(--orange)', color: '#fff', padding: '8px 16px',
          zIndex: 9999, borderRadius: '0 0 8px 0', fontWeight: 600,
          transition: 'top 0.2s',
        }}
        onFocus={e => { e.currentTarget.style.top = '0'; }}
        onBlur={e => { e.currentTarget.style.top = '-40px'; }}
      >
        Перейти к содержимому
      </a>

      <SiteNavbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        simpleMode={simpleMode}
        onToggleSimple={toggleSimple}
      />

      <main id="main-content" role="main">
        <div ref={heroRef} data-section="hero">
          <HeroGuide onNavigate={handleNavigate} />
        </div>
        <div ref={basicsRef} data-section="basics">
          <BasicsSection />
        </div>
        <div ref={instructionsRef} data-section="instructions">
          <InstructionsSection />
        </div>
        <div ref={communicationRef} data-section="communication">
          <CommunicationSection />
        </div>
        <div ref={resourcesRef} data-section="resources">
          <ResourcesGuide />
        </div>
        <div ref={faqRef} data-section="faq">
          <FAQSection />
        </div>
      </main>

      {/* Footer */}
      <footer
        role="contentinfo"
        style={{ background: '#1a1410', color: '#fff', padding: '48px 24px 32px', marginTop: 0 }}
      >
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 32, marginBottom: 40 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 9, background: 'var(--orange)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="Heart" size={18} style={{ color: '#fff' }} />
                </div>
                <span style={{ fontFamily: 'Merriweather, serif', fontWeight: 700, fontSize: 16 }}>Вместе в цифровой мир</span>
              </div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>
                Электронное пособие для налаживания взаимодействия между поколениями
              </p>
            </div>
            {[
              { title: 'Разделы', links: ['Основы', 'Инструкции', 'Общение', 'Ресурсы', 'Вопросы'] },
              { title: 'Помощь', links: ['FAQ', 'Обратная связь', 'Контакты', 'Скачать PDF'] },
            ].map(col => (
              <div key={col.title}>
                <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 12, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{col.title}</div>
                {col.links.map(link => (
                  <button
                    key={link}
                    onClick={() => handleNavigate(link.toLowerCase() === 'основы' ? 'basics' : link.toLowerCase() === 'инструкции' ? 'instructions' : link.toLowerCase() === 'общение' ? 'communication' : link.toLowerCase() === 'ресурсы' ? 'resources' : 'faq')}
                    style={{ display: 'block', background: 'none', border: 'none', cursor: 'pointer', fontSize: 14, color: 'rgba(255,255,255,0.45)', marginBottom: 8, padding: 0, transition: 'color 0.2s', textAlign: 'left' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--orange)'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.45)'; }}
                  >
                    {link}
                  </button>
                ))}
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>© 2024 Вместе в цифровой мир. Все права защищены.</span>
            <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>Соответствует рекомендациям WCAG 2.1</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
