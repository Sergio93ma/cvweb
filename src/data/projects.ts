import type { Project } from './types';

export const projects: Project[] = [
    {
        id: 'cdbv',
        icon: 'fa-solid fa-badminton',
        technologies: ['Angular', 'NodeJS', 'MySQL', 'Firebase'],
        company: 'CDBV',
        type: 'public',
        url: 'https://badmintonvalladolid.com/',
        metrics: {
            lighthouse: { performance: 66, accessibility: 87, bestPractices: 77, SEO: 77 },
            webVitals: { lcp: 1.6, cls: 0.07, fcp: 1.1 },
            load: { domContentLoaded: 730, total: 1750 },
        },
    },
    {
        id: 'nave',
        icon: 'fa-solid fa-warehouse',
        technologies: ['Angular', 'Firebase'],
        type: 'confidential',
        company: 'Freelance',
        metrics: {
            lighthouse: { performance: 86, accessibility: 78, bestPractices: 96, SEO: 54 },
            webVitals: { fcp: 1.6, lcp: 1.7, tbt: 0, cls: 0.04, ttfb: 1.6 },
            load: { domContentLoaded: 439, total: 1730 },
        },
    },
    {
        id: 'aseguradora',
        icon: 'fa-solid fa-house-chimney-crack',
        technologies: ['Gulp', 'Pug', 'SASS', 'Magnolia'],
        company: 'Serbatic',
        type: 'confidential',
        metrics: {
            lighthouse: { performance: 73, accessibility: 93, bestPractices: 100, SEO: 92 },
            webVitals: { fcp: 1.1, lcp: 2.3, cls: 0 },
            load: { domContentLoaded: 1630, total: 1960 },
        },
    },
    {
        id: 'parques',
        icon: 'fa-solid fa-roller-coaster',
        technologies: ['Angular', 'LESS', 'AEM'],
        company: 'Serbatic',
        type: 'confidential',
        metrics: {
            lighthouse: { performance: 48, accessibility: 81, bestPractices: 81, SEO: 77 },
            webVitals: { fcp: 1, lcp: 3.1, cls: 0.04 },
            load: { domContentLoaded: 5060, total: 5160 },
        },
    },
    {
        id: 'cvweb',
        icon: 'fa-solid fa-address-card',
        technologies: ['Angular', 'Firebase'],
        company: 'Freelance',
        type: 'public',
        url: 'https://sergio93ma.dev/',
        github: 'https://github.com/Sergio93ma/cvweb',
        metrics: {
            lighthouse: { performance: 92, accessibility: 91, bestPractices: 100, SEO: 100 },
            webVitals: { fcp: 0.7, lcp: 0.9, cls: 0.151 },
            load: { domContentLoaded: 399, total: 1300 },
        },
    },
];
