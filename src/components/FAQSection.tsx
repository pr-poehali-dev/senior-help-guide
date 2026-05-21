import { useState } from 'react';
import Icon from '@/components/ui/icon';

const faqs = [
  {
    q: 'С чего лучше начать, если у человека никогда не было смартфона?',
    a: 'Начните с самого простого: научите звонить и принимать звонки, а потом отправлять сообщения. Только освоив это, переходите к следующему. Не торопитесь — один навык за раз.',
  },
  {
    q: 'Как объяснить, что такое пароль и зачем его придумывать?',
    a: 'Скажите, что пароль — это ключ от квартиры, только цифровой. Никому не говорить пароль — это как не отдавать ключи от дома незнакомцам. Помогите придумать простой, но надёжный пароль и запишите его вместе.',
  },
  {
    q: 'Родственник боится нажать не ту кнопку и что-то сломать. Как развеять этот страх?',
    a: 'Объясните, что смартфон специально сделан так, чтобы его нельзя было сломать случайным нажатием. Всегда можно нажать «Назад» или закрыть приложение. Попрактикуйтесь вместе: пусть нажимает всё подряд и убедится сам.',
  },
  {
    q: 'Как защитить пожилого человека от мошенников в интернете?',
    a: 'Главное правило: никому не говорить SMS-коды и пароли, даже если человек представился сотрудником банка. Мошенники умеют звонить с похожих номеров. Скажите: «Если позвонили из банка и просят код — положи трубку и перезвони сам на официальный номер».',
  },
  {
    q: 'Нужен ли антивирус на смартфоне?',
    a: 'На современных смартфонах (Android и iPhone) встроенная защита достаточно хороша. Важнее: не устанавливать приложения из неизвестных источников, не переходить по подозрительным ссылкам и вовремя обновлять операционную систему.',
  },
  {
    q: 'Как настроить крупный шрифт на телефоне?',
    a: 'На Android: Настройки → Экран → Размер шрифта → передвиньте ползунок вправо. На iPhone: Настройки → Экран и яркость → Размер текста. Также на нашем сайте есть кнопка «Крупный текст» — нажмите на неё в верхнем меню.',
  },
  {
    q: 'Как объяснить разницу между Wi-Fi и мобильным интернетом?',
    a: 'Wi-Fi — это как домашний телефон: работает только дома (или там, где есть точка доступа), зато бесплатно. Мобильный интернет — как мобильный телефон: работает везде, но тратит деньги с баланса. Иконка Wi-Fi — это «веер» в верхней части экрана.',
  },
  {
    q: 'Нужна ли регистрация на Госуслугах — это обязательно?',
    a: 'Нет, регистрация добровольная. Но это очень удобно: можно записаться к врачу, проверить пенсию, оплатить штраф или получить справку — не выходя из дома. Регистрация бесплатная и занимает около 15 минут.',
  },
];

interface FormData {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [form, setForm] = useState<FormData>({ name: '', email: '', topic: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="faq" aria-labelledby="faq-title" style={{ background: 'var(--warm-bg)', padding: '72px 0' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ marginBottom: 48 }}>
          <div className="divider" style={{ marginBottom: 20 }} />
          <p className="section-label" style={{ marginBottom: 12 }}>Раздел 5</p>
          <h2 id="faq-title" className="section-title" style={{ marginBottom: 16 }}>Вопросы и ответы</h2>
          <p className="section-subtitle">Ответы на самые частые вопросы</p>
        </div>

        {/* FAQ */}
        <div className="card-soft" style={{ padding: '8px 28px', marginBottom: 48 }}>
          {faqs.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span style={{ flex: 1 }}>{item.q}</span>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: openIdx === i ? 'var(--orange-pale)' : 'var(--warm-bg-alt)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.2s' }}>
                  <Icon
                    name={openIdx === i ? 'Minus' : 'Plus'}
                    size={16}
                    style={{ color: openIdx === i ? 'var(--orange)' : 'var(--text-muted)', transition: 'color 0.2s' }}
                  />
                </div>
              </button>
              {openIdx === i && (
                <div id={`faq-answer-${i}`} className="faq-answer">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact form */}
        <div id="contact" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }} className="two-col">
          <div>
            <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 24, fontWeight: 700, marginBottom: 12, color: 'var(--text-main)' }}>
              Задайте вопрос
            </h3>
            <p style={{ fontSize: 17, color: 'var(--text-muted)', marginBottom: 24, lineHeight: 1.65 }}>
              Не нашли ответа? Напишите нам — ответим в течение 1–2 рабочих дней.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: 'Mail', label: 'Написать на email', value: 'help@digital-guide.ru' },
                { icon: 'Phone', label: 'Позвонить', value: '8-800-XXX-XX-XX (бесплатно)' },
                { icon: 'Clock', label: 'Время работы', value: 'Пн–Пт: 9:00 – 18:00' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: 'var(--orange-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={c.icon} fallback="Info" size={18} style={{ color: 'var(--orange)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: 'var(--text-light)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{c.label}</div>
                    <div style={{ fontSize: 16, fontWeight: 600, color: 'var(--text-main)' }}>{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-soft" style={{ padding: '28px' }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate aria-label="Форма обратной связи">
                <h4 style={{ fontFamily: 'Merriweather, serif', fontSize: 18, fontWeight: 700, marginBottom: 20, color: 'var(--text-main)' }}>
                  Форма обратной связи
                </h4>

                <div style={{ marginBottom: 16 }}>
                  <label className="form-label" htmlFor="contact-name">Ваше имя *</label>
                  <input
                    id="contact-name"
                    className="form-input"
                    type="text"
                    required
                    placeholder="Например: Иван Петрович"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    autoComplete="name"
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label className="form-label" htmlFor="contact-email">Email или телефон *</label>
                  <input
                    id="contact-email"
                    className="form-input"
                    type="email"
                    placeholder="example@mail.ru"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    autoComplete="email"
                  />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label className="form-label" htmlFor="contact-topic">Тема вопроса</label>
                  <select
                    id="contact-topic"
                    className="form-input"
                    value={form.topic}
                    onChange={e => setForm(f => ({ ...f, topic: e.target.value }))}
                    style={{ cursor: 'pointer', appearance: 'none' }}
                  >
                    <option value="">Выберите тему...</option>
                    <option>Смартфон и интернет</option>
                    <option>Госуслуги</option>
                    <option>Безопасность</option>
                    <option>Видеозвонки</option>
                    <option>Другое</option>
                  </select>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label className="form-label" htmlFor="contact-message">Ваш вопрос *</label>
                  <textarea
                    id="contact-message"
                    className="form-input"
                    rows={4}
                    required
                    placeholder="Опишите ситуацию своими словами..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ resize: 'vertical', lineHeight: 1.6 }}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <Icon name="Send" size={18} />
                  Отправить вопрос
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--sage-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <Icon name="CheckCircle" size={32} style={{ color: 'var(--sage)' }} />
                </div>
                <h4 style={{ fontFamily: 'Merriweather, serif', fontSize: 20, fontWeight: 700, marginBottom: 8 }}>Вопрос отправлен!</h4>
                <p style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 20 }}>
                  Спасибо, {form.name || 'что написали нам'}! Мы ответим в ближайшее время.
                </p>
                <button className="btn-ghost" onClick={() => { setSubmitted(false); setForm({ name: '', email: '', topic: '', message: '' }); }}
                  style={{ border: '1px solid var(--border-color)' }}>
                  Задать ещё вопрос
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer info */}
        <div style={{ marginTop: 64, padding: '32px', borderRadius: 20, background: 'var(--orange-pale)', border: '1px solid rgba(232,96,28,0.15)', textAlign: 'center' }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🤝</div>
          <h3 style={{ fontFamily: 'Merriweather, serif', fontSize: 22, fontWeight: 700, marginBottom: 8, color: 'var(--text-main)' }}>
            Помогать — это просто
          </h3>
          <p style={{ fontSize: 16, color: 'var(--text-muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Поделитесь этим пособием с друзьями и знакомыми, у кого есть пожилые родственники.
            Вместе мы делаем цифровой мир доступным для всех.
          </p>
        </div>
      </div>
    </section>
  );
}
