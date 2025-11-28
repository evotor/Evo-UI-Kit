import {
    AfterContentInit,
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    ElementRef,
    Input,
    QueryList,
} from '@angular/core';
import {EvoButtonColor, EvoButtonShape, EvoButtonSize, EvoButtonTheme, EvoButtonThemeParams} from '../../types';
import {EVO_BUTTON_THEMES_MAP} from '../../constants/evo-button-themes-map';
import {EvoCircularLoaderComponent} from '../../../evo-loader/evo-circular-loader.component';
import {NgStyle} from '@angular/common';
import {EvoUiClassDirective} from '../../../../directives/evo-ui-class.directive';
import {EvoIconComponent} from '../../../evo-icon';

@Component({
    selector: 'button[evoButton], a[evoButton]',
    templateUrl: './evo-button.component.html',
    styleUrls: ['./evo-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [EvoUiClassDirective, NgStyle, EvoCircularLoaderComponent],
})
export class EvoButtonComponent implements AfterContentInit {
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

    @ContentChildren(EvoIconComponent) evoIcons: QueryList<EvoIconComponent>;

    private shape: EvoButtonShape = 'rounded';
    private _isOutline = false;
    private _isDisabled = false;
    private _isLoading = false;
    private _withIcon = false;

    constructor(private readonly elRef: ElementRef) {}

    ngAfterContentInit(): void {
        this.checkIfWithIcon();
    }

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

        if (this._withIcon) {
            classes.push('with-icon');
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

    private checkIfWithIcon(): void {
        const content = this.elRef.nativeElement.querySelector('.evo-button__content');
        const isSingleIcon = this.evoIcons.length === 1;
        const isOneChild = content.children.length === 1;
        const text = content.textContent?.trim();

        if (isOneChild && isSingleIcon && !text) {
            this._withIcon = true;
        }
    }
}
