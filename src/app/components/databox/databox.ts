import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, ElementRef, inject, ViewChild } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

interface DataboxItemBase {
    id: string;
    value: number;
    before?: string;
    after?: string;
}

interface DataboxItemTranslation {
    text: string;
}

interface DataboxItem extends DataboxItemBase, DataboxItemTranslation {}

@Component({
    selector: 'app-databox',
    imports: [],
    templateUrl: './databox.html',
    styleUrl: './databox.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Databox {
    @ViewChild('databoxSection') databoxSection!: ElementRef;

    ts = inject(TranslationService);
    private cdr = inject(ChangeDetectorRef);

    databoxValues: number[] = [15, 0, 0, 15];
    private databoxObserver: IntersectionObserver | null = null;

    private readonly baseItems: DataboxItemBase[] = [
        {
            id: 'lcp',
            before: '<',
            value: 1,
            after: 's',
        },
        {
            id: 'lighthouse',
            value: 95,
            after: '+',
        },
        {
            id: 'bundle',
            before: '-',
            value: 40,
            after: '%',
        },
        {
            id: 'dependencies',
            value: 0,
        },
    ];

    private readonly translations: Record<string, Record<string, DataboxItemTranslation>> = {
        es: {
            lcp: { text: 'LCP real' },
            lighthouse: { text: 'Lighthouse' },
            bundle: { text: 'Bundle' },
            dependencies: { text: 'Dependencias' },
        },
        en: {
            lcp: { text: 'LCP real' },
            lighthouse: { text: 'Lighthouse' },
            bundle: { text: 'Bundle' },
            dependencies: { text: 'Dependencies' },
        },
    };

    databox = computed((): DataboxItem[] => {
        const lang = this.ts.language$();
        return this.baseItems.map((base) => ({
            ...base,
            ...this.translations[lang][base.id],
        }));
    });

    ngAfterViewInit() {
        if (this.databoxSection) {
            this.databoxObserver = this.observeOnce(
                this.databoxSection.nativeElement,
                (entries, obs) => {
                    if (entries[0].isIntersecting) {
                        this.animateValuesFor<DataboxItem>(
                            this.databox(),
                            this.databoxValues,
                            (d) => d.value,
                            1500,
                        );
                        obs.disconnect();
                    }
                },
                { threshold: 0.6 },
            );
        }
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

    private easeOutExpo(t: number) {
        return t === 1 ? 1 : 1 - Math.pow(2, -6 * t);
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
        this.databoxObserver?.disconnect();
        this.databoxObserver = null;
    }
}
