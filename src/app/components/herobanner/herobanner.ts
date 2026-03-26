import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
    selector: 'app-herobanner',
    imports: [],
    templateUrl: './herobanner.html',
    styleUrl: './herobanner.scss',
})
export class Herobanner {
    ts = inject(TranslationService);
}
