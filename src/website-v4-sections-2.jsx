// RYG website — sections (schedule, about, testimonials, faq, location, footer)

// ──────────────────────────────────────────────────────────
// Schedule + Pricing — from the actual "Next course" graphic
// ──────────────────────────────────────────────────────────
const SCHEDULE = [
  { day: 'Mon',       name: 'Evening Pilates',     time: '6:15 – 7:00 pm',  category: 'pilates' },
  { day: 'Mon & Wed', name: 'Total Body Circuits', time: '7:15 – 8:00 pm',  category: 'circuits' },
  { day: 'Thu',       name: 'Morning Pilates',     time: '9:30 – 10:15 am', category: 'pilates' },
  { day: 'Thu',       name: 'Mature Movers',       time: '10:30 – 11:15 am', category: 'mature' },
];

function ScheduleSection() {
  return (
    <section id="schedule" style={{ background: RYG.creamSoft, padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 40, right: 40, opacity: 0.55 }} className="hide-on-mobile">
        <FuchsiaInline size={130} />
      </div>

      <div className="container">
        <SectionStamp bg={RYG.hot} color={RYG.cream}>New term · now booking</SectionStamp>
        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(40px, 5.5vw, 72px)', lineHeight: 1.0,
          letterSpacing: '-0.02em',
          marginTop: 22, marginBottom: 8, color: RYG.ink,
        }}>
          Next course <em style={{ color: RYG.hot, fontStyle: 'italic' }}>starts Monday, 25 May 2026.</em>
        </h2>
        <HandUnderline color={RYG.hot} width={260} strokeWidth={3} />

        <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'minmax(0, 1.4fr) minmax(0, 1fr)', gap: 24 }} className="schedule-grid">
          {/* Schedule card */}
          <div style={{
            background: RYG.cream,
            borderRadius: 22,
            padding: '28px 32px',
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 18 }}>
              <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: RYG.hot }}>
                Weekly · 4-week course
              </span>
              <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 16, color: RYG.inkSoft }}>
                Teach an tSolais
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {SCHEDULE.map((s, i) => (
                <div key={i} style={{
                  display: 'grid', gridTemplateColumns: '1.6fr auto 1fr',
                  gap: 16, alignItems: 'baseline',
                  padding: '18px 0',
                  borderBottom: i < SCHEDULE.length - 1 ? `1px dotted ${RYG.ink}33` : 'none',
                }} className="schedule-row">
                  <span style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(22px, 2.4vw, 30px)', lineHeight: 1, color: RYG.ink }}>{s.name}</span>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: RYG.hot, whiteSpace: 'nowrap' }}>{s.day}</span>
                  <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 'clamp(18px, 1.8vw, 22px)', color: RYG.ink, textAlign: 'right', whiteSpace: 'nowrap' }}>{s.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing card */}
          <div style={{
            background: RYG.ink, color: RYG.cream,
            borderRadius: 22,
            padding: '28px 32px',
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            position: 'relative', overflow: 'hidden',
          }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: RYG.sun }}>
              Prices · 4-week course
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 22, marginTop: 24 }}>
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22, color: RYG.cream }}>Pilates</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 52, color: RYG.sun, lineHeight: 1.0, marginTop: 2 }}>€45</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: RYG.cream, opacity: 0.7, marginTop: 4 }}>or €12 per class</div>
              </div>
              <div style={{ height: 1, background: RYG.cream, opacity: 0.15 }} />
              <div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 22, color: RYG.cream }}>Circuits & Mature Movers</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 52, color: RYG.sun, lineHeight: 1.0, marginTop: 2 }}>€40</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 13, color: RYG.cream, opacity: 0.7, marginTop: 4 }}>or €11 per class</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 36, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
          <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, color: RYG.ink, margin: 0, maxWidth: 480 }}>
            New faces always welcome — drop me a message to grab a spot.
          </p>
          <WhatsAppButton size="lg">Book on WhatsApp</WhatsAppButton>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// About Janet
// ──────────────────────────────────────────────────────────
function AboutSection() {
  return (
    <section id="about" style={{ background: RYG.cream, padding: '96px 0', position: 'relative' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: 64, alignItems: 'center' }} id="about-grid">
        <div>
          <div style={{
            width: '100%',
            aspectRatio: '4 / 5',
            borderRadius: 22,
            background: RYG.creamSoft,
            border: `1px solid ${RYG.ink}1a`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', top: 36, right: 34, opacity: 0.5 }}>
              <FuchsiaInline size={120} />
            </div>
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
              <Monogram size={92} color={RYG.ink} />
              <div style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: RYG.inkSoft,
                marginTop: 18,
              }}>Janet Slye</div>
            </div>
          </div>
        </div>

        <div>
          <SectionStamp bg={RYG.leaf}>Meet your instructor</SectionStamp>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(42px, 5vw, 64px)', lineHeight: 1.0,
            letterSpacing: '-0.01em',
            marginTop: 22, marginBottom: 22, color: RYG.ink,
          }}>
            Hi, I'm <em style={{ color: RYG.hot, fontStyle: 'italic' }}>Janet.</em>
          </h2>

          <div style={{ fontFamily: 'var(--sans)', fontSize: 17, lineHeight: 1.65, color: RYG.ink, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <p style={{ margin: 0 }}>
              I've been teaching in Tralee for ten years, and I've spent fifteen in fitness altogether.
              I built RyG to be the room I'd want to walk into — friendly, no shouting, and adapted
              to whoever turns up.
            </p>
            <p style={{ margin: 0 }}>
              My personal training specialises in supporting women through every stage of life — using a
              holistic approach to help you take control of your health and wellbeing, whatever that looks
              like for you.
            </p>
          </div>

          <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 8, borderTop: `1px solid ${RYG.ink}22`, paddingTop: 22 }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: RYG.inkSoft, marginBottom: 4 }}>
              Credentials
            </div>
            {[
              'B.Sc. (Hons) in Health and Leisure',
              'N.C.E.F. Certified Personal Trainer',
              'Certified Pilates Instructor',
              '10 years running RyG · 15 years in fitness',
            ].map(c => (
              <div key={c} style={{ fontFamily: 'var(--serif)', fontSize: 18, color: RYG.ink, display: 'flex', alignItems: 'baseline', gap: 10 }}>
                <span style={{ color: RYG.hot, fontStyle: 'italic' }}>·</span> {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// Testimonials — real ones, lightly tightened
// ──────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote: "Have been attending Janet's classes for nearly three years. The classes are great fun — there is no pressure, you go at your own pace. Janet changes them up regularly so you never get complacent. The 2-minute challenge at the end is certainly a challenge, but so great when it's done.",
    name: 'J.',
    class: 'Total Body Circuits',
  },
  {
    quote: "Having been to numerous circuits and gym classes, I find Janet's an excellent way to keep fit and active. She's very encouraging and helpful — I get a great overall workout and I don't fear injury the way I did in other classes, where the focus was on pushing into heavier weights.",
    name: 'M.',
    class: 'Pilates & Total Body Circuits',
  },
  {
    quote: "Janet has been an incredible source of support and guidance throughout my fitness journey. Her knowledge shines through in every session, as she tailors each workout to my specific needs and goals.",
    name: 'L.',
    class: 'Pilates, Circuits & Personal Training',
  },
  {
    quote: "I've been attending Janet's Pilates and HIIT classes for a number of years. Her Pilates is both a great workout and relaxing — clear instructions, close eye on technique. And she's always got a welcoming smile.",
    name: 'K.',
    class: 'Total Body Circuits & Pilates',
  },
  {
    quote: "Thanks for your Pilates classes Janet 🙏 Your sessions all year have really kept my mind and body on track. Thanks a million.",
    name: 'E.',
    class: 'Pilates & Total Body Circuits',
  },
];

function TestimonialsSection() {
  return (
    <section id="words" style={{ background: RYG.leaf, color: RYG.cream, padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -50, right: -40, opacity: 0.16 }} className="hide-on-mobile">
        <FuchsiaInline size={340} stem={RYG.cream} bell={RYG.cream} />
      </div>
      <div style={{ position: 'absolute', bottom: -60, left: -30, opacity: 0.12 }} className="hide-on-mobile">
        <FuchsiaInline size={280} stem={RYG.cream} bell={RYG.cream} style={{ transform: 'scaleX(-1)' }} />
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <SectionStamp bg={RYG.cream} color={RYG.leaf}>Words from the room</SectionStamp>
        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05,
          letterSpacing: '-0.01em',
          marginTop: 22, marginBottom: 8,
        }}>
          What our women <em style={{ color: RYG.sun, fontStyle: 'italic' }}>say.</em>
        </h2>
        <p style={{ fontFamily: 'var(--sans)', fontSize: 16, opacity: 0.85, maxWidth: 540, marginTop: 12, marginBottom: 48 }}>
          Real notes from women who come every week. Initials kept short, classes kept honest.
        </p>

        <div className="words-grid">
          {TESTIMONIALS.map((t, i) => (
            <figure key={i} style={{
              background: i === 0 ? RYG.cream : i === 2 ? RYG.sun : 'transparent',
              color: i === 0 || i === 2 ? RYG.ink : RYG.cream,
              border: (i === 0 || i === 2) ? 'none' : `1px solid ${RYG.cream}55`,
              borderRadius: 22,
              padding: 32,
              margin: 0,
              display: 'flex', flexDirection: 'column', gap: 18,
            }}>
              <div style={{
                fontFamily: 'var(--serif)', fontSize: 80, lineHeight: 0.5,
                color: i === 0 ? RYG.hot : i === 2 ? RYG.ink : RYG.sun,
                opacity: 0.7, height: 30,
              }}>"</div>
              <blockquote style={{
                fontFamily: 'var(--serif)', fontSize: 'clamp(19px, 1.5vw, 22px)', lineHeight: 1.4,
                margin: 0, fontStyle: 'italic',
              }}>{t.quote}</blockquote>
              <figcaption style={{ marginTop: 'auto', paddingTop: 16, borderTop: `1px solid ${(i === 0 || i === 2) ? RYG.ink : RYG.cream}33` }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 500 }}>
                  — {t.name}
                </div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: 13, opacity: 0.8, marginTop: 4 }}>
                  {t.class}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ScheduleSection     = ScheduleSection;
window.AboutSection        = AboutSection;
window.TestimonialsSection = TestimonialsSection;
window.SCHEDULE            = SCHEDULE;
window.TESTIMONIALS        = TESTIMONIALS;
