import { Component, inject, computed, ElementRef, ViewChild, NgZone } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Sectiontitle } from '../sectiontitle/sectiontitle';
import { DOCUMENT } from '@angular/common';

interface ProyectBase {
    id: string;
    icon?: string;
    technologies: string[];
    company?: string;
    type: 'public' | 'confidential';
    url?: string;
    github?: string;
    metrics?: any;
}

interface ProyectTranslation {
    title: string;
    description?: string;
    description_short?: string;
}

@Component({
    selector: 'app-proyects',
    imports: [Sectiontitle],
    templateUrl: './proyects.html',
    styleUrl: './proyects.scss',
})
export class Proyects {
    ts = inject(TranslationService);
    private elementRef = inject(ElementRef);
    private ngZone = inject(NgZone);
    private document = inject(DOCUMENT);
    @ViewChild('gridContainer') gridContainer: any;

    proyect: any | null = null;
    private intersectionObserver: IntersectionObserver | null = null;

    private readonly baseProyects: ProyectBase[] = [
        {
            id: 'cdbv',
            icon: 'fa-solid fa-badminton',
            technologies: ['Angular', 'NodeJS', 'MySQL', 'Firebase'],
            company: 'CDBV',
            type: 'public',
            url: 'https://badmintonvalladolid.com/',
            metrics: {
                lighthouse: {
                    performance: 66,
                    accessibility: 87,
                    bestPractices: 77,
                    seo: 77,
                },
                webVitals: {
                    lcp: 1.6,
                    cls: 0.07,
                    fcp: 1.1,
                },
                load: {
                    domContentLoaded: 730,
                    total: 1750,
                },
            },
        },
        {
            id: 'nave',
            icon: 'fa-solid fa-warehouse',
            technologies: ['Angular', 'Firebase'],
            type: 'confidential',
            company: 'Freelance',
            metrics: {
                lighthouse: {
                    performance: 86,
                    accessibility: 78,
                    bestPractices: 96,
                    seo: 54,
                },
                webVitals: {
                    fcp: 1.6,
                    lcp: 1.7,
                    tbt: 0,
                    cls: 0.04,
                    ttfb: 1.6,
                },
                load: {
                    domContentLoaded: 439,
                    total: 1730,
                },
            },
        },
        {
            id: 'aseguradora',
            icon: 'fa-solid fa-house-chimney-crack',
            technologies: ['Gulp', 'Pug', 'SASS', 'Magnolia'],
            company: 'Serbatic',
            type: 'confidential',
            metrics: {
                lighthouse: {
                    performance: 73,
                    accessibility: 93,
                    bestPractices: 100,
                    seo: 92,
                },
                webVitals: {
                    fcp: 1.1,
                    lcp: 2.3,
                    cls: 0,
                },
                load: {
                    domContentLoaded: 1630,
                    total: 1960,
                },
            },
        },
        {
            id: 'parques',
            icon: 'fa-solid fa-roller-coaster',
            technologies: ['Angular', 'LESS', 'AEM'],
            company: 'Serbatic',
            type: 'confidential',
            metrics: {
                lighthouse: {
                    performance: 48,
                    accessibility: 81,
                    bestPractices: 81,
                    seo: 77,
                },
                webVitals: {
                    fcp: 1.0,
                    lcp: 3.1,
                    cls: 0.04,
                },
                load: {
                    domContentLoaded: 5060,
                    total: 5160,
                },
            },
        },
        {
            id: 'cvweb',
            icon: 'fa-solid fa-address-card',
            technologies: ['Angular', 'Firebase'],
            company: 'Freelance',
            type: 'public',
            url: 'https://sergio93ma.dev/',
        },
    ];

    private readonly translations: Record<string, Record<string, ProyectTranslation>> = {
        es: {
            cdbv: {
                title: 'CD Bádminton Valladolid',
                description_short:
                    'Web fullstack desarrollada en solitario para mi propio club de bádminton: desde el diseño gráfico hasta la pasarela de pago.',
                description: `
                <p>Proyecto personal en el que asumo <strong>todos los roles</strong>: diseño gráfico, diseño web, desarrollo frontend y backend, administración de base de datos y despliegue en producción.</p>
                <p>La plataforma centraliza toda la información pública del club y ofrece un área privada para jugadores donde pueden <strong>gestionar sus reservas, modificar horarios, realizar compras y personalizar su perfil</strong>.</p>
                <ul>
                    <li><strong>Frontend</strong> en Angular con diseño propio desde cero.</li>
                    <li><strong>Backend</strong> en Node.js desplegado en Firebase Functions.</li>
                    <li><strong>Base de datos</strong> MySQL en Google Cloud, comunicada con el backend mediante red interna de Cloud.</li>
                    <li><strong>Pagos online</strong> integrados mediante pasarela de pago.</li>
                    <li>Hosting en <strong>Firebase</strong> para frontend y funciones serverless.</li>
                </ul>
                <p>Un ejercicio real de arquitectura fullstack end-to-end, gestionado y mantenido de forma autónoma.</p>
            `,
            },
            nave: {
                title: 'Plataforma de Gestión de Instalación Deportiva',
                description_short:
                    'Aplicación web para conectar usuarios y administradores de una instalación deportiva privada: reservas, servicios y eventos en un solo lugar.',
                description: `
                <p>Desarrollo de una <strong>plataforma web completa</strong> para una instalación deportiva privada, orientada a facilitar la comunicación entre la empresa y sus clientes.</p>
                <p>La aplicación permite a los usuarios <strong>alquilar espacios, contratar servicios adicionales y consultar eventos</strong>, mientras que los administradores gestionan la oferta y disponibilidad en tiempo real.</p>
                <ul>
                    <li>Arquitectura <strong>backless</strong>: toda la lógica y persistencia resuelta con Firebase (Firestore + Auth + Hosting).</li>
                    <li>Frontend desarrollado íntegramente en <strong>Angular</strong>.</li>
                    <li>Solución pensada para <strong>minimizar costes de infraestructura</strong> sin sacrificar funcionalidad.</li>
                </ul>
                <p>Un ejemplo de cómo diseñar soluciones eficientes y económicas adaptadas a las necesidades reales del cliente.</p>
            `,
            },
            aseguradora: {
                title: 'Aseguradora Multinacional',
                description_short:
                    'Desarrollo frontend para la web corporativa de una aseguradora presente en más de 50 países, liderando un equipo de tres desarrolladores.',
                description: `
                <p>Creación desde cero de la web corporativa de una <strong>aseguradora de alcance internacional</strong>, con presencia en más de 50 países y contenido disponible en múltiples idiomas.</p>
                <p>El proyecto exigió un <strong>trabajo de CSS avanzado y meticuloso</strong>, con numerosas animaciones y transiciones fluidas para responder a los altos estándares visuales del cliente.</p>
                <ul>
                    <li>Stack frontend: <strong>Gulp + Pug + SASS</strong>, con JavaScript para funcionalidades interactivas.</li>
                    <li>Integración con <strong>Magnolia CMS</strong> para la gestión de contenidos, incluyendo trabajo directo en la plataforma para garantizar una integración perfecta.</li>
                    <li>Coordinación con el equipo de backend encargado de la configuración del CMS.</li>
                </ul>
                <p>Ejercí como <strong>líder técnico del equipo frontend</strong>, compuesto por tres desarrolladores, siendo responsable de las decisiones de arquitectura, revisión de código y comunicación con cliente.</p>
            `,
            },
            parques: {
                title: 'Grupo Internacional de Parques de Atracciones',
                description_short:
                    'Frontend para el portal web de un grupo de parques de atracciones con presencia en varios continentes, integrado en Adobe Experience Manager.',
                description: `
                <p>Desarrollo y mantenimiento del portal web de un <strong>grupo internacional de parques de ocio y atracciones</strong>, con decenas de parques distribuidos en múltiples países y disponible en varios idiomas.</p>
                <p>El proyecto combina una <strong>capa pública</strong> desarrollada con HTML, JavaScript y LESS, y un <strong>área privada</strong> construida en Angular, todo ello compilado e integrado en <strong>Adobe Experience Manager (AEM)</strong>.</p>
                <ul>
                    <li>Trabajo continuo con <strong>AEM</strong> para la integración de componentes y gestión del ciclo de publicación.</li>
                    <li>Incorporación al proyecto en una <strong>fase avanzada de desarrollo</strong>, asumiendo el contexto con rapidez.</li>
                    <li>Contribución activa tanto en el <strong>desarrollo de nuevas funcionalidades</strong> como en la <strong>resolución de incidencias</strong> en producción.</li>
                </ul>
                <p>Un entorno de proyecto vivo, con entregas periódicas y alta exigencia técnica en cuanto a rendimiento y compatibilidad.</p>
            `,
            },
            cvweb: {
                title: 'Esta web — CV Interactivo',
                description_short:
                    'Portfolio y CV personal desarrollado en Angular, concebido como un escaparate de capacidades frontend: diseño, animación, i18n y arquitectura limpia.',
                description: `
                <p>Más que un CV, esta web es en sí misma un <strong>proyecto técnico y creativo</strong>. Diseñada y desarrollada íntegramente por mí, tiene como objetivo demostrar distintas capacidades del desarrollo frontend moderno.</p>
                <ul>
                    <li>Desarrollada en <strong>Angular</strong> con arquitectura modular y código limpio.</li>
                    <li>Alojada en <strong>Firebase Hosting</strong> para un despliegue ágil y económico.</li>
                    <li>Soporte <strong>multiidioma (i18n)</strong> con traducciones en español e inglés.</li>
                    <li>Diseño visual propio, con atención al detalle tipográfico, animaciones y composición.</li>
                </ul>
                <p>Cada sección de la web es una oportunidad para explorar diferentes técnicas: desde componentes reutilizables hasta efectos visuales, pasando por la gestión de estado y la experiencia de usuario.</p>
            `,
            },
        },
        en: {
            cdbv: {
                title: 'CD Bádminton Valladolid',
                description_short:
                    'Fullstack web built solo for my own badminton club — from graphic design to online payment integration.',
                description: `
                <p>A personal project where I take on <strong>every role</strong>: graphic design, web design, frontend and backend development, database administration, and production deployment.</p>
                <p>The platform centralises all public club information and provides a private area for players where they can <strong>manage bookings, change schedules, make purchases and customise their profile</strong>.</p>
                <ul>
                    <li><strong>Frontend</strong> built in Angular with a fully custom design.</li>
                    <li><strong>Backend</strong> in Node.js deployed via Firebase Functions.</li>
                    <li><strong>MySQL database</strong> on Google Cloud, connected to the backend through Cloud's internal network.</li>
                    <li><strong>Online payments</strong> integrated through a payment gateway.</li>
                    <li>Hosted on <strong>Firebase</strong> for both the frontend and serverless functions.</li>
                </ul>
                <p>A real-world exercise in end-to-end fullstack architecture, independently managed and maintained.</p>
            `,
            },
            nave: {
                title: 'Sports Facility Management Platform',
                description_short:
                    'Web application bridging users and administrators of a private sports facility: bookings, services and events in one place.',
                description: `
                <p>Development of a <strong>full-featured web platform</strong> for a private sports facility, designed to streamline communication between the business and its customers.</p>
                <p>Users can <strong>rent spaces, hire additional services and browse events</strong>, while administrators manage availability and offerings in real time.</p>
                <ul>
                    <li><strong>Backless architecture</strong>: all logic and persistence handled through Firebase (Firestore + Auth + Hosting).</li>
                    <li>Frontend built entirely in <strong>Angular</strong>.</li>
                    <li>Solution designed to <strong>minimise infrastructure costs</strong> without compromising functionality.</li>
                </ul>
                <p>A solid example of designing efficient, cost-effective solutions tailored to real client needs.</p>
            `,
            },
            aseguradora: {
                title: 'Multinational Insurance Company',
                description_short:
                    'Frontend development for the corporate website of an insurer operating in over 50 countries, leading a three-person frontend team.',
                description: `
                <p>Ground-up development of the corporate website for an <strong>international insurance company</strong> with a presence in over 50 countries and content available in multiple languages.</p>
                <p>The project demanded <strong>advanced, meticulous CSS work</strong>, with extensive animations and fluid transitions to meet the client's high visual standards.</p>
                <ul>
                    <li>Frontend stack: <strong>Gulp + Pug + SASS</strong>, with JavaScript for interactive features.</li>
                    <li>Integration with <strong>Magnolia CMS</strong> for content management, including direct work on the platform to ensure a seamless integration.</li>
                    <li>Collaboration with the backend team responsible for CMS configuration.</li>
                </ul>
                <p>I served as <strong>technical lead of the frontend team</strong> — three developers — owning architecture decisions, code reviews, and client communication.</p>
            `,
            },
            parques: {
                title: 'International Theme Park Group',
                description_short:
                    'Frontend for the web portal of a multinational leisure group with parks across several continents, integrated into Adobe Experience Manager.',
                description: `
                <p>Development and maintenance of the web portal for a <strong>large international leisure and theme park group</strong>, spanning dozens of parks across multiple countries and served in several languages.</p>
                <p>The project combines a <strong>public layer</strong> built with HTML, JavaScript and LESS, and a <strong>private area</strong> developed in Angular — all compiled and integrated within <strong>Adobe Experience Manager (AEM)</strong>.</p>
                <ul>
                    <li>Ongoing work with <strong>AEM</strong> for component integration and publication lifecycle management.</li>
                    <li>Joined the project at an <strong>advanced stage</strong>, getting up to speed quickly within a complex codebase.</li>
                    <li>Active contribution to both <strong>new feature development</strong> and <strong>production incident resolution</strong>.</li>
                </ul>
                <p>A live, evolving project with regular releases and high technical standards around performance and cross-browser compatibility.</p>
            `,
            },
            cvweb: {
                title: 'This Website — Interactive CV',
                description_short:
                    'Personal portfolio and CV built in Angular, conceived as a showcase of frontend capabilities: design, animation, i18n and clean architecture.',
                description: `
                <p>More than a CV, this website is itself a <strong>technical and creative project</strong>. Fully designed and developed by me, it aims to demonstrate a range of modern frontend skills.</p>
                <ul>
                    <li>Built in <strong>Angular</strong> with a modular architecture and clean code principles.</li>
                    <li>Hosted on <strong>Firebase Hosting</strong> for fast, cost-effective deployment.</li>
                    <li><strong>Multilingual (i18n)</strong> support with Spanish and English translations.</li>
                    <li>Custom visual design with careful attention to typography, animations and composition.</li>
                </ul>
                <p>Each section of the site is an opportunity to explore different techniques — from reusable components and state management to visual effects and user experience details.</p>
            `,
            },
        },
    };

    proyects = computed(() => {
        const lang = this.ts.language$();
        return this.baseProyects.map((proyect) => ({
            ...proyect,
            ...this.translations[lang]?.[proyect.id],
        }));
    });

    openProyect(id: string): void {
        this.proyect = this.proyects().find((p) => p.id === id) || null;
        if (this.proyect) this.disableBodyScroll();
    }

    closeProyect(): void {
        this.proyect = null;
        this.enableBodyScroll();
    }

    ngAfterViewInit(): void {
        this.ngZone.runOutsideAngular(() => {
            this.setupIntersectionObserver();
        });
    }

    private disableBodyScroll(): void {
        this.document.documentElement.style.overflow = 'hidden';
    }

    private enableBodyScroll(): void {
        this.document.documentElement.style.overflow = '';
    }

    private setupIntersectionObserver(): void {
        const options: IntersectionObserverInit = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px',
        };

        this.intersectionObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.ngZone.run(() => {
                        (entry.target as HTMLElement).classList.add('visible');
                    });
                    this.intersectionObserver?.unobserve(entry.target);
                }
            });
        }, options);

        // Observar todos los .proyect del grid
        setTimeout(() => {
            const proyects = this.elementRef.nativeElement.querySelectorAll(
                '.proyects__grid .proyect',
            );
            proyects.forEach((proyect: HTMLElement) => {
                this.intersectionObserver?.observe(proyect);
            });
        }, 0);
    }

    ngOnDestroy(): void {
        this.enableBodyScroll();
        this.intersectionObserver?.disconnect();
    }
}
