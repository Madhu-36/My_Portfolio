import { ReactNode } from 'react';

type BadgeVariant = 'accent' | 'ghost' | 'gold' | 'outline' | 'neural' | 'emerald' | 'cyan-glow' | 'gold-glow';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  accent: 'border-accent-500/30 bg-accent-500/10 text-accent-300',
  ghost: 'border-ink-700 bg-ink-800/50 text-ink-300',
  gold: 'border-gold-500/30 bg-gold-500/10 text-gold-300',
  outline: 'border-ink-600 bg-transparent text-ink-300',
  neural: 'border-neural-500/30 bg-neural-500/10 text-neural-400',
  emerald: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
  'cyan-glow': 'border-accent-400/50 bg-accent-400/10 text-accent-300 shadow-[0_0_8px_rgba(34,211,238,0.25)]',
  'gold-glow': 'border-gold-400/50 bg-gold-400/10 text-gold-300 shadow-[0_0_8px_rgba(245,158,11,0.25)]',
};

/**
 * Small pill badge for skills, technologies, and labels.
 * Supports accent, ghost, gold, and outline variants.
 */
export function Badge({ children, variant = 'ghost', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-xs tracking-wide transition-colors ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
