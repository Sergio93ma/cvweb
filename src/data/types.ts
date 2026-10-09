export interface YearMonth {
    month: number;
    year: number;
}

/** Animated number (summary + databox). Text lives in i18n under the same `id`. */
export interface CounterItem {
    id: string;
    value: number;
    start: number;
    before?: string;
    after?: string;
}

export interface Skill {
    id: string;
    /** 1–5 */
    knowledge: number;
    /** Years */
    experience: number;
    icon?: string;
}

export interface SkillCategory {
    id: string;
    skills: Skill[];
}

export interface ExperienceItem {
    id: string;
    start: YearMonth;
    /** Missing = ongoing */
    end?: YearMonth;
    technologies: string[];
}

export interface EducationItem {
    id: string;
    start: YearMonth;
    end?: YearMonth;
    institution: string;
    location: string;
}

export interface Lighthouse {
    performance: number;
    accessibility: number;
    bestPractices: number;
    SEO: number;
}

export interface Project {
    id: string;
    icon?: string;
    technologies: string[];
    company?: string;
    type: 'public' | 'confidential';
    url?: string;
    github?: string;
    metrics?: {
        lighthouse?: Lighthouse;
        webVitals?: { lcp?: number; fcp?: number; cls?: number; tbt?: number; ttfb?: number };
        load?: { domContentLoaded?: number; total: number };
        /** Lighthouse "Agentic browsing" category: a pass ratio, not a 0–100 score */
        agentic?: { passed: number; total: number };
    };
}
