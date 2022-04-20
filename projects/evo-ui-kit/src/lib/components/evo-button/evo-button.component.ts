import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { EvoButtonColor, EvoButtonShape, EvoButtonSize, EvoButtonTheme } from './types';
import { EVO_BUTTON_THEMES_MAP } from './constants/evo-button-themes-map';
import { EVO_BUTTON_OLD_STYLES_MAP } from './constants/evo-button-old-styles-map';
import { EvoButtonStyles } from './enums/evo-button-styles';

/**
 * TODO: attribute selector "evo-button" is deprecated, use only camelCased selector
 */
@Component({
    selector: 'evo-button, button[evo-button], button[evoButton], a[evoButton]',
    templateUrl: './evo-button.component.html',
    styleUrls: ['./evo-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoButtonComponent {

    @Input('size') set setSize(value: EvoButtonSize) {
        this.size = value ?? 'normal';
    }

    /**
     * Theme prop sets basic parameters, such as shape, outline, etc
     */
    @Input('theme') set setTheme(value: EvoButtonTheme) {
        const selectedTheme = EVO_BUTTON_THEMES_MAP.get(value) ?? EVO_BUTTON_THEMES_MAP.get('rounded-solid');
        this.shape = selectedTheme.shape;
        this._isOutline = selectedTheme.isOutline;
    }

    /**
     * Setter for backward compatibility
     *
     * @deprecated TODO: remove EvoButtonStyles support in next major release
     * @param value
     */
    @Input('color') set setColor(value: EvoButtonStyles | EvoButtonColor) {
        switch (value) {
            case EvoButtonStyles.lined:
            case EvoButtonStyles.darkblue:
            case EvoButtonStyles.darkblueLined:
            case EvoButtonStyles.green:
            case EvoButtonStyles.greenlined:
            case EvoButtonStyles.purple:
            case EvoButtonStyles.red:
                const oldStyles = EVO_BUTTON_OLD_STYLES_MAP.get(value);
                if (!oldStyles) {
                    return;
                }
                this.color = oldStyles.color;
                this.shape = oldStyles.shape;
                this._isOutline = oldStyles.isOutline;
                break;
            default:
                this.color = value;
        }
    }

    @Input('disabled') set setIsDisabled(value: boolean) {
        this._isDisabled = value;

        if (!this.isLoading) {
            this.elRef.nativeElement.disabled = value;
        }
    }

    @Input('loading') set setIsLoading(value: boolean) {
        this._isLoading = value;

        if (!this.isDisabled) {
            this.elRef.nativeElement.disabled = value;
        }
    }

    private color: EvoButtonColor = 'primary';
    private shape: EvoButtonShape = 'rounded';
    private size: EvoButtonSize = 'normal';

    private _isOutline: boolean = false;
    private _isDisabled = false;
    private _isLoading = false;

    constructor(
        private elRef: ElementRef,
    ) {
    }

    get isDisabled(): boolean {
        return this._isDisabled;
    }

    get isLoading() {
        return this._isLoading;
    }

    get totalClasses(): string[] {
        const classes: string[] = [];

        if (this.color) {
            classes.push(`color-${this.color}`);
        }

        if (this.shape) {
            classes.push(`shape-${this.shape}`)
        }

        if (this.size) {
            classes.push(`size-${this.size}`)
        }

        if (this._isOutline) {
            classes.push(`is-outline`)
        }

        if (this.isLoading) {
            classes.push('is-loading');
        }

        if (this.isDisabled) {
            classes.push('is-disabled');
        }

        return classes;
    }

    get totalStyles(): {[styleKey: string]: any} {
        const result = {};

        if (this.isLoading) {
            result['visibility'] = 'hidden';
        }

        return result;
    }
}
