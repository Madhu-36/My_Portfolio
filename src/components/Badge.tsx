import { ReactNode } from 'react';

type BadgeVariant = 'accent' | 'ghost' | 'gold' | 'outline';

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
