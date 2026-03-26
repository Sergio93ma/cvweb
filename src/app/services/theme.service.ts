import { Injectable, effect, signal, inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private document = inject(DOCUMENT);
  private lightTheme = signal(this.loadThemePreference());

  constructor() {
    // Aplicar cambios de tema al body cuando cambia isLightTheme
    effect(() => {
      const isLight = this.lightTheme();
      if (isLight) {
        this.document.body.classList.add('light-theme');
      } else {
        this.document.body.classList.remove('light-theme');
      }
    });
  }

  isLightTheme() {
    return this.lightTheme;
  }

  toggleTheme() {
    const newValue = !this.lightTheme();
    this.lightTheme.set(newValue);
    this.saveThemePreference(newValue);
  }

  private loadThemePreference(): boolean {
    const cookie = this.getCookie('theme-preference');
    return cookie === 'light';
  }

  private saveThemePreference(isLight: boolean) {
    const value = isLight ? 'light' : 'dark';
    this.setCookie('theme-preference', value, 365);
  }

  private getCookie(name: string): string | null {
    const nameEQ = name + '=';
    const cookies = this.document.cookie.split(';');
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length);
      }
    }
    return null;
  }

  private setCookie(name: string, value: string, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    this.document.cookie = `${name}=${value};${expires};path=/`;
  }
}
