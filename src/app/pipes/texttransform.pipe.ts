import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'textTransform' })
export class TextTransformPipe implements PipeTransform {
    transform(
        value: string | null | undefined,
        type: 'capitalize' | 'titlecase' | 'snakecase' | 'kebabcase',
    ): string {
        if (!value) return '';

        switch (type) {
            case 'capitalize':
                return value.charAt(0).toUpperCase() + value.slice(1);
            case 'titlecase':
                return value
                    .toLowerCase()
                    .split(' ')
                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                    .join(' ');
            case 'snakecase':
                return value
                    .normalize('NFD')
                    .replace(/[^\w\s-]|[\u0300-\u036f]/g, '')
                    .toLowerCase()
                    .trim()
                    .replace(/\s+/g, '_');
            case 'kebabcase':
                return value
                    .normalize('NFD')
                    .replace(/[^\w\s-]|[\u0300-\u036f]/g, '')
                    .toLowerCase()
                    .trim()
                    .replace(/\s+/g, '-');

            default:
                return value;
        }
    }
}
