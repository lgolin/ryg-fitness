// RYG website — FAQ, Location, Footer, and the main App

// ──────────────────────────────────────────────────────────
// FAQ — for the nervous first-timer
// ──────────────────────────────────────────────────────────
const FAQ = [
  {
    q: "I haven't done a class in years — is this for me?",
    a: "Yes — most of the women in the room are in that exact spot. We start where you are. Send me a message first and we can have a chat about which class might suit you best.",
  },
  {
    q: "Do I need to be fit before I come?",
    a: "Not at all. The whole point is that the class meets you where you are. Every exercise has an easier and harder version, and you choose.",
  },
  {
    q: "What do I wear and bring?",
    a: "Comfy clothes you can move in and a bottle of water. For Pilates and Mature Movers a mat helps — there are a few spares if you don't have one yet.",
  },
  {
    q: "Can I come on my own?",
    a: "Most women do. The classes are small enough that you'll know a few names by the end of your first one.",
  },
  {
    q: "How do I book?",
    a: "Send a WhatsApp message — I'll have a chat with you about which class suits, and let you know which spots are open this term.",
  },
];

function FaqSection() {
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ background: RYG.cream, padding: '96px 0' }}>
      <div className="container" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.4fr)', gap: 64 }} id="faq-grid">
        <div>
          <SectionStamp bg={RYG.accent}>Before you come</SectionStamp>
          <h2 style={{
            fontFamily: 'var(--serif)', fontWeight: 400,
            fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05,
            letterSpacing: '-0.01em',
            marginTop: 22, marginBottom: 16, color: RYG.ink,
          }}>
            The questions we <em style={{ color: RYG.hot, fontStyle: 'italic' }}>get most.</em>
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: 16, lineHeight: 1.6, color: RYG.inkSoft, maxWidth: 360, marginTop: 16 }}>
            If you want to ask anything that isn't here, just message — that's literally the whole booking process.
          </p>
          <div style={{ marginTop: 24 }}>
            <WhatsAppButton size="md">Ask Janet on WhatsApp</WhatsAppButton>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {FAQ.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderTop: `1px solid ${RYG.ink}22`, paddingTop: 20, paddingBottom: 20 }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{
                  width: '100%',
                  textAlign: 'left',
                  background: 'transparent',
                  border: 'none',
                  padding: 0, cursor: 'pointer',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24,
                  fontFamily: 'var(--serif)',
                  fontSize: 'clamp(20px, 2.2vw, 26px)', lineHeight: 1.25,
                  color: RYG.ink,
                }}>
                  <span>{f.q}</span>
                  <span style={{
                    fontFamily: 'var(--serif)', fontSize: 28, color: RYG.hot,
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s',
                    fontStyle: 'italic',
                    lineHeight: 0.9, flexShrink: 0,
                  }}>+</span>
                </button>
                <div style={{
                  maxHeight: isOpen ? 240 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease, margin-top 0.25s',
                  marginTop: isOpen ? 12 : 0,
                }}>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: 16, lineHeight: 1.6, color: RYG.inkSoft, margin: 0, maxWidth: 580 }}>
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
          <div style={{ borderTop: `1px solid ${RYG.ink}22` }} />
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// Location
// ──────────────────────────────────────────────────────────
function LocationSection() {
  return (
    <section id="find-us" style={{ background: RYG.creamSoft, padding: '96px 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: 48, alignItems: 'stretch' }} id="location-grid">
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <SectionStamp bg={RYG.leaf}>Find us</SectionStamp>
            <h2 style={{
              fontFamily: 'var(--serif)', fontWeight: 400,
              fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05,
              letterSpacing: '-0.01em',
              marginTop: 22, marginBottom: 18, color: RYG.ink,
            }}>
              <em style={{ color: RYG.hot, fontStyle: 'italic' }}>Teach an tSolais</em><br/>
              Ashe St, Tralee.
            </h2>
            <p style={{ fontFamily: 'var(--sans)', fontSize: 16, lineHeight: 1.6, color: RYG.inkSoft, maxWidth: 460, marginTop: 0 }}>
              Right in the centre of town. Parking on the street and around the corner.
              If you can't make it in, I also bring fitness to organisations and homes around Tralee.
            </p>

            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 14, fontFamily: 'var(--sans)', fontSize: 15, color: RYG.ink }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: RYG.inkSoft, width: 80, flexShrink: 0 }}>Address</span>
                <span>Ashe St, Cloonalour, Tralee, Co. Kerry · V92 DX59</span>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: RYG.inkSoft, width: 80, flexShrink: 0 }}>Phone</span>
                <span>+353 86 778 0990</span>
              </div>
              <div style={{ display: 'flex', gap: 16, alignItems: 'baseline' }}>
                <span style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: RYG.inkSoft, width: 80, flexShrink: 0 }}>Email</span>
                <a href="mailto:rygfitnesstralee@gmail.com" style={{ color: RYG.ink, textDecoration: 'underline', textUnderlineOffset: 3 }}>rygfitnesstralee@gmail.com</a>
              </div>
            </div>

            <div style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <WhatsAppButton size="md">Message Janet</WhatsAppButton>
              <a href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x484535d3fb17e261:0x8b1a67a055f35be7?sa=X&ved=1t:8290&ictx=111"
                target="_blank" rel="noopener noreferrer"
                style={{
                  fontFamily: 'var(--sans)', fontSize: 14, fontWeight: 600,
                  color: RYG.ink, letterSpacing: '0.04em',
                  padding: '14px 22px',
                  textDecoration: 'none',
                  border: `1.5px solid ${RYG.ink}`,
                  borderRadius: 999,
                  whiteSpace: 'nowrap',
                }}>Open in Maps →</a>
            </div>
          </div>

          {/* Map placeholder — embed via image-slot OR a real Google embed */}
          <div style={{
            background: RYG.cream,
            borderRadius: 22,
            overflow: 'hidden',
            position: 'relative',
            minHeight: 380,
            border: `1px solid ${RYG.ink}1a`,
          }}>
            <iframe
              title="Map of Teach an tSolais, Ashe St, Tralee"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-9.7240%2C52.2680%2C-9.6970%2C52.2780&amp;layer=mapnik&amp;marker=52.27295%2C-9.71097"
              style={{ border: 'none', width: '100%', height: '100%', minHeight: 380, filter: 'sepia(0.15) saturate(0.85)' }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ──────────────────────────────────────────────────────────
// Footer
// ──────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: RYG.ink, color: RYG.cream, padding: '64px 0 32px', position: 'relative' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gap: 48 }} id="footer-grid">
          <div>
            <Monogram size={56} color={RYG.cream} />
            <p style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1.35, marginTop: 16, marginBottom: 18, maxWidth: 400 }}>
              Small classes for women. At your own pace, always.
            </p>
            <div style={{ marginTop: 16 }}>
              <WhatsAppButton size="md">Chat with Janet</WhatsAppButton>
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: RYG.sun, marginBottom: 14 }}>
              Visit
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { href: '#classes',  label: 'Classes' },
                { href: '#schedule', label: 'Schedule & prices' },
                { href: '#about',    label: 'About Janet' },
                { href: '#words',    label: 'Testimonials' },
                { href: '#find-us',  label: 'Find us' },
              ].map(l => (
                <li key={l.href}>
                  <a href={l.href} style={{ color: RYG.cream, textDecoration: 'none', fontFamily: 'var(--sans)', fontSize: 15, opacity: 0.85 }}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: RYG.sun, marginBottom: 14 }}>
              Find us elsewhere
            </div>
            <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <li><a href="https://instagram.com/janetslyeryg" target="_blank" rel="noopener noreferrer" style={{ color: RYG.cream, textDecoration: 'none', fontFamily: 'var(--sans)', fontSize: 15, opacity: 0.85 }}>Instagram</a></li>
              <li><a href="https://www.facebook.com/RYGfitnessTralee/" target="_blank" rel="noopener noreferrer" style={{ color: RYG.cream, textDecoration: 'none', fontFamily: 'var(--sans)', fontSize: 15, opacity: 0.85 }}>Facebook</a></li>
              <li><a href="mailto:rygfitnesstralee@gmail.com" style={{ color: RYG.cream, textDecoration: 'none', fontFamily: 'var(--sans)', fontSize: 15, opacity: 0.85 }}>Email</a></li>
              <li><a href="tel:+353867780990" style={{ color: RYG.cream, textDecoration: 'none', fontFamily: 'var(--sans)', fontSize: 15, opacity: 0.85 }}>+353 86 778 0990</a></li>
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 48, paddingTop: 22, borderTop: `1px solid ${RYG.cream}22`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: RYG.cream, opacity: 0.65, gap: 16, flexWrap: 'wrap' }}>
          <span>© 2026 Reach Your Goals Fitness · Tralee, Co. Ciarraí</span>
          <a href="https://www.rygfitnesstralee.com/terms-and-conditions" style={{ color: RYG.cream, textDecoration: 'none', opacity: 0.85 }}>Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
}

// ──────────────────────────────────────────────────────────
// Mobile WhatsApp bubble — always-visible on small screens
// ──────────────────────────────────────────────────────────
function MobileFab() {
  return (
    <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="mobile-fab" style={{
      position: 'fixed', bottom: 22, right: 22, zIndex: 200,
      width: 60, height: 60, borderRadius: '50%',
      background: '#25D366',
      boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
      display: 'none', alignItems: 'center', justifyContent: 'center',
      textDecoration: 'none',
    }}>
      <WhatsAppIcon size={28} color="#fff" />
    </a>
  );
}

// ──────────────────────────────────────────────────────────
// Main app
// ──────────────────────────────────────────────────────────
function App() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <NavBar scrolled={scrolled} />
      <main>
        <Hero />
        <Welcome />
        <ClassesSection />
        <ScheduleSection />
        <AboutSection />
        <TestimonialsSection />
        <FaqSection />
        <LocationSection />
      </main>
      <Footer />
      <MobileFab />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
