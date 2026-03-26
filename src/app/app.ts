import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { ThemeService } from './services/theme.service';
import { Herobanner } from './components/herobanner/herobanner';
import { Summary } from './components/summary/summary';
import { Skills } from "./components/skills/skills";
import { Experience } from './components/experience/experience';
import { Education } from './components/education/education';
import { Databox } from './components/databox/databox';

@Component({
    selector: 'app-root',
    imports: [CommonModule, Header, Footer, Herobanner, Summary, Experience, Education, Databox, Skills],
    templateUrl: './app.html',
    styleUrl: './app.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
    protected readonly title = signal('cvweb-front');

    constructor(private themeService: ThemeService) {}
}
