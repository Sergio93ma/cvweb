import type { EducationItem } from './types';

export const education: EducationItem[] = [
    {
        id: 'technician',
        start: { month: 9, year: 2021 },
        end: { month: 6, year: 2023 },
        institution: 'IES Galileo',
        location: 'valladolid',
    },
    {
        id: 'highschool',
        start: { month: 9, year: 2009 },
        end: { month: 6, year: 2011 },
        institution: 'IES Julián Marías',
        location: 'valladolid',
    },
    {
        id: 'architecture',
        start: { month: 9, year: 2014 },
        end: { month: 6, year: 2019 },
        institution: 'Universidad de Valladolid',
        location: 'valladolid',
    },
];
