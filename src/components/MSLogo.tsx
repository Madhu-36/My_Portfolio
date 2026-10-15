export default function MSLogo({ size = 36, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background rounded square */}
      <rect width="100" height="100" rx="22" fill="currentColor" />

      {/* Letter M */}
      <path
        d="M18 75V30L32 55L46 30V75"
        stroke="#0a0a0a"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Letter S */}
      <path
        d="M82 38C82 33 78 28 70 28C62 28 58 33 58 38C58 48 82 45 82 58C82 65 77 72 69 72C61 72 56 65 56 58"
        stroke="#0a0a0a"
        strokeWidth="7"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
