import { Component, input } from '@angular/core';

@Component({
    selector: 'app-sectiontitle',
    imports: [],
    templateUrl: './sectiontitle.html',
    styleUrl: './sectiontitle.scss',
})
export class Sectiontitle {
    title = input<string | undefined>();
    subtitle = input<string | undefined>();
    description = input<string | undefined>();
}
