import { Injector, ViewContainerRef } from '@angular/core';

export class EvoPortalOutlet {

    constructor(
        public injector: Injector,
        public viewContainerRef: ViewContainerRef,
    ) { }

}
