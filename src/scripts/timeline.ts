import type { ExperienceItem, YearMonth } from '../data/types';

export interface TimelinePosition {
    left: number;
    right: number;
    delay: number;
    duration: number;
}

const ANIMATION_DURATION_S = 1.2;
const toMonths = ({ year, month }: YearMonth) => year * 12 + month;
const nowInMonths = (now: Date) => now.getFullYear() * 12 + (now.getMonth() + 1);

/**
 * Bar position of every experience on the timeline, as % margins.
 * Depends on today's date, so it runs at build time AND again in the browser.
 */
export function timelinePositions(experiences: ExperienceItem[], now: Date): TimelinePosition[] {
    const starts = experiences.map((e) => toMonths(e.start));
    const ends = experiences.map((e) => (e.end ? toMonths(e.end) : nowInMonths(now)));

    const minStart = Math.min(...starts);
    const maxStart = Math.max(...starts);
    let maxEnd = Math.max(...ends);
    let range = maxEnd - minStart;

    // Keep the latest bar at least a third of the axis long
    if ((maxEnd - maxStart) / range < 1 / 3) {
        maxEnd = (3 * maxStart - minStart) / 2;
        range = maxEnd - minStart;
    }

    return experiences.map((e) => {
        const left = ((toMonths(e.start) - minStart) / range) * 100;
        const right = 100 - (((e.end ? toMonths(e.end) : maxEnd) - minStart) / range) * 100;
        return {
            left,
            right,
            delay: (left / 100) * ANIMATION_DURATION_S,
            duration: ((100 - left - right) / 100) * ANIMATION_DURATION_S,
        };
    });
}

/** Years shown on the axis, from the first start to the current year. */
export function timelineYears(experiences: ExperienceItem[], now: Date): number[] {
    const minStart = Math.min(...experiences.map((e) => toMonths(e.start)));
    const maxEnd = Math.max(...experiences.map((e) => (e.end ? toMonths(e.end) : nowInMonths(now))));
    const years: number[] = [];
    for (let year = Math.floor(minStart / 12); year < Math.ceil(maxEnd / 12); year++) years.push(year);
    return years;
}

export const positionStyle = (p: TimelinePosition) =>
    `margin-left: ${p.left}%; margin-right: ${p.right}%; animation-delay: ${p.delay}s; animation-duration: ${p.duration}s;`;
