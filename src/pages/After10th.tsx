import { useState } from 'react';
import { groups } from '../data/after10th';
import PathCard from '../components/PathCard';
import GlassCard from '../components/GlassCard';

export default function After10th() {
  const [activeGroup, setActiveGroup] = useState(groups[0].id);
  const current = groups.find((g) => g.id === activeGroup)!;

  return (
    <div style={{ background: '#f5f0e8' }} className="min-h-screen">
      {/* Page hero */}
      <div
        className="relative py-14"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% -5%, rgba(192,57,43,0.1) 0%, transparent 70%)',
          borderBottom: '1px solid rgba(192,57,43,0.12)',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p
            style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#c0392b' }}
            className="text-[10px] tracking-widest uppercase mb-3"
          >
            பத்தாம் வகுப்பிற்கு பின் — After 10th
          </p>
          <h1
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800' }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Choose Your Stream
          </h1>
          <p
            style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#5a4030' }}
            className="text-lg max-w-2xl mx-auto"
          >
            Tamil Nadu offers five major groups after Class 10. Each opens different career doors. Explore all paths below.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Group tabs */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {groups.map((group) => {
            const active = activeGroup === group.id;
            return (
              <button
                key={group.id}
                onClick={() => setActiveGroup(group.id)}
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  background: active
                    ? 'linear-gradient(135deg, #c0392b, #962d22)'
                    : 'rgba(255,255,255,0.72)',
                  backdropFilter: 'blur(16px)',
                  border: active ? '1.5px solid transparent' : '1.5px solid rgba(192,57,43,0.2)',
                  color: active ? 'white' : '#5a3a20',
                  boxShadow: active ? '0 4px 16px rgba(192,57,43,0.3)' : '0 2px 8px rgba(44,36,22,0.07)',
                }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs tracking-wider uppercase font-medium transition-all hover:-translate-y-0.5"
              >
                <span>{group.icon}</span>
                <span>{group.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active group header */}
        <GlassCard className="p-6 mb-8">
          <div className="flex items-start gap-5">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{
                background: `${current.color}15`,
                border: `2px solid ${current.color}25`,
              }}
            >
              {current.icon}
            </div>
            <div className="flex-1">
              <h2
                style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800' }}
                className="text-2xl font-bold mb-2"
              >
                {current.name}
              </h2>
              <div className="flex flex-wrap gap-1.5 mb-3">
                {current.subjects.map((sub, i) => (
                  <span
                    key={i}
                    style={{
                      fontFamily: '"IBM Plex Mono", monospace',
                      background: `${current.color}12`,
                      color: current.color,
                      border: `1px solid ${current.color}25`,
                    }}
                    className="text-[10px] px-2 py-0.5 rounded-full tracking-wide"
                  >
                    {sub}
                  </span>
                ))}
              </div>
              <p
                style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#4a3825' }}
                className="text-sm leading-relaxed"
              >
                {current.description}
              </p>
            </div>
          </div>
        </GlassCard>

        {/* Career paths grid */}
        <div className="mb-6">
          <p
            style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#c0392b' }}
            className="text-[10px] tracking-widest uppercase mb-5"
          >
            Career Paths — {current.careers.length} options
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {current.careers.map((career, i) => (
              <PathCard key={i} path={career} accentColor={current.color} />
            ))}
          </div>
        </div>

        {/* Navigation hint */}
        <div className="text-center mt-12">
          <p
            style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#7a6a55' }}
            className="text-sm mb-4"
          >
            Want exam-specific details?
          </p>
          <a
            href="/exams"
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              background: 'linear-gradient(135deg, #c0392b, #962d22)',
            }}
            className="inline-block text-white px-6 py-2.5 rounded-lg text-xs tracking-widest uppercase font-medium hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            View All Exams →
          </a>
        </div>
      </div>
    </div>
  );
}
