import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input } from '@angular/core';

@Component({
    selector: 'evo-autocomplete-default-option',
    templateUrl: './evo-autocomplete-default-option.component.html',
    styleUrls: ['./evo-autocomplete-default-option.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoAutocompleteDefaultOptionComponent {
    @Input() hasCheckbox: boolean;

    @Input() label: string;
    @Input() description: string;
    @Input() isDisabled: boolean;
    @Input() isSelected: boolean;

    @HostBinding('class.has-checkbox') get hasCheckboxClass(): boolean {
        return this.hasCheckbox;
    }

    constructor(private cdr: ChangeDetectorRef) {
    }

    onSelectedChange(e): void {
        this.cdr.markForCheck();
    }

    onCheckboxClick(e: Event): void {
        e.preventDefault();
        e.stopImmediatePropagation();
        if (e.target) {
            (e.target as HTMLElement).closest('.ng-option')?.dispatchEvent(new Event('click'));
        }
    }
}
