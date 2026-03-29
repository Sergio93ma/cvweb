import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Sectiontitle } from '../sectiontitle/sectiontitle';
import { LocalePipe } from '../../pipes/locale.pipe';
import { TextTransformPipe } from '../../pipes/texttransform.pipe';

interface EducationItemBase {
    id: string;
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
}

interface EducationItemTranslation {
    title: string;
}

interface EducationItem extends EducationItemBase, EducationItemTranslation {}

@Component({
    selector: 'app-education',
    imports: [Sectiontitle, LocalePipe, TextTransformPipe],
    templateUrl: './education.html',
    styleUrl: './education.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Education {
    ts = inject(TranslationService);

    private readonly baseEducation: EducationItemBase[] = [
        {
            id: 'technician',
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
            id: 'highschool',
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
            id: 'architecture',
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

    private readonly translations: Record<string, Record<string, EducationItemTranslation>> = {
        en: {
            technician: {
                title: 'Higher Technician in Web Application Development',
            },
            highschool: {
                title: 'High School Diploma — Science Track',
            },
            architecture: {
                title: "Bachelor's Degree in Architecture",
            },
        },
        es: {
            technician: {
                title: 'Título de Grado Superior en Desarrollo de Aplicaciones Web',
            },
            highschool: {
                title: 'Título de Bachillerato en la modalidad de Ciencias',
            },
            architecture: {
                title: 'Título de Grado en Arquitectura',
            },
        },
    };

    private translateLocation(locationEn: string): string {
        const translations: Record<string, Record<string, string>> = {
            'Valladolid, Spain': {
                es: 'Valladolid, España',
            },
        };
        const lang = this.ts.language$();
        return lang === 'es' && translations[locationEn]
            ? translations[locationEn][lang]
            : locationEn;
    }

    education = computed(() => {
        const lang = this.ts.language$();
        return this.baseEducation.map((item) => ({
            ...item,
            location: this.translateLocation(item.location),
            ...this.translations[lang as 'en' | 'es']?.[item.id],
        }));
    });
}