import { useState } from 'react';
import type { Subject, Topic } from '../data/topics';
import GlassCard from './GlassCard';

interface TopicAccordionProps {
  subject: Subject;
}

function TopicRow({ topic }: { topic: Topic }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b last:border-0" style={{ borderColor: 'rgba(192,57,43,0.1)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-3 text-left hover:bg-red-50/40 transition-colors"
      >
        <span
          style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#2c1810' }}
          className="font-medium text-sm"
        >
          {topic.name}
        </span>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span
            style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#c0392b' }}
            className="text-[10px]"
          >
            {topic.subtopics.length} topics
          </span>
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
            fill="none"
            stroke="#c0392b"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="px-5 pb-4 pt-1">
          <ul className="space-y-1.5">
            {topic.subtopics.map((sub, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span
                  className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: '#c0392b' }}
                />
                <span
                  style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#4a3825' }}
                  className="text-sm leading-relaxed"
                >
                  {sub}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function TopicAccordion({ subject }: TopicAccordionProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <GlassCard className="overflow-hidden">
      {/* Subject header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/20 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{ background: 'rgba(192,57,43,0.1)', border: '1.5px solid rgba(192,57,43,0.2)' }}
          >
            {subject.icon}
          </div>
          <div className="text-left">
            <div className="flex items-center gap-2 flex-wrap">
              <h3
                style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0f00' }}
                className="text-base font-bold"
              >
                {subject.name}
              </h3>
              <span
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  background: 'rgba(192,57,43,0.1)',
                  color: '#c0392b',
                  border: '1px solid rgba(192,57,43,0.2)',
                }}
                className="text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full"
              >
                {subject.category}
              </span>
            </div>
            <p
              style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#6b5540' }}
              className="text-xs mt-0.5"
            >
              {subject.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0 ml-4">
          <span
            style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#c0392b' }}
            className="text-[10px] hidden sm:block"
          >
            {subject.topics.length} chapters
          </span>
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(192,57,43,0.1)' }}
          >
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="#c0392b"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </button>

      {/* Topics list */}
      {expanded && (
        <div className="border-t" style={{ borderColor: 'rgba(192,57,43,0.12)' }}>
          {subject.topics.map((topic, i) => (
            <TopicRow key={i} topic={topic} />
          ))}
        </div>
      )}
    </GlassCard>
  );
}
