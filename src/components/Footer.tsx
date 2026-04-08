import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #7a1f15 0%, #962d22 50%, #7a1f15 100%)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
      }}
      className="mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div
              style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
              className="text-white text-xl font-bold mb-2"
            >
              VazhikaattiTN
            </div>
            <p
              style={{ fontFamily: '"Source Serif 4", Georgia, serif' }}
              className="text-red-200/70 text-sm leading-relaxed"
            >
              A free study guidance platform for Tamil Nadu students — covering all streams, exams, and career paths.
            </p>
            <p
              style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              className="text-red-300/60 text-xs mt-3 tracking-wide"
            >
              உங்கள் வழி, உங்கள் வெற்றி
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p
              style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              className="text-red-200/60 text-[10px] tracking-widest uppercase mb-4"
            >
              Quick Links
            </p>
            <div className="flex flex-col gap-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/after-10th', label: 'After 10th — Groups & Careers' },
                { to: '/exams', label: 'Exam Guide' },
                { to: '/topics', label: 'Study Topics' },
                { to: '/degree-next', label: 'After Degree' },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{ fontFamily: '"Source Serif 4", Georgia, serif' }}
                  className="text-red-100/70 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Exams */}
          <div>
            <p
              style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              className="text-red-200/60 text-[10px] tracking-widest uppercase mb-4"
            >
              Key Exams Covered
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['NEET', 'JEE', 'TNEA', 'UPSC', 'TNPSC', 'CA Foundation', 'CLAT', 'GATE', 'CAT', 'SSC CGL', 'Bank PO', 'NDA'].map((exam) => (
                <span
                  key={exam}
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                  className="text-red-100/80 text-[10px] px-2 py-0.5 rounded tracking-wide"
                >
                  {exam}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
        >
          <p
            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
            className="text-red-200/50 text-[10px] tracking-wider"
          >
            © 2025 VazhikaattiTN — Built for Tamil Nadu students
          </p>
          <p
            style={{ fontFamily: '"IBM Plex Mono", monospace' }}
            className="text-red-200/40 text-[10px] tracking-wider"
          >
            Free · Open · Always Accurate
          </p>
        </div>
      </div>
    </footer>
  );
}
