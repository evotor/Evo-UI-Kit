import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Type } from '@angular/core';
import { EvoPortalHost } from './evo-portal-host.class';

@Injectable()
export class EvoPortalService {

    constructor(
        private appRef: ApplicationRef,
        private injector: Injector,
        private cfr: ComponentFactoryResolver,
    ) { }

    /**
     * Attaches to default host (if no provided it's document.body)
     */
    attach<T = any>(
        component: Type<T>,
        injector?: Injector,
    ): ComponentRef<T> {

        const factory = this.cfr
            .resolveComponentFactory<T>(component);

        const compRef = factory.create(
            injector || this.injector
        );

        this.appRef.attachView(compRef.hostView);

        document.body.appendChild(
            this.getComponentRootNode(compRef)
        );

        return compRef;

    }

    /**
     * Attaches to provided host (EvoPortalHost)
     */
    attachToHost<T = any>(
        portalHost: EvoPortalHost,
        component: Type<T>,
        injector?: Injector,
    ): ComponentRef<T> {

        const factory = this.cfr
            .resolveComponentFactory<T>(component);

        return portalHost.viewContainerRef.createComponent<T>(
            factory,
            portalHost.viewContainerRef.length,
            injector || portalHost.injector,
        );
    }

    detach<T = any>(
        componentRef: ComponentRef<T>,
    ) {
        componentRef.destroy();
    }

    protected getComponentRootNode(
        componentRef: ComponentRef<any>,
    ): HTMLElement {
        return (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    }

}
