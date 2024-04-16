import {ChangeDetectionStrategy, Component, ElementRef, Input} from '@angular/core';
import {EvoButtonColor, EvoButtonShape, EvoButtonSize, EvoButtonTheme, EvoButtonThemeParams} from '../../types';
import {EVO_BUTTON_THEMES_MAP} from '../../constants/evo-button-themes-map';

@Component({
    selector: 'button[evoButton], a[evoButton]',
    templateUrl: './evo-button.component.html',
    styleUrls: ['./evo-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoButtonComponent {
    @Input() size: EvoButtonSize = 'normal';
    @Input() color: EvoButtonColor = 'success';

    /**
     * `theme` is a complex prop, that sets a number of inner parameters, described in `EvoButtonThemeParams`
     */
    @Input() set theme(value: EvoButtonTheme) {
        const selectedTheme: EvoButtonThemeParams =
            EVO_BUTTON_THEMES_MAP.get(value) ?? EVO_BUTTON_THEMES_MAP.get('rounded-solid');
        this.shape = selectedTheme.shape;
        this._isOutline = selectedTheme.isOutline;
    }

    @Input() set disabled(value: boolean) {
        this._isDisabled = value;

        if (!this.isLoading) {
            this.elRef.nativeElement.disabled = value;
        }
    }

    @Input() set loading(value: boolean) {
        this._isLoading = value;

        if (!this._isDisabled) {
            this.elRef.nativeElement.disabled = value;
        }
    }

    private shape: EvoButtonShape = 'rounded';
    private _isOutline = false;
    private _isDisabled = false;
    private _isLoading = false;

    constructor(private readonly elRef: ElementRef) {}

    get isLoading(): boolean {
        return this._isLoading;
    }

    get buttonClasses(): string[] {
        const classes: string[] = [];

        if (this.color) {
            classes.push(`color_${this.color}`);
        }

        if (this.shape) {
            classes.push(`shape_${this.shape}`);
        }

        if (this.size) {
            classes.push(`size_${this.size}`);
        }

        if (this._isOutline) {
            classes.push(`is-outline`);
        }

        if (this._isDisabled) {
            classes.push('is-disabled');
        }

        if (this.isLoading) {
            classes.push('is-loading');
        }

        return classes;
    }

    get buttonStyles(): Record<string, string> {
        const result: Record<string, string> = {};

        if (this.isLoading) {
            result['visibility'] = 'hidden';
        }

        return result;
    }
}
