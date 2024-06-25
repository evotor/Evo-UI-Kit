import {ChangeDetectionStrategy, Component, HostBinding, inject, Input} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DomSanitizer} from '@angular/platform-browser';
import {EvoIconService} from './evo-icon.service';
import {EVO_ICON_RESOLVER} from '../../common/tokens';

@Component({
    selector: 'evo-icon',
    standalone: true,
    template: `
        <svg
            preserveAspectRatio="xMidYMid meet"
            [attr.width]="svgWidth"
            [attr.height]="svgHeight"
            [attr.viewBox]="viewBox"
            [innerHTML]="getContent() | async"
            [ngClass]="classes"
        />
    `,
    styles: `
        svg {
            display: block;
            min-width: 100%;
            max-width: 100%;
            height: auto;
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule],
})
export class EvoIconComponent {
    @Input({required: true}) shape: string;
    @Input() svgWidth = 24;
    @Input() svgHeight = 24;
    @Input() svgViewBox: string;

    @HostBinding('class.evo-icon') hostClass = true;

    protected readonly resolver = inject(EVO_ICON_RESOLVER);

    private readonly sanitizer = inject(DomSanitizer);
    private readonly evoIconService = inject(EvoIconService);

    get viewBox(): string {
        if (this.svgViewBox) {
            return this.svgViewBox;
        }

        return `0 0 ${this.svgWidth} ${this.svgHeight}`;
    }

    get classes(): string[] {
        const classes = ['evo-icon'];
        if (this.shape) {
            classes.push('evo-icon_' + this.shape);
        }
        return classes;
    }

    protected getContent() {
        if (!this.shape) {
            return;
        }

        const safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.resolver(this.shape));

        return this.evoIconService.fetchIcon(safeUrl);
    }
}
