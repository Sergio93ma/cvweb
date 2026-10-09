import type { Dict } from './en';

export const es: Dict = {
    meta: {
        title: 'Sergio Martín Alonso | Desarrollador Frontend Senior',
        description: 'Desarrollador Frontend con más de 9 años de experiencia construyendo aplicaciones web escalables con Angular, AEM y JavaScript moderno. Especializado en rendimiento, mantenibilidad e impacto real en el negocio.',
    },
    common: { years: 'años', downloadCV: 'Descargar CV' },
    months: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ],
    header: {
        role: 'Front Senior Developer',
        status: 'OPEN TO OFFERS',
        nav: {
            skills: 'Skills',
            experience: 'Experience',
            education: 'Education',
            databox: 'Databox',
            projects: 'Projects',
        },
    },
    aboutme: {
        senior_frontend_developer: 'DESARROLLADOR_SENIOR_FRONTEND',
        viewProjects: 'Ver Proyectos Seleccionados',
        description1: 'Soy desarrollador frontend con más de 10 años de experiencia, pero antes diseñaba edificios. Estudié Arquitectura, y eso me enseñó a diseñar con criterio estético, a cuidar cada detalle visual y a entender que lo que se ve importa tanto como lo que hay detrás. Cuando descubrí el desarrollo web, todo encajó: llevaba años programando porque me gustaba crear con lógica y construir cosas que resolvieran problemas reales. Unir esas dos formas de pensar es lo que define cómo trabajo hoy.',
        description2: 'Actualmente soy Senior Frontend Developer especializado en Angular y TypeScript en Accenture, desarrollando con AEM para clientes internacionales y con experiencia liderando un equipo de frontend. Me importa tanto que el código sea limpio como que el producto final tenga sentido para quien lo usa. Cuando el código está bien escrito, se nota: las páginas cargan más rápido, escalan mejor y son mucho más fáciles de mantener.',
        description3: 'Busco equipos donde se construya con criterio, se aprenda de verdad y el frontend se trate con la misma seriedad que el resto del producto.',
        profilePhoto: 'Sergio Martín Alonso - Desarrollador Senior Frontend',
    },
    summary: {
        'professional-experience': 'Años de Experiencia Profesional',
        'years-building': 'Años Desarrollando Proyectos Web',
        'projects-delivered': 'Proyectos Web Entregados',
        'production-technologies': 'Tecnologías en Producción',
    },
    skills: {
        title: 'Habilidades Técnicas',
        exp: 'Exp:',
        keywords: 'Keywords:',
        categories: {
            frontend: 'Frontend',
            backend: 'Backend',
            'db-deploy': 'Bases de datos y despliegue',
            management: 'Gestión y metodologías',
            design: 'Diseño',
        },
        items: {
            'html-css': {
                name: 'HTML / CSS',
                description: 'Más de una década construyendo interfaces desde cero: maquetación semántica con HTML5, animaciones y transiciones CSS avanzadas, diseño responsive con Grid y Flexbox, y accesibilidad web (WCAG). Experiencia en optimización del rendimiento de renderizado, uso de variables CSS para theming dinámico y construcción de sistemas de componentes visuales coherentes en proyectos de gran escala.',
                keywords: 'HTML5, CSS3, Flexbox, CSS Grid, Responsive design, Animaciones CSS, Variables CSS, WCAG, BEM, Web Components, Media queries, Pseudo-elementos, Keyframes',
            },
            'scss-less': {
                name: 'SCSS / LESS',
                description: 'Dominio de preprocesadores CSS para mantener estilos escalables y mantenibles en proyectos de larga duración. Uso avanzado de variables, mixins parametrizados, funciones, anidación controlada y módulos. Definición de arquitecturas de estilos basadas en metodologías como ITCSS o 7-1 pattern, garantizando coherencia visual y facilidad de mantenimiento en equipos multidisciplinares.',
                keywords: 'SCSS, LESS, Mixins, Variables, Anidación, Funciones, Partials, ITCSS, Patrón 7-1, Módulos, Theming, Maps',
            },
            js: {
                name: 'JavaScript',
                description: 'Base sólida en JavaScript moderno desde ES6 en adelante: programación asíncrona con Promises y async/await, manipulación eficiente del DOM, patrones de diseño (módulo, observador, factoría), closures y scope avanzado. Experiencia integrando APIs REST y WebSockets, optimizando rendimiento con debounce/throttle y lazy loading, y construyendo lógica de negocio compleja en el cliente sin dependencias innecesarias.',
                keywords: 'ES6+, Async/Await, Promises, Event Loop, Closures, DOM API, Fetch API, WebSockets, Módulos ESM, Destructuring, Spread/Rest, Proxy, Iteradores, Generadores, Lazy loading',
            },
            ts: {
                name: 'TypeScript',
                description: 'Adopción de TypeScript como estándar en proyectos Angular y Node.js para mejorar la robustez del código y la experiencia de desarrollo en equipo. Uso de tipos avanzados, interfaces, genéricos, decoradores y utility types para modelar correctamente el dominio de cada aplicación. Configuración de tsconfig estricta y definición de tipos compartidos entre frontend y backend para garantizar contratos sólidos entre capas.',
                keywords: 'Tipado estático, Interfaces, Generics, Decoradores, Union types, Intersection types, Utility types, Enums, Type guards, Mapped types, Strict mode, Declaration files',
            },
            angular: {
                name: 'Angular',
                description: 'Stack principal de trabajo en los últimos seis años, con experiencia en Angular desde la versión 8 hasta Angular 19+. Desarrollo de SPAs complejas con arquitectura modular, lazy loading y code splitting para optimizar tiempos de carga. Gestión de estado reactivo con RxJS y signals, comunicación entre componentes, guards e interceptores HTTP. Integración con Angular Material, creación de librerías de componentes reutilizables y liderazgo técnico de equipos frontend en proyectos internacionales con AEM y Magnolia CMS.',
                keywords: 'Angular CLI, RxJS, Signals, Lazy loading, Guards, Interceptors, NgRx, Two-way binding, Change detection, Standalone components, Pipes, Directives, Angular Material, Módulos, Resolvers, SSR, Angular Universal',
            },
            react: {
                name: 'React',
                description: 'Conocimiento introductorio de React orientado a entender el ecosistema y poder colaborar con equipos que lo utilizan. Manejo de componentes funcionales, hooks básicos (useState, useEffect) y gestión de estado local. Capacidad para leer, mantener y extender código React existente con criterio, apoyado en la base sólida de JavaScript y TypeScript.',
                keywords: 'JSX, Hooks, useState, useEffect, Props, Componentes funcionales, Virtual DOM, Context API',
            },
            php: {
                name: 'PHP',
                description: 'Diez años desarrollando soluciones backend en PHP, principalmente para proyectos propios y clientes: APIs REST, sistemas de gestión de socios, pasarelas de pago (Stripe, Redsys) y plataformas de contenidos. Experiencia con PHP orientado a objetos, gestión de sesiones y autenticación, integración con MySQL y Firebase, y despliegue en servidores VPS y Google Cloud. Capacidad para mantener y escalar proyectos legacy en PHP sin frameworks.',
                keywords: 'PHP 8, POO, APIs REST, Pasarelas de pago, Autenticación, PDO, Composer, Sesiones, Cron jobs, cURL, Webhooks, MySQL integration, JWT, VPS deploy',
            },
            nodejs: {
                name: 'Node.js',
                description: 'Desarrollo de APIs REST con Express para proyectos fullstack, especialmente en el contexto de la plataforma del CD Bádminton Valladolid y otros proyectos propios. Implementación de middleware, autenticación con JWT, manejo de streams y eventos, integración con Firebase y bases de datos relacionales. Despliegue en Google Cloud y contenedores Docker, con experiencia en automatización de procesos como notificaciones, gestión de inscripciones y tareas programadas.',
                keywords: 'Express, REST API, JWT, Middleware, Streams, Event Emitter, npm, dotenv, Nodemon, PM2, Cloud Functions, Firebase Admin SDK, CORS, Rate limiting',
            },
            springboot: {
                name: 'Spring Boot',
                description: 'Introducción al desarrollo backend con Java a través de Spring Boot, adquirida durante la formación en Desarrollo de Aplicaciones Web. Creación de servicios REST básicos, comprensión de la inyección de dependencias, anotaciones de Spring y estructura de proyectos Maven. Punto de partida para proyectos que requieran interoperabilidad con entornos Java empresariales.',
                keywords: 'Java, Spring MVC, REST Controllers, Inyección de dependencias, Maven, Anotaciones, JPA básico',
            },
            mysql: {
                name: 'MySQL',
                description: 'Diseño y mantenimiento de bases de datos relacionales en proyectos reales con usuarios activos durante más de una década. Modelado de esquemas normalizados, consultas complejas con múltiples JOINs, subconsultas y funciones de agregación. Optimización de índices para consultas frecuentes, gestión de transacciones y control de integridad referencial. Experiencia integrando MySQL con PHP y Node.js en entornos de producción.',
                keywords: 'SQL, JOINs, Subconsultas, Índices, Transacciones, Normalización, Vistas, Stored Procedures, Foreign Keys, GROUP BY, Window Functions, Backup / Restore, phpMyAdmin',
            },
            mongodb: {
                name: 'MongoDB',
                description: 'Uso de MongoDB como base de datos documental en proyectos donde la flexibilidad del esquema aporta valor, especialmente en combinación con Firebase y Node.js. Modelado de documentos, consultas básicas y pipeline de agregación. Comprensión de las diferencias entre bases de datos relacionales y documentales para elegir la herramienta adecuada según el dominio del problema.',
                keywords: 'NoSQL, Documentos, Colecciones, Aggregation pipeline, Mongoose, ObjectId, Índices, Lookup, $match / $group',
            },
            docker: {
                name: 'Docker',
                description: 'Uso de Docker para contenerizar aplicaciones fullstack y simplificar el despliegue en diferentes entornos. Creación de Dockerfiles para servicios Node.js, PHP y Angular, orquestación de múltiples servicios con Docker Compose y gestión de volúmenes y redes. Integración en flujos de trabajo de CI/CD básicos y despliegue en Google Cloud.',
                keywords: 'Dockerfile, Docker Compose, Imágenes, Contenedores, Volúmenes, Redes, Docker Hub, Multi-stage builds, Entrypoint, Env vars, CI/CD, Cloud Run',
            },
            googlecloud: {
                name: 'Google Cloud',
                description: 'Uso continuado de Google Cloud Platform como infraestructura de despliegue en proyectos propios durante más de seis años. Despliegue de aplicaciones Node.js y Angular en App Engine y Cloud Run, uso de Cloud Functions para automatizaciones serverless, gestión de almacenamiento en Cloud Storage y configuración de dominios y certificados SSL. Integración con Firebase para autenticación y base de datos en tiempo real.',
                keywords: 'App Engine, Cloud Run, Cloud Functions, Cloud Storage, Firebase hosting, IAM, gcloud CLI, Serverless, Dominios personalizados, SSL, Scheduler, Pub/Sub básico',
            },
            firebase: {
                name: 'Firebase',
                description: 'Integración de Firebase como backend-as-a-service en proyectos propios para agilizar el desarrollo. Autenticación de usuarios con email, Google y tokens personalizados, uso de Firestore para datos estructurados y Realtime Database para sincronización en tiempo real. Firebase Hosting para despliegue de apps Angular con caché y CDN, y Firebase Admin SDK en Node.js para operaciones de servidor.',
                keywords: 'Firestore, Realtime Database, Authentication, Firebase Hosting, Admin SDK, Security Rules, onSnapshot, Cloud Messaging, Storage, Emulator Suite',
            },
            git: {
                name: 'Git',
                description: 'Uso diario de Git en equipos multidisciplinares con flujos de trabajo estructurados. Gestión de ramas con GitFlow y trunk-based development, resolución de conflictos en merges y rebases complejos, revisión de pull requests con feedback constructivo y definición de estándares de commits (Conventional Commits). Experiencia liderando la estrategia de branching en proyectos con múltiples desarrolladores y ciclos de entrega continuos.',
                keywords: 'GitFlow, Trunk-based development, Pull Requests, Code review, Rebase, Cherry-pick, Stash, Tags, Conventional Commits, GitHub, GitLab, Hooks, Merge strategies',
            },
            'agile-scrum': {
                name: 'Agile / Scrum',
                description: 'Trabajo en entornos ágiles como parte del equipo de desarrollo y, más recientemente, liderando el equipo de frontend en Serbatic. Participación activa en todas las ceremonias Scrum: planificación de sprints, daily standups, refinamiento de backlog, reviews y retrospectivas. Gestión de tableros Kanban para visualizar el flujo de trabajo y detectar cuellos de botella. Foco en la entrega continua de valor y la mejora del proceso del equipo.',
                keywords: 'Scrum, Kanban, Sprint planning, Daily standup, Retrospectiva, Backlog refinement, User stories, Story points, Velocity, Definition of Done, WIP limits, Burndown chart',
            },
            jira: {
                name: 'Jira',
                description: 'Uso de Jira como herramienta central de gestión de proyectos en Serbatic para coordinar el trabajo del equipo frontend y la comunicación con clientes internacionales. Creación y priorización de epics, historias y subtareas, configuración de tableros Scrum y Kanban, seguimiento del progreso por sprint y generación de informes de velocidad. Integración con repositorios Git para trazabilidad entre commits y tickets.',
                keywords: 'Epics, User stories, Subtasks, Sprints, Tablero Kanban, Workflow personalizado, JQL, Filtros, Dashboards, Integraciones Git, Releases, Roadmap',
            },
            figma: {
                name: 'Figma',
                description: 'Uso de Figma tanto para diseñar como para consumir diseños como desarrollador, lo que aporta una comprensión real de los sistemas de diseño desde ambos lados. Prototipado de flujos de usuario, creación y organización de componentes con variantes, colaboración en design systems y exportación de assets optimizados para web. La formación en Arquitectura refuerza el criterio estético aplicado en cada proyecto.',
                keywords: 'Prototipado, Auto Layout, Componentes, Variantes, Design tokens, Design system, Frames, Inspect, Exportación SVG, Colaboración en tiempo real, Plugins',
            },
            illustrator: {
                name: 'Illustrator',
                description: 'Dominio de Adobe Illustrator para creación de identidades visuales, logotipos, material gráfico para eventos deportivos y recursos vectoriales para web. Experiencia aplicada en el CD Bádminton Valladolid diseñando carteles, banners y elementos de marca durante más de nueve años. Combinación con Photoshop para flujos de trabajo completos de producción gráfica.',
                keywords: 'Vectores, Bezier, Identidad corporativa, Logotipos, Tipografía, Guías y cuadrículas, Símbolos, Modos de fusión, Exportación SVG / PDF, Artboards, Trazado de imagen',
            },
            photoshop: {
                name: 'Photoshop',
                description: 'Quince años de uso de Photoshop para retoque fotográfico, composición digital y producción de assets gráficos para web y eventos. Trabajo con capas, máscaras, ajustes no destructivos y acciones automatizadas. Aplicación en la creación de materiales gráficos para el club de bádminton, proyectos de arquitectura y webs corporativas, manteniendo siempre la coherencia visual con la identidad de marca.',
                keywords: 'Capas y máscaras, Retoque fotográfico, Composición digital, Ajustes no destructivos, Smart Objects, Acciones, Exportación web, Modos de color, Filtros, Tipografía, Assets para UI',
            },
            autocad: {
                name: 'AutoCAD',
                description: 'Uso profesional de AutoCAD durante la etapa de formación y ejercicio en Arquitectura para elaborar planos técnicos 2D: plantas, alzados, secciones y detalles constructivos. Gestión de capas, bloques reutilizables, cotas y anotaciones normalizadas. Esta base técnica en documentación precisa se traslada hoy en la atención al detalle aplicada al desarrollo frontend y la organización visual de interfaces.',
                keywords: 'Planos 2D, Capas, Bloques, Cotas, Anotaciones, Detalles constructivos, Layouts, Plot / PDF, Escala, Xrefs, Hatch, Documentación técnica',
            },
            revit: {
                name: 'Revit',
                description: 'Introducción al modelado BIM con Autodesk Revit durante la carrera de Arquitectura, con uso en proyectos académicos de coordinación multidisciplinar. Creación de modelos de edificación con familias, vistas y planimetría asociada. Comprensión del flujo de trabajo colaborativo en BIM y sus implicaciones en la gestión de proyectos de construcción.',
                keywords: 'BIM, Familias, Vistas, Planimetría, Coordinación, Parámetros, IFC, Niveles, Fases, Render básico',
            },
        },
    },
    experience: {
        title: 'Trayectoria Profesional',
        present: 'Actualidad',
        items: {
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
            'frontend-accenture': {
                title: 'Desarrollador Frontend',
                company: 'Accenture',
                location: 'Madrid, España',
                items: [
                    'Desarrollo y mantenimiento frontend con Angular sobre Adobe Experience Manager (AEM) para clientes corporativos.',
                    'Integración de componentes, ciclo de publicación y resolución de incidencias en producción dentro de equipos ágiles.',
                ],
            },
        },
    },
    education: {
        title: 'Historial académico',
        dates: 'Fechas',
        institution: 'Institución',
        location: 'Localización',
        locations: { valladolid: 'Valladolid, España' },
        items: {
            technician: 'Título de Grado Superior en Desarrollo de Aplicaciones Web',
            highschool: 'Título de Bachillerato en la modalidad de Ciencias',
            architecture: 'Título de Grado en Arquitectura',
        },
    },
    databox: {
        title: 'El rendimiento no es opcional. Es estructural.',
        description: 'Diseño y construyo arquitecturas frontend donde el rendimiento es una prioridad de primer nivel. Desde la estrategia de bundle hasta la optimización del renderizado, cada decisión es intencionada y medible.',
        items: {
            lcp: 'LCP real',
            lighthouse: 'Lighthouse',
            bundle: 'Bundle',
            dependencies: 'Dependencias',
        },
    },
    projects: {
        title: 'Proyectos seleccionados',
        description: 'Una seleccion de los proyectos más interesantes que he desarrollado.',
        performanceImpact: 'Impacto en el rendimiento',
        technologies: 'Stack y Arquitectura',
        seeCode: 'Ver código',
        visit: 'Visitar página',
        close: 'Cerrar',
        metrics: {
            performance: 'Performance',
            accessibility: 'Accessibility',
            bestPractices: 'BestPractices',
            SEO: 'SEO',
            agentic: 'Agentic browsing',
        },
        items: {
            cdbv: {
                title: 'CD Bádminton Valladolid',
                summary: 'Web fullstack desarrollada en solitario para mi propio club de bádminton: desde el diseño gráfico hasta la pasarela de pago.',
                description: '<p>Proyecto personal en el que asumo <strong>todos los roles</strong>: diseño gráfico, diseño web, desarrollo frontend y backend, administración de base de datos y despliegue en producción.</p><p>La plataforma centraliza toda la información pública del club y ofrece un área privada para jugadores donde pueden <strong>gestionar sus reservas, modificar horarios, realizar compras y personalizar su perfil</strong>.</p><ul><li><strong>Frontend</strong> en Angular con diseño propio desde cero.</li><li><strong>Backend</strong> en Node.js desplegado en Firebase Functions.</li><li><strong>Base de datos</strong> MySQL en Google Cloud, comunicada con el backend mediante red interna de Cloud.</li><li><strong>Pagos online</strong> integrados mediante pasarela de pago.</li><li>Hosting en <strong>Firebase</strong> para frontend y funciones serverless.</li></ul><p>Un ejercicio real de arquitectura fullstack end-to-end, gestionado y mantenido de forma autónoma.</p>',
            },
            nave: {
                title: 'Plataforma de Gestión de Instalación Deportiva',
                summary: 'Aplicación web para conectar usuarios y administradores de una instalación deportiva privada: reservas, servicios y eventos en un solo lugar.',
                description: '<p>Desarrollo de una <strong>plataforma web completa</strong> para una instalación deportiva privada, orientada a facilitar la comunicación entre la empresa y sus clientes.</p><p>La aplicación permite a los usuarios <strong>alquilar espacios, contratar servicios adicionales y consultar eventos</strong>, mientras que los administradores gestionan la oferta y disponibilidad en tiempo real.</p><ul><li>Arquitectura <strong>backless</strong>: toda la lógica y persistencia resuelta con Firebase (Firestore + Auth + Hosting).</li><li>Frontend desarrollado íntegramente en <strong>Angular</strong>.</li><li>Solución pensada para <strong>minimizar costes de infraestructura</strong> sin sacrificar funcionalidad.</li></ul><p>Un ejemplo de cómo diseñar soluciones eficientes y económicas adaptadas a las necesidades reales del cliente.</p>',
            },
            aseguradora: {
                title: 'Aseguradora Multinacional',
                summary: 'Desarrollo frontend para la web corporativa de una aseguradora presente en más de 50 países, liderando un equipo de tres desarrolladores.',
                description: '<p>Creación desde cero de la web corporativa de una <strong>aseguradora de alcance internacional</strong>, con presencia en más de 50 países y contenido disponible en múltiples idiomas.</p><p>El proyecto exigió un <strong>trabajo de CSS avanzado y meticuloso</strong>, con numerosas animaciones y transiciones fluidas para responder a los altos estándares visuales del cliente.</p><ul><li>Stack frontend: <strong>Gulp + Pug + SASS</strong>, con JavaScript para funcionalidades interactivas.</li><li>Integración con <strong>Magnolia CMS</strong> para la gestión de contenidos, incluyendo trabajo directo en la plataforma para garantizar una integración perfecta.</li><li>Coordinación con el equipo de backend encargado de la configuración del CMS.</li></ul><p>Ejercí como <strong>líder técnico del equipo frontend</strong>, compuesto por tres desarrolladores, siendo responsable de las decisiones de arquitectura, revisión de código y comunicación con cliente.</p>',
            },
            parques: {
                title: 'Grupo Internacional de Parques de Atracciones',
                summary: 'Frontend para el portal web de un grupo de parques de atracciones con presencia en varios continentes, integrado en Adobe Experience Manager.',
                description: '<p>Desarrollo y mantenimiento del portal web de un <strong>grupo internacional de parques de ocio y atracciones</strong>, con decenas de parques distribuidos en múltiples países y disponible en varios idiomas.</p><p>El proyecto combina una <strong>capa pública</strong> desarrollada con HTML, JavaScript y LESS, y un <strong>área privada</strong> construida en Angular, todo ello compilado e integrado en <strong>Adobe Experience Manager (AEM)</strong>.</p><ul><li>Trabajo continuo con <strong>AEM</strong> para la integración de componentes y gestión del ciclo de publicación.</li><li>Incorporación al proyecto en una <strong>fase avanzada de desarrollo</strong>, asumiendo el contexto con rapidez.</li><li>Contribución activa tanto en el <strong>desarrollo de nuevas funcionalidades</strong> como en la <strong>resolución de incidencias</strong> en producción.</li></ul><p>Un entorno de proyecto vivo, con entregas periódicas y alta exigencia técnica en cuanto a rendimiento y compatibilidad.</p>',
            },
            cvweb: {
                title: 'Esta web — CV Interactivo',
                summary: 'Portfolio y CV personal desarrollado en Astro, concebido como un escaparate de capacidades frontend: rendimiento, accesibilidad, diseño, i18n y arquitectura limpia.',
                description: '<p>Más que un CV, esta web es en sí misma un <strong>proyecto técnico y creativo</strong>. Diseñada y desarrollada íntegramente por mí, tiene como objetivo demostrar distintas capacidades del desarrollo frontend moderno.</p><ul><li>Desarrollada en <strong>Astro</strong> como web estática: sin framework de UI, TypeScript vanilla mínimo y código limpio.</li><li>Puntuación perfecta de <strong>100/100 en Lighthouse</strong> en rendimiento, accesibilidad, buenas prácticas y SEO.</li><li>Alojada en <strong>Firebase Hosting</strong> para un despliegue ágil y económico.</li><li>Soporte <strong>multiidioma (i18n)</strong> con traducciones en español e inglés.</li><li>Diseño visual propio, con atención al detalle tipográfico, animaciones y composición.</li></ul><p>Cada sección de la web es una oportunidad para explorar diferentes técnicas: desde componentes reutilizables hasta efectos visuales, pasando por la gestión de estado y la experiencia de usuario.</p>',
            },
        },
    },
    notFound: { title: 'Página no encontrada', text: 'La página que buscas no existe o se ha movido.', back: 'Volver al inicio' },
    footer: {
        linkedinLink: 'Visita mi perfil de LinkedIn',
        githubLink: 'Visita mi perfil de GitHub',
        toggleLanguage: 'Cambiar idioma entre español e inglés',
        spanishFlag: 'Bandera de España',
        toggleTheme: 'Cambiar entre tema claro y oscuro',
    },
};
