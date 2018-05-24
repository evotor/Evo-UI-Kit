import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';

export enum EvoButtonSizes {
    fullWidth = 'full-width',
    small = 'small',
    large = 'large',
}

export enum EvoButtonStyles {
    lined = 'lined',
    darkblue = 'darkblue',
    darkblueLined = 'darkblue-lined',
    green = 'green',
    greenlined = 'green-lined',
    purple = 'purple'
}

@Component({
    selector: 'evo-button',
    templateUrl: './evo-button.component.html',
    styleUrls: ['./evo-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvoButtonComponent {
    @Input() color: EvoButtonStyles;
    @Input() disabled = false;
    @Input() size: EvoButtonSizes;

    private _loading = false;
    private clientWidth: number;

    constructor(private elRef: ElementRef) {

    }

    get totalClasses(): string[] {
        const classes: string[] = [];

        if (this.size) {
            classes.push(this.size);
        }

        if (this.color) {
            classes.push(this.color);
        }

        if (this._loading) {
            classes.push('loading');
        }

        if (this.disabled) {
            classes.push('disabled');
        }

        return classes;
    }

    get totalStyles(): {[styleKey: string]: any} {
        const result = {};

        if (this._loading) {
            result['width'] = `${this.clientWidth}px`;
        }

        return result;
    }

    get loading(): boolean {
        return this._loading;
    }

    @Input() set loading(value: boolean) {
        this.clientWidth = this.elRef.nativeElement.getBoundingClientRect().width;
        this._loading = value;
    }
}
