import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges
} from '@angular/core';

export enum EvoIconButtonColor {
    link = 'link',
    danger = 'danger',
    success = 'success',
}

const wrapperSelector = 'evo-icon-button';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'button[evo-icon-button]',
    templateUrl: './evo-icon-button.component.html',
    styleUrls: ['./evo-icon-button.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoIconButtonComponent implements OnInit, OnChanges {
    @Input() disabled: boolean;
    @Input() loading: boolean;
    @Input() color: EvoIconButtonColor | string = EvoIconButtonColor.link;

    classes: string[] = [];

    @HostBinding('disabled') get isDisabled(): boolean {
        return this.disabled || this.loading;
    }

    ngOnInit(): void {
        this.updateClassesList();
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.color !== undefined) {
            this.updateClassesList();
        }
    }

    private updateClassesList(): void {
        this.classes = [];
        if (this.color && EvoIconButtonColor[this.color]) {
            this.classes.push(`${ wrapperSelector }_color-${ EvoIconButtonColor[this.color] }`);
        }
    }
}
