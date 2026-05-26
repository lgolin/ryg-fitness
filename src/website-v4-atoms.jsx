// RYG Fitness — website
// One-page Kerry-palette site for janet's actual business. Real schedule,
// real testimonials, real bio (pulled from rygfitnesstralee.com).
// WhatsApp is the primary CTA throughout.

const RYG = {
  cream:     '#EFE8D6',
  creamSoft: '#DDD3B8',
  ink:       '#2E3530',
  inkSoft:   '#5A6359',
  hot:       '#C66A6E',  // Deora Dé fuchsia pink
  sun:       '#D9B36A',
  leaf:      '#6A8170',
  accent:    '#5D7D7C',
};

const WA_URL = 'https://api.whatsapp.com/send/?phone=353867780990&text=Hi+I%27m+interested+in+your+classes&type=phone_number&app_absent=0';

// ──────────────────────────────────────────────────────────
// Atoms
// ──────────────────────────────────────────────────────────

function Monogram({ size = 40, color = RYG.ink, italicMid = true }) {
  return (
    <span style={{
      fontFamily: 'var(--serif)', color, fontSize: size,
      lineHeight: 0.9, letterSpacing: '-0.04em',
      display: 'inline-block', fontWeight: 400,
    }}>
      <span>R</span>
      <span style={italicMid ? { fontStyle: 'italic' } : {}}>y</span>
      <span>G</span>
    </span>
  );
}

// Filled fuchsia bell — single bloom for inline use (matches v4 Fuchsia).
function FuchsiaInline({ stem = RYG.leaf, bell = RYG.hot, size = 60, style }) {
  const Bloom = (transform) => (
    <g transform={transform}>
      <path d="M0 -2 L 0 4" stroke={stem} strokeWidth="2" strokeLinecap="round" />
      <path d="M0 4 Q -18 -2 -22 14 Q -10 6 -2 8 Z" fill={bell} />
      <path d="M0 4 Q 18 -2 22 14 Q 10 6 2 8 Z" fill={bell} />
      <path d="M0 4 Q -10 0 -12 12 Q -4 8 0 10 Z" fill={bell} opacity="0.9" />
      <path d="M0 4 Q 10 0 12 12 Q 4 8 0 10 Z" fill={bell} opacity="0.9" />
      <path d="M-12 10 Q -16 26 -10 38 Q -4 44 0 44 Q 4 44 10 38 Q 16 26 12 10 Q 6 14 0 14 Q -6 14 -12 10 Z" fill={bell} />
      <line x1="-5" y1="44" x2="-6" y2="58" stroke={bell} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="-2" y1="44" x2="-2" y2="62" stroke={bell} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="2"  y1="44" x2="2"  y2="62" stroke={bell} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="5"  y1="44" x2="6"  y2="58" stroke={bell} strokeWidth="1.5" strokeLinecap="round" />
    </g>
  );
  return (
    <svg viewBox="0 0 100 180" width={size * 0.55} height={size} style={style} fill="none">
      <path d="M50 4 Q 50 35 50 70" stroke={stem} strokeWidth="2.2" strokeLinecap="round" />
      <ellipse cx="40" cy="28" rx="9" ry="3.2" fill={stem} transform="rotate(-32 40 28)" opacity="0.85" />
      <ellipse cx="60" cy="46" rx="9" ry="3.2" fill={stem} transform="rotate(32 60 46)" opacity="0.85" />
      {Bloom('translate(50 70)')}
    </svg>
  );
}

function WhatsAppIcon({ size = 18, color = '#fff' }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  );
}

function WhatsAppButton({ children = "Chat on WhatsApp", style, variant = 'primary', size = 'md' }) {
  const isPrimary = variant === 'primary';
  const pad = size === 'lg' ? '18px 28px' : size === 'sm' ? '11px 18px' : '14px 22px';
  const fs = size === 'lg' ? 17 : size === 'sm' ? 13 : 15;
  return (
    <a href={WA_URL} target="_blank" rel="noopener noreferrer" style={{
      display: 'inline-flex', alignItems: 'center', gap: 10,
      padding: pad,
      background: isPrimary ? '#25D366' : 'transparent',
      color: isPrimary ? '#fff' : RYG.ink,
      border: isPrimary ? 'none' : `1.5px solid ${RYG.ink}`,
      borderRadius: 999,
      textDecoration: 'none',
      fontFamily: 'var(--sans)',
      fontSize: fs, fontWeight: 600,
      letterSpacing: '0.04em',
      whiteSpace: 'nowrap',
      transition: 'transform 0.15s, background 0.15s',
      ...style,
    }}>
      <WhatsAppIcon size={fs + 4} color={isPrimary ? '#fff' : RYG.ink} />
      {children}
    </a>
  );
}

function SectionStamp({ children, color = RYG.cream, bg = RYG.leaf }) {
  return (
    <span style={{
      fontFamily: 'var(--mono)', fontSize: 11, fontWeight: 500,
      textTransform: 'uppercase', letterSpacing: '0.22em',
      color, background: bg,
      padding: '7px 13px',
      display: 'inline-block',
    }}>{children}</span>
  );
}

function HandUnderline({ color = RYG.hot, width = 220, strokeWidth = 3 }) {
  return (
    <svg viewBox="0 0 220 14" width={width} height={width * 0.064} fill="none" style={{ display: 'block', marginTop: 8 }}>
      <path d="M2 8 Q 30 2, 60 7 T 120 7 T 180 6 T 218 9"
        stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" />
    </svg>
  );
}

window.RYG = RYG;
window.WA_URL = WA_URL;
window.Monogram = Monogram;
window.FuchsiaInline = FuchsiaInline;
window.WhatsAppIcon = WhatsAppIcon;
window.WhatsAppButton = WhatsAppButton;
window.SectionStamp = SectionStamp;
window.HandUnderline = HandUnderline;
