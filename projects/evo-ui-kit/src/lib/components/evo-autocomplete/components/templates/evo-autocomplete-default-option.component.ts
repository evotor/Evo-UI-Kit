import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input } from '@angular/core';

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
