import {ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EvoIconButtonTheme} from './types/evo-icon-button-theme';
import {EvoIconButtonSize} from './types/evo-icon-button-size';

// TODO: replace color to string literal type based on a `EvoColor` type
export enum EvoIconButtonColor {
    link = 'link',
    danger = 'danger',
    success = 'success',
}

const wrapperSelector = 'evo-icon-button';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'button[evo-icon-button], a[evo-icon-button]',
    templateUrl: './evo-icon-button.component.html',
    styleUrls: ['./evo-icon-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoIconButtonComponent implements OnInit, OnChanges {
    @Input() disabled: boolean;
    @Input() loading: boolean;
    @Input() color: EvoIconButtonColor | string = EvoIconButtonColor.link;
    /**
     * @deprecated instead of rectangle theme use `EvoNavigationButtonComponent`
     */
    @Input() theme: EvoIconButtonTheme = 'default';
    @Input() size: EvoIconButtonSize;
    @Input() notificationDot = false;

    classes: string[] = [];

    @HostBinding('disabled') get isDisabled(): boolean {
        return this.disabled || this.loading;
    }

    ngOnInit(): void {
        this.updateClassesList();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.color !== undefined || changes.theme !== undefined || changes.notificationDot) {
            this.updateClassesList();
        }
    }

    private updateClassesList(): void {
        this.classes = [];
        // TODO in new version UI-kit rename classes modifier name (like size_normal)
        if (this.size) {
            this.classes.push(`${wrapperSelector}_size-${this.size}`);
        }
        if (this.color && EvoIconButtonColor[this.color]) {
            this.classes.push(`${wrapperSelector}_color-${EvoIconButtonColor[this.color]}`);
        }
        if (this.theme) {
            this.classes.push(`${wrapperSelector}_theme-${this.theme}`);
        }
        if (this.notificationDot) {
            this.classes.push(`${wrapperSelector}_notification-dot`);
        }
    }
}
