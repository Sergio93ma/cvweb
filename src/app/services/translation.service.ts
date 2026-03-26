import { Injectable, signal, computed, Signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type Language = 'es' | 'en';

@Injectable({ providedIn: 'root' })
export class TranslationService {
    private currentLanguage = signal<Language>('en');
    private translations = signal<Record<string, any>>({});
    private isLoading = signal(false);
    private isReady = signal(false);

    language$ = this.currentLanguage.asReadonly();
    isLoading$ = this.isLoading.asReadonly();
    isReady$ = this.isReady.asReadonly();

    constructor(private http: HttpClient) {
        this.initializeLanguage();
    }

    private async initializeLanguage() {
        const defaultLang = this.getDefaultLanguage();
        await this.setLanguage(defaultLang);
        this.isReady.set(true);
    }

    async setLanguage(lang: Language): Promise<void> {
        if (this.currentLanguage() === lang && Object.keys(this.translations()).length > 0) {
            return;
        }

        this.isLoading.set(true);

        try {
            const url = `./assets/i18n/${lang}.json`;
            const data = await this.http
                .get<Record<string, any>>(url)
                .toPromise();

            if (data) {
                this.translations.set(data);
                this.currentLanguage.set(lang);
                localStorage.setItem('language', lang);
                document.documentElement.lang = lang;
            }
        } catch (error) {
            console.error(`Error loading language ${lang}:`, error);
        } finally {
            this.isLoading.set(false);
            this.isReady.set(true);
        }
    }

    getTranslation = computed(() => {
        // Acceso reactivo: depende de currentLanguage y translations
        this.currentLanguage();
        this.translations();
        
        return (key: string): string => this.get(key);
    });

    translate(key: string): Signal<string> {
        return computed(() => this.get(key));
    }

    private get(key: string): string {
        const keys = key.split('.');
        let result: any = this.translations();

        for (const k of keys) {
            result = result?.[k];
        }

        return typeof result === 'string' ? result : key;
    }

    private getDefaultLanguage(): Language {
        const saved = localStorage.getItem('language') as Language | null;
        if (saved && ['es', 'en'].includes(saved)) return saved;

        const browserLang = navigator.language.split('-')[0];
        return browserLang === 'es' ? 'es' : 'en';
    }
}
