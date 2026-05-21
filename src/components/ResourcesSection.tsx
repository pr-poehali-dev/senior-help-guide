import { useState } from 'react';
import Icon from '@/components/ui/icon';

/* ──────────────────────────────────────
   Раздел «Практические инструкции»
────────────────────────────────────── */

interface Step { title: string; desc: string; tip?: string; }
interface CheckItem { id: number; text: string; done: boolean; }
interface Guide {
  id: string; icon: string; title: string;
  difficulty: string; diffColor: string;
  time: string; intro: string;
  steps: Step[]; checklist: CheckItem[];
}

const GUIDES: Guide[] = [
  {
    id: 'gosuslugi', icon: 'FileText',
    title: 'Регистрация на Госуслугах',
    difficulty: 'Легко', diffColor: 'var(--sage)',
    time: '15 мин',
    intro: 'Госуслуги — официальный портал государственных услуг. Запись к врачу, пенсия, справки — всё не выходя из дома.',
    steps: [
      { title: 'Откройте gosuslugi.ru', desc: 'Введите адрес в браузере или найдите приложение «Госуслуги» в магазине.' },
      { title: 'Нажмите «Зарегистрироваться»', desc: 'Кнопка в правом верхнем углу страницы.' },
      { title: 'Введите телефон', desc: 'На него придёт SMS с кодом подтверждения.', tip: 'Код действует 5 минут — вводите сразу.' },
      { title: 'Придумайте пароль', desc: 'Минимум 8 символов, буквы и цифры. Запишите в блокнот!' },
      { title: 'Заполните данные', desc: 'Фамилия, имя, отчество, дата рождения, email.' },
      { title: 'Подтвердите личность', desc: 'Через МФЦ лично или онлайн через банк (Сбербанк, ВТБ).' },
    ],
    checklist: [
      { id: 1, text: 'Подготовил номер телефона', done: false },
      { id: 2, text: 'Открыл gosuslugi.ru', done: false },
      { id: 3, text: 'Прошёл регистрацию', done: false },
      { id: 4, text: 'Записал пароль в блокнот', done: false },
      { id: 5, text: 'Подтвердил личность', done: false },
    ],
  },
  {
    id: 'food', icon: 'ShoppingCart',
    title: 'Заказ продуктов онлайн',
    difficulty: 'Легко', diffColor: 'var(--sage)',
    time: '10 мин',
    intro: 'Заказать продукты можно через приложение — доставят прямо домой. Удобно, если нет возможности выйти.',
    steps: [
      { title: 'Установите приложение', desc: 'Попросите близких помочь установить «Сбермаркет», «Самокат» или «Яндекс Лавка».' },
      { title: 'Укажите адрес доставки', desc: 'Введите улицу, дом и квартиру. Приложение запомнит на будущее.', tip: 'Проверьте зону доставки — в большинстве городов работает.' },
      { title: 'Добавьте товары в корзину', desc: 'Найдите нужные продукты через поиск или категории, нажмите «+».' },
      { title: 'Перейдите к оплате', desc: 'Нажмите «Корзина», проверьте список и стоимость.' },
      { title: 'Выберите оплату и время', desc: 'Можно оплатить картой или наличными при получении.' },
    ],
    checklist: [
      { id: 1, text: 'Установил приложение для доставки', done: false },
      { id: 2, text: 'Указал адрес доставки', done: false },
      { id: 3, text: 'Выбрал и добавил товары', done: false },
      { id: 4, text: 'Оформил и оплатил заказ', done: false },
    ],
  },
  {
    id: 'clubs', icon: 'Users',
    title: 'Поиск кружков и клубов по интересам',
    difficulty: 'Средне', diffColor: 'var(--gold)',
    time: '20 мин',
    intro: 'В интернете можно найти клубы садоводов, любителей кино, путешественников. Живое и онлайн-общение!',
    steps: [
      { title: 'Определитесь с интересом', desc: 'Что вам нравится? Вязание, история, кулинария, шахматы, пение?' },
      { title: 'Откройте ВКонтакте или Одноклассники', desc: 'Эти соцсети есть в России и там много активных сообществ.' },
      { title: 'Введите запрос в поиск', desc: 'Например: «Клуб садоводов Москва» или «Любители классической музыки».', tip: 'Нажмите «Группы» — это сообщества людей с похожими интересами.' },
      { title: 'Вступите в группу', desc: 'Нажмите «Подписаться» или «Вступить». Теперь вы часть клуба!' },
      { title: 'Напишите первое сообщение', desc: 'Представьтесь: «Здравствуйте! Меня зовут [имя], рада/рад знакомству».' },
    ],
    checklist: [
      { id: 1, text: 'Выбрал интерес для поиска клуба', done: false },
      { id: 2, text: 'Открыл соцсеть и нашёл группы', done: false },
      { id: 3, text: 'Вступил в одну группу', done: false },
      { id: 4, text: 'Написал первое сообщение', done: false },
    ],
  },
  {
    id: 'dating', icon: 'Heart',
    title: 'Приложения для общения пожилых',
    difficulty: 'Средне', diffColor: 'var(--gold)',
    time: '15 мин',
    intro: 'Специальные приложения помогают найти друзей по переписке, компанию для прогулок или нового близкого человека.',
    steps: [
      { title: 'Выберите безопасное приложение', desc: 'Для пожилых: «Одноклассники» (раздел «Знакомства»), «Баду», «Мамба». Всегда используйте официальные версии.' },
      { title: 'Заполните профиль честно', desc: 'Настоящее имя, возраст, фото. Расскажите о своих интересах.' },
      { title: 'Начните переписку', desc: 'Напишите что-то доброе: «Здравствуйте! Вижу, вы любите природу — я тоже».', tip: '⚠️ Никогда не отправляйте деньги людям, с которыми познакомились онлайн.' },
      { title: 'Назначайте встречи в публичных местах', desc: 'Кафе, парк — если решили познакомиться лично, сообщите родным.' },
    ],
    checklist: [
      { id: 1, text: 'Выбрал безопасное приложение', done: false },
      { id: 2, text: 'Заполнил профиль', done: false },
      { id: 3, text: 'Начал общение с кем-то', done: false },
    ],
  },
];

function GuideCard({ g }: { g: Guide }) {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(g.checklist);
  const done = items.filter(i => i.done).length;
  const pct = Math.round((done / items.length) * 100);
  const toggle = (id: number) => setItems(p => p.map(i => i.id === id ? { ...i, done: !i.done } : i));

  return (
    <article className="card" style={{ overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', padding: '22px 24px', display: 'flex', alignItems: 'center', gap: 16, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
        aria-expanded={open}
      >
        <div className="icon-wrap icon-wrap-terra" style={{ width: 52, height: 52, flexShrink: 0 }}>
          <Icon name={g.icon} fallback="File" size={24} style={{ color: 'var(--terra)' }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 4, alignItems: 'center' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>{g.title}</h3>
            <span style={{ fontSize: 11, fontWeight: 800, padding: '2px 10px', borderRadius: 100, background: g.diffColor + '18', color: g.diffColor }}>{g.difficulty}</span>
          </div>
          <div style={{ display: 'flex', gap: 14, fontSize: 13, color: 'var(--ink-muted)', marginBottom: 10 }}>
            <span>⏱ {g.time}</span>
            <span>✅ {done}/{items.length} шагов</span>
          </div>
          <div className="prog-track">
            <div className="prog-fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
        <Icon name={open ? 'ChevronUp' : 'ChevronDown'} size={20} style={{ color: 'var(--ink-muted)', flexShrink: 0 }} />
      </button>

      {open && (
        <div style={{ borderTop: '1px solid var(--line)', padding: '24px' }}>
          <p style={{ fontSize: 16, color: 'var(--ink-soft)', marginBottom: 24 }}>{g.intro}</p>

          <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {/* Steps */}
            <div>
              <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, marginBottom: 16, color: 'var(--ink)' }}>Пошаговая инструкция</h4>
              <ol style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                {g.steps.map((s, i) => (
                  <li key={i} style={{ display: 'flex', gap: 12 }}>
                    <span className="step-dot" style={{ width: 34, height: 34, fontSize: 13, flexShrink: 0 }}>{i + 1}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--ink)', marginBottom: 3 }}>{s.title}</div>
                      <div style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.55 }}>{s.desc}</div>
                      {s.tip && <div className="tip" style={{ marginTop: 8, fontSize: 13 }}>{s.tip}</div>}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Checklist */}
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 700, color: 'var(--ink)', margin: 0 }}>Чек-лист</h4>
                <span style={{ fontSize: 15, fontWeight: 800, color: pct === 100 ? 'var(--sage)' : 'var(--terra)' }}>{pct}%</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {items.map(it => (
                  <div
                    key={it.id} className="check-row"
                    onClick={() => toggle(it.id)}
                    role="checkbox" aria-checked={it.done} tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && toggle(it.id)}
                  >
                    <div className={`check-box ${it.done ? 'on' : ''}`}>
                      {it.done && <Icon name="Check" size={14} style={{ color: '#fff' }} />}
                    </div>
                    <span style={{ fontSize: 15, color: it.done ? 'var(--ink-muted)' : 'var(--ink)', textDecoration: it.done ? 'line-through' : 'none' }}>{it.text}</span>
                  </div>
                ))}
              </div>
              {pct === 100 && (
                <div style={{ marginTop: 14, padding: '14px', borderRadius: 12, background: 'var(--sage-pale)', border: '1px solid rgba(74,124,89,0.2)', display: 'flex', gap: 10, alignItems: 'center' }}>
                  <Icon name="Award" size={22} style={{ color: 'var(--sage)' }} />
                  <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--sage)' }}>Отлично! Всё выполнено!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </article>
  );
}

export default function InstructionsSection() {
  return (
    <section id="instructions" aria-labelledby="instr-title" style={{ background: 'var(--cream-dark)', padding: '72px 0' }} className="sec-pad">
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: 44 }}>
          <div className="divider" style={{ marginBottom: 18 }} />
          <p className="sec-label" style={{ marginBottom: 10 }}>Раздел 2</p>
          <h2 id="instr-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, marginBottom: 14 }}>Практические инструкции</h2>
          <p style={{ fontSize: 18, color: 'var(--ink-soft)' }}>Пошаговые руководства с чек-листами — нажмите и выполняйте</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {GUIDES.map(g => <GuideCard key={g.id} g={g} />)}
        </div>
      </div>
    </section>
  );
}
