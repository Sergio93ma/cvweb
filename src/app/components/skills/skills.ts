import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sectiontitle } from '../sectiontitle/sectiontitle';
import { TranslationService } from '../../services/translation.service';

interface SkillBase {
    id: string;
    knowledge: number;
    experience: number;
    icon?: string;
}

interface SkillCategoryBase {
    id: string;
    skills: SkillBase[];
}

interface SkillTranslation {
    name: string;
    description: string;
}

interface SkillCategoryTranslation {
    name: string;
}

@Component({
    selector: 'app-skills',
    imports: [Sectiontitle, CommonModule],
    templateUrl: './skills.html',
    styleUrl: './skills.scss',
})
export class Skills {
    ts = inject(TranslationService);

    activeIndex = signal<number>(0);

    toggle(index: number) {
        this.activeIndex.set(this.activeIndex() === index ? 0 : index);
    }

    private readonly baseSkillCategories: SkillCategoryBase[] = [
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
                { id: 'agile-scrum', knowledge: 4, experience: 2},
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

    private readonly translations: Record<
        string,
        {
            categories: Record<string, SkillCategoryTranslation>;
            skills: Record<string, SkillTranslation>;
        }
    > = {
        es: {
            categories: {
                frontend: { name: 'Frontend' },
                backend: { name: 'Backend' },
                'db-deploy': { name: 'Bases de datos y despliegue' },
                management: { name: 'Gestión y metodologías' },
                design: { name: 'Diseño' },
            },
            skills: {
                'html-css': {
                    name: 'HTML / CSS',
                    description:
                        'Maquetación semántica, accesibilidad, animaciones CSS y diseño responsive.',
                },
                'scss-less': {
                    name: 'SCSS / LESS',
                    description:
                        'Variables, mixins, anidación y arquitectura de estilos escalable.',
                },
                js: {
                    name: 'JavaScript',
                    description:
                        'ES6+, manipulación del DOM, programación asíncrona y patrones de diseño.',
                },
                ts: {
                    name: 'TypeScript',
                    description: 'Tipado estático, interfaces, generics y decoradores.',
                },
                angular: {
                    name: 'Angular',
                    description:
                        'SPAs complejas con RxJS, lazy loading, arquitectura modular y Angular CLI.',
                },
                react: {
                    name: 'React',
                    description: 'Componentes funcionales, hooks y gestión básica de estado.',
                },
                php: {
                    name: 'PHP',
                    description:
                        'Desarrollo de APIs REST, integración con bases de datos y pasarelas de pago.',
                },
                nodejs: {
                    name: 'Node.js',
                    description:
                        'APIs REST con Express, middleware, autenticación JWT y manejo de streams.',
                },
                springboot: {
                    name: 'Spring Boot',
                    description: 'Introducción al desarrollo de servicios REST con Java.',
                },
                mysql: {
                    name: 'MySQL',
                    description:
                        'Diseño de esquemas, consultas complejas, joins y optimización de índices.',
                },
                mongodb: {
                    name: 'MongoDB',
                    description: 'Modelado de documentos, consultas básicas y agregaciones.',
                },
                docker: {
                    name: 'Docker',
                    description:
                        'Creación de imágenes, contenedores y configuración con Docker Compose.',
                },
                googlecloud: {
                    name: 'Google Cloud',
                    description:
                        'Despliegue de servicios, Cloud Functions y gestión de almacenamiento.',
                },
                firebase: {
                    name: 'Firebase',
                    description: 'Autenticación, Firestore, Realtime Database y hosting.',
                },
                git: {
                    name: 'Git',
                    description: 'GitFlow, rebases, resolución de conflictos y revisión de PRs.',
                },
                'agile-scrum': {
                    name: 'Agile / Scrum',
                    description: 'Gestión de sprints, ceremonias Scrum y tableros Kanban.',
                },
                jira: {
                    name: 'Jira',
                    description:
                        'Gestión de tareas, seguimiento de incidencias y planificación de sprints.',
                },
                figma: {
                    name: 'Figma',
                    description:
                        'Prototipado, diseño de componentes y colaboración en sistemas de diseño.',
                },
                illustrator: {
                    name: 'Illustrator',
                    description:
                        'Diseño vectorial, identidad corporativa y material gráfico para eventos.',
                },
                photoshop: {
                    name: 'Photoshop',
                    description:
                        'Retoque fotográfico, composición digital y producción de assets gráficos.',
                },
                autocad: {
                    name: 'AutoCAD',
                    description: 'Planos técnicos 2D, documentación y delineación de proyectos.',
                },
                revit: {
                    name: 'Revit',
                    description: 'Modelado BIM básico y coordinación de proyectos de arquitectura.',
                },
            },
        },
        en: {
            categories: {
                frontend: { name: 'Frontend' },
                backend: { name: 'Backend' },
                'db-deploy': { name: 'Databases & Deployment' },
                management: { name: 'Management & Methodologies' },
                design: { name: 'Design' },
            },
            skills: {
                'html-css': {
                    name: 'HTML / CSS',
                    description:
                        'Semantic markup, accessibility, CSS animations and responsive design.',
                },
                'scss-less': {
                    name: 'SCSS / LESS',
                    description: 'Variables, mixins, nesting and scalable style architecture.',
                },
                js: {
                    name: 'JavaScript',
                    description:
                        'ES6+, DOM manipulation, asynchronous programming and design patterns.',
                },
                ts: {
                    name: 'TypeScript',
                    description: 'Static typing, interfaces, generics and decorators.',
                },
                angular: {
                    name: 'Angular',
                    description:
                        'Complex SPAs with RxJS, lazy loading, modular architecture and Angular CLI.',
                },
                react: {
                    name: 'React',
                    description: 'Functional components, hooks and basic state management.',
                },
                php: {
                    name: 'PHP',
                    description:
                        'REST API development, database integration and payment gateway setup.',
                },
                nodejs: {
                    name: 'Node.js',
                    description:
                        'REST APIs with Express, middleware, JWT authentication and stream handling.',
                },
                springboot: {
                    name: 'Spring Boot',
                    description: 'Introduction to building REST services with Java.',
                },
                mysql: {
                    name: 'MySQL',
                    description: 'Schema design, complex queries, joins and index optimisation.',
                },
                mongodb: {
                    name: 'MongoDB',
                    description: 'Document modelling, basic queries and aggregations.',
                },
                docker: {
                    name: 'Docker',
                    description:
                        'Image creation, containers and multi-service setup with Docker Compose.',
                },
                googlecloud: {
                    name: 'Google Cloud',
                    description: 'Service deployment, Cloud Functions and storage management.',
                },
                firebase: {
                    name: 'Firebase',
                    description: 'Authentication, Firestore, Realtime Database and hosting.',
                },
                git: {
                    name: 'Git',
                    description: 'GitFlow, rebases, conflict resolution and PR reviews.',
                },
                'agile-scrum': {
                    name: 'Agile / Scrum',
                    description: 'Sprint management, Scrum ceremonies and Kanban boards.',
                },
                jira: {
                    name: 'Jira',
                    description: 'Task management, issue tracking and sprint planning.',
                },
                figma: {
                    name: 'Figma',
                    description: 'Prototyping, component design and design system collaboration.',
                },
                illustrator: {
                    name: 'Illustrator',
                    description:
                        'Vector design, corporate identity and graphic material for events.',
                },
                photoshop: {
                    name: 'Photoshop',
                    description:
                        'Photo retouching, digital compositing and graphic asset production.',
                },
                autocad: {
                    name: 'AutoCAD',
                    description: '2D technical drawings, documentation and project draughting.',
                },
                revit: {
                    name: 'Revit',
                    description: 'Basic BIM modelling and architecture project coordination.',
                },
            },
        },
    };

    skills = computed(() => {
        const lang = this.ts.language$();
        const t = this.translations[lang];

        return this.baseSkillCategories.map((category) => ({
            ...t.categories[category.id],
            skills: category.skills.map((skill) => ({
                ...skill,
                ...t.skills[skill.id],
            })),
        }));
    });
}
