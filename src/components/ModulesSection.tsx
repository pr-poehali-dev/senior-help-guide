import { useState } from 'react';
import Icon from '@/components/ui/icon';

/* ──────────────────────────────────────
   Раздел «Основы общения онлайн»
────────────────────────────────────── */

interface Block {
  type: 'text' | 'tip' | 'steps' | 'grid' | 'glossary';
  text?: string;
  steps?: string[];
  items?: { icon: string; label: string; desc: string }[];
  terms?: { word: string; def: string }[];
}

interface Topic {
  id: string; icon: string; title: string; badge: string; bClass: string;
  content: Block[];
}

const TOPICS: Topic[] = [
  {
    id: 'social',
    icon: 'UserPlus',
    title: 'Как завести аккаунт в соцсетях',
    badge: 'Первый шаг',
    bClass: 'badge-terra',
    content: [
      { type: 'text', text: 'Социальная сеть — это сайт или приложение, где люди общаются, делятся фотографиями и находят друзей с похожими интересами. Самые популярные в России: ВКонтакте и Одноклассники.' },
      { type: 'tip', text: '💡 Начните с Одноклассников — он создан для людей старшего возраста и очень удобен.' },
      { type: 'steps', steps: [
        'Откройте браузер и наберите «ok.ru»',
        'Нажмите кнопку «Зарегистрироваться»',
        'Введите имя, фамилию и дату рождения',
        'Укажите номер телефона — придёт SMS-код',
        'Введите код и придумайте пароль',
        'Загрузите фото — нажмите «Добавить фото»',
        'Найдите знакомых через «Поиск людей»',
      ]},
      { type: 'tip', text: '🔒 Никому не сообщайте пароль. Если кто-то просит его назвать — это мошенники.' },
    ],
  },
  {
    id: 'video',
    icon: 'Video',
    title: 'Видеозвонки: Zoom и WhatsApp',
    badge: 'Популярное',
    bClass: 'badge-sage',
    content: [
      { type: 'text', text: 'Видеозвонок — это когда вы видите и слышите собеседника на экране смартфона или планшета. Это бесплатно! Главное — подключение к интернету.' },
      { type: 'grid', items: [
        { icon: 'MessageSquare', label: 'WhatsApp', desc: 'Позвоните родным — нажмите на имя и значок камеры' },
        { icon: 'Monitor',       label: 'Zoom',     desc: 'Для групповых встреч — кружков, клубов, мероприятий' },
        { icon: 'Mic',           label: 'Микрофон', desc: 'Убедитесь, что он включён — значок не перечёркнут' },
        { icon: 'Camera',        label: 'Камера',   desc: 'Держите планшет на уровне лица, смотрите в объектив' },
      ]},
      { type: 'steps', steps: [
        'Откройте WhatsApp на смартфоне',
        'Найдите нужный контакт в списке чатов',
        'Нажмите значок видеокамеры (📹) вверху экрана',
        'Дождитесь ответа — говорите громко и чётко',
        'Для завершения нажмите красную трубку',
      ]},
    ],
  },
  {
    id: 'messages',
    icon: 'MessageSquare',
    title: 'Написание сообщений: от SMS до мессенджеров',
    badge: 'Общение',
    bClass: 'badge-terra',
    content: [
      { type: 'text', text: 'SMS — это обычные сообщения по телефону. Мессенджер — приложение для сообщений через интернет. В мессенджере можно бесплатно отправлять текст, голосовые сообщения, фото и даже стикеры.' },
      { type: 'grid', items: [
        { icon: 'MessageCircle', label: 'WhatsApp',  desc: 'Самый популярный мессенджер — для родных и друзей' },
        { icon: 'Send',          label: 'Telegram',  desc: 'Удобен для группового общения и подписки на новости' },
        { icon: 'Mail',          label: 'Viber',     desc: 'Похож на WhatsApp, очень прост в использовании' },
        { icon: 'MessageSquare', label: 'ВКонтакте', desc: 'Встроенный чат — можно писать прямо на сайте' },
      ]},
      { type: 'tip', text: '🎤 Голосовые сообщения удобнее, чем печатать. Зажмите микрофон в WhatsApp и говорите!' },
    ],
  },
  {
    id: 'glossary',
    icon: 'BookOpen',
    title: 'Словарик: чат, профиль, друзья и другие слова',
    badge: 'Глоссарий',
    bClass: 'badge-gold',
    content: [
      { type: 'glossary', terms: [
        { word: 'Профиль',     def: 'Ваша личная страница в соцсети — там ваше фото, имя и информация о вас.' },
        { word: 'Аватар',     def: 'Фотография на вашей странице. Другие люди видят её рядом с вашим именем.' },
        { word: 'Чат',        def: 'Переписка в мессенджере или соцсети. Как SMS, только через интернет.' },
        { word: 'Друзья',     def: 'Люди, которых вы добавили в соцсети. Вы видите их посты и фото.' },
        { word: 'Лайк',       def: 'Отметка «Нравится» — нажмите сердечко под фото или записью.' },
        { word: 'Пост',       def: 'Запись на странице — текст, фото или видео, которые вы публикуете.' },
        { word: 'Стикер',     def: 'Смешная картинка или анимация — как открытка в сообщении.' },
        { word: 'Группа/Клуб', def: 'Сообщество людей с общим интересом: «Садоводы», «Любители кино» и т.д.' },
      ]},
    ],
  },
];

function AccordionCard({ t }: { t: Topic }) {
  const [open, setOpen] = useState(false);

  const render = (b: Block, i: number) => {
    if (b.type === 'text') return <p key={i} style={{ fontSize: 17, color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: 14 }}>{b.text}</p>;
    if (b.type === 'tip')  return <div key={i} className="tip" style={{ marginBottom: 14 }}>{b.text}</div>;
    if (b.type === 'steps') return (
      <ol key={i} style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 14 }}>
        {(b.steps ?? []).map((s, si) => (
          <li key={si} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
            <span className="step-dot" style={{ width: 36, height: 36, fontSize: 14, flexShrink: 0 }}>{si + 1}</span>
            <span style={{ fontSize: 16, color: 'var(--ink)', paddingTop: 7 }}>{s}</span>
          </li>
        ))}
      </ol>
    );
    if (b.type === 'grid') return (
      <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: 12, marginBottom: 14 }}>
        {(b.items ?? []).map((it, ii) => (
          <div key={ii} style={{ display: 'flex', gap: 12, padding: '14px', borderRadius: 14, background: 'var(--cream)', border: '1px solid var(--line)', alignItems: 'flex-start' }}>
            <div className="icon-wrap icon-wrap-terra" style={{ width: 38, height: 38, flexShrink: 0 }}>
              <Icon name={it.icon} fallback="Star" size={18} style={{ color: 'var(--terra)' }} />
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--ink)', marginBottom: 3 }}>{it.label}</div>
              <div style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.5 }}>{it.desc}</div>
            </div>
          </div>
        ))}
      </div>
    );
    if (b.type === 'glossary') return (
      <dl key={i} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {(b.terms ?? []).map((g, gi) => (
          <div key={gi} style={{ display: 'flex', gap: 14, padding: '12px 14px', borderRadius: 10, background: gi % 2 === 0 ? 'var(--cream)' : 'transparent' }}>
            <dt style={{ fontWeight: 800, fontSize: 15, color: 'var(--terra)', minWidth: 150, flexShrink: 0 }}>{g.word}</dt>
            <dd style={{ fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0 }}>{g.def}</dd>
          </div>
        ))}
      </dl>
    );
    return null;
  };

  return (
    <article className="card" style={{ overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', padding: '22px 24px', display: 'flex', alignItems: 'center', gap: 16, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
        aria-expanded={open} aria-controls={`topic-${t.id}`}
      >
        <div className="icon-wrap icon-wrap-terra" style={{ width: 52, height: 52 }}>
          <Icon name={t.icon} fallback="BookOpen" size={24} style={{ color: 'var(--terra)' }} />
        </div>
        <div style={{ flex: 1 }}>
          <div className={`badge ${t.bClass}`} style={{ marginBottom: 5 }}>{t.badge}</div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 19, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>{t.title}</h3>
        </div>
        <div style={{ width: 36, height: 36, borderRadius: 9, background: open ? 'var(--terra-pale)' : 'var(--cream-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s', flexShrink: 0 }}>
          <Icon name={open ? 'ChevronUp' : 'ChevronDown'} size={18} style={{ color: open ? 'var(--terra)' : 'var(--ink-muted)' }} />
        </div>
      </button>

      {open && (
        <div id={`topic-${t.id}`} style={{ padding: '0 24px 24px', borderTop: '1px solid var(--line)' }}>
          <div style={{ paddingTop: 20 }}>
            {t.content.map((b, i) => render(b, i))}
          </div>
        </div>
      )}
    </article>
  );
}

export default function OnlineCommunicationSection() {
  return (
    <section id="online" aria-labelledby="online-title" style={{ background: 'var(--cream)', padding: '72px 0' }} className="sec-pad">
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: 44 }}>
          <div className="divider" style={{ marginBottom: 18 }} />
          <p className="sec-label" style={{ marginBottom: 10 }}>Раздел 1</p>
          <h2 id="online-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, color: 'var(--ink)', marginBottom: 14 }}>
            Основы общения онлайн
          </h2>
          <p style={{ fontSize: 18, color: 'var(--ink-soft)', lineHeight: 1.65 }}>
            Научитесь общаться в интернете — находите друзей, пишите родным, участвуйте в клубах
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {TOPICS.map(t => <AccordionCard key={t.id} t={t} />)}
        </div>
      </div>
    </section>
  );
}
