import type { CareerPath } from '../data/after10th';
import GlassCard from './GlassCard';

interface PathCardProps {
  path: CareerPath;
  accentColor?: string;
}

export default function PathCard({ path, accentColor = '#c0392b' }: PathCardProps) {
  return (
    <GlassCard className="p-5 flex flex-col gap-3 h-full" hover>
      {/* Icon + name */}
      <div className="flex items-start gap-3">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
          style={{ background: `${accentColor}15`, border: `1.5px solid ${accentColor}25` }}
        >
          {path.icon}
        </div>
        <div>
          <h4
            style={{ fontFamily: '"Playfair Display", Georgia, serif', color: '#1a0f00' }}
            className="font-bold text-sm leading-snug"
          >
            {path.name}
          </h4>
          <span
            style={{ fontFamily: '"IBM Plex Mono", monospace', color: accentColor }}
            className="text-[10px] tracking-wider"
          >
            {path.duration}
          </span>
        </div>
      </div>

      {/* Description */}
      <p
        style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#4a3a28' }}
        className="text-sm leading-relaxed flex-1"
      >
        {path.description}
      </p>

      {/* Exams */}
      {path.exams && path.exams.length > 0 && (
        <div>
          <p
            style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#7a6a55' }}
            className="text-[9px] tracking-widest uppercase mb-1.5"
          >
            Entrance Exams
          </p>
          <div className="flex flex-wrap gap-1.5">
            {path.exams.map((exam, i) => (
              <span
                key={i}
                style={{
                  fontFamily: '"IBM Plex Mono", monospace',
                  background: `${accentColor}12`,
                  color: accentColor,
                  border: `1px solid ${accentColor}25`,
                }}
                className="text-[10px] px-2 py-0.5 rounded tracking-wide"
              >
                {exam}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Colleges */}
      {path.colleges && path.colleges.length > 0 && (
        <div>
          <p
            style={{ fontFamily: '"IBM Plex Mono", monospace', color: '#7a6a55' }}
            className="text-[9px] tracking-widest uppercase mb-1.5"
          >
            Top Colleges
          </p>
          <ul className="space-y-1">
            {path.colleges.map((college, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <span
                  className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                  style={{ background: accentColor }}
                />
                <span
                  style={{ fontFamily: '"Source Serif 4", Georgia, serif', color: '#5a4835' }}
                  className="text-xs leading-snug"
                >
                  {college}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </GlassCard>
  );
}
