import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'evo-autocomplete-footer',
    templateUrl: './evo-autocomplete-footer.component.html',
    styleUrls: ['./evo-autocomplete-footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
})
export class EvoAutocompleteFooterComponent {}
