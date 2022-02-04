import { ChangeDetectionStrategy, Component, ElementRef, Input } from '@angular/core';

export enum EvoButtonSizes {
    small = 'small',
    large = 'large',
}

export enum EvoButtonStyles {
    lined = 'lined',                  /* deprecated, use PrimaryOutlined */
    darkblueLined = 'darkblue-lined', /* deprecated, use SecondaryLightOutlined */
    greenlined = 'green-lined',       /* deprecated, use SuccessOutlined */
    green = 'green',                  /* deprecated, use Success */
    red = 'red',                      /* deprecated, use Error */
    PrimaryOutlined = 'primary-outlined',
    SecondaryLightOutlined = 'secondary-light-outlined',
    Success = 'success',
    SuccessOutlined = 'success-outlined',
    Error = 'error',
    Darkblue = 'darkblue',
    Purple = 'purple',
    LinkOutlined = 'link-outlined',
}

export enum EvoButtonTheme {
    Default = 'default',
    Rect = 'rect',
    RectOval = 'rect-oval',
}

@Component({
    selector: 'evo-button, button[evo-button], evoButton, button[evoButton]',
    templateUrl: './evo-button.component.html',
    styleUrls: [ './evo-button.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoButtonComponent {
    @Input() color: EvoButtonStyles;
    @Input() size: EvoButtonSizes;
    @Input() theme: EvoButtonTheme = EvoButtonTheme.Default;

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

        if (this.size && this.theme === EvoButtonTheme.Default) {
            classes.push(this.size);
        }

        if (this.color) {
            /* For backward compatibility */
            switch (this.color) {
                case EvoButtonStyles.lined:
                    classes.push(EvoButtonStyles.PrimaryOutlined)
                    break;
                case EvoButtonStyles.darkblueLined:
                    classes.push(EvoButtonStyles.SecondaryLightOutlined)
                    break;
                case EvoButtonStyles.green:
                    classes.push(EvoButtonStyles.Success)
                    break;
                case EvoButtonStyles.greenlined:
                    classes.push(EvoButtonStyles.SuccessOutlined)
                    break;
                case EvoButtonStyles.red:
                    classes.push(EvoButtonStyles.Error)
                    break;
                default:
                    classes.push(this.color);
            }
        }

        if (this.loading) {
            classes.push('loading');
        }

        if (this.disabled) {
            classes.push('disabled');
        }

        if (this.theme) {
            classes.push(this.theme)
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
