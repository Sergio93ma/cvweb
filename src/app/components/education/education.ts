import { Component, computed, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Sectiontitle } from '../sectiontitle/sectiontitle';
import { LocalePipe } from '../../pipes/locale.pipe';
import { TextTransformPipe } from '../../pipes/texttransform.pipe';

interface EducationItem {
    title: string;
    start: {
        month: number;
        year: number;
    };
    end?: {
        month: number;
        year: number;
    };
    institution: string;
    location: string;
    details?: string;
}

@Component({
    selector: 'app-education',
    imports: [Sectiontitle, LocalePipe, TextTransformPipe],
    templateUrl: './education.html',
    styleUrl: './education.scss',
})
export class Education {
    ts = inject(TranslationService);

    education_EN: EducationItem[] = [
        {
            title: 'Higher Technician in Web Application Development',
            start: {
                month: 9,
                year: 2021,
            },
            end: {
                month: 6,
                year: 2023,
            },
            institution: 'IES Galileo',
            location: 'Valladolid, Spain',
        },
        {
            title: 'High School Diploma — Science Track',
            start: {
                month: 9,
                year: 2009,
            },
            end: {
                month: 6,
                year: 2011,
            },
            institution: 'IES Julián Marías',
            location: 'Valladolid, Spain',
        },
        {
            title: "Bachelor's Degree in Architecture",
            start: {
                month: 9,
                year: 2014,
            },
            end: {
                month: 6,
                year: 2019,
            },
            institution: 'Universidad de Valladolid',
            location: 'Valladolid, Spain',
        },
    ];
    education_ES: EducationItem[] = [
        {
            title: 'Título de Grado Superior en Desarrollo de Aplicaciones Web',
            start: {
                month: 9,
                year: 2021,
            },
            end: {
                month: 6,
                year: 2023,
            },
            institution: 'IES Galileo',
            location: 'Valladolid, España',
        },
        {
            title: 'Título de Bachillerato en la modalidad de Ciencias',
            start: {
                month: 9,
                year: 2009,
            },
            end: {
                month: 6,
                year: 2011,
            },
            institution: 'IES Julián Marías',
            location: 'Valladolid, España',
        },
        {
            title: 'Título de Grado en Arquitectura',
            start: {
                month: 9,
                year: 2014,
            },
            end: {
                month: 6,
                year: 2019,
            },
            institution: 'Universidad de Valladolid',
            location: 'Valladolid, España',
        },
    ];
    education = computed(() => {
        const lang = this.ts.language$();
        return lang === 'es' ? this.education_ES : this.education_EN;
    });
}