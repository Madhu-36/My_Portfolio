interface SectionDividerProps {
  /** Optional vertical spacing class. Defaults to 'my-0'. */
  className?: string;
}

/**
 * A decorative horizontal divider between major page sections.
 * Uses a gradient fade-in/out pattern aligned with the site accent palette.
 */
export default function SectionDivider({ className = '' }: SectionDividerProps) {
  return (
    <div
      aria-hidden="true"
      className={`relative h-px w-full overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-500/30 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/60" />
    </div>
  );
}
