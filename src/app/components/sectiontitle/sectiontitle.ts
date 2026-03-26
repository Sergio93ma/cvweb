import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-sectiontitle',
    imports: [],
    templateUrl: './sectiontitle.html',
    styleUrl: './sectiontitle.scss',
})
export class Sectiontitle {
    @Input() title: string | undefined;
    @Input() subtitle: string | undefined;
    @Input() description: string | undefined;
}
