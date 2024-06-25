import {Directive, Injector, ViewContainerRef} from '@angular/core';
import {EvoPortalOutlet} from './evo-portal-outlet.class';

@Directive({
    selector: '[evoPortalOutlet]',
    standalone: true,
})
export class EvoPortalOutletDirective extends EvoPortalOutlet {
    constructor(
        public injector: Injector,
        public viewContainerRef: ViewContainerRef,
    ) {
        super(injector, viewContainerRef);
    }
}
