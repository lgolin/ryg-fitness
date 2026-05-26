// RYG website — sections (hero, welcome, classes, schedule, about, testimonials, location, footer)

// ──────────────────────────────────────────────────────────
// Sticky top nav
// ──────────────────────────────────────────────────────────
function NavBar({ scrolled }) {
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? `${RYG.cream}f5` : 'transparent',
      backdropFilter: scrolled ? 'blur(8px)' : 'none',
      borderBottom: scrolled ? `1px solid ${RYG.ink}14` : '1px solid transparent',
      transition: 'background 0.2s, border 0.2s, backdrop-filter 0.2s',
    }}>
      <nav className="container" style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 0',
      }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <Monogram size={32} color={RYG.ink} />
        </a>

        <div className="nav-links" style={{
          display: 'flex', gap: 28, alignItems: 'center',
        }}>
          {[
            { href: '#classes',   label: 'Classes' },
            { href: '#schedule',  label: 'Schedule' },
            { href: '#about',     label: 'About' },
            { href: '#words',     label: 'Words' },
            { href: '#find-us',   label: 'Find us' },
          ].map(l => (
            <a key={l.href} href={l.href} style={{
              fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 500,
              color: RYG.ink, textDecoration: 'none', letterSpacing: '0.02em',
              whiteSpace: 'nowrap',
            }}>{l.label}</a>
          ))}
        </div>

        <WhatsAppButton size="sm">Chat first</WhatsAppButton>
      </nav>
    </header>
  );
}

// ──────────────────────────────────────────────────────────
// Hero
// ──────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="top" style={{
      background: RYG.cream,
      paddingTop: 140, paddingBottom: 80,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative fuchsia sprig top-right */}
      <div style={{ position: 'absolute', top: 110, right: 60, opacity: 0.7, pointerEvents: 'none' }}>
        <FuchsiaInline size={140} />
      </div>
      <div style={{ position: 'absolute', bottom: -40, left: -20, opacity: 0.5, pointerEvents: 'none' }} className="hide-on-mobile">
        <FuchsiaInline size={120} style={{ transform: 'scaleX(-1) rotate(15deg)' }} />
      </div>

      <div className="container">
        <SectionStamp>Tralee · Co. Ciarraí</SectionStamp>

        <h1 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(56px, 9vw, 132px)', lineHeight: 0.95,
          letterSpacing: '-0.02em',
          marginTop: 26, marginBottom: 0,
          color: RYG.ink,
          maxWidth: 1100,
        }}>
          Small classes <br/>
          for women — <br/>
          <em style={{ color: RYG.hot, fontStyle: 'italic' }}>at your own pace.</em>
        </h1>

        <HandUnderline color={RYG.hot} width={340} strokeWidth={3.5} />

        <p style={{
          fontFamily: 'var(--sans)',
          fontSize: 'clamp(17px, 2vw, 22px)', lineHeight: 1.55,
          color: RYG.inkSoft,
          maxWidth: 640,
          marginTop: 28, marginBottom: 36,
        }}>
          Pilates, Total Body Circuits and Mature Movers in the heart of Tralee.
          No mirrors. No rush. A small room of women, moving together.
        </p>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center' }}>
          <WhatsAppButton size="lg">Chat first — message Janet</WhatsAppButton>
          <a href="#schedule" style={{
            fontFamily: 'var(--sans)', fontSize: 15, fontWeight: 600,
            color: RYG.ink, letterSpacing: '0.04em',
            padding: '14px 4px',
            textDecoration: 'none',
            borderBottom: `2px solid ${RYG.ink}`,
            whiteSpace: 'nowrap',
          }}>See this term's schedule →</a>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// Welcome — what RYG is, what it isn't
// ──────────────────────────────────────────────────────────
function Welcome() {
  return (
    <section style={{ background: RYG.creamSoft, padding: '96px 0', position: 'relative' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)', gap: 80, alignItems: 'start' }} id="welcome-grid">
        <div>
          <SectionStamp bg={RYG.leaf}>Who it's for</SectionStamp>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05,
            letterSpacing: '-0.01em',
            marginTop: 22, marginBottom: 24,
            color: RYG.ink,
          }}>
            For the woman who'd rather a class — <em style={{ color: RYG.hot, fontStyle: 'italic' }}>than the gym</em>.
          </h2>
          <p style={{
            fontFamily: 'var(--sans)', fontSize: 17, lineHeight: 1.65,
            color: RYG.ink, maxWidth: 520,
          }}>
            RyG is small classes for women in Tralee. Every shape, every decade, every pace.
            If you've not done a class in a while — or if the gym has never felt like yours —
            this is the place. We move together, we chat between sets, and we leave a bit stronger
            than we came in.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{
            background: RYG.cream, padding: '24px 28px',
            border: `1px solid ${RYG.ink}1a`,
            borderRadius: 18,
          }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: RYG.leaf, marginBottom: 12 }}>
              What we are
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['A small class for women', 'Pilates · Circuits · Mature Movers', 'At your own pace, always', 'Adapted to every level', 'In the centre of Tralee'].map(it => (
                <li key={it} style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.25, color: RYG.ink }}>{it}</li>
              ))}
            </ul>
          </div>
          <div style={{
            background: RYG.ink, color: RYG.cream, padding: '24px 28px',
            borderRadius: 18,
          }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: RYG.sun, marginBottom: 12 }}>
              What we aren't
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['A gym', 'A bootcamp', 'A weight-loss programme', 'Loud, shouty, or in a rush'].map(it => (
                <li key={it} style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.25, color: RYG.cream, fontStyle: 'italic' }}>{it}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// Classes — 5 real services
// ──────────────────────────────────────────────────────────
const CLASSES = [
  {
    id: 'pilates',
    name: 'Pilates',
    blurb: 'Strength, control and breath. Brilliant for posture, balance and the lower back. Both morning and evening classes each term.',
    for: 'For every level — beginners welcome.',
    motif: 'pilates',
  },
  {
    id: 'circuits',
    name: 'Total Body Circuits',
    blurb: 'A full-body workout with a warm-up, station rounds, and a stretch to finish. The "2-minute challenge" at the end is a class favourite.',
    for: 'For anyone who wants energy + variety.',
    motif: 'circuits',
  },
  {
    id: 'mature',
    name: 'Mature Movers',
    blurb: 'A gentle class focused on strength, balance and mobility. Designed around what the body actually needs as it changes.',
    for: 'For the 60s, 70s, and anyone who wants gentler.',
    motif: 'mature',
  },
  {
    id: 'pt',
    name: 'Personal Training',
    blurb: 'One-to-one sessions built around you. A holistic approach that supports women through every life stage.',
    for: 'For specific goals — bones, recovery, life changes.',
    motif: 'pt',
  },
  {
    id: 'custom',
    name: 'Custom Classes',
    blurb: 'Bespoke fitness for local businesses, organisations and community groups. Designed around your group\'s needs.',
    for: 'For your team, club or community.',
    motif: 'custom',
  },
];

function ClassesSection() {
  return (
    <section id="classes" style={{ background: RYG.cream, padding: '96px 0', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48, gap: 32, flexWrap: 'wrap' }}>
          <div>
            <SectionStamp>The classes</SectionStamp>
            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05,
              letterSpacing: '-0.01em',
              marginTop: 20, marginBottom: 0, color: RYG.ink,
            }}>
              Three classes, <em style={{ color: RYG.hot, fontStyle: 'italic' }}>one welcome.</em>
            </h2>
          </div>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 15, lineHeight: 1.55, color: RYG.inkSoft, maxWidth: 360, margin: 0 }}>
            Group classes every week, plus one-to-one personal training and bespoke classes for organisations.
          </p>
        </div>

        <div className="classes-grid">
          {CLASSES.map((c, i) => (
            <article key={c.id} style={{
              background: i % 2 === 0 ? RYG.creamSoft : RYG.cream,
              border: i % 2 === 0 ? 'none' : `1px solid ${RYG.ink}1a`,
              borderRadius: 22,
              padding: 32,
              display: 'flex', flexDirection: 'column', gap: 16,
              position: 'relative',
              minHeight: 320,
            }}>
              <div style={{ position: 'absolute', top: 24, right: 24, opacity: 0.75 }}>
                <FuchsiaInline size={50} stem={RYG.leaf} bell={i === 0 ? RYG.hot : i === 1 ? RYG.sun : i === 2 ? RYG.hot : i === 3 ? RYG.accent : RYG.leaf} />
              </div>

              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: RYG.inkSoft }}>
                0{i + 1}
              </div>
              <h3 style={{
                fontFamily: 'var(--serif)', fontWeight: 400,
                fontSize: 38, lineHeight: 1.05, letterSpacing: '-0.01em',
                margin: 0, color: RYG.ink,
                maxWidth: 'calc(100% - 40px)',
              }}>{c.name}</h3>
              <p style={{ fontFamily: 'var(--sans)', fontSize: 15, lineHeight: 1.6, color: RYG.ink, margin: 0, flex: 1 }}>
                {c.blurb}
              </p>
              <div style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 17, color: RYG.hot, marginTop: 4 }}>
                {c.for}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.NavBar = NavBar;
window.Hero = Hero;
window.Welcome = Welcome;
window.ClassesSection = ClassesSection;
window.CLASSES = CLASSES;
