import type { ExperienceItem } from './types';

export const experiences: ExperienceItem[] = [
    {
        id: 'personal-projects',
        start: { month: 9, year: 2014 },
        technologies: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Node.js', 'Express', 'PHP', 'Java', 'MySQL', 'Firebase', 'Docker'],
    },
    {
        id: 'web-manager-badminton',
        start: { month: 1, year: 2017 },
        technologies: ['Angular', 'TypeScript', 'RxJS', 'Node.js', 'PHP', 'MySQL', 'Firebase', 'Google Cloud', 'Docker', 'Photoshop', 'Illustrator'],
    },
    {
        id: 'frontend-serbatic',
        start: { month: 12, year: 2023 },
        end: { month: 8, year: 2026 },
        technologies: ['Angular', 'TypeScript', 'RxJS', 'AEM', 'Magnolia', 'WordPress', 'SASS', 'LESS', 'MongoDB', 'Docker', 'Scrum'],
    },
    {
        id: 'frontend-accenture',
        start: { month: 8, year: 2026 },
        technologies: ['Angular', 'TypeScript', 'AEM', 'JavaScript', 'LESS', 'Git', 'Scrum'],
    },
];
