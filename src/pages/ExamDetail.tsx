import { useParams, Link } from 'react-router-dom';
import { exams } from '../data/exams';
import GlassCard from '../components/GlassCard';

const categoryColors: Record<string, string> = {
  Medical: '#27ae60',
  Engineering: '#2980b9',
  Commerce: '#e67e22',
  Law: '#8e44ad',
  Government: '#16a085',
  Banking: '#2471a3',
  Defence: '#1a5276',
};

const sectionLabel = (text: string) => (
  <p
    style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#c0392b' }}
    className="text-[10px] tracking-widest uppercase font-medium mb-3"
  >
    {text}
  </p>
);

export default function ExamDetail() {
  const { examId } = useParams<{ examId: string }>();
  const exam = exams.find((e) => e.id === examId);

  if (!exam) {
    return (
      <div
        style={{ background: '#f5f0e8', minHeight: '60vh' }}
        className="flex flex-col items-center justify-center text-center px-6 py-20"
      >
        <div className="text-5xl mb-5">🔍</div>
        <h1
          style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800' }}
          className="text-3xl font-bold mb-4"
        >
          Exam Not Found
        </h1>
        <Link
          to="/exams"
          style={{ fontFamily: '"IBM Plex Mono", monospace', background: 'linear-gradient(135deg, #c0392b, #962d22)' }}
          className="text-white px-6 py-2.5 rounded-lg text-xs tracking-widest uppercase font-medium"
        >
          ← Back to Exams
        </Link>
      </div>
    );
  }

  const accentColor = categoryColors[exam.category] ?? '#c0392b';

  const ListSection = ({ items }: { items: string[] }) => (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
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
  );

  return (
    <div style={{ background: '#f5f0e8' }} className="min-h-screen">
      {/* Hero band */}
      <div
        className="relative py-12"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% -5%, rgba(192,57,43,0.1) 0%, transparent 70%)',
          borderBottom: '1px solid rgba(192,57,43,0.12)',
        }}
      >
        <div className="max-w-4xl mx-auto px-6">
          {/* Back link */}
          <Link
            to="/exams"
            style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#c0392b' }}
            className="inline-flex items-center gap-1.5 text-[11px] tracking-widest uppercase font-medium mb-6 hover:opacity-70 transition-opacity"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            All Exams
          </Link>

          {/* Exam header */}
          <div className="flex items-start gap-5">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ background: `${accentColor}15`, border: `2px solid ${accentColor}25` }}
            >
              {exam.icon}
            </div>
            <div>
              <div className="flex items-center gap-3 flex-wrap mb-1">
                <h1
                  style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0800' }}
                  className="text-3xl md:text-4xl font-bold"
                >
                  {exam.shortName}
                </h1>
                <span
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    background: `${accentColor}18`,
                    color: accentColor,
                    border: `1px solid ${accentColor}30`,
                  }}
                  className="text-[10px] tracking-widest uppercase px-3 py-1 rounded-full font-medium"
                >
                  {exam.category}
                </span>
              </div>
              <p
                style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#5a4030' }}
                className="text-base"
              >
                {exam.name}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-10 flex flex-col gap-6">

        {/* Eligibility */}
        <GlassCard className="p-6">
          {sectionLabel('Eligibility Criteria')}
          <ListSection items={exam.eligibility} />
        </GlassCard>

        {/* Exam Pattern */}
        <GlassCard className="p-6">
          {sectionLabel('Exam Pattern')}
          <ListSection items={exam.pattern} />
        </GlassCard>

        {/* Syllabus */}
        <GlassCard className="p-6">
          {sectionLabel('Syllabus Overview')}
          <ListSection items={exam.syllabus} />
        </GlassCard>

        {/* Best Books */}
        <GlassCard className="p-6">
          {sectionLabel('Best Books to Study')}
          <ul className="space-y-3">
            {exam.books.map((book, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  style={{
                    fontFamily: '"IBM Plex Mono", monospace',
                    background: `${accentColor}12`,
                    color: accentColor,
                    border: `1px solid ${accentColor}20`,
                    minWidth: '1.5rem',
                  }}
                  className="text-[10px] px-1.5 py-0.5 rounded text-center font-medium flex-shrink-0 mt-0.5"
                >
                  {i + 1}
                </span>
                <span
                  style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#3a2a14' }}
                  className="text-sm leading-relaxed"
                >
                  {book}
                </span>
              </li>
            ))}
          </ul>
        </GlassCard>

        {/* Tips */}
        {exam.tips.length > 0 && (
          <GlassCard className="p-6">
            {sectionLabel('Preparation Tips')}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {exam.tips.map((tip, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-lg"
                  style={{ background: `${accentColor}07`, border: `1px solid ${accentColor}15` }}
                >
                  <span style={{ color: accentColor }} className="text-base flex-shrink-0 mt-0.5">✦</span>
                  <span
                    style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#4a3020' }}
                    className="text-sm leading-relaxed"
                  >
                    {tip}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        )}

        {/* Back button */}
        <div className="flex justify-center pt-4 pb-8">
          <Link
            to="/exams"
            style={{
              fontFamily: '"IBM Plex Mono", monospace',
              background: 'linear-gradient(135deg, #c0392b, #962d22)',
            }}
            className="inline-flex items-center gap-2 text-white px-6 py-2.5 rounded-lg text-xs tracking-widest uppercase font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
            Back to All Exams
          </Link>
        </div>
      </div>
    </div>
  );
}
