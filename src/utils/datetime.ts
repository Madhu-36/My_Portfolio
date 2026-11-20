/**
 * Date and time manipulation and relative formatting utilities.
 */

/**
 * Returns a human-readable relative time string (e.g. "5 minutes ago", "in 2 hours").
 */
export function formatRelativeTime(date: Date | string | number): string {
  const now = Date.now();
  const target = typeof date === 'number' ? date : new Date(date).getTime();
  const diffInSeconds = Math.round((target - now) / 1000);
  const isPast = diffInSeconds < 0;
  const absSeconds = Math.abs(diffInSeconds);

  if (absSeconds < 60) {
    return 'just now';
  }

  const minutes = Math.floor(absSeconds / 60);
  if (minutes < 60) {
    return isPast ? `${minutes}m ago` : `in ${minutes}m`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return isPast ? `${hours}h ago` : `in ${hours}h`;
  }

  const days = Math.floor(hours / 24);
  return isPast ? `${days}d ago` : `in ${days}d`;
}

/**
 * Checks whether a given timestamp or Date is today in local time.
 */
export function isToday(date: Date | string | number): boolean {
  const d = new Date(date);
  const now = new Date();
  return (
    d.getDate() === now.getDate() &&
    d.getMonth() === now.getMonth() &&
    d.getFullYear() === now.getFullYear()
  );
}

/**
 * Formats a Date object or timestamp as YYYY-MM-DD.
 */
export function formatISODate(date: Date | string | number): string {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
