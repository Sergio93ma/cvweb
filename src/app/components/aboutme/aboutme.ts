import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
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

    scrollTo(id: string) {
        const el = document.getElementById(id);
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY;
            const offset = window.innerHeight * 0.33;
            window.scrollTo({ top: top - offset, behavior: 'smooth' });
        }
    }
}
