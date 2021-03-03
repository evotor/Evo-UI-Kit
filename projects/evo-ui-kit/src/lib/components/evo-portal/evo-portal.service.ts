import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, TemplateRef, Type } from '@angular/core';
import { EvoPortalHost } from './evo-portal-host.class';

@Injectable()
export class EvoPortalService {

    constructor(
        private appRef: ApplicationRef,
        private injector: Injector,
        private cfr: ComponentFactoryResolver,
    ) { }

    attach<T = any>(
        portal: Type<T>,
        host: EvoPortalHost | HTMLElement | string,
        injector?: Injector,
    ): ComponentRef<T> {
        if (host instanceof EvoPortalHost) {
            return this.attachToHost<T>(
                portal,
                host,
                injector,
            );
        } else {
            return this.attachToDomElement<T>(
                portal,
                host,
                injector,
            );
        }
    }

    /**
     * Attaches to default host (if no provided it's document.body)
     */
    attachToDomElement<T = any>(
        portal: Type<T>,
        elementOrSelector?: HTMLElement | string,
        injector?: Injector,
    ): ComponentRef<T> {

        let element: HTMLElement = document.body;

        if (
            this.isElementSelector(elementOrSelector)
        ) {
            element = document.querySelector(elementOrSelector as string);
            if (!element) {
                throw new Error(`Element with selector '${elementOrSelector}' not found`);
            }
        } else if (
            this.isHTMLElement(elementOrSelector)
        ) {
            element = elementOrSelector as HTMLElement;
        }

        const factory = this.cfr
            .resolveComponentFactory<T>(portal);

        const compRef = factory.create(
            injector || this.injector
        );

        this.appRef.attachView(compRef.hostView);

        element.appendChild(
            this.getRootNode(compRef)
        );

        return compRef;

    }

    /**
     * Attaches to provided host (EvoPortalHost)
     */
    attachToHost<T = any>(
        portal: Type<T>,
        portalHost: EvoPortalHost,
        injector?: Injector,
    ): ComponentRef<T> {

        const factory = this.cfr
            .resolveComponentFactory<T>(portal);

        return portalHost.viewContainerRef.createComponent<T>(
            factory,
            portalHost.viewContainerRef.length,
            injector || portalHost.injector,
        );
    }

    attachTemplate<T = any>(
        template: TemplateRef<T>,
        host: EvoPortalHost | HTMLElement | string,
        context?: T,
    ): EmbeddedViewRef<T> {

        if (host instanceof EvoPortalHost) {
            return host.viewContainerRef.createEmbeddedView(
                template,
                context,
                host.viewContainerRef.length,
            );
        } else if (
            this.isHTMLElement(host)
        ) {
            const viewRef = template.createEmbeddedView(context);
            this.appRef.attachView(viewRef);
            (host as HTMLElement).appendChild(
                viewRef.rootNodes[0] as HTMLElement
            );
            return viewRef;
        }
    }

    detach<T = any>(
        componentRef: ComponentRef<T>,
    ) {
        componentRef.destroy();
    }

    protected getRootNode(
        ref: ComponentRef<any> | EmbeddedViewRef<any>,
    ): HTMLElement {
        if (ref instanceof ComponentRef) {
            return (ref.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        } else {
            return ref.rootNodes[0] as HTMLElement;
        }
    }

    protected isElementSelector(selector: any): boolean {
        return selector && typeof selector === 'string' && !!selector.trim().length;
    }

    protected isHTMLElement(element: any): boolean {
        return element && (element instanceof Element || element instanceof HTMLDocument);
    }

}
