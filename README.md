# 💼 CV Portfolio — Interactive Web Application

A modern, high-performance portfolio and CV built with **Angular 21** using contemporary best practices, clean architecture, and cutting-edge web development standards.

> **Showcase Project** — Demonstrating professional frontend development: performance optimization, accessibility, clean code, and modern Angular patterns.

---

## ✨ Key Highlights

- **Modern Angular** — Standalone components, signals, control flow syntax (@if, @for)
- **Type-Safe** — 100% TypeScript with strict mode, zero `any` types
- **Performance-First** — OnPush change detection, lazy loading, optimized metrics
- **Accessible** — WCAG AA compliance with semantic HTML and ARIA attributes
- **Clean Architecture** — Single responsibility, hybrid data patterns, zero code duplication
- **Reactive** — Signals for state, computed properties, async handling
- **Responsive** — Mobile-first design with adaptive layouts
- **Internationalization** — Spanish & English with dynamic language switching
- **Zero Dependencies** — No external state management libraries, leveraging Angular's native capabilities

**Live Demo:** [sergio93ma.dev](https://sergio93ma.dev)

---

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Modern Angular Patterns](#modern-angular-patterns)
4. [Architecture & Best Practices](#architecture--best-practices)
5. [Performance Optimization](#performance-optimization)
6. [Development](#development)
7. [Building for Production](#building-for-production)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.19 or higher
- **npm** 9+

### Installation

```bash
# Clone the repository
git clone https://github.com/sergio93ma/cvweb-front.git
cd cvweb-front

# Install dependencies
npm install

# Start development server
npm start

# Navigate to http://localhost:4200/
```

### First Build & Test

```bash
# Build for production
npm run build

# Run unit tests
npm test

# Format code (Prettier)
npm run format
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Standalone components
│   │   ├── header/         # Navigation & active section tracking
│   │   ├── footer/         # Socials & theme toggle
│   │   ├── aboutme/        # Hero section with CTA
│   │   ├── summary/        # Professional summary
│   │   ├── experience/     # Work history
│   │   ├── education/      # Education & certifications
│   │   ├── skills/         # Technical skills matrix
│   │   ├── projects/       # Portfolio with modal detail
│   │   ├── databox/        # Statistics & metrics
│   │   └── sectiontitle/   # Reusable section header
│   ├── services/            # Business logic & state
│   │   ├── translation.service.ts    # i18n with signals
│   │   └── theme.service.ts          # Dark/light theme
│   ├── pipes/               # Custom transformations
│   │   ├── locale.pipe.ts           # Date localization
│   │   └── texttransform.pipe.ts    # String transformations
│   ├── app.ts              # Root component
│   ├── app.routes.ts       # Routing config
│   ├── app.config.ts       # Global configuration
│   └── app.scss            # Global styles
├── assets/
│   ├── images/             # Optimized images
│   ├── fonts/              # Custom fonts
│   ├── i18n/               # Translation files (EN/ES)
│   └── css/                # Third-party styles
├── styles.scss             # Global stylesheet
├── variables.scss          # Design tokens
└── main.ts                 # Bootstrap entry point
```

| File | Purpose |
|------|---------|
| `angular.json` | Build & development config |
| `tsconfig.json` | TypeScript strict mode setup |

---

## 🎯 Modern Angular Patterns

This project demonstrates **Angular 21+ best practices** — the modern way to build Angular applications.

### 1. **Standalone Components** (No NgModules)

```typescript
@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterModule],  // Direct imports, no NgModule
    templateUrl: './header.html',
    styleUrl: './header.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header { }
```

✅ **Benefits:**
- Simpler mental model
- Tree-shakeable by default
- Direct dependency visibility
- No circular module dependencies

---

### 2. **Signals for State Management**

Replace traditional properties with **signals** for fine-grained reactivity:

```typescript
// ❌ Old way
export class Footer {
    isSpanish: boolean = false;
    constructor(private ts: TranslationService) {}
}

// ✅ Modern way
export class Footer {
    ts = inject(TranslationService);
    isSpanish = computed(() => this.ts.language$() === 'es');
}
```

**Signals in this project:**
- `TranslationService` — `currentLanguage`, `translations`, `isReady`
- `ThemeService` — `isDarkMode`
- `Header` — `activeSection`

---

### 3. **Dependency Injection with `inject()`**

Replace constructor injection with the `inject()` function:

```typescript
// ❌ Old way (constructor)
export class Component {
    constructor(private service: MyService) {}
}

// ✅ Modern way (inject)
export class Component {
    private service = inject(MyService);
}
```

**Advantages:**
- Works inside compositions, guard functions, interceptors
- More flexible, less boilerplate
- De facto standard in Angular 14+

---

### 4. **Control Flow Syntax** (@if, @for, @switch)

Native control flow directives replace *ngIf, *ngFor, *ngSwitch:

```html
<!-- ❌ Old way -->
<div *ngIf="user; else noUser">{{ user.name }}</div>
<ng-template #noUser>
    <p>No user found</p>
</ng-template>

<!-- ✅ Modern way -->
@if (user) {
    <div>{{ user.name }}</div>
} @else {
    <p>No user found</p>
}

<!-- Old *ngFor -->
<div *ngFor="let item of items; trackBy: trackById">
    {{ item.name }}
</div>

<!-- ✅ Modern @for with track -->
@for (item of items; track item.id) {
    <div>{{ item.name }}</div>
}
```

**Benefits:**
- Cleaner, more readable syntax
- Better performance (no overhead)
- Proper scoping (no extra div needed)
- Type-safe with `track` function

---

### 5. **Input Functions** (Not @Input Decorators)

The modern way to handle component inputs:

```typescript
// ✅ Modern way
import { Component, input } from '@angular/core';

@Component({
    selector: 'app-sectiontitle',
    imports: [],
    templateUrl: './sectiontitle.html',
})
export class Sectiontitle {
    title = input<string>();
    description = input<string>();
}

// In template - call as function
<h2>{{ title() }}</h2>
<p>{{ description() }}</p>
```

**Why `input()` over `@Input()`:**
- Consistently uses signals for reactivity
- Cleaner component interface
- Better type inference
- Works seamlessly with computed properties

---

### 6. **Typed Reactive Forms**

All forms use **strict typing** from the start:

```typescript
// Strong typing
const form = new FormGroup({
    name: new FormControl<string>('', Validators.required),
    email: new FormControl<string>('', Validators.email),
});

// Type inference works perfectly
form.valueChanges.subscribe((value: { name: string; email: string }) => {
    // Full IDE autocomplete
});
```

---

## 🏗️ Architecture & Best Practices

### Single Responsibility Principle

Each component does **one thing well**:

```typescript
// ✅ Header → Navigation & active section tracking
// ✅ Footer → Social links & theme toggle
// ✅ SectionTitle → Reusable section header
// ✅ Projects → Project grid with modal detail
```

### Hybrid Data Pattern

The **hybrid pattern** eliminates code duplication for i18n:

#### Before (Duplicated):
```typescript
export class Education {
    education_EN = [...];  // 50 lines
    education_ES = [...];  // 50 lines duplicated
}
```

#### After (Clean):
```typescript
export class Education {
    private readonly baseEducation: EducationItemBase[] = [
        { id: 'tech', start: {...}, institution: 'IES Galileo' },
        // ...
    ];

    private readonly translations: Record<string, Record<string, Translation>> = {
        en: { tech: { title: 'Higher Technician...' } },
        es: { tech: { title: 'Grado Superior...' } },
    };

    education = computed(() => {
        const lang = this.ts.language$();
        return this.baseEducation.map(item => ({
            ...item,
            ...this.translations[lang]?.[item.id],
        }));
    });
}
```

✅ **Reduction:** ~40% fewer lines, zero duplication, single source of truth

---

### Strict Typing — Zero `any`

**100% typed** — everything is explicitly typed:

```typescript
// ✅ Custom interface for translation content (recursive)
interface TranslationContent {
    [key: string]: string | TranslationContent;
}

// ✅ Project metrics with explicit structure
interface ProjectMetrics {
    lighthouse: {
        performance: number;
        accessibility: number;
        bestPractices: number;
        SEO: number;
    };
    webVitals: {
        lcp?: number;
        fcp?: number;
        cls?: number;
    };
}

// ✅ Type assertions when necessary
let result: TranslationContent | string = this.translations();
if (typeof result === 'string') break;
result = (result as TranslationContent)?.[key];
```

**TypeScript Configuration:**
```json
{
    "compilerOptions": {
        "strict": true,
        "noImplicitAny": true,
        "strictNullChecks": true,
        "strictPropertyInitialization": true,
        "noImplicitThis": true,
        "alwaysStrict": true
    }
}
```

---

### Immutability & Pure Functions

State changes are **predictable and traceable**:

```typescript
// ✅ Using signal.set() or signal.update()
// NEVER signal.mutate()
this.currentLanguage.set('es');

// ✅ Pure transformations in computed()
education = computed(() => {
    // No side effects, only calculations
    // Result is memoized
    return this.baseEducation.map(transform);
});
```

---

### OnPush Change Detection in All Components

Every component uses **OnPush** for optimal performance:

```typescript
@Component({
    selector: 'app-projects',
    changeDetection: ChangeDetectionStrategy.OnPush,
    // ...
})
export class Projects { }
```

**Impact:**
- Change detection runs only when inputs change or events fire
- ~70% fewer checks in large applications
- Applied to all 11 components in this project
- Combined with signals = maximum performance

---

## ⚡ Performance Optimization

### Metric Showcase

```
Lighthouse (cdbv project):
✅ Performance:       86
✅ Accessibility:     91
✅ Best Practices:    100
✅ SEO:               100

Web Vitals:
✅ LCP (Largest Contentful Paint):  1.8s
✅ FCP (First Contentful Paint):    0.7s
✅ CLS (Cumulative Layout Shift):   0.148
```

### Techniques Applied

1. **Lazy Loading** — Feature routes loaded on demand
2. **OnPush Strategy** — Only recalculate when needed
3. **Computed Signals** — Memoized derived state
4. **Intersection Observer** — Efficient scroll detection in projects grid
5. **Optimized Images** — Compressed assets, proper formats
6. **Tree-Shaking** — Standalone imports remove unused code
7. **Zone.js Optimization** — Running outside Angular zone for heavy operations

### Code Example: Efficient Grid Observation

```typescript
export class Projects {
    private ngZone = inject(NgZone);

    ngAfterViewInit(): void {
        // Run outside Angular to avoid change detection overhead
        this.ngZone.runOutsideAngular(() => {
            this.setupIntersectionObserver();
        });
    }

    private setupIntersectionObserver(): void {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Run back in zone only when needed
                    this.ngZone.run(() => {
                        entry.target.classList.add('visible');
                    });
                }
            });
        });
        // Observe elements...
    }
}
```

---

## ♿ Accessibility

WCAG AA compliant throughout:

```html
<!-- ✅ Semantic navigation buttons -->
<button 
    [class.active]="activeSection() === item.id" 
    (click)="scrollTo(item.id)"
    [attr.aria-label]="'Go to ' + item.label">
    {{ item.label }}
</button>

<!-- ✅ Images with descriptive alt text -->
<img 
    src="project.png" 
    alt="Screenshot of My Awesome Project">

<!-- ✅ Form controls with aria-label -->
<input 
    type="checkbox" 
    aria-label="Switch to Spanish"
    (change)="toggleLanguage()">
```

---

## 🌐 Internationalization (i18n)

Dynamic language switching with **signals-based translation service**:

```typescript
// In any component
export class MyComponent {
    ts = inject(TranslationService);
    
    // Reactive translation binding
    title = computed(() => 
        this.ts.translate('page.title')()
    );
}

// In template
<h1>{{ ts.translate('home.title')() }}</h1>

// Switch language
<input 
    (change)="ts.setLanguage(isSpanish ? 'es' : 'en')">
```

**Languages:** Spanish (es) & English (en)  
**Files:** `src/assets/i18n/*.json`

---

## 🛠️ Development

### Available Scripts

```bash
# Start development server (with HMR)
npm start

# Run unit tests
npm test

# Run tests in watch mode
npm test -- --watch

# Build for production
npm run build

# Serve production build locally
npm run serve

# Format code (Prettier)
npm run format

# Lint code
npm run lint

# Type check
npm run type-check
```

### Development Setup

```bash
# Install dependencies
npm install

# Start dev server with HMR
npm start
```

### Code Quality Standards

This project enforces:

- ✅ **Strict TypeScript** — `strict: true` in tsconfig
- ✅ **No console logs** — Removed in production
- ✅ **No hardcoded values** — All i18n through translation service
- ✅ **Single responsibility** — Each function does one thing
- ✅ **100% typed** — Zero `any` types
- ✅ **Pure functions** — No side effects in computed properties
- ✅ **Descriptive naming** — Clear variables and method names
- ✅ **Minimal comments** — Code is self-documenting

---

## 🏗️ Building for Production

### Build Command

```bash
npm run build
```

### Output

```
dist/cvweb-front/browser/  # Optimized application bundle
```

### Optimization Features

- **Tree-shaking** — Removes unused code
- **Dead code elimination** — Only necessary imports
- **Minification** — Smaller JS/CSS bundles
- **Differential loading** — Modern vs legacy browser support
- **Source maps** — For debugging (optional)

### Deployment

This project is ready for any modern hosting platform (Vercel, Netlify, AWS, etc.):

```bash
# Build
npm run build

# The dist/cvweb-front/browser/ folder contains the production-ready app
```

---

## 📚 Technology Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Angular 21 |
| **Language** | TypeScript 5.3+ |
| **Styling** | SCSS |
| **Bundler** | esbuild |
| **Testing** | Jasmine & Karma |

---

## 🔍 Code Examples

### Example 1: Signals-Based Service

```typescript
@Injectable({ providedIn: 'root' })
export class TranslationService {
    private http = inject(HttpClient);
    private currentLanguage = signal<Language>('en');
    private translations = signal<TranslationContent>({});

    language$ = this.currentLanguage.asReadonly();

    async setLanguage(lang: Language): Promise<void> {
        const data = await this.http
            .get<TranslationContent>(`./assets/i18n/${lang}.json`)
            .toPromise();
        
        if (data) {
            this.translations.set(data);
            this.currentLanguage.set(lang);
        }
    }
}
```

### Example 2: Computed Derived State

```typescript
export class Footer {
    ts = inject(TranslationService);
    
    // Automatically updates when language changes
    isSpanish = computed(() => this.ts.language$() === 'es');
    isSpanish = computed(() => this.ts.language$() === 'es');
}
```

### Example 3: OnPush with Pure Functions

```typescript
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Education {
    ts = inject(TranslationService);

    private readonly baseEducation: EducationItemBase[] = [...];
    private readonly translations: Record<...> = {...};

    // Pure, memoized computation
    education = computed(() => {
        const lang = this.ts.language$();
        return this.baseEducation.map(item => ({
            ...item,
            ...this.translations[lang][item.id],
        }));
    });
}
```

---

## 🤝 Best Practices Summary

| Aspect | Practice |
|--------|----------|
| **State** | Signals + computed, immutable updates |
| **DI** | `inject()` function, readable field names |
| **Components** | Standalone, OnPush change detection |
| **Templates** | @if/@for control flow, no ngClass/ngStyle |
| **Types** | 100% strict typed, no `any` |
| **Imports** | Direct in components, tree-shakeable |
| **Forms** | Reactive, typed, validation rules |
| **Services** | Single responsibility, providedIn: 'root' |
| **i18n** | Signals-based, dynamic switching |
| **Accessibility** | Semantic HTML, ARIA, WCAG AA |
| **Comments** | Minimal — code is self-documenting |

---

## 📖 Learning Resources

- [Angular Official Docs](https://angular.io)
- [Angular Best Practices Guide](https://angular.dev/guide/styleguide)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Web.dev Performance](https://web.dev/performance/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 👨‍💻 About

Built by **Sergio Martín Alonso** — Senior Frontend Developer

**Portfolio:** [sergio93ma.dev](https://sergio93ma.dev)  
**GitHub:** [@sergio93ma](https://github.com/sergio93ma)  
**LinkedIn:** [sergio93ma](https://www.linkedin.com/in/sergio93ma/)

---

## 📄 License

MIT License — Feel free to use this project as a reference or template.

---

**Last Updated:** March 2026  
**Angular Version:** 21.x  
**Node Version:** 18.19+
