import { useState } from 'react';
import Icon from '@/components/ui/icon';

/* ──────────────────────────────────────
   Раздел «Вопросы и ответы»
────────────────────────────────────── */

const FAQS = [
  { q: 'Страшно ли заводить аккаунт в соцсети?', a: 'Нет, ничего страшного! Вы сами решаете, что публиковать и кому. Начните с Одноклассников — там удобный интерфейс и много людей вашего возраста. Можно просто смотреть и читать, не публикуя ничего.' },
  { q: 'Могут ли меня обмануть через интернет?', a: 'Мошенники существуют, но защититься просто: никогда не говорите пароли и коды из SMS, не переводите деньги незнакомцам, даже если они представились сотрудниками банка. Настоящий банк никогда не звонит и не просит коды.' },
  { q: 'Что делать, если я что-то нажал не то?', a: 'Не паникуйте! Нажмите кнопку «Назад» (стрелочка ←) или закройте приложение. Смартфон нельзя сломать случайным нажатием. Если что-то пошло не так — попросите близких помочь.' },
  { q: 'Как найти людей с похожими интересами?', a: 'Откройте Одноклассники или ВКонтакте, нажмите «Поиск» и введите тему: «Садоводство», «Вязание», «История» или название вашего города + «клуб». Вступите в группу и напишите приветствие.' },
  { q: 'Нужно ли платить за мессенджеры и соцсети?', a: 'Нет! WhatsApp, Одноклассники, ВКонтакте, Telegram — всё бесплатно. Единственное, что нужно — интернет (Wi-Fi дома или мобильный интернет). Звонки через WhatsApp тоже бесплатны, если есть интернет.' },
  { q: 'Как научиться, если я плохо вижу?', a: 'Включите крупный шрифт: на Android — Настройки → Экран → Размер текста. На iPhone — Настройки → Экран и яркость → Размер текста. На нашем сайте нажмите «Аа» вверху — текст сразу увеличится.' },
  { q: 'Как видеозвонок отличается от обычного?', a: 'При видеозвонке вы видите лицо собеседника — как по телевизору, только можно говорить. Это бесплатно через интернет. Просто нажмите значок камеры 📹 в WhatsApp рядом с именем человека.' },
  { q: 'Можно ли найти старых друзей через интернет?', a: 'Да! В Одноклассниках есть поиск людей — введите имя, фамилию, город и год окончания школы. Многие именно так находят одноклассников и однокурсников. Попробуйте!' },
];

interface FormState { name: string; email: string; topic: string; message: string; }

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  const [form, setForm] = useState<FormState>({ name: '', email: '', topic: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <section id="faq" aria-labelledby="faq-title" style={{ background: 'var(--cream)', padding: '72px 0' }} className="sec-pad">
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="divider" style={{ marginBottom: 18 }} />
          <p className="sec-label" style={{ marginBottom: 10 }}>Раздел 5</p>
          <h2 id="faq-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, marginBottom: 14 }}>
            Вопросы и ответы
          </h2>
          <p style={{ fontSize: 18, color: 'var(--ink-soft)' }}>Ответы на самые частые вопросы</p>
        </div>

        {/* FAQ accordion */}
        <div className="card" style={{ padding: '8px 28px', marginBottom: 52 }}>
          {FAQS.map((item, i) => (
            <div key={i} className="faq-row">
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i} aria-controls={`fa${i}`}>
                <span style={{ flex: 1 }}>{item.q}</span>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: open === i ? 'var(--terra-pale)' : 'var(--cream-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.2s' }}>
                  <Icon name={open === i ? 'Minus' : 'Plus'} size={16} style={{ color: open === i ? 'var(--terra)' : 'var(--ink-muted)' }} />
                </div>
              </button>
              {open === i && <div id={`fa${i}`} className="faq-a">{item.a}</div>}
            </div>
          ))}
        </div>

        {/* Contact + Form */}
        <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
          {/* Left — contacts */}
          <div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, marginBottom: 14 }}>Задайте вопрос</h3>
            <p style={{ fontSize: 17, color: 'var(--ink-soft)', marginBottom: 28, lineHeight: 1.7 }}>
              Не нашли ответа? Напишите нам — ответим за 1–2 рабочих дня.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: 'Mail',  label: 'Email',        val: 'help@vmeste-aktivny.ru' },
                { icon: 'Phone', label: 'Телефон',       val: '8-800-XXX-XX-XX (бесплатно)' },
                { icon: 'Clock', label: 'Пн–Пт',         val: '9:00 – 18:00' },
              ].map((c, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <div className="icon-wrap icon-wrap-terra" style={{ width: 42, height: 42, flexShrink: 0 }}>
                    <Icon name={c.icon} fallback="Info" size={18} style={{ color: 'var(--terra)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 800, color: 'var(--ink-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{c.label}</div>
                    <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--ink)' }}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="card" style={{ padding: '28px' }}>
            {!sent ? (
              <form onSubmit={submit} aria-label="Форма обратной связи" noValidate>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, marginBottom: 20 }}>Форма обратной связи</h4>

                <div style={{ marginBottom: 16 }}>
                  <label className="field-label" htmlFor="f-name">Ваше имя *</label>
                  <input id="f-name" className="field" type="text" required placeholder="Например: Нина Ивановна"
                    value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} autoComplete="name" />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label className="field-label" htmlFor="f-email">Email или телефон *</label>
                  <input id="f-email" className="field" type="email" placeholder="example@mail.ru"
                    value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} autoComplete="email" />
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label className="field-label" htmlFor="f-topic">Тема</label>
                  <select id="f-topic" className="field" value={form.topic} onChange={e => setForm(f => ({ ...f, topic: e.target.value }))} style={{ cursor: 'pointer' }}>
                    <option value="">Выберите тему...</option>
                    <option>Соцсети и мессенджеры</option>
                    <option>Видеозвонки</option>
                    <option>Госуслуги</option>
                    <option>Поиск клубов</option>
                    <option>Другое</option>
                  </select>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label className="field-label" htmlFor="f-msg">Ваш вопрос *</label>
                  <textarea id="f-msg" className="field" rows={4} required placeholder="Опишите, что хотите узнать..."
                    value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                </div>

                <button type="submit" className="btn-main" style={{ width: '100%', justifyContent: 'center' }}>
                  <Icon name="Send" size={18} />Отправить вопрос
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div style={{ width: 68, height: 68, borderRadius: '50%', background: 'var(--sage-pale)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <Icon name="CheckCircle" size={34} style={{ color: 'var(--sage)' }} />
                </div>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, marginBottom: 10 }}>Вопрос отправлен!</h4>
                <p style={{ fontSize: 16, color: 'var(--ink-soft)', lineHeight: 1.65, marginBottom: 22 }}>
                  Спасибо, {form.name || 'что написали нам'}! Мы ответим в ближайшее время.
                </p>
                <button className="btn-ghost" onClick={() => { setSent(false); setForm({ name:'', email:'', topic:'', message:'' }); }}
                  style={{ border: '1.5px solid var(--line)' }}>
                  Задать ещё вопрос
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer warm CTA */}
        <div style={{ marginTop: 64, textAlign: 'center', padding: '40px', borderRadius: 24, background: 'linear-gradient(135deg, var(--terra-pale), var(--sage-pale))', border: '1px solid var(--line)' }}>
          <div style={{ fontSize: 40, marginBottom: 14 }}>🤝</div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 700, marginBottom: 10 }}>Поделитесь с близкими</h3>
          <p style={{ fontSize: 17, color: 'var(--ink-soft)', maxWidth: 500, margin: '0 auto 24px', lineHeight: 1.7 }}>
            Расскажите о пособии друзьям и родственникам. Вместе осваивать цифровой мир — гораздо интереснее!
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-main" onClick={() => alert('Ссылка скопирована!')}>
              <Icon name="Share2" size={18} />Поделиться ссылкой
            </button>
            <button className="btn-outline" onClick={() => alert('Скоро здесь будет QR-код для печати')}>
              <Icon name="QrCode" size={18} />QR-код для печати
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
