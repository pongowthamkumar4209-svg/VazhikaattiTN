import { Link } from 'react-router-dom';
import GlassCard from '../components/GlassCard';

const navCards = [
  {
    to: '/after-10th',
    icon: '🏫',
    title: 'After 10th',
    tamil: 'பத்தாம் வகுப்பிற்கு பின்',
    desc: 'Biology, CS, Commerce, Arts & Vocational groups — all career paths explained.',
    color: '#27ae60',
  },
  {
    to: '/exams',
    icon: '📋',
    title: 'Exam Guide',
    tamil: 'தேர்வு வழிகாட்டி',
    desc: 'NEET, JEE, TNPSC, UPSC, CA, CLAT, SSC, Bank PO, NDA — eligibility, syllabus, books.',
    color: '#c0392b',
  },
  {
    to: '/topics',
    icon: '📚',
    title: 'Study Topics',
    tamil: 'படிப்பு தலைப்புகள்',
    desc: 'Aptitude, Reasoning, English, GK, JEE Maths, NEET Physics, Chemistry, Biology.',
    color: '#2980b9',
  },
  {
    to: '/degree-next',
    icon: '🎓',
    title: 'After Degree',
    tamil: 'பட்டப்படிப்பிற்கு பின்',
    desc: 'GATE, CAT, GRE, UPSC, TNPSC — what to do after BSc, BE, BA, or BCom.',
    color: '#8e44ad',
  },
];

const stats = [
  { value: '5+', label: 'Stream Groups', icon: '🏫' },
  { value: '13', label: 'Exams Covered', icon: '📋' },
  { value: '8', label: 'Subject Areas', icon: '📚' },
  { value: '100%', label: 'Free', icon: '✨' },
];

const features = [
  {
    icon: '🗺️',
    title: 'Complete Roadmaps',
    desc: 'Every career path from 10th class to job — mapped step by step.',
  },
  {
    icon: '📖',
    title: 'Book Recommendations',
    desc: 'Best books for each exam, curated by experts and toppers.',
  },
  {
    icon: '🎯',
    title: 'Tamil Nadu Focused',
    desc: 'TNEA, TNPSC, Samacheer curriculum — built for TN students.',
  },
  {
    icon: '🌐',
    title: 'All Streams Covered',
    desc: 'From NEET to NDA, from CA Foundation to GATE — nothing left out.',
  },
];

export default function Home() {
  return (
    <div style={{ background: '#f5f0e8' }} className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(192,57,43,0.12) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: 'linear-gradient(90deg, #c0392b, #962d22, #c0392b)' }}
        />

        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-10 md:pt-20 pb-10 md:pb-16 text-center relative">
          {/* Icon */}
          <div className="flex justify-center mb-5 md:mb-6">
            <div
              className="w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center text-3xl md:text-5xl"
              style={{
                background: 'rgba(255,255,255,0.72)',
                backdropFilter: 'blur(16px)',
                border: '2px solid rgba(192,57,43,0.2)',
                boxShadow: '0 8px 32px rgba(192,57,43,0.15)',
              }}
            >
              🗺️
            </div>
          </div>

          {/* Eyebrow */}
          <p
            style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#c0392b' }}
            className="text-[10px] md:text-xs tracking-widest uppercase mb-3 md:mb-4"
          >
            Tamil Nadu Study Guidance Platform
          </p>

          {/* Main heading */}
          <h1
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800', lineHeight: '1.15' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4"
          >
            VazhikaattiTN
          </h1>

          {/* Tamil tagline */}
          <p
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#c0392b', fontStyle: 'italic' }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3"
          >
            உங்கள் வழி, உங்கள் வெற்றி
          </p>

          <p
            style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#5a4030' }}
            className="text-sm md:text-lg mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed px-2"
          >
            Your path, your victory — a free, complete study guidance platform built for every Tamil Nadu student, from Class 10 to post-graduation.
          </p>

          {/* CTA buttons — stacked on mobile, row on sm+ */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10 md:mb-16 px-4 sm:px-0">
            <Link
              to="/after-10th"
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                background: 'linear-gradient(135deg, #c0392b, #962d22)',
                minHeight: 48,
              }}
              className="text-white px-6 py-3 rounded-lg text-xs tracking-widest uppercase font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center"
            >
              Explore After 10th →
            </Link>
            <Link
              to="/exams"
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                background: 'rgba(255,255,255,0.72)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(192,57,43,0.3)',
                color: '#c0392b',
                minHeight: 48,
              }}
              className="px-6 py-3 rounded-lg text-xs tracking-widest uppercase font-medium hover:bg-white/80 transition-all flex items-center justify-center"
            >
              Browse Exams →
            </Link>
          </div>

          {/* Stats — 2 cols on mobile, 4 on sm+ */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  background: 'rgba(255,255,255,0.72)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.55)',
                  boxShadow: '0 4px 16px rgba(44,36,22,0.07)',
                }}
                className="rounded-xl px-3 py-3 md:px-4 md:py-4 text-center"
              >
                <div className="text-xl md:text-2xl mb-1">{stat.icon}</div>
                <div
                  style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#c0392b' }}
                  className="text-xl md:text-2xl font-bold"
                >
                  {stat.value}
                </div>
                <div
                  style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#7a6a55' }}
                  className="text-[9px] md:text-[10px] tracking-widest uppercase"
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(192,57,43,0.2), transparent)' }} />
      </div>

      {/* Navigation Cards — 1 col mobile, 2 sm, 4 lg */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <p
            style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#c0392b' }}
            className="text-xs tracking-widest uppercase mb-3"
          >
            Explore the Platform
          </p>
          <h2
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800' }}
            className="text-2xl md:text-3xl font-bold"
          >
            Where do you want to start?
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {navCards.map((card) => (
            <Link key={card.to} to={card.to} className="block group">
              <GlassCard className="p-5 md:p-6 h-full transition-all duration-200 group-hover:shadow-xl group-hover:-translate-y-1 group-hover:bg-white/80">
                <div className="flex sm:block items-center gap-4 sm:gap-0">
                  <div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl flex items-center justify-center text-xl md:text-2xl mb-0 sm:mb-4 flex-shrink-0"
                    style={{ background: `${card.color}15`, border: `1.5px solid ${card.color}25` }}
                  >
                    {card.icon}
                  </div>
                  <div className="sm:hidden flex-1 min-w-0">
                    <h3
                      style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800' }}
                      className="text-base font-bold"
                    >
                      {card.title}
                    </h3>
                    <p style={{ fontFamily: '"IBM Plex Mono", monospace', color: card.color }} className="text-[10px] tracking-wider">
                      {card.tamil}
                    </p>
                  </div>
                </div>
                <div className="hidden sm:block">
                  <h3
                    style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800' }}
                    className="text-lg font-bold mb-1"
                  >
                    {card.title}
                  </h3>
                  <p style={{ fontFamily: '"IBM Plex Mono", monospace', color: card.color }} className="text-[10px] tracking-wider mb-3">
                    {card.tamil}
                  </p>
                </div>
                <p
                  style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#5a4a35' }}
                  className="text-sm leading-relaxed mt-2 sm:mt-0"
                >
                  {card.desc}
                </p>
                <div className="mt-3 md:mt-4 flex items-center gap-1" style={{ color: card.color }}>
                  <span style={{ fontFamily: '"IBM Plex Mono", monospace' }} className="text-[11px] tracking-wider font-medium">
                    Explore
                  </span>
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
      <section
        className="py-10 md:py-16"
        style={{ background: 'rgba(192,57,43,0.04)', borderTop: '1px solid rgba(192,57,43,0.1)' }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-8 md:mb-12">
            <p style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#c0392b' }} className="text-xs tracking-widest uppercase mb-3">
              Why VazhikaattiTN?
            </p>
            <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800' }} className="text-2xl md:text-3xl font-bold">
              Everything a Tamil Nadu student needs
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {features.map((f) => (
              <GlassCard key={f.title} className="p-4 md:p-5 flex sm:block items-center gap-4 sm:gap-0 sm:text-center">
                <div className="text-2xl md:text-3xl mb-0 sm:mb-3 flex-shrink-0">{f.icon}</div>
                <div>
                  <h4 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800' }} className="font-bold text-sm md:text-base mb-1 md:mb-2">
                    {f.title}
                  </h4>
                  <p style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#5a4a35' }} className="text-sm leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16 text-center">
        <GlassCard className="p-6 md:p-10">
          <p style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#c0392b' }} className="text-xs tracking-widest uppercase mb-4">
            Start Your Journey
          </p>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800' }} className="text-2xl md:text-3xl font-bold mb-4">
            உங்கள் வழியை தேர்ந்தெடுங்கள்
          </h2>
          <p style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#5a4030' }} className="text-sm md:text-base mb-6 md:mb-8 max-w-xl mx-auto">
            Choose your path. Study smart. Achieve your goal. This platform has everything you need — for free, forever.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/after-10th"
              style={{ fontFamily: '"IBM Plex Mono", monospace', background: 'linear-gradient(135deg, #c0392b, #962d22)', minHeight: 48 }}
              className="text-white px-7 py-3 rounded-lg text-xs tracking-widest uppercase font-medium shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center"
            >
              I'm in Class 10–12
            </Link>
            <Link
              to="/degree-next"
              style={{ fontFamily: '"IBM Plex Mono", monospace', border: '1.5px solid rgba(192,57,43,0.4)', color: '#c0392b', minHeight: 48 }}
              className="px-7 py-3 rounded-lg text-xs tracking-widest uppercase font-medium hover:bg-red-50 transition-all flex items-center justify-center"
            >
              I have a Degree
            </Link>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
