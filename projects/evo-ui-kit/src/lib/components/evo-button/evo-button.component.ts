import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';

export enum EvoButtonSizes {
    small = 'small',
    large = 'large',
}

export enum EvoButtonStyles {
    lined = 'lined',
    darkblue = 'darkblue',
    darkblueLined = 'darkblue-lined',
    green = 'green',
    greenlined = 'green-lined',
    purple = 'purple',
    red = 'red',
}

@Component({
    selector: 'evo-button, button[evo-button]',
    templateUrl: './evo-button.component.html',
    styleUrls: [ './evo-button.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoButtonComponent {
    @Input() color: EvoButtonStyles;
    @Input() size: EvoButtonSizes;

    @Input() set disabled(value: boolean) {
        this._disabled = value;

        if (!this.loading) {
            this.elRef.nativeElement.disabled = value;
        }
    }

    @Input() set loading(value: boolean) {
        this._loading = value;

        if (!this.disabled) {
            this.elRef.nativeElement.disabled = value;
        }
    }

    private _disabled = false;
    private _loading = false;

    constructor(private elRef: ElementRef) {
    }

    get disabled(): boolean {
        return this._disabled;
    }

    get loading() {
        return this._loading;
    }

    get totalClasses(): string[] {
        const classes: string[] = [];

        if (this.size) {
            classes.push(this.size);
        }

        if (this.color) {
            classes.push(this.color);
        }

        if (this.loading) {
            classes.push('loading');
        }

        if (this.disabled) {
            classes.push('disabled');
        }

        return classes;
    }

    get totalStyles(): { [ styleKey: string ]: any } {
        const result = {};

        if (this.loading) {
            result[ 'visibility' ] = 'hidden';
        }

        return result;
    }
}
