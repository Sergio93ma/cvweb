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
    keywords?: string[];
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
                        'Más de una década construyendo interfaces desde cero: maquetación semántica con HTML5, animaciones y transiciones CSS avanzadas, diseño responsive con Grid y Flexbox, y accesibilidad web (WCAG). Experiencia en optimización del rendimiento de renderizado, uso de variables CSS para theming dinámico y construcción de sistemas de componentes visuales coherentes en proyectos de gran escala.',
                    keywords: [
                        'HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Responsive design',
                        'Animaciones CSS', 'Variables CSS', 'WCAG', 'BEM', 'Web Components',
                        'Media queries', 'Pseudo-elementos', 'Keyframes',
                    ],
                },
                'scss-less': {
                    name: 'SCSS / LESS',
                    description:
                        'Dominio de preprocesadores CSS para mantener estilos escalables y mantenibles en proyectos de larga duración. Uso avanzado de variables, mixins parametrizados, funciones, anidación controlada y módulos. Definición de arquitecturas de estilos basadas en metodologías como ITCSS o 7-1 pattern, garantizando coherencia visual y facilidad de mantenimiento en equipos multidisciplinares.',
                    keywords: [
                        'SCSS', 'LESS', 'Mixins', 'Variables', 'Anidación', 'Funciones',
                        'Partials', 'ITCSS', 'Patrón 7-1', 'Módulos', 'Theming', 'Maps',
                    ],
                },
                js: {
                    name: 'JavaScript',
                    description:
                        'Base sólida en JavaScript moderno desde ES6 en adelante: programación asíncrona con Promises y async/await, manipulación eficiente del DOM, patrones de diseño (módulo, observador, factoría), closures y scope avanzado. Experiencia integrando APIs REST y WebSockets, optimizando rendimiento con debounce/throttle y lazy loading, y construyendo lógica de negocio compleja en el cliente sin dependencias innecesarias.',
                    keywords: [
                        'ES6+', 'Async/Await', 'Promises', 'Event Loop', 'Closures',
                        'DOM API', 'Fetch API', 'WebSockets', 'Módulos ESM', 'Destructuring',
                        'Spread/Rest', 'Proxy', 'Iteradores', 'Generadores', 'Lazy loading',
                    ],
                },
                ts: {
                    name: 'TypeScript',
                    description:
                        'Adopción de TypeScript como estándar en proyectos Angular y Node.js para mejorar la robustez del código y la experiencia de desarrollo en equipo. Uso de tipos avanzados, interfaces, genéricos, decoradores y utility types para modelar correctamente el dominio de cada aplicación. Configuración de tsconfig estricta y definición de tipos compartidos entre frontend y backend para garantizar contratos sólidos entre capas.',
                    keywords: [
                        'Tipado estático', 'Interfaces', 'Generics', 'Decoradores',
                        'Union types', 'Intersection types', 'Utility types', 'Enums',
                        'Type guards', 'Mapped types', 'Strict mode', 'Declaration files',
                    ],
                },
                angular: {
                    name: 'Angular',
                    description:
                        'Stack principal de trabajo en los últimos seis años, con experiencia en Angular desde la versión 8 hasta Angular 19+. Desarrollo de SPAs complejas con arquitectura modular, lazy loading y code splitting para optimizar tiempos de carga. Gestión de estado reactivo con RxJS y signals, comunicación entre componentes, guards e interceptores HTTP. Integración con Angular Material, creación de librerías de componentes reutilizables y liderazgo técnico de equipos frontend en proyectos internacionales con AEM y Magnolia CMS.',
                    keywords: [
                        'Angular CLI', 'RxJS', 'Signals', 'Lazy loading', 'Guards',
                        'Interceptors', 'NgRx', 'Two-way binding', 'Change detection',
                        'Standalone components', 'Pipes', 'Directives', 'Angular Material',
                        'Módulos', 'Resolvers', 'SSR', 'Angular Universal',
                    ],
                },
                react: {
                    name: 'React',
                    description:
                        'Conocimiento introductorio de React orientado a entender el ecosistema y poder colaborar con equipos que lo utilizan. Manejo de componentes funcionales, hooks básicos (useState, useEffect) y gestión de estado local. Capacidad para leer, mantener y extender código React existente con criterio, apoyado en la base sólida de JavaScript y TypeScript.',
                    keywords: [
                        'JSX', 'Hooks', 'useState', 'useEffect', 'Props',
                        'Componentes funcionales', 'Virtual DOM', 'Context API',
                    ],
                },
                php: {
                    name: 'PHP',
                    description:
                        'Diez años desarrollando soluciones backend en PHP, principalmente para proyectos propios y clientes: APIs REST, sistemas de gestión de socios, pasarelas de pago (Stripe, Redsys) y plataformas de contenidos. Experiencia con PHP orientado a objetos, gestión de sesiones y autenticación, integración con MySQL y Firebase, y despliegue en servidores VPS y Google Cloud. Capacidad para mantener y escalar proyectos legacy en PHP sin frameworks.',
                    keywords: [
                        'PHP 8', 'POO', 'APIs REST', 'Pasarelas de pago', 'Autenticación',
                        'PDO', 'Composer', 'Sesiones', 'Cron jobs', 'cURL', 'Webhooks',
                        'MySQL integration', 'JWT', 'VPS deploy',
                    ],
                },
                nodejs: {
                    name: 'Node.js',
                    description:
                        'Desarrollo de APIs REST con Express para proyectos fullstack, especialmente en el contexto de la plataforma del CD Bádminton Valladolid y otros proyectos propios. Implementación de middleware, autenticación con JWT, manejo de streams y eventos, integración con Firebase y bases de datos relacionales. Despliegue en Google Cloud y contenedores Docker, con experiencia en automatización de procesos como notificaciones, gestión de inscripciones y tareas programadas.',
                    keywords: [
                        'Express', 'REST API', 'JWT', 'Middleware', 'Streams',
                        'Event Emitter', 'npm', 'dotenv', 'Nodemon', 'PM2',
                        'Cloud Functions', 'Firebase Admin SDK', 'CORS', 'Rate limiting',
                    ],
                },
                springboot: {
                    name: 'Spring Boot',
                    description:
                        'Introducción al desarrollo backend con Java a través de Spring Boot, adquirida durante la formación en Desarrollo de Aplicaciones Web. Creación de servicios REST básicos, comprensión de la inyección de dependencias, anotaciones de Spring y estructura de proyectos Maven. Punto de partida para proyectos que requieran interoperabilidad con entornos Java empresariales.',
                    keywords: [
                        'Java', 'Spring MVC', 'REST Controllers', 'Inyección de dependencias',
                        'Maven', 'Anotaciones', 'JPA básico',
                    ],
                },
                mysql: {
                    name: 'MySQL',
                    description:
                        'Diseño y mantenimiento de bases de datos relacionales en proyectos reales con usuarios activos durante más de una década. Modelado de esquemas normalizados, consultas complejas con múltiples JOINs, subconsultas y funciones de agregación. Optimización de índices para consultas frecuentes, gestión de transacciones y control de integridad referencial. Experiencia integrando MySQL con PHP y Node.js en entornos de producción.',
                    keywords: [
                        'SQL', 'JOINs', 'Subconsultas', 'Índices', 'Transacciones',
                        'Normalización', 'Vistas', 'Stored Procedures', 'Foreign Keys',
                        'GROUP BY', 'Window Functions', 'Backup / Restore', 'phpMyAdmin',
                    ],
                },
                mongodb: {
                    name: 'MongoDB',
                    description:
                        'Uso de MongoDB como base de datos documental en proyectos donde la flexibilidad del esquema aporta valor, especialmente en combinación con Firebase y Node.js. Modelado de documentos, consultas básicas y pipeline de agregación. Comprensión de las diferencias entre bases de datos relacionales y documentales para elegir la herramienta adecuada según el dominio del problema.',
                    keywords: [
                        'NoSQL', 'Documentos', 'Colecciones', 'Aggregation pipeline',
                        'Mongoose', 'ObjectId', 'Índices', 'Lookup', '$match / $group',
                    ],
                },
                docker: {
                    name: 'Docker',
                    description:
                        'Uso de Docker para contenerizar aplicaciones fullstack y simplificar el despliegue en diferentes entornos. Creación de Dockerfiles para servicios Node.js, PHP y Angular, orquestación de múltiples servicios con Docker Compose y gestión de volúmenes y redes. Integración en flujos de trabajo de CI/CD básicos y despliegue en Google Cloud.',
                    keywords: [
                        'Dockerfile', 'Docker Compose', 'Imágenes', 'Contenedores',
                        'Volúmenes', 'Redes', 'Docker Hub', 'Multi-stage builds',
                        'Entrypoint', 'Env vars', 'CI/CD', 'Cloud Run',
                    ],
                },
                googlecloud: {
                    name: 'Google Cloud',
                    description:
                        'Uso continuado de Google Cloud Platform como infraestructura de despliegue en proyectos propios durante más de seis años. Despliegue de aplicaciones Node.js y Angular en App Engine y Cloud Run, uso de Cloud Functions para automatizaciones serverless, gestión de almacenamiento en Cloud Storage y configuración de dominios y certificados SSL. Integración con Firebase para autenticación y base de datos en tiempo real.',
                    keywords: [
                        'App Engine', 'Cloud Run', 'Cloud Functions', 'Cloud Storage',
                        'Firebase hosting', 'IAM', 'gcloud CLI', 'Serverless',
                        'Dominios personalizados', 'SSL', 'Scheduler', 'Pub/Sub básico',
                    ],
                },
                firebase: {
                    name: 'Firebase',
                    description:
                        'Integración de Firebase como backend-as-a-service en proyectos propios para agilizar el desarrollo. Autenticación de usuarios con email, Google y tokens personalizados, uso de Firestore para datos estructurados y Realtime Database para sincronización en tiempo real. Firebase Hosting para despliegue de apps Angular con caché y CDN, y Firebase Admin SDK en Node.js para operaciones de servidor.',
                    keywords: [
                        'Firestore', 'Realtime Database', 'Authentication', 'Firebase Hosting',
                        'Admin SDK', 'Security Rules', 'onSnapshot', 'Cloud Messaging',
                        'Storage', 'Emulator Suite',
                    ],
                },
                git: {
                    name: 'Git',
                    description:
                        'Uso diario de Git en equipos multidisciplinares con flujos de trabajo estructurados. Gestión de ramas con GitFlow y trunk-based development, resolución de conflictos en merges y rebases complejos, revisión de pull requests con feedback constructivo y definición de estándares de commits (Conventional Commits). Experiencia liderando la estrategia de branching en proyectos con múltiples desarrolladores y ciclos de entrega continuos.',
                    keywords: [
                        'GitFlow', 'Trunk-based development', 'Pull Requests', 'Code review',
                        'Rebase', 'Cherry-pick', 'Stash', 'Tags', 'Conventional Commits',
                        'GitHub', 'GitLab', 'Hooks', 'Merge strategies',
                    ],
                },
                'agile-scrum': {
                    name: 'Agile / Scrum',
                    description:
                        'Trabajo en entornos ágiles como parte del equipo de desarrollo y, más recientemente, liderando el equipo de frontend en Serbatic. Participación activa en todas las ceremonias Scrum: planificación de sprints, daily standups, refinamiento de backlog, reviews y retrospectivas. Gestión de tableros Kanban para visualizar el flujo de trabajo y detectar cuellos de botella. Foco en la entrega continua de valor y la mejora del proceso del equipo.',
                    keywords: [
                        'Scrum', 'Kanban', 'Sprint planning', 'Daily standup', 'Retrospectiva',
                        'Backlog refinement', 'User stories', 'Story points', 'Velocity',
                        'Definition of Done', 'WIP limits', 'Burndown chart',
                    ],
                },
                jira: {
                    name: 'Jira',
                    description:
                        'Uso de Jira como herramienta central de gestión de proyectos en Serbatic para coordinar el trabajo del equipo frontend y la comunicación con clientes internacionales. Creación y priorización de epics, historias y subtareas, configuración de tableros Scrum y Kanban, seguimiento del progreso por sprint y generación de informes de velocidad. Integración con repositorios Git para trazabilidad entre commits y tickets.',
                    keywords: [
                        'Epics', 'User stories', 'Subtasks', 'Sprints', 'Tablero Kanban',
                        'Workflow personalizado', 'JQL', 'Filtros', 'Dashboards',
                        'Integraciones Git', 'Releases', 'Roadmap',
                    ],
                },
                figma: {
                    name: 'Figma',
                    description:
                        'Uso de Figma tanto para diseñar como para consumir diseños como desarrollador, lo que aporta una comprensión real de los sistemas de diseño desde ambos lados. Prototipado de flujos de usuario, creación y organización de componentes con variantes, colaboración en design systems y exportación de assets optimizados para web. La formación en Arquitectura refuerza el criterio estético aplicado en cada proyecto.',
                    keywords: [
                        'Prototipado', 'Auto Layout', 'Componentes', 'Variantes',
                        'Design tokens', 'Design system', 'Frames', 'Inspect',
                        'Exportación SVG', 'Colaboración en tiempo real', 'Plugins',
                    ],
                },
                illustrator: {
                    name: 'Illustrator',
                    description:
                        'Dominio de Adobe Illustrator para creación de identidades visuales, logotipos, material gráfico para eventos deportivos y recursos vectoriales para web. Experiencia aplicada en el CD Bádminton Valladolid diseñando carteles, banners y elementos de marca durante más de nueve años. Combinación con Photoshop para flujos de trabajo completos de producción gráfica.',
                    keywords: [
                        'Vectores', 'Bezier', 'Identidad corporativa', 'Logotipos',
                        'Tipografía', 'Guías y cuadrículas', 'Símbolos', 'Modos de fusión',
                        'Exportación SVG / PDF', 'Artboards', 'Trazado de imagen',
                    ],
                },
                photoshop: {
                    name: 'Photoshop',
                    description:
                        'Quince años de uso de Photoshop para retoque fotográfico, composición digital y producción de assets gráficos para web y eventos. Trabajo con capas, máscaras, ajustes no destructivos y acciones automatizadas. Aplicación en la creación de materiales gráficos para el club de bádminton, proyectos de arquitectura y webs corporativas, manteniendo siempre la coherencia visual con la identidad de marca.',
                    keywords: [
                        'Capas y máscaras', 'Retoque fotográfico', 'Composición digital',
                        'Ajustes no destructivos', 'Smart Objects', 'Acciones',
                        'Exportación web', 'Modos de color', 'Filtros', 'Tipografía',
                        'Assets para UI',
                    ],
                },
                autocad: {
                    name: 'AutoCAD',
                    description:
                        'Uso profesional de AutoCAD durante la etapa de formación y ejercicio en Arquitectura para elaborar planos técnicos 2D: plantas, alzados, secciones y detalles constructivos. Gestión de capas, bloques reutilizables, cotas y anotaciones normalizadas. Esta base técnica en documentación precisa se traslada hoy en la atención al detalle aplicada al desarrollo frontend y la organización visual de interfaces.',
                    keywords: [
                        'Planos 2D', 'Capas', 'Bloques', 'Cotas', 'Anotaciones',
                        'Detalles constructivos', 'Layouts', 'Plot / PDF', 'Escala',
                        'Xrefs', 'Hatch', 'Documentación técnica',
                    ],
                },
                revit: {
                    name: 'Revit',
                    description:
                        'Introducción al modelado BIM con Autodesk Revit durante la carrera de Arquitectura, con uso en proyectos académicos de coordinación multidisciplinar. Creación de modelos de edificación con familias, vistas y planimetría asociada. Comprensión del flujo de trabajo colaborativo en BIM y sus implicaciones en la gestión de proyectos de construcción.',
                    keywords: [
                        'BIM', 'Familias', 'Vistas', 'Planimetría', 'Coordinación',
                        'Parámetros', 'IFC', 'Niveles', 'Fases', 'Render básico',
                    ],
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
                        'Over a decade building interfaces from scratch: semantic HTML5 markup, advanced CSS animations and transitions, responsive design with Grid and Flexbox, and web accessibility (WCAG). Experience optimising render performance, using CSS custom properties for dynamic theming, and building coherent visual component systems in large-scale projects.',
                    keywords: [
                        'HTML5', 'CSS3', 'Flexbox', 'CSS Grid', 'Responsive design',
                        'CSS animations', 'CSS variables', 'WCAG', 'BEM', 'Web Components',
                        'Media queries', 'Pseudo-elements', 'Keyframes',
                    ],
                },
                'scss-less': {
                    name: 'SCSS / LESS',
                    description:
                        'Proficient in CSS preprocessors for maintaining scalable and maintainable styles in long-running projects. Advanced use of variables, parameterised mixins, functions, controlled nesting and modules. Defining style architectures based on methodologies such as ITCSS or the 7-1 pattern, ensuring visual consistency and ease of maintenance across multidisciplinary teams.',
                    keywords: [
                        'SCSS', 'LESS', 'Mixins', 'Variables', 'Nesting', 'Functions',
                        'Partials', 'ITCSS', '7-1 pattern', 'Modules', 'Theming', 'Maps',
                    ],
                },
                js: {
                    name: 'JavaScript',
                    description:
                        'Strong foundation in modern JavaScript from ES6 onwards: asynchronous programming with Promises and async/await, efficient DOM manipulation, design patterns (module, observer, factory), advanced closures and scope. Experience integrating REST APIs and WebSockets, optimising performance with debounce/throttle and lazy loading, and building complex business logic on the client side without unnecessary dependencies.',
                    keywords: [
                        'ES6+', 'Async/Await', 'Promises', 'Event Loop', 'Closures',
                        'DOM API', 'Fetch API', 'WebSockets', 'ESM modules', 'Destructuring',
                        'Spread/Rest', 'Proxy', 'Iterators', 'Generators', 'Lazy loading',
                    ],
                },
                ts: {
                    name: 'TypeScript',
                    description:
                        'TypeScript adopted as the standard in Angular and Node.js projects to improve code robustness and the team development experience. Use of advanced types, interfaces, generics, decorators and utility types to correctly model each application\'s domain. Strict tsconfig configuration and definition of shared types between frontend and backend to ensure solid contracts between layers.',
                    keywords: [
                        'Static typing', 'Interfaces', 'Generics', 'Decorators',
                        'Union types', 'Intersection types', 'Utility types', 'Enums',
                        'Type guards', 'Mapped types', 'Strict mode', 'Declaration files',
                    ],
                },
                angular: {
                    name: 'Angular',
                    description:
                        'Primary working stack for the past six years, with experience across Angular versions 8 through 19+. Development of complex SPAs with modular architecture, lazy loading and code splitting to optimise load times. Reactive state management with RxJS and signals, component communication, HTTP guards and interceptors. Integration with Angular Material, creation of reusable component libraries, and technical leadership of frontend teams on international projects with AEM and Magnolia CMS.',
                    keywords: [
                        'Angular CLI', 'RxJS', 'Signals', 'Lazy loading', 'Guards',
                        'Interceptors', 'NgRx', 'Two-way binding', 'Change detection',
                        'Standalone components', 'Pipes', 'Directives', 'Angular Material',
                        'Modules', 'Resolvers', 'SSR', 'Angular Universal',
                    ],
                },
                react: {
                    name: 'React',
                    description:
                        'Introductory knowledge of React aimed at understanding the ecosystem and being able to collaborate with teams that use it. Handling of functional components, basic hooks (useState, useEffect) and local state management. Ability to read, maintain and extend existing React code with sound judgement, supported by a strong JavaScript and TypeScript foundation.',
                    keywords: [
                        'JSX', 'Hooks', 'useState', 'useEffect', 'Props',
                        'Functional components', 'Virtual DOM', 'Context API',
                    ],
                },
                php: {
                    name: 'PHP',
                    description:
                        'Ten years developing backend solutions in PHP, mainly for personal projects and clients: REST APIs, member management systems, payment gateways (Stripe, Redsys) and content platforms. Experience with object-oriented PHP, session management and authentication, integration with MySQL and Firebase, and deployment on VPS servers and Google Cloud. Ability to maintain and scale legacy PHP projects without frameworks.',
                    keywords: [
                        'PHP 8', 'OOP', 'REST APIs', 'Payment gateways', 'Authentication',
                        'PDO', 'Composer', 'Sessions', 'Cron jobs', 'cURL', 'Webhooks',
                        'MySQL integration', 'JWT', 'VPS deploy',
                    ],
                },
                nodejs: {
                    name: 'Node.js',
                    description:
                        'Development of REST APIs with Express for fullstack projects, particularly for the CD Bádminton Valladolid platform and personal projects. Implementation of middleware, JWT authentication, stream and event handling, integration with Firebase and relational databases. Deployment on Google Cloud and Docker containers, with experience automating processes such as notifications, registration management and scheduled tasks.',
                    keywords: [
                        'Express', 'REST API', 'JWT', 'Middleware', 'Streams',
                        'Event Emitter', 'npm', 'dotenv', 'Nodemon', 'PM2',
                        'Cloud Functions', 'Firebase Admin SDK', 'CORS', 'Rate limiting',
                    ],
                },
                springboot: {
                    name: 'Spring Boot',
                    description:
                        'Introduction to backend development with Java through Spring Boot, acquired during the Web Application Development programme. Creation of basic REST services, understanding of dependency injection, Spring annotations and Maven project structure. A starting point for projects requiring interoperability with Java enterprise environments.',
                    keywords: [
                        'Java', 'Spring MVC', 'REST Controllers', 'Dependency injection',
                        'Maven', 'Annotations', 'Basic JPA',
                    ],
                },
                mysql: {
                    name: 'MySQL',
                    description:
                        'Design and maintenance of relational databases in real projects with active users for over a decade. Normalised schema modelling, complex queries with multiple JOINs, subqueries and aggregation functions. Index optimisation for frequent queries, transaction management and referential integrity control. Experience integrating MySQL with PHP and Node.js in production environments.',
                    keywords: [
                        'SQL', 'JOINs', 'Subqueries', 'Indexes', 'Transactions',
                        'Normalisation', 'Views', 'Stored Procedures', 'Foreign Keys',
                        'GROUP BY', 'Window Functions', 'Backup / Restore', 'phpMyAdmin',
                    ],
                },
                mongodb: {
                    name: 'MongoDB',
                    description:
                        'Use of MongoDB as a document database in projects where schema flexibility adds value, particularly in combination with Firebase and Node.js. Document modelling, basic queries and aggregation pipelines. Understanding of the differences between relational and document databases to choose the right tool based on the problem domain.',
                    keywords: [
                        'NoSQL', 'Documents', 'Collections', 'Aggregation pipeline',
                        'Mongoose', 'ObjectId', 'Indexes', 'Lookup', '$match / $group',
                    ],
                },
                docker: {
                    name: 'Docker',
                    description:
                        'Using Docker to containerise fullstack applications and simplify deployment across different environments. Creation of Dockerfiles for Node.js, PHP and Angular services, orchestration of multiple services with Docker Compose, and management of volumes and networks. Integration into basic CI/CD workflows and deployment on Google Cloud.',
                    keywords: [
                        'Dockerfile', 'Docker Compose', 'Images', 'Containers',
                        'Volumes', 'Networks', 'Docker Hub', 'Multi-stage builds',
                        'Entrypoint', 'Env vars', 'CI/CD', 'Cloud Run',
                    ],
                },
                googlecloud: {
                    name: 'Google Cloud',
                    description:
                        'Ongoing use of Google Cloud Platform as deployment infrastructure for personal projects over more than six years. Deploying Node.js and Angular applications on App Engine and Cloud Run, using Cloud Functions for serverless automations, managing storage on Cloud Storage, and configuring custom domains and SSL certificates. Integration with Firebase for authentication and real-time database.',
                    keywords: [
                        'App Engine', 'Cloud Run', 'Cloud Functions', 'Cloud Storage',
                        'Firebase hosting', 'IAM', 'gcloud CLI', 'Serverless',
                        'Custom domains', 'SSL', 'Scheduler', 'Pub/Sub basics',
                    ],
                },
                firebase: {
                    name: 'Firebase',
                    description:
                        'Integrating Firebase as a backend-as-a-service in personal projects to speed up development. User authentication with email, Google and custom tokens, Firestore for structured data and Realtime Database for real-time sync. Firebase Hosting for deploying Angular apps with caching and CDN, and Firebase Admin SDK in Node.js for server-side operations.',
                    keywords: [
                        'Firestore', 'Realtime Database', 'Authentication', 'Firebase Hosting',
                        'Admin SDK', 'Security Rules', 'onSnapshot', 'Cloud Messaging',
                        'Storage', 'Emulator Suite',
                    ],
                },
                git: {
                    name: 'Git',
                    description:
                        'Daily use of Git in multidisciplinary teams with structured workflows. Branch management with GitFlow and trunk-based development, conflict resolution in complex merges and rebases, pull request reviews with constructive feedback, and defining commit standards (Conventional Commits). Experience leading branching strategy in projects with multiple developers and continuous delivery cycles.',
                    keywords: [
                        'GitFlow', 'Trunk-based development', 'Pull Requests', 'Code review',
                        'Rebase', 'Cherry-pick', 'Stash', 'Tags', 'Conventional Commits',
                        'GitHub', 'GitLab', 'Hooks', 'Merge strategies',
                    ],
                },
                'agile-scrum': {
                    name: 'Agile / Scrum',
                    description:
                        'Working in agile environments both as a team member and, more recently, leading the frontend team at Serbatic. Active participation in all Scrum ceremonies: sprint planning, daily standups, backlog refinement, reviews and retrospectives. Managing Kanban boards to visualise workflow and identify bottlenecks. Focus on continuous value delivery and ongoing team process improvement.',
                    keywords: [
                        'Scrum', 'Kanban', 'Sprint planning', 'Daily standup', 'Retrospective',
                        'Backlog refinement', 'User stories', 'Story points', 'Velocity',
                        'Definition of Done', 'WIP limits', 'Burndown chart',
                    ],
                },
                jira: {
                    name: 'Jira',
                    description:
                        'Using Jira as the central project management tool at Serbatic to coordinate frontend team work and communication with international clients. Creating and prioritising epics, stories and subtasks, configuring Scrum and Kanban boards, tracking sprint progress and generating velocity reports. Integration with Git repositories for traceability between commits and tickets.',
                    keywords: [
                        'Epics', 'User stories', 'Subtasks', 'Sprints', 'Kanban board',
                        'Custom workflow', 'JQL', 'Filters', 'Dashboards',
                        'Git integration', 'Releases', 'Roadmap',
                    ],
                },
                figma: {
                    name: 'Figma',
                    description:
                        'Using Figma both to design and to consume designs as a developer, bringing a genuine understanding of design systems from both sides. User flow prototyping, creation and organisation of components with variants, collaboration on design systems and export of optimised web assets. An Architecture background reinforces the aesthetic judgement applied to every project.',
                    keywords: [
                        'Prototyping', 'Auto Layout', 'Components', 'Variants',
                        'Design tokens', 'Design system', 'Frames', 'Inspect',
                        'SVG export', 'Real-time collaboration', 'Plugins',
                    ],
                },
                illustrator: {
                    name: 'Illustrator',
                    description:
                        'Proficient in Adobe Illustrator for creating visual identities, logos, graphic material for sports events and vector assets for the web. Applied experience at CD Bádminton Valladolid designing posters, banners and brand elements for over nine years. Combined with Photoshop for complete graphic production workflows.',
                    keywords: [
                        'Vectors', 'Bezier', 'Corporate identity', 'Logos',
                        'Typography', 'Guides & grids', 'Symbols', 'Blend modes',
                        'SVG / PDF export', 'Artboards', 'Image trace',
                    ],
                },
                photoshop: {
                    name: 'Photoshop',
                    description:
                        'Fifteen years using Photoshop for photo retouching, digital compositing and production of graphic assets for web and events. Working with layers, masks, non-destructive adjustments and automated actions. Applied to creating graphic materials for the badminton club, architecture projects and corporate websites, always maintaining visual consistency with the brand identity.',
                    keywords: [
                        'Layers & masks', 'Photo retouching', 'Digital compositing',
                        'Non-destructive edits', 'Smart Objects', 'Actions',
                        'Web export', 'Colour modes', 'Filters', 'Typography',
                        'UI assets',
                    ],
                },
                autocad: {
                    name: 'AutoCAD',
                    description:
                        'Professional use of AutoCAD during the Architecture training and practice period to produce 2D technical drawings: floor plans, elevations, sections and construction details. Layer management, reusable blocks, dimensions and standardised annotations. This technical background in precise documentation translates today into the attention to detail applied to frontend development and interface visual organisation.',
                    keywords: [
                        '2D drawings', 'Layers', 'Blocks', 'Dimensions', 'Annotations',
                        'Construction details', 'Layouts', 'Plot / PDF', 'Scale',
                        'Xrefs', 'Hatch', 'Technical documentation',
                    ],
                },
                revit: {
                    name: 'Revit',
                    description:
                        'Introduction to BIM modelling with Autodesk Revit during the Architecture degree, used in academic projects for multidisciplinary coordination. Creation of building models with families, views and associated plans. Understanding of the collaborative BIM workflow and its implications for construction project management.',
                    keywords: [
                        'BIM', 'Families', 'Views', 'Plans', 'Coordination',
                        'Parameters', 'IFC', 'Levels', 'Phases', 'Basic render',
                    ],
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
