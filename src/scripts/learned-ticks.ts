// Shows "Learned" ticks on lesson cards, from progress saved on this device.
export function markLearned(): number {
  let learned: string[] = [];
  try { learned = JSON.parse(localStorage.getItem('eli10:learned') || '[]'); } catch {}
  let n = 0;
  document.querySelectorAll<HTMLElement>('.lcard[data-topic]').forEach((c) => {
    if (learned.includes(c.dataset.topic!)) { c.querySelector<HTMLElement>('.lc-tick')!.hidden = false; n++; }
  });
  return n;
}
