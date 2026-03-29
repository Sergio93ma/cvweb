import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, ElementRef, inject, ViewChild } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

interface SummaryItemBase {
    id: string;
    number: number;
    before?: string;
    after?: string;
}

interface SummaryItemTranslation {
    text: string;
}

interface SummaryItem extends SummaryItemBase, SummaryItemTranslation {}

@Component({
    selector: 'app-summary',
    imports: [],
    templateUrl: './summary.html',
    styleUrl: './summary.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Summary {
    @ViewChild('summarySection') summarySection!: ElementRef;

    ts = inject(TranslationService);
    private cdr = inject(ChangeDetectorRef);

    summaryValues: number[] = [0, 0, 0, 0];
    private summaryObserver: IntersectionObserver | null = null;

    private readonly baseItems: SummaryItemBase[] = [
        {
            id: 'professional-experience',
            number: 9,
            after: '+',
        },
        {
            id: 'years-building',
            number: 12,
            after: '+',
        },
        {
            id: 'projects-delivered',
            number: 10,
            after: '+',
        },
        {
            id: 'production-technologies',
            number: 19,
            after: '+',
        },
    ];

    private readonly translations: Record<string, Record<string, SummaryItemTranslation>> = {
        es: {
            'professional-experience': { text: 'Años de Experiencia Profesional' },
            'years-building': { text: 'Años Desarrollando Proyectos Web' },
            'projects-delivered': { text: 'Proyectos Web Entregados' },
            'production-technologies': { text: 'Tecnologías en Producción' },
        },
        en: {
            'professional-experience': { text: 'Professional Experience' },
            'years-building': { text: 'Years Building Web Projects' },
            'projects-delivered': { text: 'Web Projects Delivered' },
            'production-technologies': { text: 'Production Technologies' },
        },
    };

    summary = computed((): SummaryItem[] => {
        const lang = this.ts.language$();
        return this.baseItems.map((base) => ({
            ...base,
            ...this.translations[lang][base.id],
        }));
    });

    ngAfterViewInit() {
        if (this.summarySection) {
            this.summaryObserver = this.observeOnce(
                this.summarySection.nativeElement,
                (entries, obs) => {
                    if (entries[0].isIntersecting) {
                        this.animateValuesFor<SummaryItem>(
                            this.summary(),
                            this.summaryValues,
                            (s) => s.number,
                            1500,
                        );
                        obs.disconnect();
                    }
                },
                { threshold: 1 },
            );
        }
    }

    private easeOutExpo(t: number) {
        return t === 1 ? 1 : 1 - Math.pow(2, -6 * t);
    }

    private animateValuesFor<T>(
        sourceArray: T[],
        valuesArray: number[],
        getTarget: (item: T) => number,
        duration: number,
    ) {
        for (let i = 0; i < sourceArray.length; i++) {
            const item = sourceArray[i];
            const target = getTarget(item);
            const numericTarget = Number.isFinite(target) ? target : 0;
            this.animateValue(valuesArray, i, numericTarget, duration);
        }
    }

    private animateValue(valuesArray: number[], index: number, target: number, duration: number) {
        const rawStart = valuesArray[index];
        const startNum = Number.isFinite(rawStart) ? rawStart : 0;
        const delta = target - startNum;
        const t0 = performance.now();

        const step = (timestamp: number) => {
            const rawProgress = Math.min((timestamp - t0) / duration, 1);
            const eased = this.easeOutExpo(rawProgress);

            const current = Math.round(startNum + delta * eased);
            valuesArray[index] = current;

            this.cdr.detectChanges();

            if (rawProgress < 1) {
                requestAnimationFrame(step);
            } else {
                valuesArray[index] = target;
                this.cdr.detectChanges();
            }
        };

        requestAnimationFrame(step);
    }

    private observeOnce(
        target: Element | ElementRef,
        cb: IntersectionObserverCallback,
        options?: IntersectionObserverInit,
    ): IntersectionObserver {
        const node = (target as ElementRef).nativeElement
            ? (target as ElementRef).nativeElement
            : (target as Element);
        const obs = new IntersectionObserver(cb, options);
        obs.observe(node);
        return obs;
    }

    ngOnDestroy(): void {
        this.summaryObserver?.disconnect();
        this.summaryObserver = null;
    }
}
