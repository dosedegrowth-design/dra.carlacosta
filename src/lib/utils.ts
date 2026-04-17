/**
 * Concatena classes Tailwind condicionalmente, ignorando valores falsy.
 */
export function cn(...inputs: Array<string | number | false | null | undefined>): string {
  return inputs.filter(Boolean).join(" ");
}
