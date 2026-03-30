import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
    selector: 'app-aboutme',
    imports: [],
    templateUrl: './aboutme.html',
    styleUrl: './aboutme.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Aboutme {
    ts = inject(TranslationService);
    private document = inject(DOCUMENT);

    scrollTo(id: string) {
        const target = this.document.getElementById(id);
        const window = this.document.defaultView;
        if (!target || !window) return;

        let scrollContainer: Element | Window = window;
        let parent = target.parentElement;

        while (parent) {
            const style = window.getComputedStyle(parent);
            if (style.overflowY === 'auto' || style.overflowY === 'scroll') {
                scrollContainer = parent;
                break;
            }
            parent = parent.parentElement;
        }

        const rect = target.getBoundingClientRect();
        const offset = (window.innerHeight ?? 0) * 0.33;

        if (scrollContainer instanceof window.Element) {
            // Scroll dentro de un contenedor con overflow
            const containerRect = scrollContainer.getBoundingClientRect();
            const top = rect.top - containerRect.top + scrollContainer.scrollTop;
            scrollContainer.scrollTo({
                top: top - offset,
                behavior: 'smooth',
            });
        } else {
            // Scroll en la ventana global
            window.scrollTo({
                top: rect.top + (window.scrollY ?? 0) - offset,
                behavior: 'smooth',
            });
        }
    }
}
