/** English dictionary: source of truth for the shape of every language. */
export const en = {
    meta: {
        title: 'Sergio Martín Alonso | Senior Frontend Developer',
        description: 'Frontend Developer with 9+ years of experience building scalable web applications with Angular, AEM and modern JavaScript. Specialized in performance, maintainability and real business impact.',
    },
    common: { years: 'years', downloadCV: 'Download CV' },
    months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
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
        senior_frontend_developer: 'SENIOR_FRONTEND_DEVELOPER',
        viewProjects: 'View Selected Projects',
        description1: 'Frontend developer with more than 10 years of experience, but previously designed buildings. Studied Architecture, which taught me to design with aesthetic judgment, to care about every visual detail, and to understand that what you see matters just as much as what lies behind it. When I discovered web development, everything clicked: I had been programming for years because I enjoyed creating with logic and building things that solved real problems. Bringing those two ways of thinking together is what defines how I work today.',
        description2: 'Currently a Senior Frontend Developer specialized in Angular and TypeScript at Serbatic, developing with AEM for international clients and leading a frontend team. Care as much about clean code as about the final product making sense to the user. When code is well written, it shows: pages load faster, scale better, and are much easier to maintain.',
        description3: 'Looking for teams where things are built with intention, where there is real learning, and where frontend is treated with the same level of seriousness as the rest of the product.',
        profilePhoto: 'Sergio Martín Alonso - Senior Frontend Developer',
    },
    summary: {
        'professional-experience': 'Professional Experience',
        'years-building': 'Years Building Web Projects',
        'projects-delivered': 'Web Projects Delivered',
        'production-technologies': 'Production Technologies',
    },
    skills: {
        title: 'Technical Skills',
        exp: 'Exp:',
        keywords: 'Keywords:',
        categories: {
            frontend: 'Frontend',
            backend: 'Backend',
            'db-deploy': 'Databases & Deployment',
            management: 'Management & Methodologies',
            design: 'Design',
        },
        items: {
            'html-css': {
                name: 'HTML / CSS',
                description: 'Over a decade building interfaces from scratch: semantic HTML5 markup, advanced CSS animations and transitions, responsive design with Grid and Flexbox, and web accessibility (WCAG). Experience optimising render performance, using CSS custom properties for dynamic theming, and building coherent visual component systems in large-scale projects.',
                keywords: 'HTML5, CSS3, Flexbox, CSS Grid, Responsive design, CSS animations, CSS variables, WCAG, BEM, Web Components, Media queries, Pseudo-elements, Keyframes',
            },
            'scss-less': {
                name: 'SCSS / LESS',
                description: 'Proficient in CSS preprocessors for maintaining scalable and maintainable styles in long-running projects. Advanced use of variables, parameterised mixins, functions, controlled nesting and modules. Defining style architectures based on methodologies such as ITCSS or the 7-1 pattern, ensuring visual consistency and ease of maintenance across multidisciplinary teams.',
                keywords: 'SCSS, LESS, Mixins, Variables, Nesting, Functions, Partials, ITCSS, 7-1 pattern, Modules, Theming, Maps',
            },
            js: {
                name: 'JavaScript',
                description: 'Strong foundation in modern JavaScript from ES6 onwards: asynchronous programming with Promises and async/await, efficient DOM manipulation, design patterns (module, observer, factory), advanced closures and scope. Experience integrating REST APIs and WebSockets, optimising performance with debounce/throttle and lazy loading, and building complex business logic on the client side without unnecessary dependencies.',
                keywords: 'ES6+, Async/Await, Promises, Event Loop, Closures, DOM API, Fetch API, WebSockets, ESM modules, Destructuring, Spread/Rest, Proxy, Iterators, Generators, Lazy loading',
            },
            ts: {
                name: 'TypeScript',
                description: 'TypeScript adopted as the standard in Angular and Node.js projects to improve code robustness and the team development experience. Use of advanced types, interfaces, generics, decorators and utility types to correctly model each application\'s domain. Strict tsconfig configuration and definition of shared types between frontend and backend to ensure solid contracts between layers.',
                keywords: 'Static typing, Interfaces, Generics, Decorators, Union types, Intersection types, Utility types, Enums, Type guards, Mapped types, Strict mode, Declaration files',
            },
            angular: {
                name: 'Angular',
                description: 'Primary working stack for the past six years, with experience across Angular versions 8 through 19+. Development of complex SPAs with modular architecture, lazy loading and code splitting to optimise load times. Reactive state management with RxJS and signals, component communication, HTTP guards and interceptors. Integration with Angular Material, creation of reusable component libraries, and technical leadership of frontend teams on international projects with AEM and Magnolia CMS.',
                keywords: 'Angular CLI, RxJS, Signals, Lazy loading, Guards, Interceptors, NgRx, Two-way binding, Change detection, Standalone components, Pipes, Directives, Angular Material, Modules, Resolvers, SSR, Angular Universal',
            },
            react: {
                name: 'React',
                description: 'Introductory knowledge of React aimed at understanding the ecosystem and being able to collaborate with teams that use it. Handling of functional components, basic hooks (useState, useEffect) and local state management. Ability to read, maintain and extend existing React code with sound judgement, supported by a strong JavaScript and TypeScript foundation.',
                keywords: 'JSX, Hooks, useState, useEffect, Props, Functional components, Virtual DOM, Context API',
            },
            php: {
                name: 'PHP',
                description: 'Ten years developing backend solutions in PHP, mainly for personal projects and clients: REST APIs, member management systems, payment gateways (Stripe, Redsys) and content platforms. Experience with object-oriented PHP, session management and authentication, integration with MySQL and Firebase, and deployment on VPS servers and Google Cloud. Ability to maintain and scale legacy PHP projects without frameworks.',
                keywords: 'PHP 8, OOP, REST APIs, Payment gateways, Authentication, PDO, Composer, Sessions, Cron jobs, cURL, Webhooks, MySQL integration, JWT, VPS deploy',
            },
            nodejs: {
                name: 'Node.js',
                description: 'Development of REST APIs with Express for fullstack projects, particularly for the CD Bádminton Valladolid platform and personal projects. Implementation of middleware, JWT authentication, stream and event handling, integration with Firebase and relational databases. Deployment on Google Cloud and Docker containers, with experience automating processes such as notifications, registration management and scheduled tasks.',
                keywords: 'Express, REST API, JWT, Middleware, Streams, Event Emitter, npm, dotenv, Nodemon, PM2, Cloud Functions, Firebase Admin SDK, CORS, Rate limiting',
            },
            springboot: {
                name: 'Spring Boot',
                description: 'Introduction to backend development with Java through Spring Boot, acquired during the Web Application Development programme. Creation of basic REST services, understanding of dependency injection, Spring annotations and Maven project structure. A starting point for projects requiring interoperability with Java enterprise environments.',
                keywords: 'Java, Spring MVC, REST Controllers, Dependency injection, Maven, Annotations, Basic JPA',
            },
            mysql: {
                name: 'MySQL',
                description: 'Design and maintenance of relational databases in real projects with active users for over a decade. Normalised schema modelling, complex queries with multiple JOINs, subqueries and aggregation functions. Index optimisation for frequent queries, transaction management and referential integrity control. Experience integrating MySQL with PHP and Node.js in production environments.',
                keywords: 'SQL, JOINs, Subqueries, Indexes, Transactions, Normalisation, Views, Stored Procedures, Foreign Keys, GROUP BY, Window Functions, Backup / Restore, phpMyAdmin',
            },
            mongodb: {
                name: 'MongoDB',
                description: 'Use of MongoDB as a document database in projects where schema flexibility adds value, particularly in combination with Firebase and Node.js. Document modelling, basic queries and aggregation pipelines. Understanding of the differences between relational and document databases to choose the right tool based on the problem domain.',
                keywords: 'NoSQL, Documents, Collections, Aggregation pipeline, Mongoose, ObjectId, Indexes, Lookup, $match / $group',
            },
            docker: {
                name: 'Docker',
                description: 'Using Docker to containerise fullstack applications and simplify deployment across different environments. Creation of Dockerfiles for Node.js, PHP and Angular services, orchestration of multiple services with Docker Compose, and management of volumes and networks. Integration into basic CI/CD workflows and deployment on Google Cloud.',
                keywords: 'Dockerfile, Docker Compose, Images, Containers, Volumes, Networks, Docker Hub, Multi-stage builds, Entrypoint, Env vars, CI/CD, Cloud Run',
            },
            googlecloud: {
                name: 'Google Cloud',
                description: 'Ongoing use of Google Cloud Platform as deployment infrastructure for personal projects over more than six years. Deploying Node.js and Angular applications on App Engine and Cloud Run, using Cloud Functions for serverless automations, managing storage on Cloud Storage, and configuring custom domains and SSL certificates. Integration with Firebase for authentication and real-time database.',
                keywords: 'App Engine, Cloud Run, Cloud Functions, Cloud Storage, Firebase hosting, IAM, gcloud CLI, Serverless, Custom domains, SSL, Scheduler, Pub/Sub basics',
            },
            firebase: {
                name: 'Firebase',
                description: 'Integrating Firebase as a backend-as-a-service in personal projects to speed up development. User authentication with email, Google and custom tokens, Firestore for structured data and Realtime Database for real-time sync. Firebase Hosting for deploying Angular apps with caching and CDN, and Firebase Admin SDK in Node.js for server-side operations.',
                keywords: 'Firestore, Realtime Database, Authentication, Firebase Hosting, Admin SDK, Security Rules, onSnapshot, Cloud Messaging, Storage, Emulator Suite',
            },
            git: {
                name: 'Git',
                description: 'Daily use of Git in multidisciplinary teams with structured workflows. Branch management with GitFlow and trunk-based development, conflict resolution in complex merges and rebases, pull request reviews with constructive feedback, and defining commit standards (Conventional Commits). Experience leading branching strategy in projects with multiple developers and continuous delivery cycles.',
                keywords: 'GitFlow, Trunk-based development, Pull Requests, Code review, Rebase, Cherry-pick, Stash, Tags, Conventional Commits, GitHub, GitLab, Hooks, Merge strategies',
            },
            'agile-scrum': {
                name: 'Agile / Scrum',
                description: 'Working in agile environments both as a team member and, more recently, leading the frontend team at Serbatic. Active participation in all Scrum ceremonies: sprint planning, daily standups, backlog refinement, reviews and retrospectives. Managing Kanban boards to visualise workflow and identify bottlenecks. Focus on continuous value delivery and ongoing team process improvement.',
                keywords: 'Scrum, Kanban, Sprint planning, Daily standup, Retrospective, Backlog refinement, User stories, Story points, Velocity, Definition of Done, WIP limits, Burndown chart',
            },
            jira: {
                name: 'Jira',
                description: 'Using Jira as the central project management tool at Serbatic to coordinate frontend team work and communication with international clients. Creating and prioritising epics, stories and subtasks, configuring Scrum and Kanban boards, tracking sprint progress and generating velocity reports. Integration with Git repositories for traceability between commits and tickets.',
                keywords: 'Epics, User stories, Subtasks, Sprints, Kanban board, Custom workflow, JQL, Filters, Dashboards, Git integration, Releases, Roadmap',
            },
            figma: {
                name: 'Figma',
                description: 'Using Figma both to design and to consume designs as a developer, bringing a genuine understanding of design systems from both sides. User flow prototyping, creation and organisation of components with variants, collaboration on design systems and export of optimised web assets. An Architecture background reinforces the aesthetic judgement applied to every project.',
                keywords: 'Prototyping, Auto Layout, Components, Variants, Design tokens, Design system, Frames, Inspect, SVG export, Real-time collaboration, Plugins',
            },
            illustrator: {
                name: 'Illustrator',
                description: 'Proficient in Adobe Illustrator for creating visual identities, logos, graphic material for sports events and vector assets for the web. Applied experience at CD Bádminton Valladolid designing posters, banners and brand elements for over nine years. Combined with Photoshop for complete graphic production workflows.',
                keywords: 'Vectors, Bezier, Corporate identity, Logos, Typography, Guides & grids, Symbols, Blend modes, SVG / PDF export, Artboards, Image trace',
            },
            photoshop: {
                name: 'Photoshop',
                description: 'Fifteen years using Photoshop for photo retouching, digital compositing and production of graphic assets for web and events. Working with layers, masks, non-destructive adjustments and automated actions. Applied to creating graphic materials for the badminton club, architecture projects and corporate websites, always maintaining visual consistency with the brand identity.',
                keywords: 'Layers & masks, Photo retouching, Digital compositing, Non-destructive edits, Smart Objects, Actions, Web export, Colour modes, Filters, Typography, UI assets',
            },
            autocad: {
                name: 'AutoCAD',
                description: 'Professional use of AutoCAD during the Architecture training and practice period to produce 2D technical drawings: floor plans, elevations, sections and construction details. Layer management, reusable blocks, dimensions and standardised annotations. This technical background in precise documentation translates today into the attention to detail applied to frontend development and interface visual organisation.',
                keywords: '2D drawings, Layers, Blocks, Dimensions, Annotations, Construction details, Layouts, Plot / PDF, Scale, Xrefs, Hatch, Technical documentation',
            },
            revit: {
                name: 'Revit',
                description: 'Introduction to BIM modelling with Autodesk Revit during the Architecture degree, used in academic projects for multidisciplinary coordination. Creation of building models with families, views and associated plans. Understanding of the collaborative BIM workflow and its implications for construction project management.',
                keywords: 'BIM, Families, Views, Plans, Coordination, Parameters, IFC, Levels, Phases, Basic render',
            },
        },
    },
    experience: {
        title: 'Career Timeline',
        present: 'Present',
        items: {
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
                    'Owned full-stack development and maintenance of the club\'s website and internal systems.',
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
    },
    education: {
        title: 'Academic Records',
        dates: 'Dates',
        institution: 'Institution',
        location: 'Location',
        locations: { valladolid: 'Valladolid, Spain' },
        items: {
            technician: 'Higher Technician in Web Application Development',
            highschool: 'High School Diploma — Science Track',
            architecture: 'Bachelor\'s Degree in Architecture',
        },
    },
    databox: {
        title: 'Performance is not optional. It\'s structural.',
        description: 'I design and build frontend architectures where performance is a first-class concern. From bundle strategy to rendering optimization, every decision is intentional and measurable.',
        items: {
            lcp: 'LCP real',
            lighthouse: 'Lighthouse',
            bundle: 'Bundle',
            dependencies: 'Dependencies',
        },
    },
    projects: {
        title: 'Selected Projects',
        description: 'A selection of the most interesting projects I have developed.',
        performanceImpact: 'Performance impact',
        technologies: 'Stack & Architecture',
        seeCode: 'See code',
        visit: 'Visit page',
        close: 'Close',
        metrics: {
            performance: 'Performance',
            accessibility: 'Accessibility',
            bestPractices: 'BestPractices',
            SEO: 'SEO',
        },
        items: {
            cdbv: {
                title: 'CD Bádminton Valladolid',
                summary: 'Fullstack web built solo for my own badminton club — from graphic design to online payment integration.',
                description: '<p>A personal project where I take on <strong>every role</strong>: graphic design, web design, frontend and backend development, database administration, and production deployment.</p><p>The platform centralises all public club information and provides a private area for players where they can <strong>manage bookings, change schedules, make purchases and customise their profile</strong>.</p><ul><li><strong>Frontend</strong> built in Angular with a fully custom design.</li><li><strong>Backend</strong> in Node.js deployed via Firebase Functions.</li><li><strong>MySQL database</strong> on Google Cloud, connected to the backend through Cloud\'s internal network.</li><li><strong>Online payments</strong> integrated through a payment gateway.</li><li>Hosted on <strong>Firebase</strong> for both the frontend and serverless functions.</li></ul><p>A real-world exercise in end-to-end fullstack architecture, independently managed and maintained.</p>',
            },
            nave: {
                title: 'Sports Facility Management Platform',
                summary: 'Web application bridging users and administrators of a private sports facility: bookings, services and events in one place.',
                description: '<p>Development of a <strong>full-featured web platform</strong> for a private sports facility, designed to streamline communication between the business and its customers.</p><p>Users can <strong>rent spaces, hire additional services and browse events</strong>, while administrators manage availability and offerings in real time.</p><ul><li><strong>Backless architecture</strong>: all logic and persistence handled through Firebase (Firestore + Auth + Hosting).</li><li>Frontend built entirely in <strong>Angular</strong>.</li><li>Solution designed to <strong>minimise infrastructure costs</strong> without compromising functionality.</li></ul><p>A solid example of designing efficient, cost-effective solutions tailored to real client needs.</p>',
            },
            aseguradora: {
                title: 'Multinational Insurance Company',
                summary: 'Frontend development for the corporate website of an insurer operating in over 50 countries, leading a three-person frontend team.',
                description: '<p>Ground-up development of the corporate website for an <strong>international insurance company</strong> with a presence in over 50 countries and content available in multiple languages.</p><p>The project demanded <strong>advanced, meticulous CSS work</strong>, with extensive animations and fluid transitions to meet the client\'s high visual standards.</p><ul><li>Frontend stack: <strong>Gulp + Pug + SASS</strong>, with JavaScript for interactive features.</li><li>Integration with <strong>Magnolia CMS</strong> for content management, including direct work on the platform to ensure a seamless integration.</li><li>Collaboration with the backend team responsible for CMS configuration.</li></ul><p>I served as <strong>technical lead of the frontend team</strong> — three developers — owning architecture decisions, code reviews, and client communication.</p>',
            },
            parques: {
                title: 'International Theme Park Group',
                summary: 'Frontend for the web portal of a multinational leisure group with parks across several continents, integrated into Adobe Experience Manager.',
                description: '<p>Development and maintenance of the web portal for a <strong>large international leisure and theme park group</strong>, spanning dozens of parks across multiple countries and served in several languages.</p><p>The project combines a <strong>public layer</strong> built with HTML, JavaScript and LESS, and a <strong>private area</strong> developed in Angular — all compiled and integrated within <strong>Adobe Experience Manager (AEM)</strong>.</p><ul><li>Ongoing work with <strong>AEM</strong> for component integration and publication lifecycle management.</li><li>Joined the project at an <strong>advanced stage</strong>, getting up to speed quickly within a complex codebase.</li><li>Active contribution to both <strong>new feature development</strong> and <strong>production incident resolution</strong>.</li></ul><p>A live, evolving project with regular releases and high technical standards around performance and cross-browser compatibility.</p>',
            },
            cvweb: {
                title: 'This Website — Interactive CV',
                summary: 'Personal portfolio and CV built in Angular, conceived as a showcase of frontend capabilities: design, animation, i18n and clean architecture.',
                description: '<p>More than a CV, this website is itself a <strong>technical and creative project</strong>. Fully designed and developed by me, it aims to demonstrate a range of modern frontend skills.</p><ul><li>Built in <strong>Angular</strong> with a modular architecture and clean code principles.</li><li>Hosted on <strong>Firebase Hosting</strong> for fast, cost-effective deployment.</li><li><strong>Multilingual (i18n)</strong> support with Spanish and English translations.</li><li>Custom visual design with careful attention to typography, animations and composition.</li></ul><p>Each section of the site is an opportunity to explore different techniques — from reusable components and state management to visual effects and user experience details.</p>',
            },
        },
    },
    notFound: { title: 'Page not found', text: 'The page you are looking for does not exist or has been moved.', back: 'Back to home' },
    footer: {
        linkedinLink: 'Visit my LinkedIn profile',
        githubLink: 'Visit my GitHub profile',
        toggleLanguage: 'Switch language between Spanish and English',
        spanishFlag: 'Spanish flag',
        toggleTheme: 'Toggle between light and dark theme',
    },
};

export type Dict = typeof en;
