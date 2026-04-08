import { useState } from 'react';
import { subjects } from '../data/topics';
import TopicAccordion from '../components/TopicAccordion';

const categories = ['All', 'Competitive Exams', 'JEE / Engineering', 'NEET / Medical', 'Government Exams'];

export default function Topics() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = subjects.filter((sub) => {
    const matchesCat = activeCategory === 'All' || sub.category === activeCategory;
    const matchesSearch =
      !search || sub.name.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const totalTopics = subjects.reduce((acc, s) => acc + s.topics.length, 0);
  const totalSubtopics = subjects.reduce(
    (acc, s) => acc + s.topics.reduce((a, t) => a + t.subtopics.length, 0),
    0
  );

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
            படிப்பு தலைப்புகள் — Study Topics
          </p>
          <h1
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800' }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Complete Syllabus Breakdown
          </h1>
          <p
            style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#5a4030' }}
            className="text-lg max-w-2xl mx-auto mb-8"
          >
            Every chapter, every topic — for Aptitude, Reasoning, English, GK, JEE Maths, NEET Physics, Chemistry, and Biology.
          </p>

          {/* Mini stats */}
          <div className="flex gap-6 justify-center flex-wrap">
            {[
              { value: subjects.length, label: 'Subjects' },
              { value: totalTopics, label: 'Chapters' },
              { value: `${totalSubtopics}+`, label: 'Sub-Topics' },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div
                  style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#c0392b' }}
                  className="text-2xl font-bold"
                >
                  {s.value}
                </div>
                <div
                  style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#7a6a55' }}
                  className="text-[10px] tracking-widest uppercase"
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4"
              fill="none"
              stroke="#c0392b"
              viewBox="0 0 24 24"
              style={{ opacity: 0.5 }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search subjects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                fontFamily: '"IBM Plex Mono", monospace',
                background: 'rgba(255,255,255,0.72)',
                backdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(192,57,43,0.2)',
                color: '#2c1810',
              }}
              className="w-full pl-9 pr-4 py-2.5 rounded-lg text-sm outline-none focus:border-red-400 transition-colors placeholder:text-stone-400"
            />
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => {
            const active = cat === activeCategory;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  background: active
                    ? 'linear-gradient(135deg, #c0392b, #962d22)'
                    : 'rgba(255,255,255,0.72)',
                  backdropFilter: 'blur(16px)',
                  border: active ? '1.5px solid transparent' : '1.5px solid rgba(192,57,43,0.2)',
                  color: active ? 'white' : '#5a3a20',
                }}
                className="px-4 py-1.5 rounded-full text-[10px] tracking-widest uppercase font-medium transition-all"
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Accordion list */}
        {filtered.length > 0 ? (
          <div className="flex flex-col gap-4">
            {filtered.map((subject) => (
              <TopicAccordion key={subject.id} subject={subject} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">📚</p>
            <p
              style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#5a4030' }}
              className="text-xl"
            >
              No subjects found for "{search}"
            </p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('All'); }}
              style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#c0392b' }}
              className="mt-4 text-xs tracking-widest uppercase underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
