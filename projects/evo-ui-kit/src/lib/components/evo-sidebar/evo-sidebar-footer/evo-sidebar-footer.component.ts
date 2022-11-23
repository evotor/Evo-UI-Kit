import {Component} from '@angular/core';
import {AbstractSidebarSectionComponent} from '../classes/abstract-sidebar-section-component';

@Component({
    selector: 'evo-sidebar-footer, [evo-sidebar-footer]',
    templateUrl: './evo-sidebar-footer.component.html',
    styleUrls: ['./evo-sidebar-footer.component.scss'],
    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
    host: {
        class: 'evo-sidebar__footer-wrapper',
    },
})
export class EvoSidebarFooterComponent extends AbstractSidebarSectionComponent {}
