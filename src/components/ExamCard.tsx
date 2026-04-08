import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Exam } from '../data/exams';
import GlassCard from './GlassCard';

interface ExamCardProps {
  exam: Exam;
}

type Tab = 'eligibility' | 'syllabus' | 'books' | 'pattern';

const categoryColors: Record<string, string> = {
  Medical: '#27ae60',
  Engineering: '#2980b9',
  Commerce: '#e67e22',
  Law: '#8e44ad',
  Government: '#16a085',
  Banking: '#2471a3',
  Defence: '#1a5276',
};

export default function ExamCard({ exam }: ExamCardProps) {
  const [activeTab, setActiveTab] = useState<Tab>('eligibility');
  const [expanded, setExpanded] = useState(false);

  const accentColor = categoryColors[exam.category] ?? '#c0392b';
  const tabs: { key: Tab; label: string }[] = [
    { key: 'eligibility', label: 'Eligibility' },
    { key: 'syllabus', label: 'Syllabus' },
    { key: 'books', label: 'Books' },
    { key: 'pattern', label: 'Pattern' },
  ];

  const tabData: Record<Tab, string[]> = {
    eligibility: exam.eligibility,
    syllabus: exam.syllabus,
    books: exam.books,
    pattern: exam.pattern,
  };

  return (
    <GlassCard className="overflow-hidden">
      {/* Card header */}
      <div
        className="p-5 cursor-pointer select-none flex items-start justify-between gap-4"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex items-start gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
            style={{ background: `${accentColor}18`, border: `1.5px solid ${accentColor}30` }}
          >
            {exam.icon}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <Link
                to={`/exams/${exam.id}`}
                onClick={(e) => e.stopPropagation()}
                style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0f00' }}
                className="text-lg font-bold leading-tight hover:text-red-700 hover:underline underline-offset-2 transition-colors"
              >
                {exam.shortName}
              </Link>
              <span
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  background: `${accentColor}18`,
                  color: accentColor,
                  border: `1px solid ${accentColor}30`,
                }}
                className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full font-medium"
              >
                {exam.category}
              </span>
            </div>
            <p
              style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#5a4a35' }}
              className="text-sm mt-0.5"
            >
              {exam.name}
            </p>
          </div>
        </div>
        <div
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300"
          style={{ background: 'rgba(192,57,43,0.1)', color: '#c0392b' }}
        >
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Expanded content */}
      {expanded && (
        <div className="border-t" style={{ borderColor: 'rgba(192,57,43,0.12)' }}>
          {/* Tabs */}
          <div className="flex border-b" style={{ borderColor: 'rgba(192,57,43,0.12)' }}>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  color: activeTab === tab.key ? '#c0392b' : '#7a6a55',
                  borderBottom: activeTab === tab.key ? '2px solid #c0392b' : '2px solid transparent',
                }}
                className="flex-1 py-2.5 text-[10px] tracking-widest uppercase font-medium transition-colors hover:text-red-700"
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <ul className="p-5 space-y-2">
            {tabData[activeTab].map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: accentColor }}
                />
                <span
                  style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#3a2a14' }}
                  className="text-sm leading-relaxed"
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {exam.tips.length > 0 && (
            <div
              className="mx-5 mb-5 p-4 rounded-lg"
              style={{ background: 'rgba(192,57,43,0.06)', border: '1px solid rgba(192,57,43,0.15)' }}
            >
              <p
                style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#c0392b' }}
                className="text-[10px] tracking-widest uppercase font-medium mb-2"
              >
                Quick Tips
              </p>
              <ul className="space-y-1.5">
                {exam.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-xs mt-0.5">✦</span>
                    <span
                      style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#5a3a20' }}
                      className="text-sm"
                    >
                      {tip}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </GlassCard>
  );
}
