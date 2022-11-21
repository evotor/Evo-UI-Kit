import { Component, OnInit, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { EvoIconsLibrary } from './classes/evo-icons-library';

@Component({
    selector: 'evo-icon',
    templateUrl: './evo-icon.component.html',
    styleUrls: ['./evo-icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoIconComponent implements OnInit {

    @Input() shape: string;

    @Input() svgWidth = 24;

    @Input() svgHeight = 24;

    @Input() svgViewBox: string;

    get viewBox(): string {
        if (this.svgViewBox) {
            return this.svgViewBox;
        }
        return `0 0 ${this.svgWidth} ${this.svgHeight}`;
    }

    content: SafeHtml;

    @HostBinding('class.evo-icon') hostClass = true;

    get classes(): string[] {
        const classes = ['evo-icon'];
        if (this.shape) {
            classes.push('evo-icon_' + this.shape);
        }
        return classes;
    }

    constructor(
        private readonly sanitizer: DomSanitizer,
        private readonly iconsService: EvoIconsLibrary,
    ) { }

    ngOnInit() {
        const shapes = this.iconsService.shapes;
        if (!shapes[this.shape]) {
            throw new Error(`No icon with name "${this.shape}" was found. Please check UI Kit and import certain category to Icon Module`);
        }
        this.content = this.sanitizer.bypassSecurityTrustHtml(shapes[this.shape]);
    }

}
