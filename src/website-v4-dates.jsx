// RYG website — term dates for the 7-week autumn course.
// Edit TERM below each term; everything else follows from it.

const TERM = {
  label: 'Autumn term 2026',
  starts: 'Monday, 7 September',
  ends: 'Thursday, 22 October',
  weeks: [
    { n: 1, mon: '7 Sep',  wed: '9 Sep',  thu: '10 Sep' },
    { n: 2, mon: '14 Sep', wed: '16 Sep', thu: '17 Sep' },
    { n: 3, mon: '21 Sep', wed: '23 Sep', thu: '24 Sep' },
    { n: 4, mon: '28 Sep', wed: '30 Sep', thu: '1 Oct' },
    { n: 5, mon: '5 Oct',  wed: '7 Oct',  thu: '8 Oct' },
    { n: 6, mon: '12 Oct', wed: '14 Oct', thu: '15 Oct' },
    { n: 7, mon: '19 Oct', wed: '21 Oct', thu: '22 Oct' },
  ],
  days: [
    { key: 'mon', day: 'Monday',    classes: [['Evening Pilates', '6:15 – 7:00 pm'], ['Total Body Circuits', '7:15 – 8:00 pm']] },
    { key: 'wed', day: 'Wednesday', classes: [['Total Body Circuits', '7:15 – 8:00 pm']] },
    { key: 'thu', day: 'Thursday',  classes: [['Morning Pilates', '9:30 – 10:15 am'], ['Mature Movers', '10:30 – 11:15 am']] },
  ],
};

function TermDatesSection() {
  const cellBase = {
    fontFamily: 'var(--serif)', fontSize: 'clamp(20px, 2.1vw, 26px)',
    color: RYG.ink, textAlign: 'center', padding: '16px 6px',
  };
  return (
    <section id="dates" style={{ background: RYG.cream, padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 70, left: -70, opacity: 0.14, pointerEvents: 'none' }} className="hide-on-mobile">
        <Dumbbell color={RYG.ink} size={130} style={{ transform: 'rotate(12deg)' }} />
      </div>

      <div className="container" style={{ position: 'relative' }}>
        <SectionStamp bg={RYG.sun} color={RYG.ink}>Class timetable dates</SectionStamp>
        <h2 style={{
          fontFamily: 'var(--serif)', fontWeight: 400,
          fontSize: 'clamp(40px, 5vw, 64px)', lineHeight: 1.05,
          letterSpacing: '-0.01em', marginTop: 22, marginBottom: 10, color: RYG.ink,
        }}>
          Every date of the <em style={{ color: RYG.hot, fontStyle: 'italic' }}>{TERM.label.toLowerCase()}</em>.
        </h2>
        <p style={{ fontFamily: 'var(--sans)', fontSize: 19, lineHeight: 1.6, color: RYG.ink, maxWidth: 620, marginTop: 14, marginBottom: 44 }}>
          Seven weeks, {TERM.starts} to {TERM.ends}. Stick it on the fridge — same room, same time, every week.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1fr)', gap: 28, alignItems: 'start' }} id="dates-grid">
          {/* The dates themselves */}
          <div style={{ background: RYG.creamSoft, borderRadius: 22, padding: 'clamp(18px, 2.2vw, 30px)' }}>
            <div style={{
              display: 'grid', gridTemplateColumns: '0.7fr 1fr 1fr 1fr',
              borderBottom: `2px solid ${RYG.ink}`, paddingBottom: 12, marginBottom: 4,
            }}>
              {['Week', 'Monday', 'Wednesday', 'Thursday'].map(h => (
                <div key={h} style={{
                  fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: RYG.ink, textAlign: 'center',
                }}>{h}</div>
              ))}
            </div>

            {TERM.weeks.map((w, i) => (
              <div key={w.n} style={{
                display: 'grid', gridTemplateColumns: '0.7fr 1fr 1fr 1fr',
                alignItems: 'center',
                background: i % 2 === 0 ? 'transparent' : `${RYG.cream}cc`,
                borderRadius: 10,
              }}>
                <div style={{
                  ...cellBase,
                  fontFamily: 'var(--mono)', fontSize: 15, fontWeight: 500,
                  color: RYG.inkSoft, letterSpacing: '0.1em',
                }}>{w.n}</div>
                <div style={cellBase}>{w.mon}</div>
                <div style={cellBase}>{w.wed}</div>
                <div style={cellBase}>{w.thu}</div>
              </div>
            ))}

            <p style={{
              fontFamily: 'var(--sans)', fontSize: 16, lineHeight: 1.55, color: RYG.ink,
              margin: '18px 4px 0', paddingTop: 16, borderTop: `1px dotted ${RYG.ink}44`,
            }}>
              Term finishes before the October bank holiday, so no class falls on it. Missed a week? Let Janet know and she'll sort you out.
            </p>
          </div>

          {/* What runs on each day */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {TERM.days.map(d => (
              <div key={d.key} style={{
                background: RYG.cream, border: `1.5px solid ${RYG.ink}22`,
                borderRadius: 18, padding: '22px 26px',
              }}>
                <div style={{
                  fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500,
                  letterSpacing: '0.2em', textTransform: 'uppercase', color: RYG.hot,
                  marginBottom: 14,
                }}>{d.day}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {d.classes.map(([name, time]) => (
                    <div key={name} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
                      <span style={{ fontFamily: 'var(--serif)', fontSize: 24, lineHeight: 1.15, color: RYG.ink }}>{name}</span>
                      <span style={{ fontFamily: 'var(--serif)', fontStyle: 'italic', fontSize: 20, color: RYG.ink, whiteSpace: 'nowrap' }}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div style={{ background: RYG.ink, color: RYG.cream, borderRadius: 18, padding: '22px 26px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }}>
                <Dumbbell color={RYG.sun} size={18} />
                <span style={{ fontFamily: 'var(--mono)', fontSize: 13, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: RYG.sun }}>
                  Teach an tSolais
                </span>
              </div>
              <p style={{ fontFamily: 'var(--sans)', fontSize: 17, lineHeight: 1.55, margin: '0 0 18px' }}>
                Ashe St, in the centre of Tralee. Spots go quickly once a term opens — message Janet to hold yours.
              </p>
              <WhatsAppButton size="md">Hold my spot</WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.TermDatesSection = TermDatesSection;
window.TERM = TERM;
