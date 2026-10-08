/**
 * Smooth-scrolls to a section, leaving it a third of the viewport from the top.
 * Works both with window scrolling (desktop) and the fixed, scrollable <main> used on tablet/mobile.
 */
export function scrollToSection(id: string): void {
    const target = document.getElementById(id);
    if (!target) return;

    let container: HTMLElement | null = target.parentElement;
    while (container) {
        const { overflowY } = getComputedStyle(container);
        if (overflowY === 'auto' || overflowY === 'scroll') break;
        container = container.parentElement;
    }

    const rect = target.getBoundingClientRect();
    const offset = window.innerHeight * 0.33;

    if (container) {
        const top = rect.top - container.getBoundingClientRect().top + container.scrollTop;
        container.scrollTo({ top: top - offset, behavior: 'smooth' });
    } else {
        window.scrollTo({ top: rect.top + window.scrollY - offset, behavior: 'smooth' });
    }
}
