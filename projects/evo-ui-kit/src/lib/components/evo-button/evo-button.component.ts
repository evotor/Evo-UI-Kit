import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';
import { EvoButtonShape } from './types/evo-button-shape';
import { EvoButtonColor } from './types/evo-button-color';
import { EvoButtonSize } from './types/evo-button-size';
import { EvoButtonTheme } from './types';

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
    @Input() size: EvoButtonSizes | EvoButtonSize = 'normal';

    /**
     * Theme prop sets basic parameters, such as shape, outline, etc
     */
    @Input('theme') set setTheme(value: EvoButtonTheme) {
        switch (value) {
            case 'rectangle-outline':
                this.shape = 'rectangle';
                this.isOutline = true;
                break;
            case 'rounded-outline':
                this.shape = 'rounded';
                this.isOutline = true;
                break;
            case 'rounded-solid':
                this.shape = 'rounded';
                this.isOutline = false;
                break;
            case 'semi-rectangle-solid':
                this.shape = 'semi-rectangle';
                this.isOutline = false;
                break;
        }
    }

    /**
     * Setter for backward compatibility
     *
     * TODO: remove in next major version update
     *
     * @param value
     */
    @Input('color') set setColor(value: EvoButtonStyles | EvoButtonColor) {
        switch (value) {
            case EvoButtonStyles.lined:
                this.color = 'primary';
                this.shape = 'rounded';
                this.isOutline = true;
                break;
            case EvoButtonStyles.darkblue:
                this.color = 'secondary';
                this.shape = 'rounded';
                this.isOutline = false;
                break;
            case EvoButtonStyles.darkblueLined:
                this.color = 'secondary';
                this.shape = 'rounded';
                this.isOutline = true;
                break;
            case EvoButtonStyles.green:
                this.color = 'success';
                this.shape = 'rounded';
                this.isOutline = false;
                break;
            case EvoButtonStyles.greenlined:
                this.color = 'success';
                this.shape = 'rounded';
                this.isOutline = true;
                break;
            case EvoButtonStyles.purple:
                this.color = 'bonus';
                this.shape = 'rounded';
                this.isOutline = false;
                break;
            case EvoButtonStyles.red:
                this.color = 'error';
                this.shape = 'rounded';
                this.isOutline = false;
                break;
            default:
                this.color = value;
        }
    }

    @Input() set disabled(value: boolean) {
        this.isDisabled = value;

        if (!this.loading) {
            this.elRef.nativeElement.disabled = value;
        }
    }

    @Input() set loading(value: boolean) {
        this.isLoading = value;

        if (!this.disabled) {
            this.elRef.nativeElement.disabled = value;
        }
    }

    private color: EvoButtonColor = 'primary';
    private shape: EvoButtonShape = 'rounded';
    private isOutline: boolean = false;
    private isDisabled = false;
    private isLoading = false;

    constructor(
        private elRef: ElementRef,
    ) {
    }

    get disabled(): boolean {
        return this.isDisabled;
    }

    get loading() {
        return this.isLoading;
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

        if (this.isOutline) {
            classes.push(`is-outline`)
        }

        if (this.loading) {
            classes.push('is-loading');
        }

        if (this.disabled) {
            classes.push('is-disabled');
        }

        return classes;
    }

    get totalStyles(): {[styleKey: string]: any} {
        const result = {};

        if (this.loading) {
            result['visibility'] = 'hidden';
        }

        return result;
    }
}
