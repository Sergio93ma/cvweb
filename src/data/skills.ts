import type { SkillCategory } from './types';

export const skillCategories: SkillCategory[] = [
    {
        id: 'frontend',
        skills: [
            { id: 'html-css', knowledge: 5, experience: 14, icon: 'fa-brands fa-html5' },
            { id: 'scss-less', knowledge: 5, experience: 6, icon: 'fa-brands fa-sass' },
            { id: 'js', knowledge: 5, experience: 14, icon: 'fa-brands fa-js' },
            { id: 'ts', knowledge: 4, experience: 6, icon: 'fa-brands fa-typescript' },
            { id: 'angular', knowledge: 4, experience: 6, icon: 'fa-brands fa-angular' },
            { id: 'react', knowledge: 1, experience: 1, icon: 'fa-brands fa-react' },
        ],
    },
    {
        id: 'backend',
        skills: [
            { id: 'php', knowledge: 4, experience: 10, icon: 'fa-brands fa-php' },
            { id: 'nodejs', knowledge: 3, experience: 6, icon: 'fa-brands fa-node-js' },
            { id: 'springboot', knowledge: 1, experience: 1 },
        ],
    },
    {
        id: 'db-deploy',
        skills: [
            { id: 'mysql', knowledge: 4, experience: 10 },
            { id: 'mongodb', knowledge: 2, experience: 1, icon: 'fa-brands fa-mdb' },
            { id: 'docker', knowledge: 2, experience: 2, icon: 'fa-brands fa-docker' },
            { id: 'googlecloud', knowledge: 2, experience: 6 },
            { id: 'firebase', knowledge: 2, experience: 2 },
        ],
    },
    {
        id: 'management',
        skills: [
            { id: 'git', knowledge: 4, experience: 2, icon: 'fa-brands fa-git-alt' },
            { id: 'agile-scrum', knowledge: 4, experience: 2 },
            { id: 'jira', knowledge: 3, experience: 2, icon: 'fa-brands fa-jira' },
        ],
    },
    {
        id: 'design',
        skills: [
            { id: 'figma', knowledge: 2, experience: 10, icon: 'fa-brands fa-figma' },
            { id: 'illustrator', knowledge: 4, experience: 10 },
            { id: 'photoshop', knowledge: 4, experience: 15 },
            { id: 'autocad', knowledge: 4, experience: 10 },
            { id: 'revit', knowledge: 2, experience: 2 },
        ],
    },
];
