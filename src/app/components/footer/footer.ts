import { Component, inject, computed } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { ThemeService } from '../../services/theme.service';
import pkg from '../../../../package.json';

@Component({
    selector: 'app-footer',
    imports: [],
    templateUrl: './footer.html',
    styleUrl: './footer.scss',
})
export class Footer {
    ts = inject(TranslationService);
    themeService = inject(ThemeService);
    version = pkg.version;

    isSpanish = computed(() => this.ts.language$() === 'es');
    isLightTheme = computed(() => this.themeService.isLightTheme()());

    toggleLanguage(event: Event) {
        const isChecked = (event.target as HTMLInputElement).checked;
        this.ts.setLanguage(isChecked ? 'es' : 'en');
    }

    toggleTheme() {
        this.themeService.toggleTheme();
    }
}
