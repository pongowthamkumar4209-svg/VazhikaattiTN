import { useState } from 'react';
import { degreeTracks, examTimelines } from '../data/degreeNext';
import GlassCard from '../components/GlassCard';

export default function DegreeNext() {
  const [activeTrack, setActiveTrack] = useState(degreeTracks[0].id);
  const current = degreeTracks.find((t) => t.id === activeTrack)!;
  const [openTimeline, setOpenTimeline] = useState<string | null>(null);

  return (
    <div style={{ background: '#f5f0e8' }} className="min-h-screen">
      {/* Page hero */}
      <div
        className="relative py-8 md:py-14"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% -5%, rgba(192,57,43,0.1) 0%, transparent 70%)',
          borderBottom: '1px solid rgba(192,57,43,0.12)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
          <p style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#c0392b' }} className="text-[10px] tracking-widest uppercase mb-2 md:mb-3">
            பட்டப்படிப்பிற்கு பின் — After Degree
          </p>
          <h1
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800' }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4"
          >
            What's Next After Your Degree?
          </h1>
          <p style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#5a4030' }} className="text-sm md:text-lg max-w-2xl mx-auto px-2">
            Graduated and wondering what to do? Here are all the proven paths — with exam details and preparation timelines.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
        {/* Track tabs — horizontal scroll on mobile */}
        <div
          className="flex gap-2 md:gap-3 mb-8 md:mb-10 overflow-x-auto pb-2"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {degreeTracks.map((track) => {
            const active = activeTrack === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  background: active ? 'linear-gradient(135deg, #c0392b, #962d22)' : 'rgba(255,255,255,0.72)',
                  backdropFilter: 'blur(16px)',
                  border: active ? '1.5px solid transparent' : '1.5px solid rgba(192,57,43,0.2)',
                  color: active ? 'white' : '#5a3a20',
                  boxShadow: active ? '0 4px 16px rgba(192,57,43,0.3)' : '0 2px 8px rgba(44,36,22,0.07)',
                  minHeight: 44,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs tracking-wide uppercase font-medium transition-all"
              >
                <span>{track.icon}</span>
                <span>{track.degree}</span>
              </button>
            );
          })}
        </div>

        {/* Track description */}
        <GlassCard className="p-4 md:p-6 mb-6 md:mb-8">
          <div className="flex items-center gap-3 md:gap-4">
            <div
              className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-2xl md:text-3xl flex-shrink-0"
              style={{ background: 'rgba(192,57,43,0.1)', border: '1.5px solid rgba(192,57,43,0.2)' }}
            >
              {current.icon}
            </div>
            <div>
              <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800' }} className="text-lg md:text-xl font-bold mb-1">
                {current.degree}
              </h2>
              <p style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#5a4030' }} className="text-sm">
                {current.description}
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Next steps — single col mobile, 2 col lg */}
        <p style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#c0392b' }} className="text-[10px] tracking-widest uppercase mb-4 md:mb-6">
          {current.nextSteps.length} Pathways Available
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 mb-12 md:mb-16">
          {current.nextSteps.map((step, i) => (
            <GlassCard key={i} className="p-4 md:p-5 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 md:w-11 md:h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: 'rgba(192,57,43,0.1)', border: '1.5px solid rgba(192,57,43,0.2)' }}
                >
                  {step.icon}
                </div>
                <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800' }} className="font-bold text-sm md:text-base leading-snug">
                  {step.name}
                </h3>
              </div>

              <p style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#4a3825' }} className="text-sm leading-relaxed">
                {step.description}
              </p>

              <div className="grid grid-cols-1 gap-2 pt-1">
                {[
                  { emoji: '📅', label: 'Timeline', value: step.timeline },
                  { emoji: '✅', label: 'Eligibility', value: step.eligibility },
                  { emoji: '🎯', label: 'Outcome', value: step.outcome },
                ].map(({ emoji, label, value }) => (
                  <div
                    key={label}
                    className="flex items-start gap-2 p-2.5 rounded-lg"
                    style={{ background: 'rgba(192,57,43,0.05)' }}
                  >
                    <span className="text-sm">{emoji}</span>
                    <div>
                      <p style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#c0392b' }} className="text-[9px] tracking-widest uppercase mb-0.5">
                        {label}
                      </p>
                      <p style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#4a3825' }} className="text-xs leading-snug">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Preparation Timelines */}
        <div className="pt-8 md:pt-10" style={{ borderTop: '1px solid rgba(192,57,43,0.15)' }}>
          <p style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#c0392b' }} className="text-[10px] tracking-widest uppercase mb-2">
            Preparation Timelines
          </p>
          <h2 style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800' }} className="text-xl md:text-2xl font-bold mb-5 md:mb-6">
            Month-by-Month Plans
          </h2>

          <div className="flex flex-col gap-3 md:gap-4">
            {examTimelines.map((timeline) => (
              <GlassCard key={timeline.exam} className="overflow-hidden">
                <button
                  onClick={() => setOpenTimeline(openTimeline === timeline.exam ? null : timeline.exam)}
                  className="w-full flex items-center justify-between px-4 md:px-5 py-4 text-left hover:bg-white/20 transition-colors"
                  style={{ minHeight: 56 }}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">📅</span>
                    <span style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800' }} className="font-bold text-sm md:text-base">
                      {timeline.exam} Preparation Timeline
                    </span>
                  </div>
                  <svg
                    className={`w-4 h-4 flex-shrink-0 transition-transform duration-300 ${openTimeline === timeline.exam ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="#c0392b"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {openTimeline === timeline.exam && (
                  <div className="px-4 md:px-5 pb-5" style={{ borderTop: '1px solid rgba(192,57,43,0.12)' }}>
                    <div className="mt-4 flex flex-col gap-3">
                      {timeline.months.map((m, i) => (
                        <div key={i} className="flex items-start gap-3 md:gap-4">
                          <div
                            className="flex-shrink-0 w-20 md:w-28 text-right"
                            style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#c0392b' }}
                          >
                            <span className="text-xs font-medium">{m.month}</span>
                          </div>
                          <div className="flex-shrink-0 flex flex-col items-center mt-0.5">
                            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#c0392b' }} />
                            {i < timeline.months.length - 1 && (
                              <div className="w-0.5 h-8" style={{ background: 'rgba(192,57,43,0.25)' }} />
                            )}
                          </div>
                          <p style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#3a2a14' }} className="text-sm leading-relaxed flex-1">
                            {m.activity}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
