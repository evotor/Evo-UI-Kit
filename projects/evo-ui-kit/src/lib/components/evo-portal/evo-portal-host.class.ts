import { Injector, ViewContainerRef } from '@angular/core';

export class EvoPortalHost {

    constructor(
        public injector: Injector,
        public viewContainerRef: ViewContainerRef,
    ) { }

}
