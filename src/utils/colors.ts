/**
 * Color utility helpers for dynamic canvas, theme glows, and contrast adjustments.
 */

export function hexToRgba(hex: string, alpha: number = 1): string {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.substring(0, 2), 16) || 0;
  const g = parseInt(cleanHex.substring(2, 4), 16) || 0;
  const b = parseInt(cleanHex.substring(4, 6), 16) || 0;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function getPerceivedBrightness(r: number, g: number, b: number): number {
  return (r * 299 + g * 587 + b * 114) / 1000;
}

export const CYBER_PALETTE = {
  cyan: '#22d3ee',
  violet: '#8b5cf6',
  gold: '#f59e0b',
  emerald: '#10b981',
  ink: '#05060a',
} as const;
