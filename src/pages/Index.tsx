import { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ModulesSection from '@/components/ModulesSection';
import ResourcesSection from '@/components/ResourcesSection';

type Section = 'home' | 'modules' | 'resources';

const Index = () => {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const homeRef = useRef<HTMLDivElement>(null);
  const modulesRef = useRef<HTMLDivElement>(null);
  const resourcesRef = useRef<HTMLDivElement>(null);

  const refs: Record<Section, React.RefObject<HTMLDivElement>> = {
    home: homeRef,
    modules: modulesRef,
    resources: resourcesRef,
  };

  const handleNavigate = (section: string) => {
    const s = section as Section;
    setActiveSection(s);
    refs[s]?.current?.scrollIntoView({ behavior: 'smooth' });
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
      { threshold: 0.4 }
    );

    [homeRef, modulesRef, resourcesRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="noise-bg min-h-screen" style={{ background: 'var(--dark-bg)' }}>
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <div ref={homeRef} data-section="home">
        <HeroSection onNavigate={handleNavigate} />
      </div>

      <div ref={modulesRef} data-section="modules">
        <ModulesSection />
      </div>

      <div ref={resourcesRef} data-section="resources">
        <ResourcesSection />
      </div>

      <footer className="border-t border-white/5 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-[#00ffb3] flex items-center justify-center">
              <span className="text-xs font-bold text-[#0a0c12] font-oswald">L</span>
            </div>
            <span className="font-oswald text-white/40 text-sm">LearnFlow 2024</span>
          </div>
          <p className="font-golos text-white/20 text-xs">Учись эффективнее каждый день</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
