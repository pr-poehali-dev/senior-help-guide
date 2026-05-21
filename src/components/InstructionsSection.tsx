import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface ChecklistItem { id: number; text: string; done: boolean; }

interface Guide {
  id: string;
  title: string;
  icon: string;
  duration: string;
  difficulty: string;
  diffColor: string;
  intro: string;
  steps: { title: string; desc: string; tip?: string }[];
  checklist: ChecklistItem[];
}

const guides: Guide[] = [
  {
    id: 'gosuslugi',
    title: 'Регистрация на Госуслугах',
    icon: 'FileText',
    duration: '15 мин',
    difficulty: 'Начинающий',
    diffColor: 'var(--sage)',
    intro: 'Госуслуги — официальный портал государственных услуг России. Здесь можно записаться к врачу, получить справки и многое другое.',
    steps: [
      { title: 'Откройте сайт или приложение', desc: 'Наберите в браузере «gosuslugi.ru» или найдите приложение «Госуслуги» в магазине приложений.' },
      { title: 'Нажмите «Зарегистрироваться»', desc: 'Кнопка находится в правом верхнем углу страницы. На смартфоне — на главном экране приложения.' },
      { title: 'Введите номер телефона', desc: 'На этот номер придёт SMS с кодом подтверждения. Введите код в специальное поле.' },
      { title: 'Придумайте пароль', desc: 'Пароль должен содержать буквы и цифры, не менее 8 символов. Запишите его в надёжном месте.' },
      { title: 'Заполните данные', desc: 'Введите фамилию, имя, отчество, дату рождения и email. Нажмите «Продолжить».' },
      { title: 'Подтвердите личность', desc: 'Выберите способ подтверждения: через МФЦ лично или онлайн через банк (Сбербанк, Тинькофф и др.).' },
    ],
    checklist: [
      { id: 1, text: 'Подготовил номер телефона', done: false },
      { id: 2, text: 'Зашёл на gosuslugi.ru', done: false },
      { id: 3, text: 'Прошёл регистрацию', done: false },
      { id: 4, text: 'Записал пароль', done: false },
      { id: 5, text: 'Подтвердил личность', done: false },
    ],
  },
  {
    id: 'jkh',
    title: 'Оплата ЖКХ онлайн',
    icon: 'CreditCard',
    duration: '10 мин',
    difficulty: 'Начинающий',
    diffColor: 'var(--sage)',
    intro: 'Оплачивать коммунальные услуги онлайн удобно и безопасно. Можно сделать через приложение банка или через Госуслуги.',
    steps: [
      { title: 'Откройте приложение банка', desc: 'Найдите приложение вашего банка (Сбербанк, ВТБ, Тинькофф и др.) и войдите в личный кабинет.', tip: 'Если у вас нет приложения, можно оплатить через сайт банка в браузере.' },
      { title: 'Найдите раздел «Платежи»', desc: 'Обычно это иконка в нижнем меню. Выберите «ЖКХ» или «Коммунальные услуги».' },
      { title: 'Выберите поставщика', desc: 'Введите название вашей управляющей компании или номер лицевого счёта. Его можно найти в квитанции.' },
      { title: 'Проверьте сумму', desc: 'Банк автоматически подтянет задолженность. Проверьте сумму и нажмите «Оплатить».' },
      { title: 'Подтвердите платёж', desc: 'Введите код из SMS или используйте отпечаток пальца / Face ID для подтверждения.' },
    ],
    checklist: [
      { id: 1, text: 'Нашёл квитанцию с номером лицевого счёта', done: false },
      { id: 2, text: 'Открыл приложение банка', done: false },
      { id: 3, text: 'Выбрал раздел ЖКХ', done: false },
      { id: 4, text: 'Проверил сумму', done: false },
      { id: 5, text: 'Оплатил и сохранил чек', done: false },
    ],
  },
  {
    id: 'videocall',
    title: 'Видеозвонок: WhatsApp / Zoom',
    icon: 'Video',
    duration: '5 мин',
    difficulty: 'Легко',
    diffColor: 'var(--orange)',
    intro: 'Видеозвонок позволяет общаться с родными лицом к лицу, где бы они ни находились. Это бесплатно!',
    steps: [
      { title: 'Откройте WhatsApp или Zoom', desc: 'Найдите иконку на главном экране смартфона и нажмите на неё.' },
      { title: 'Выберите контакт (WhatsApp)', desc: 'В WhatsApp нажмите вкладку «Чаты» → выберите нужный контакт → значок видеокамеры вверху.', tip: 'Значок камеры 📹 запускает видеозвонок. Значок телефона 📞 — обычный звонок.' },
      { title: 'Начните звонок в Zoom', desc: 'В Zoom нажмите «Новая встреча» и пригласите человека, отправив ему ссылку.' },
      { title: 'Во время звонка', desc: 'Держите смартфон на уровне лица. Убедитесь, что вас хорошо слышно и видно.' },
      { title: 'Завершите звонок', desc: 'Нажмите красную кнопку телефонной трубки для завершения.' },
    ],
    checklist: [
      { id: 1, text: 'Установил WhatsApp или Zoom', done: false },
      { id: 2, text: 'Нашёл контакт в списке', done: false },
      { id: 3, text: 'Проверил камеру и микрофон', done: false },
      { id: 4, text: 'Позвонил и поговорил', done: false },
    ],
  },
  {
    id: 'search',
    title: 'Поиск информации в интернете',
    icon: 'Search',
    duration: '5 мин',
    difficulty: 'Легко',
    diffColor: 'var(--orange)',
    intro: 'Яндекс и Google помогут найти любую информацию: расписание поездов, рецепты, телефоны больниц и многое другое.',
    steps: [
      { title: 'Откройте браузер', desc: 'Нажмите на иконку браузера на смартфоне (Яндекс, Chrome или Safari).' },
      { title: 'Нажмите на строку поиска', desc: 'Вверху экрана есть строка с надписью. Нажмите на неё — появится клавиатура.' },
      { title: 'Напишите запрос', desc: 'Пишите простыми словами: «расписание поезда Москва Санкт-Петербург» или «как приготовить борщ».', tip: 'Не нужно писать длинными предложениями — просто ключевые слова.' },
      { title: 'Нажмите поиск', desc: 'Нажмите кнопку «Найти» или Enter на клавиатуре. Появится список результатов.' },
      { title: 'Выберите нужный сайт', desc: 'Нажмите на синюю ссылку. Доверяйте известным сайтам: gosuslugi.ru, mos.ru, yandex.ru.' },
    ],
    checklist: [
      { id: 1, text: 'Открыл браузер', done: false },
      { id: 2, text: 'Нашёл нужную информацию', done: false },
      { id: 3, text: 'Перешёл на сайт', done: false },
    ],
  },
];

function GuideCard({ guide }: { guide: Guide }) {
  const [open, setOpen] = useState(false);
  const [checklist, setChecklist] = useState(guide.checklist);

  const toggle = (id: number) => setChecklist(prev => prev.map(i => i.id === id ? { ...i, done: !i.done } : i));
  const doneCount = checklist.filter(i => i.done).length;
  const progress = Math.round((doneCount / checklist.length) * 100);

  return (
    <div className="card-soft" style={{ overflow: 'hidden' }}>
      <button
        onClick={() => setOpen(o => !o)}
        style={{ width: '100%', padding: '24px', display: 'flex', alignItems: 'center', gap: 16, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
        aria-expanded={open}
      >
        <div style={{ width: 52, height: 52, borderRadius: 14, background: 'var(--orange-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon name={guide.icon} fallback="File" size={24} style={{ color: 'var(--orange)' }} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
            <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 19, fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>{guide.title}</h3>
            <span style={{ fontSize: 12, fontWeight: 600, padding: '2px 10px', borderRadius: 100, background: `${guide.diffColor}18`, color: guide.diffColor }}>
              {guide.difficulty}
            </span>
          </div>
          <div style={{ display: 'flex', gap: 16, fontSize: 14, color: 'var(--text-light)' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <Icon name="Clock" size={13} style={{ color: 'var(--text-light)' }} />
              {guide.duration}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <Icon name="CheckSquare" size={13} style={{ color: 'var(--text-light)' }} />
              {doneCount}/{checklist.length} шагов
            </span>
          </div>
          {/* Progress mini */}
          <div style={{ height: 4, background: 'var(--border-color)', borderRadius: 2, marginTop: 10, overflow: 'hidden' }}>
            <div style={{ width: `${progress}%`, height: '100%', background: `linear-gradient(90deg, var(--orange), var(--terracotta))`, borderRadius: 2, transition: 'width 0.4s' }} />
          </div>
        </div>
        <Icon name={open ? 'ChevronUp' : 'ChevronDown'} size={20} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
      </button>

      {open && (
        <div style={{ borderTop: '1px solid var(--border-color)', padding: '24px' }}>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', marginBottom: 24, lineHeight: 1.65 }}>{guide.intro}</p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }} className="guide-grid">
            {/* Steps */}
            <div>
              <h4 style={{ fontFamily: 'Merriweather, serif', fontSize: 17, fontWeight: 700, marginBottom: 16, color: 'var(--text-main)' }}>
                Пошаговая инструкция
              </h4>
              <ol style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 16 }}>
                {guide.steps.map((step, i) => (
                  <li key={i} style={{ display: 'flex', gap: 14 }}>
                    <span className="step-circle" style={{ width: 36, height: 36, fontSize: 14, flexShrink: 0 }}>{i + 1}</span>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-main)', marginBottom: 4 }}>{step.title}</div>
                      <div style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.6 }}>{step.desc}</div>
                      {step.tip && (
                        <div className="tip-block" style={{ marginTop: 8, fontSize: 13 }}>
                          💡 {step.tip}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Checklist */}
            <div>
              <h4 style={{ fontFamily: 'Merriweather, serif', fontSize: 17, fontWeight: 700, marginBottom: 8, color: 'var(--text-main)' }}>
                Чек-лист «Проверь себя»
              </h4>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <span style={{ fontSize: 14, color: 'var(--text-light)' }}>Выполнено: {doneCount} из {checklist.length}</span>
                <span style={{ fontWeight: 700, fontSize: 16, color: progress === 100 ? 'var(--sage)' : 'var(--orange)' }}>{progress}%</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {checklist.map(item => (
                  <div
                    key={item.id}
                    className="check-item"
                    onClick={() => toggle(item.id)}
                    role="checkbox"
                    aria-checked={item.done}
                    tabIndex={0}
                    onKeyDown={e => e.key === 'Enter' && toggle(item.id)}
                  >
                    <div className={`check-box ${item.done ? 'checked' : ''}`}>
                      {item.done && <Icon name="Check" size={14} style={{ color: '#fff' }} />}
                    </div>
                    <span style={{ fontSize: 15, color: item.done ? 'var(--text-light)' : 'var(--text-main)', textDecoration: item.done ? 'line-through' : 'none' }}>
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>

              {progress === 100 && (
                <div style={{ marginTop: 16, padding: '14px', borderRadius: 12, background: 'var(--sage-pale)', border: '1px solid rgba(90,125,101,0.2)', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Icon name="Award" size={22} style={{ color: 'var(--sage)' }} />
                  <span style={{ fontSize: 15, fontWeight: 600, color: 'var(--sage)' }}>Отлично! Всё выполнено!</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function InstructionsSection() {
  return (
    <section id="instructions" aria-labelledby="instructions-title" style={{ background: 'var(--warm-bg-alt)', padding: '72px 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: 48 }}>
          <div className="divider" style={{ marginBottom: 20 }} />
          <p className="section-label" style={{ marginBottom: 12 }}>Раздел 2</p>
          <h2 id="instructions-title" className="section-title" style={{ marginBottom: 16 }}>Практические инструкции</h2>
          <p className="section-subtitle">Пошаговые руководства с чек-листами — нажмите и выполняйте</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {guides.map(g => <GuideCard key={g.id} guide={g} />)}
        </div>
      </div>
    </section>
  );
}
