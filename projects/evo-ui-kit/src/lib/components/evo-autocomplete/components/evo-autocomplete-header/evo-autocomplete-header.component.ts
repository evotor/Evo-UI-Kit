import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'evo-autocomplete-header',
    templateUrl: './evo-autocomplete-header.component.html',
    styleUrls: ['./evo-autocomplete-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EvoAutocompleteHeaderComponent {}
