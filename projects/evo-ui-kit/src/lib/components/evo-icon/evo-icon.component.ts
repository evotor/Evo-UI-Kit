import {ChangeDetectionStrategy, Component, HostBinding, Input} from '@angular/core';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import {EvoIconsLibrary} from './classes/evo-icons-library';

@Component({
    selector: 'evo-icon',
    templateUrl: './evo-icon.component.html',
    styleUrls: ['./evo-icon.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoIconComponent {
    @Input() set shape(shape: string) {
        this._shape = shape;
        const shapes = this.iconsService.shapes;
        if (!shapes[this._shape]) {
            throw new Error(
                `No icon with name "${this._shape}" was found. Please check UI Kit and import certain category to Icon Module`,
            );
        }
        this.content = this.sanitizer.bypassSecurityTrustHtml(shapes[this._shape]);
    }

    get shape(): string {
        return this._shape;
    }

    @Input() svgWidth = 24;

    @Input() svgHeight = 24;

    @Input() svgViewBox: string;

    content: SafeHtml;

    get viewBox(): string {
        if (this.svgViewBox) {
            return this.svgViewBox;
        }
        return `0 0 ${this.svgWidth} ${this.svgHeight}`;
    }

    @HostBinding('class.evo-icon') hostClass = true;

    get classes(): string[] {
        const classes = ['evo-icon'];
        if (this._shape) {
            classes.push('evo-icon_' + this._shape);
        }
        return classes;
    }

    private _shape: string;

    constructor(private readonly sanitizer: DomSanitizer, private readonly iconsService: EvoIconsLibrary) {}
}
