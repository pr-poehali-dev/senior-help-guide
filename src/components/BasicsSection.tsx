import { useState } from 'react';
import Icon from '@/components/ui/icon';

const topics = [
  {
    id: 'internet',
    icon: 'Wifi',
    title: 'Как устроен интернет',
    badge: 'Начало',
    badgeClass: 'badge-sage',
    content: [
      { type: 'text', value: 'Интернет — это огромная сеть компьютеров по всему миру, которые соединены между собой. Представьте почтовую сеть: вы отправляете письмо, и оно доходит до адресата через несколько почтовых отделений.' },
      { type: 'tip', value: '📡 Чтобы попасть в интернет, смартфон или компьютер должен быть подключён к Wi-Fi (домашнему или общественному) или к мобильной сети.' },
      { type: 'text', value: 'В интернете есть сайты — это как страницы в книге, только цифровые. Браузер — программа для просмотра этих страниц (например, «Яндекс» или Safari).' },
      { type: 'step', steps: ['Включите смартфон', 'Найдите значок Wi-Fi в настройках', 'Выберите домашнюю сеть', 'Введите пароль от Wi-Fi', 'Откройте браузер и введите адрес сайта'] },
    ],
  },
  {
    id: 'smartphone',
    icon: 'Smartphone',
    title: 'Смартфон: главные функции',
    badge: 'Важно',
    badgeClass: 'badge-orange',
    content: [
      { type: 'text', value: 'Современный смартфон — это телефон, фотоаппарат, навигатор и компьютер в одном устройстве. Главные кнопки: кнопка включения (обычно сбоку) и кнопка «Домой» (внизу экрана).' },
      { type: 'tip', value: '💡 Если экран погас — нажмите боковую кнопку один раз. Проведите пальцем снизу вверх (или нажмите кнопку «Домой»), чтобы разблокировать.' },
      { type: 'features', items: [
        { icon: 'Phone', label: 'Звонки', desc: 'Нажмите значок телефона' },
        { icon: 'MessageSquare', label: 'Сообщения', desc: 'SMS и мессенджеры' },
        { icon: 'Camera', label: 'Камера', desc: 'Фото и видео' },
        { icon: 'MapPin', label: 'Навигатор', desc: '«Яндекс.Карты» или 2GIS' },
      ]},
    ],
  },
  {
    id: 'security',
    icon: 'Shield',
    title: 'Безопасность в сети: 5 правил',
    badge: 'Обязательно',
    badgeClass: 'badge-terracotta',
    content: [
      { type: 'rules', items: [
        { num: 1, icon: 'Lock', title: 'Надёжный пароль', desc: 'Используйте пароль из 8+ символов. Не называйте его никому — даже сотрудникам банка.' },
        { num: 2, icon: 'Phone', title: 'Код из SMS — только для вас', desc: 'Никто не должен знать код, пришедший на ваш телефон. Мошенники часто просят его назвать.' },
        { num: 3, icon: 'AlertTriangle', title: 'Проверяйте отправителя', desc: 'Мошеннические письма часто выглядят как от банка или Госуслуг. Позвоните напрямую, если сомневаетесь.' },
        { num: 4, icon: 'Wifi', title: 'Осторожно с публичным Wi-Fi', desc: 'Не совершайте платежи, подключившись к Wi-Fi в кафе или торговом центре.' },
        { num: 5, icon: 'RefreshCw', title: 'Обновляйте программы', desc: 'Обновления устраняют уязвимости. Нажимайте «Обновить», когда телефон предлагает.' },
      ]},
    ],
  },
  {
    id: 'glossary',
    icon: 'BookOpen',
    title: 'Словарик простых терминов',
    badge: 'Глоссарий',
    badgeClass: 'badge-sage',
    content: [
      { type: 'glossary', items: [
        { term: 'Браузер', def: 'Программа для просмотра сайтов. Например: Яндекс Браузер, Chrome, Safari.' },
        { term: 'Wi-Fi', def: 'Беспроводное соединение с интернетом. Как правило, есть дома и в общественных местах.' },
        { term: 'Приложение (app)', def: 'Программа на смартфоне. Банк, карты, почта — всё это приложения.' },
        { term: 'Аккаунт', def: 'Ваша личная страница на каком-либо сервисе. Для входа нужны логин и пароль.' },
        { term: 'QR-код', def: 'Квадратный штрихкод, который смартфон сканирует камерой для перехода на сайт.' },
        { term: 'Обновление', def: 'Новая версия программы с улучшениями и устранением ошибок.' },
        { term: 'Спам', def: 'Нежелательные письма или сообщения рекламного или мошеннического характера.' },
        { term: 'Облако', def: 'Хранилище файлов в интернете. Фото из «облака» доступны с любого устройства.' },
      ]},
    ],
  },
];

interface TopicItem {
  id: string;
  icon: string;
  title: string;
  badge: string;
  badgeClass: string;
  content: ContentBlock[];
}

interface ContentBlock {
  type: string;
  value?: string;
  steps?: string[];
  items?: FeatureItem[] | RuleItem[] | GlossaryItem[];
}

interface FeatureItem { icon: string; label: string; desc: string; }
interface RuleItem { num: number; icon: string; title: string; desc: string; }
interface GlossaryItem { term: string; def: string; }

function TopicCard({ topic }: { topic: TopicItem }) {
  const [open, setOpen] = useState(false);

  const renderContent = (block: ContentBlock, i: number) => {
    if (block.type === 'text') return (
      <p key={i} style={{ fontSize: 17, color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 16 }}>{block.value}</p>
    );
    if (block.type === 'tip') return (
      <div key={i} className="tip-block" style={{ marginBottom: 16 }}>
        <p style={{ fontSize: 16, color: 'var(--text-main)', lineHeight: 1.65, margin: 0 }}>{block.value}</p>
      </div>
    );
    if (block.type === 'step') return (
      <ol key={i} style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 16 }}>
        {(block.steps ?? []).map((step, si) => (
          <li key={si} style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <span className="step-circle" style={{ width: 36, height: 36, fontSize: 15, flexShrink: 0 }}>{si + 1}</span>
            <span style={{ fontSize: 17, color: 'var(--text-main)', paddingTop: 6 }}>{step}</span>
          </li>
        ))}
      </ol>
    );
    if (block.type === 'features') return (
      <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginBottom: 16 }}>
        {((block.items ?? []) as FeatureItem[]).map((f, fi) => (
          <div key={fi} style={{ background: 'var(--warm-bg)', borderRadius: 14, padding: '16px', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: 9, background: 'var(--orange-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name={f.icon} fallback="Circle" size={18} style={{ color: 'var(--orange)' }} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-main)' }}>{f.label}</div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{f.desc}</div>
            </div>
          </div>
        ))}
      </div>
    );
    if (block.type === 'rules') return (
      <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 16 }}>
        {((block.items ?? []) as RuleItem[]).map((r) => (
          <div key={r.num} style={{ display: 'flex', gap: 16, padding: '16px', borderRadius: 14, background: 'var(--warm-bg)', border: '1px solid var(--border-color)', alignItems: 'flex-start' }}>
            <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--terracotta-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name={r.icon} fallback="Shield" size={18} style={{ color: 'var(--terracotta)' }} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 16, color: 'var(--text-main)', marginBottom: 4 }}>
                <span style={{ color: 'var(--orange)', marginRight: 6 }}>#{r.num}</span>{r.title}
              </div>
              <div style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.6 }}>{r.desc}</div>
            </div>
          </div>
        ))}
      </div>
    );
    if (block.type === 'glossary') return (
      <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {((block.items ?? []) as GlossaryItem[]).map((g, gi) => (
          <div key={gi} style={{ padding: '14px 16px', borderRadius: 10, display: 'flex', gap: 12, background: gi % 2 === 0 ? 'var(--warm-bg)' : 'transparent' }}>
            <span style={{ fontWeight: 700, fontSize: 16, color: 'var(--orange)', minWidth: 140, flexShrink: 0 }}>{g.term}</span>
            <span style={{ fontSize: 15, color: 'var(--text-muted)', lineHeight: 1.6 }}>{g.def}</span>
          </div>
        ))}
      </div>
    );
    return null;
  };

  return (
    <div className="card-soft" style={{ overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', padding: '24px', display: 'flex', alignItems: 'center', gap: 18, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
        aria-expanded={open}
        aria-controls={`topic-${topic.id}`}
      >
        <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--orange-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon name={topic.icon} fallback="BookOpen" size={24} style={{ color: 'var(--orange)' }} />
        </div>
        <div style={{ flex: 1 }}>
          <span className={`badge ${topic.badgeClass}`} style={{ marginBottom: 6 }}>{topic.badge}</span>
          <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 20, fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>{topic.title}</h3>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: 8, background: open ? 'var(--orange-pale)' : 'var(--warm-bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s', flexShrink: 0 }}>
          <Icon name={open ? 'ChevronUp' : 'ChevronDown'} size={18} style={{ color: open ? 'var(--orange)' : 'var(--text-muted)' }} />
        </div>
      </button>

      {open && (
        <div id={`topic-${topic.id}`} style={{ padding: '0 24px 24px', borderTop: '1px solid var(--border-color)' }}>
          <div style={{ paddingTop: 20 }}>
            {topic.content.map((block, i) => renderContent(block, i))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function BasicsSection() {
  return (
    <section id="basics" aria-labelledby="basics-title" style={{ background: 'var(--warm-bg)', padding: '72px 0' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: 48 }}>
          <div className="divider" style={{ marginBottom: 20 }} />
          <p className="section-label" style={{ marginBottom: 12 }}>Раздел 1</p>
          <h2 id="basics-title" className="section-title" style={{ marginBottom: 16 }}>Основы</h2>
          <p className="section-subtitle">Начните отсюда — простые объяснения без лишних слов</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {topics.map(t => <TopicCard key={t.id} topic={t} />)}
        </div>
      </div>
    </section>
  );
}
