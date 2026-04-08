import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export default function GlassCard({ children, className = '', onClick, hover = false }: GlassCardProps) {
  return (
    <div
      onClick={onClick}
      style={{
        background: 'rgba(255, 255, 255, 0.72)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.55)',
        boxShadow: '0 4px 24px rgba(44, 36, 22, 0.08)',
      }}
      className={`rounded-xl ${hover ? 'cursor-pointer transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 hover:bg-white/80' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
