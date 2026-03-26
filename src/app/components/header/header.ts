import { Component, signal } from '@angular/core';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.html',
    styleUrl: './header.scss',
})
export class Header {
    activeSection = signal<string>('');

    navItems = [
        { id: 'herobanner' },
        { label: 'Summary', id: 'summary' },
        { label: 'Experience', id: 'experience' },
        { label: 'Education', id: 'education' },
        { label: 'Databox', id: 'databox' },
    ];

    ngAfterViewInit() {
        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.find((e) => e.isIntersecting);
                if (visible) this.activeSection.set(visible.target.id);
            },
            { threshold: 1 },
        );

        this.navItems.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
    }

    scrollTo(id: string) {
        const el = document.getElementById(id);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY;
            const offset = window.innerHeight * 0.33;
            window.scrollTo({ top: top - offset, behavior: 'smooth' });
        }
    }
}
