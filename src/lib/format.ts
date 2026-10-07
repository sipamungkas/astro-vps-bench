/**
 * Shared display formatting.
 *
 * Kept in one place so a plan's price reads identically on the dashboard, the
 * comparison matrix and its detail page.
 */

const ZERO_DECIMAL = new Set(['IDR', 'JPY', 'KRW', 'VND', 'CLP']);

/**
 * Money with the right precision for the currency.
 *
 * `Intl` gives IDR two fraction digits, which reads as false precision on a
 * price nobody can pay by the cent. Currencies without a commonly used minor
 * unit are rendered whole.
 */
export function money(
  value: number | null | undefined,
  currency: string | null | undefined
): string {
  if (value === null || value === undefined) return '—';
  const cur = currency || 'USD';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: cur,
    minimumFractionDigits: ZERO_DECIMAL.has(cur.toUpperCase()) ? 0 : 2,
    maximumFractionDigits: ZERO_DECIMAL.has(cur.toUpperCase()) ? 0 : 2,
  }).format(value);
}

export function num(value: number | null | undefined): string {
  if (value === null || value === undefined) return '—';
  return value.toLocaleString('en-US');
}