import { Component, computed, ChangeDetectionStrategy, ElementRef, inject, ViewChild } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { LocalePipe } from '../../pipes/locale.pipe';
import { Sectiontitle } from '../sectiontitle/sectiontitle';

interface ExperienceBase {
    id: string;
    startMonth: number;
    startYear: number;
    endMonth: number;
    endYear: number;
    technologies: string[];
}

interface ExperienceTranslation {
    title: string;
    company?: string;
    location?: string;
    items: string[];
}

interface ExperienceItem extends ExperienceBase, ExperienceTranslation {
    start: { month: number; year: number };
    end?: { month: number; year: number };
    position: { left: number; right: number; delay: number; duration: number };
}

@Component({
    selector: 'app-experience',
    imports: [LocalePipe, Sectiontitle],
    templateUrl: './experience.html',
    styleUrl: './experience.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
    @ViewChild('experienceTimeline') experienceTimeline!: ElementRef;

    ts = inject(TranslationService);

    private readonly baseExperiences: ExperienceBase[] = [
        {
            id: 'personal-projects',
            startMonth: 9,
            startYear: 2014,
            endMonth: 0,
            endYear: 0,
            technologies: ['Angular', 'jQuery', 'Bootstrap', 'SASS'],
        },
        {
            id: 'web-manager-badminton',
            startMonth: 1,
            startYear: 2017,
            endMonth: 0,
            endYear: 0,
            technologies: ['Angular', 'jQuery', 'Bootstrap', 'SASS'],
        },
        {
            id: 'frontend-serbatic',
            startMonth: 12,
            startYear: 2023,
            endMonth: 0,
            endYear: 0,
            technologies: ['Angular', 'jQuery', 'Bootstrap', 'SASS'],
        },
    ];

    private readonly translations: Record<string, Record<string, ExperienceTranslation>> = {
        es: {
            'personal-projects': {
                title: 'Proyectos Personales',
                company: 'Fullstack',
                location: 'Valladolid, España',
                items: [
                    'Desarrollo de aplicaciones web desde cero con HTML, CSS y JavaScript.',
                    'Construcción de sitios full-stack con PHP y Angular, incluyendo integración de pasarelas de pago.',
                    'Creación de webs corporativas, landing pages y herramientas de gestión interna.',
                ],
            },
            'web-manager-badminton': {
                title: 'Responsable Web y Diseñador Gráfico',
                company: 'CD Bádminton Valladolid',
                location: 'Valladolid, España',
                items: [
                    'Desarrollo y mantenimiento integral de la web del club y sus sistemas internos.',
                    'Implementación de soluciones full-stack con Angular, Node.js, PHP, Firebase, Google Cloud, MySQL y Docker.',
                    'Automatización de flujos de inscripción y gestión de socios, eliminando procesos manuales.',
                    'Dirección de la identidad gráfica y comunicación digital en redes sociales y eventos.',
                ],
            },
            'frontend-serbatic': {
                title: 'Desarrollador Frontend',
                company: 'Serbatic',
                location: 'Valladolid, España',
                items: [
                    'Desarrollo y mantenimiento de proyectos con Angular, WordPress, Magnolia CMS y Adobe Experience Manager (AEM).',
                    'Liderazgo de equipo frontend en proyectos de gran escala, garantizando calidad de entrega y código.',
                    'Aplicación de metodologías ágiles (Scrum y Kanban) en flujos de trabajo colaborativos y multidisciplinares.',
                    'Control de versiones y trabajo en equipo con Git en múltiples líneas de desarrollo simultáneas.',
                ],
            },
        },
        en: {
            'personal-projects': {
                title: 'Personal Projects',
                company: 'Fullstack',
                location: 'Valladolid, Spain',
                items: [
                    'Developed web applications from scratch using HTML, CSS, and JavaScript.',
                    'Built full-stack websites using PHP and Angular, including payment gateway integrations.',
                    'Developed corporate websites, landing pages, and internal management tools.',
                ],
            },
            'web-manager-badminton': {
                title: 'Web Manager & Graphic Designer',
                company: 'CD Bádminton Valladolid',
                location: 'Valladolid, Spain',
                items: [
                    "Owned full-stack development and maintenance of the club's website and internal systems.",
                    'Delivered end-to-end solutions using Angular, Node.js, PHP, Firebase, Google Cloud, MySQL, and Docker.',
                    'Automated registration workflows and membership management, reducing manual overhead.',
                    'Led graphic design and digital communication strategy across social media and events.',
                ],
            },
            'frontend-serbatic': {
                title: 'Frontend Developer',
                company: 'Serbatic',
                location: 'Valladolid, Spain',
                items: [
                    'Developed and maintained projects using Angular, WordPress, Magnolia CMS, and Adobe Experience Manager (AEM).',
                    'Led a frontend team on large-scale projects, coordinating delivery and code quality.',
                    'Applied Agile methodologies (Scrum & Kanban) within collaborative, cross-functional workflows.',
                    'Used Git for version control and team collaboration across multiple concurrent workstreams.',
                ],
            },
        },
    };

    experiences = computed(() => {
        const lang = this.ts.language$();
        const experiences = this.buildExperiences(lang);
        return this.calculateTimelinePositions(experiences);
    });

    experiences_years = computed(() => {
        const lang = this.ts.language$();
        const experiences = this.buildExperiences(lang);
        return this.calculateYears(experiences);
    });

    private timelineObserver: IntersectionObserver | null = null;

    private buildExperiences(lang: string): ExperienceItem[] {
        return this.baseExperiences.map((base) => {
            const translation = this.translations[lang][base.id];
            return {
                ...base,
                ...translation,
                start: { month: base.startMonth, year: base.startYear },
                end: base.endMonth !== 0 && base.endYear !== 0 ? { month: base.endMonth, year: base.endYear } : undefined,
                position: {
                    left: 0,
                    right: 0,
                    delay: 0,
                    duration: 0,
                },
            };
        });
    }

    private calculateYears(experiences: ExperienceItem[]): number[] {
        const dateToMonths = (month: number, year: number): number => year * 12 + month;

        const allStartDates = experiences.map((e) => dateToMonths(e.start.month, e.start.year));
        const now = new Date();
        const currentDateInMonths = now.getFullYear() * 12 + (now.getMonth() + 1);
        const allEndDates = experiences.map((e) =>
            e.end ? dateToMonths(e.end.month, e.end.year) : currentDateInMonths,
        );

        const minStartDate = Math.min(...allStartDates);
        const maxEndDate = Math.max(...allEndDates);

        let year = Math.floor(minStartDate / 12);
        const maxYear = Math.ceil(maxEndDate / 12);
        const years: number[] = [];

        while (year !== maxYear) {
            years.push(year);
            year++;
        }

        return years;
    }

    private calculateTimelinePositions(experiences: ExperienceItem[]): ExperienceItem[] {
        const ANIMATION_DURATION_S = 1.2;

        const dateToMonths = (date: { month: number; year: number }): number => {
            return date.year * 12 + date.month;
        };

        const allStartDates = experiences.map((e) => dateToMonths(e.start));

        const now = new Date();
        const currentDateInMonths = now.getFullYear() * 12 + (now.getMonth() + 1);
        const allEndDates = experiences.map((e) =>
            e.end ? dateToMonths(e.end) : currentDateInMonths,
        );

        const minStartDate = Math.min(...allStartDates);
        const maxStartDate = Math.max(...allStartDates);
        let maxEndDate = Math.max(...allEndDates);
        let dateRange = maxEndDate - minStartDate;

        if ((maxEndDate - maxStartDate) / dateRange < 1 / 3) {
            maxEndDate = (3 * maxStartDate - minStartDate) / 2;
            dateRange = maxEndDate - minStartDate;
        }

        return experiences.map((exp) => {
            const startMonths = dateToMonths(exp.start);
            const endMonths = exp.end ? dateToMonths(exp.end) : maxEndDate;
            const left = ((startMonths - minStartDate) / dateRange) * 100;
            const right = 100 - ((endMonths - minStartDate) / dateRange) * 100;

            return {
                ...exp,
                position: {
                    left,
                    right,
                    delay: (left / 100) * ANIMATION_DURATION_S,
                    duration: ((100 - left - right) / 100) * ANIMATION_DURATION_S,
                },
            };
        });
    }

    ngAfterViewInit() {
        if (this.experienceTimeline) {
            this.timelineObserver = this.observeOnce(
                this.experienceTimeline.nativeElement,
                (entries, obs) => {
                    if (entries[0].isIntersecting) {
                        const expiItems =
                            this.experienceTimeline.nativeElement.querySelectorAll('.expitem');
                        const timecursor =
                            this.experienceTimeline.nativeElement.querySelector(
                                '.experience__timecursor',
                            );

                        expiItems.forEach((item: Element) => {
                            item.setAttribute('data-animated', 'true');
                        });

                        if (timecursor && !timecursor.getAttribute('data-animated')) {
                            timecursor.setAttribute('data-animated', 'true');
                        }

                        obs.disconnect();
                    }
                },
                { threshold: 1 },
            );
        }
    }

    private observeOnce(
        target: Element | ElementRef,
        cb: IntersectionObserverCallback,
        options?: IntersectionObserverInit,
    ): IntersectionObserver {
        const node = (target as ElementRef).nativeElement
            ? (target as ElementRef).nativeElement
            : (target as Element);
        const obs = new IntersectionObserver(cb, options);
        obs.observe(node);
        return obs;
    }

    ngOnDestroy(): void {
        this.timelineObserver?.disconnect();
        this.timelineObserver = null;
    }
}
