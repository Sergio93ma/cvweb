import { en, type Dict } from './en';
import { es } from './es';

export const languages = ['en', 'es'] as const;
export type Lang = (typeof languages)[number];

export const defaultLang: Lang = 'en';
export const dictionaries: Record<Lang, Dict> = { en, es };
export const langPath: Record<Lang, string> = { en: '/', es: '/es/' };
export const ogLocale: Record<Lang, string> = { en: 'en_US', es: 'es_ES' };

/** Every dotted path to a string leaf of the dictionary, e.g. `projects.items.cdbv.title` or `months.0`. */
type Paths<T> = T extends string
    ? never
    : T extends readonly string[]
      ? `${number}`
      : { [K in keyof T & string]: T[K] extends string ? K : `${K}.${Paths<T[K]>}` }[keyof T & string];
export type Key = Paths<Dict>;

export type Flat = Record<string, string>;

/** Flattens a dictionary to `{ 'a.b.0': 'text' }`, the shape the client-side switcher uses. */
export function flatten(value: unknown, prefix = '', out: Flat = {}): Flat {
    if (typeof value === 'string') {
        out[prefix] = value;
    } else if (value && typeof value === 'object') {
        for (const [k, v] of Object.entries(value)) flatten(v, prefix ? `${prefix}.${k}` : k, out);
    }
    return out;
}

const flat: Record<Lang, Flat> = { en: flatten(en), es: flatten(es) };

/** Build-time lookup. Throws on a missing key so typos fail the build, not the page. */
export function t(lang: Lang, key: Key | (string & {})): string {
    const value = flat[lang][key];
    if (value === undefined) throw new Error(`[i18n] Missing key "${key}" for "${lang}"`);
    return value;
}

/** Both flattened dictionaries, embedded once in the page for the instant language switch. */
export const runtimeDictionaries = flat;
