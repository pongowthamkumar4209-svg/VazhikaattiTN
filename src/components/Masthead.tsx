import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/after-10th', label: 'After 10th' },
  { to: '/exams', label: 'Exams' },
  { to: '/topics', label: 'Topics' },
  { to: '/degree-next', label: 'After Degree' },
];

export default function Masthead() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        background: 'linear-gradient(135deg, #7a1f15 0%, #962d22 35%, #c0392b 65%, #7a1f15 100%)',
      }}
      className="sticky top-0 z-50 shadow-lg"
    >
      {/* Top strip — hidden on very small screens */}
      <div className="hidden sm:flex border-b border-white/10 px-4 py-1 items-center justify-between max-w-7xl mx-auto">
        <span
          style={{ fontFamily: '"IBM Plex Mono", monospace' }}
          className="text-[10px] tracking-widest uppercase text-red-200/70"
        >
          Tamil Nadu Study Guidance Platform
        </span>
        <span
          style={{ fontFamily: '"IBM Plex Mono", monospace' }}
          className="text-[10px] tracking-widest uppercase text-red-200/70"
        >
          உங்கள் வழி · உங்கள் வெற்றி
        </span>
      </div>

      {/* Main header row */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        {/* Hamburger — left side on mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-2 rounded hover:bg-white/10 transition-colors flex-shrink-0"
          aria-label="Toggle menu"
          style={{ minWidth: 44, minHeight: 44 }}
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`} />
          </div>
        </button>

        {/* Brand — centered on mobile, left on desktop */}
        <Link to="/" className="flex items-center gap-2.5 group md:mr-auto mx-auto md:mx-0">
          <div
            className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/15 border border-white/30 flex items-center justify-center group-hover:bg-white/25 transition-all flex-shrink-0"
            style={{ fontSize: '1.25rem', color: '#f5c6c0', fontWeight: 700 }}
          >
            ☭
          </div>
          <div>
            <div
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              className="text-white font-bold text-lg md:text-xl leading-none tracking-tight"
            >
              VazhikaattiTN
            </div>
            <div
              style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              className="text-red-200/80 text-[9px] md:text-[10px] tracking-widest uppercase leading-tight"
            >
              வழிகாட்டி
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                style={{ fontFamily: '"IBM Plex Mono", monospace' }}
                className={`px-4 py-2 rounded text-[11px] tracking-widest uppercase font-medium transition-all ${
                  active
                    ? 'bg-white/20 text-white border border-white/30'
                    : 'text-red-100/80 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Spacer so brand stays centered on mobile */}
        <div className="md:hidden w-[44px] flex-shrink-0" />
      </div>

      {/* Mobile slide-down menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-96' : 'max-h-0'}`}
        style={{ borderTop: menuOpen ? '1px solid rgba(255,255,255,0.1)' : 'none' }}
      >
        <div className="bg-black/20 backdrop-blur-sm">
          {navLinks.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                style={{ fontFamily: '"IBM Plex Mono", monospace', minHeight: 48 }}
                className={`flex items-center px-6 py-3 text-[11px] tracking-widest uppercase font-medium border-b border-white/5 transition-colors ${
                  active ? 'text-white bg-white/10' : 'text-red-100/80 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          {/* Tamil tagline visible in mobile menu */}
          <div className="px-6 py-3 border-t border-white/10">
            <p style={{ fontFamily: '"IBM Plex Mono", monospace' }} className="text-red-200/50 text-[9px] tracking-widest">
              உங்கள் வழி · உங்கள் வெற்றி
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
