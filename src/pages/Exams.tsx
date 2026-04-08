import { useState } from 'react';
import { exams } from '../data/exams';
import ExamCard from '../components/ExamCard';

const categories = ['All', 'Medical', 'Engineering', 'Commerce', 'Law', 'Government', 'Banking', 'Defence'];

export default function Exams() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = exams.filter((exam) => {
    const matchesCat = activeCategory === 'All' || exam.category === activeCategory;
    const matchesSearch =
      !search ||
      exam.name.toLowerCase().includes(search.toLowerCase()) ||
      exam.shortName.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

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
            தேர்வு வழிகாட்டி — Exam Guide
          </p>
          <h1
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800' }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Every Exam, Explained
          </h1>
          <p
            style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#5a4030' }}
            className="text-lg max-w-2xl mx-auto"
          >
            Eligibility, syllabus, best books, exam pattern and tips — for every major exam Tamil Nadu students appear for.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Search + filter bar */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
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
              placeholder="Search exams..."
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
                className="px-4 py-1.5 rounded-full text-[10px] tracking-widest uppercase font-medium transition-all hover:-translate-y-0.5"
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <p
          style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#7a6a55' }}
          className="text-[10px] tracking-widest uppercase mb-6"
        >
          Showing {filtered.length} exam{filtered.length !== 1 ? 's' : ''} — click any card to expand
        </p>

        {/* Exam cards */}
        {filtered.length > 0 ? (
          <div className="flex flex-col gap-4">
            {filtered.map((exam) => (
              <ExamCard key={exam.id} exam={exam} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-4xl mb-4">🔍</p>
            <p
              style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#5a4030' }}
              className="text-xl"
            >
              No exams found for "{search}"
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
