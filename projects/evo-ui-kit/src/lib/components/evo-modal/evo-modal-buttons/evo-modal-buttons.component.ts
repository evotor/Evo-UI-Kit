import {Component, input, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'evo-modal-buttons, [evo-modal-buttons]',
    standalone: true,
    imports: [],
    template: '<ng-content select="[evoButton]"/>',
    styleUrl: './evo-modal-buttons.component.scss',
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        class: 'evo-modal-buttons',
        '[class.evo-modal-buttons_single-btn]': 'single()',
    },
    encapsulation: ViewEncapsulation.None,
})
export class EvoModalButtonsComponent {

    single = input<boolean>(false);
}
