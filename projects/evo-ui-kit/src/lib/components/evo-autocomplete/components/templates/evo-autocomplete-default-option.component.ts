import {ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {EvoCheckboxModule} from '../../../evo-checkbox/evo-checkbox.module';

@Component({
    selector: 'evo-autocomplete-default-option',
    templateUrl: './evo-autocomplete-default-option.component.html',
    styleUrls: ['./evo-autocomplete-default-option.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [EvoCheckboxModule, FormsModule],
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

    constructor(private readonly cdr: ChangeDetectorRef) {}

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
