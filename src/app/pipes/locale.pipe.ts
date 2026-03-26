import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'locale',
  standalone: true,
})
export class LocalePipe implements PipeTransform {
  private months = {
    es: [
      'Enero',
      'Febrero',
      'Marzo',
      'Abril',
      'Mayo',
      'Junio',
      'Julio',
      'Agosto',
      'Septiembre',
      'Octubre',
      'Noviembre',
      'Diciembre',
    ],
    en: [
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
  };

  transform(month: number, year: number, lang: 'es' | 'en' = 'es'): string {
    return `${this.months[lang][month - 1]} ${year}`;
  }
}
