import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { EvoButtonColor, EvoButtonShape, EvoButtonSize, EvoButtonTheme } from './types';

/**
 * @deprecated Use type EvoButtonSize
 */
export enum EvoButtonSizes {
    small = 'small',
    large = 'large',
}

/**
 * @deprecated Use type EvoButtonColor
 */
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
    selector: 'evo-button, button[evo-button], evoButton, button[evoButton]',
    templateUrl: './evo-button.component.html',
    styleUrls: ['./evo-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoButtonComponent {

    @Input('size') set setSize(value: EvoButtonSize) {
        switch (value) {
            case 'small':
                this.size = 'small';
                break;
            case 'normal':
                this.size = 'normal';
                break;
            case 'large':
                this.size = 'large';
                break;
            default:
                this.size = 'normal';
        }
    }

    /**
     * Theme prop sets basic parameters, such as shape, outline, etc
     */
    @Input('theme') set setTheme(value: EvoButtonTheme) {
        switch (value) {
            case 'rectangle-outline':
                this.shape = 'rectangle';
                this._isOutline = true;
                break;
            case 'rounded-outline':
                this.shape = 'rounded';
                this._isOutline = true;
                break;
            case 'rounded-solid':
                this.shape = 'rounded';
                this._isOutline = false;
                break;
            case 'semi-rectangle-solid':
                this.shape = 'semi-rectangle';
                this._isOutline = false;
                break;
            default:
                this.shape = 'rounded';
                this._isOutline = false;
        }
    }

    /**
     * Setter for backward compatibility
     *
     * TODO: remove EvoButtonStyles support in next major version update
     *
     * @param value
     */
    @Input('color') set setColor(value: EvoButtonStyles | EvoButtonColor) {
        switch (value) {
            case EvoButtonStyles.lined:
                this.color = 'primary';
                this.shape = 'rounded';
                this._isOutline = true;
                break;
            case EvoButtonStyles.darkblue:
                this.color = 'darkblue';
                this.shape = 'rounded';
                this._isOutline = false;
                break;
            case EvoButtonStyles.darkblueLined:
                this.color = 'secondary';
                this.shape = 'rounded';
                this._isOutline = true;
                break;
            case EvoButtonStyles.green:
                this.color = 'success';
                this.shape = 'rounded';
                this._isOutline = false;
                break;
            case EvoButtonStyles.greenlined:
                this.color = 'success';
                this.shape = 'rounded';
                this._isOutline = true;
                break;
            case EvoButtonStyles.purple:
                this.color = 'bonus';
                this.shape = 'rounded';
                this._isOutline = false;
                break;
            case EvoButtonStyles.red:
                this.color = 'error';
                this.shape = 'rounded';
                this._isOutline = false;
                break;
            default:
                this.color = value;
        }
    }

    @Input('disabled') set isDisabled(value: boolean) {
        this._isDisabled = value;

        if (!this.isLoading) {
            this.elRef.nativeElement.disabled = value;
        }
    }

    @Input('loading') set isLoading(value: boolean) {
        this._isLoading = value;

        if (!this.isDisabled) {
            this.elRef.nativeElement.disabled = value;
        }
    }

    private color: EvoButtonColor | 'darkblue' = 'primary';
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
