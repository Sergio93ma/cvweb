const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -6 * t));

/** Animates every `[data-count-to]` inside `section` from its current text to the target, once it is in view. */
export function countUpWhenVisible(section: Element, threshold: number, duration = 1500): void {
    const observer = new IntersectionObserver(
        (entries) => {
            if (!entries[0]?.isIntersecting) return;
            observer.disconnect();
            const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

            for (const el of section.querySelectorAll<HTMLElement>('[data-count-to]')) {
                const start = Number(el.textContent) || 0;
                const target = Number(el.dataset.countTo);
                if (reduceMotion) {
                    el.textContent = String(target);
                    continue;
                }
                const t0 = performance.now();

                const step = (now: number) => {
                    const progress = Math.min((now - t0) / duration, 1);
                    el.textContent = String(Math.round(start + (target - start) * easeOutExpo(progress)));
                    if (progress < 1) requestAnimationFrame(step);
                };
                requestAnimationFrame(step);
            }
        },
        { threshold },
    );
    observer.observe(section);
}
