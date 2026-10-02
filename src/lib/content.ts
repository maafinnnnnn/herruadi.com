/** True if a summary is empty or still the unedited placeholder draft. */
export function isPlaceholderSummary(summary: string | undefined | null): boolean {
  return !summary || summary.trim().startsWith('PLACEHOLDER');
}
