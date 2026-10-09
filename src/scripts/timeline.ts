import type { ExperienceItem, YearMonth } from '../data/types';

/** Months of empty space after "today", so the playhead never sits on the edge. */
const FUTURE_MONTHS = 3;
/** A clip's minimum width can't take more than this share of the lane (narrow screens fall back to ellipsis). */
const MAX_MIN_SHARE = 0.6;
/** Default lane width and clip minimum used at build time; the client re-measures both. */
export const BUILD_WIDTH = 1000;
export const BUILD_MIN_CLIP = 180;

const toMonths = ({ year, month }: YearMonth) => year * 12 + month;

/** Every position is a number of months since January of the first year (the left edge of the ruler). */
const origin = (experiences: ExperienceItem[]) => Math.min(...experiences.map((e) => e.start.year)) * 12 + 1;

/** Today as a fractional month offset (e.g. halfway through October). */
function today(origin: number, now: Date) {
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    return toMonths({ year: now.getFullYear(), month: now.getMonth() + 1 }) - origin + now.getDate() / daysInMonth;
}

/**
 * Track (row) of every experience: an experience goes on the first track whose last clip
 * ended before it started, like consecutive clips in a video editor. Ongoing clips close their track.
 * Only depends on the data, never on today's date.
 */
export function timelineTracks(experiences: ExperienceItem[]): number[] {
    const trackEnds: (number | null)[] = []; // null = ongoing, track closed
    const tracks: number[] = [];
    const order = experiences.map((_, i) => i).sort((a, b) => toMonths(experiences[a]!.start) - toMonths(experiences[b]!.start));
    for (const i of order) {
        const e = experiences[i]!;
        let track = trackEnds.findIndex((end) => end !== null && end <= toMonths(e.start));
        if (track === -1) track = trackEnds.length;
        trackEnds[track] = e.end ? toMonths(e.end) : null;
        tracks[i] = track;
    }
    return tracks;
}

interface Range {
    start: number;
    end: number;
}

/**
 * Start/end of every clip in months. An ended job lasts until the end of its last month,
 * but never past the start of the next clip on its track: consecutive clips touch, they don't overlap.
 */
function clipRanges(experiences: ExperienceItem[], o: number, now: number): Range[] {
    const tracks = timelineTracks(experiences);
    const ranges = experiences.map((e) => ({ start: toMonths(e.start) - o, end: e.end ? toMonths(e.end) - o + 1 : now }));
    return ranges.map((r, i) => {
        const nextStarts = ranges.filter((n, j) => j !== i && tracks[j] === tracks[i] && n.start >= r.start).map((n) => n.start);
        return { start: r.start, end: Math.min(r.end, ...nextStarts) };
    });
}

/**
 * Piecewise-linear time scale: every clip gets at least `mins[i]` px out of `width`, shorter periods
 * are stretched and the rest of the career is compressed to make room. Returns month → fraction (0..1).
 */
function warpScale(ranges: Range[], viewEnd: number, mins: number[], width: number) {
    const points = [...new Set([0, viewEnd, ...ranges.flatMap((r) => [r.start, r.end])])].sort((a, b) => a - b);
    const weights = points.slice(1).map((p, k) => p - points[k]!);
    const segmentsOf = (r: Range) => weights.map((_, k) => k).filter((k) => points[k]! >= r.start && points[k + 1]! <= r.end);

    for (let iteration = 0; iteration < 20; iteration++) {
        const px = width / weights.reduce((a, b) => a + b, 0);
        let done = true;
        ranges.forEach((r, i) => {
            const segments = segmentsOf(r);
            const current = segments.reduce((sum, k) => sum + weights[k]!, 0) * px;
            const min = Math.min(mins[i]!, width * MAX_MIN_SHARE);
            if (current >= min - 0.5) return;
            done = false;
            for (const k of segments) weights[k] = weights[k]! * (min / current);
        });
        if (done) break;
    }

    const total = weights.reduce((a, b) => a + b, 0);
    const cumulative = weights.map((_, k) => weights.slice(0, k).reduce((a, b) => a + b, 0));
    return (month: number) => {
        const k = Math.max(0, points.findLastIndex((p, n) => p <= month && n < weights.length));
        const into = (Math.min(month, points[k + 1]!) - points[k]!) / (points[k + 1]! - points[k]!);
        return (cumulative[k]! + into * weights[k]!) / total;
    };
}

/** Year marks of the ruler, from the first year to the current one, with their month offset. */
export function timelineYears(experiences: ExperienceItem[], now: Date): { year: number; at: number }[] {
    const o = origin(experiences);
    const first = Math.min(...experiences.map((e) => e.start.year));
    const years = [];
    for (let year = first; year <= now.getFullYear(); year++) years.push({ year, at: year * 12 + 1 - o });
    return years;
}

const pct = (fraction: number) => `${(fraction * 100).toFixed(3)}%`;

/**
 * Inline styles of every clip, ruler tick and the playhead for a lane `width` px wide.
 * Runs at build time with defaults and again in the browser with real measurements.
 * `--delay`/`--duration` (0..1) sync each clip's entry animation with the playhead sweep.
 */
export function timelineLayout(experiences: ExperienceItem[], now: Date, width: number, mins: number[]) {
    const o = origin(experiences);
    const todayAt = today(o, now);
    const ranges = clipRanges(experiences, o, todayAt);
    const at = warpScale(ranges, todayAt + FUTURE_MONTHS, mins, width);
    const sweep = at(todayAt);
    const ticksAt = timelineYears(experiences, now).map(({ at: month }) => at(month));
    return {
        ticksAt,
        clips: ranges.map(({ start, end }) => {
            const [l, r] = [at(start), at(end)];
            return `--l: ${pct(l)}; --r: ${pct(1 - r)}; --delay: ${(l / sweep).toFixed(3)}; --duration: ${Math.max(0.12, (r - l) / sweep).toFixed(3)};`;
        }),
        ticks: ticksAt.map((x) => `--x: ${pct(x)};`),
        playhead: `--x: ${pct(sweep)};`,
    };
}
