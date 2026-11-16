export const BRIEF_EVENT = "brief:open";

export function openBrief() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(BRIEF_EVENT));
}
