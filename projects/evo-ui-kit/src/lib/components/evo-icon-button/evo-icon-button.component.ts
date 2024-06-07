import {ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {EvoIconButtonColor, EvoIconButtonSize} from './types';

const wrapperSelector = 'evo-icon-button';

@Component({
    // eslint-disable-next-line:component-selector
    selector: 'button[evo-icon-button], a[evo-icon-button]',
    templateUrl: './evo-icon-button.component.html',
    styleUrls: ['./evo-icon-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoIconButtonComponent implements OnInit, OnChanges {
    @Input() disabled: boolean;
    @Input() loading: boolean;
    @Input() color: EvoIconButtonColor = 'link';
    @Input() size: EvoIconButtonSize;

    classes: string[] = [];

    @HostBinding('disabled') get isDisabled(): boolean {
        return this.disabled || this.loading;
    }

    ngOnInit(): void {
        this.updateClassesList();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.color !== undefined || changes.theme !== undefined) {
            this.updateClassesList();
        }
    }

    private updateClassesList(): void {
        this.classes = [];

        if (this.size) {
            this.classes.push(`${wrapperSelector}_size-${this.size}`);
        }

        if (this.color) {
            this.classes.push(`${wrapperSelector}_color-${this.color}`);
        }
    }
}
