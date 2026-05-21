import Icon from '@/components/ui/icon';

/* ──────────────────────────────────────
   Раздел «Совместная активность»
────────────────────────────────────── */

const ONLINE_IDEAS = [
  { icon: 'Map',        title: 'Виртуальные экскурсии', desc: 'Посетите Эрмитаж, Третьяковскую галерею или Ватикан — онлайн, бесплатно, прямо из дома.', link: 'artsandculture.google.com', color: 'var(--terra)' },
  { icon: 'BookOpen',   title: 'Книжный клуб онлайн',   desc: 'Читайте одну книгу вместе с группой и обсуждайте в видеочате раз в неделю.', link: 'ВКонтакте: группы по книгам', color: 'var(--sage)' },
  { icon: 'Music',      title: 'Совместное пение',       desc: 'Хор для пожилых онлайн — пение помогает настроению и памяти. Занятия через Zoom.', link: 'Яндекс Поиск: хор онлайн пожилые', color: 'var(--gold)' },
  { icon: 'Gamepad2',   title: 'Онлайн-игры',            desc: 'Шахматы, шашки, карты — можно играть с родными через интернет, находясь в разных городах.', link: 'chess.com или играть.ру', color: 'var(--terra)' },
  { icon: 'Film',       title: 'Совместный просмотр кино', desc: 'Смотрите один фильм одновременно и обсуждайте в WhatsApp — как в кинотеатре, только дома.', link: 'Кинопоиск или YouTube', color: 'var(--sage)' },
  { icon: 'Palette',    title: 'Мастер-класс онлайн',    desc: 'Рисование, вязание, кулинария — в YouTube тысячи бесплатных уроков для любого возраста.', link: 'youtube.com', color: 'var(--gold)' },
];

const FAMILY_SCENARIOS = [
  { num: 1, title: 'Еженедельная семейная встреча', steps: ['Выберите день и время (например, воскресенье в 17:00)', 'Создайте группу в WhatsApp «Наша семья»', 'Каждый присылает свою новость недели', 'Звоните в видеочат — расскажите о неделе'] },
  { num: 2, title: 'Совместное приготовление блюда', steps: ['Договоритесь о рецепте заранее', 'Купите одинаковые ингредиенты', 'Включите видеозвонок и готовьте вместе', 'Сфотографируйте результат и пришлите в чат'] },
  { num: 3, title: 'Семейный фотоальбом онлайн', steps: ['Создайте альбом в Google Фото или ВКонтакте', 'Добавьте старые семейные фотографии', 'Пригласите всех добавлять новые фото', 'Раз в месяц вспоминайте вместе'] },
];

const GROUP_TIPS = [
  { icon: 'Search',      text: 'Ищите в ВКонтакте: «Клуб пенсионеров [ваш город]», «Садоводы», «Рукодельницы»' },
  { icon: 'MapPin',      text: 'Центры активного долголетия есть в большинстве городов — там есть и онлайн-занятия' },
  { icon: 'PhoneCall',   text: 'Позвоните в местный Дом культуры — узнайте расписание кружков и клубов' },
  { icon: 'Globe',       text: 'Сайт «Активный гражданин» (mos.ru) — для жителей Москвы' },
];

export default function ActivitiesSection() {
  return (
    <section id="activities" aria-labelledby="act-title" style={{ background: 'var(--cream)', padding: '72px 0' }} className="sec-pad">
      <div style={{ maxWidth: 1060, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="divider" style={{ marginBottom: 18 }} />
          <p className="sec-label" style={{ marginBottom: 10 }}>Раздел 3</p>
          <h2 id="act-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(26px, 4vw, 40px)', fontWeight: 800, marginBottom: 14 }}>
            Совместная активность
          </h2>
          <p style={{ fontSize: 18, color: 'var(--ink-soft)' }}>Идеи для онлайн-общения, которые помогут расширить круг знакомств</p>
        </div>

        {/* Online ideas grid */}
        <div style={{ marginBottom: 48 }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, marginBottom: 24 }}>
            🌐 Идеи для онлайн-общения
          </h3>
          <div className="grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {ONLINE_IDEAS.map((idea, i) => (
              <div key={i} className="card" style={{ padding: '22px' }}>
                <div className="icon-wrap" style={{ width: 48, height: 48, background: idea.color + '18', marginBottom: 14 }}>
                  <Icon name={idea.icon} fallback="Star" size={22} style={{ color: idea.color }} />
                </div>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>{idea.title}</h4>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: 10 }}>{idea.desc}</p>
                <p style={{ fontSize: 12, color: idea.color, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Icon name="ExternalLink" size={12} style={{ color: idea.color }} />
                  {idea.link}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Family scenarios */}
        <div className="card-terra" style={{ padding: '32px', marginBottom: 32 }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, marginBottom: 24 }}>
            👨‍👩‍👧 Сценарии семейных видеовстреч
          </h3>
          <div className="grid3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {FAMILY_SCENARIOS.map(s => (
              <div key={s.num} style={{ background: '#fff', borderRadius: 18, padding: '20px', border: '1px solid rgba(212,82,30,0.1)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span className="step-dot" style={{ width: 36, height: 36, fontSize: 14 }}>{s.num}</span>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 700, color: 'var(--ink)', margin: 0, lineHeight: 1.3 }}>{s.title}</h4>
                </div>
                <ol style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {s.steps.map((step, si) => (
                    <li key={si} style={{ display: 'flex', gap: 8, fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.5 }}>
                      <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--terra-pale)', color: 'var(--terra)', fontSize: 11, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>{si + 1}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
        </div>

        {/* Find groups */}
        <div className="card-sage" style={{ padding: '32px' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 700, marginBottom: 8 }}>
            🔍 Как найти группу по интересам
          </h3>
          <p style={{ fontSize: 16, color: 'var(--ink-soft)', marginBottom: 24 }}>Несколько простых способов найти компанию</p>
          <div className="grid2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {GROUP_TIPS.map((tip, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, padding: '16px', borderRadius: 14, background: '#fff', border: '1px solid rgba(74,124,89,0.12)', alignItems: 'flex-start' }}>
                <div className="icon-wrap icon-wrap-sage" style={{ width: 38, height: 38, flexShrink: 0 }}>
                  <Icon name={tip.icon} fallback="Circle" size={18} style={{ color: 'var(--sage)' }} />
                </div>
                <p style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.6, margin: 0 }}>{tip.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
