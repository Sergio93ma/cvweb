import { Injectable, signal, computed, Signal, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

type Language = 'es' | 'en';

interface TranslationContent {
    [key: string]: string | TranslationContent;
}

@Injectable({ providedIn: 'root' })
export class TranslationService {
    private http = inject(HttpClient);
    private currentLanguage = signal<Language>('en');
    private translations = signal<TranslationContent>({});
    private isLoading = signal(false);
    private isReady = signal(false);

    language$ = this.currentLanguage.asReadonly();
    isLoading$ = this.isLoading.asReadonly();
    isReady$ = this.isReady.asReadonly();

    constructor() {
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
                .get<TranslationContent>(url)
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
        this.currentLanguage();
        this.translations();
        
        return (key: string): string => this.get(key);
    });

    translate(key: string): Signal<string> {
        return computed(() => this.get(key));
    }

    private get(key: string): string {
        const keys = key.split('.');
        let result: TranslationContent | string = this.translations();

        for (const k of keys) {
            if (typeof result === 'string') break;
            result = (result as TranslationContent)?.[k];
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
