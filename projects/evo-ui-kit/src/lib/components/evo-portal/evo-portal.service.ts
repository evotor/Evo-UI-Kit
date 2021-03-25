import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, TemplateRef, Type } from '@angular/core';
import { EvoPortalHost } from './evo-portal-host.class';

@Injectable()
export class EvoPortalService {

    constructor(
        private appRef: ApplicationRef,
        private injector: Injector,
        private cfr: ComponentFactoryResolver,
    ) { }

    attachComponent<T = any>(
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

    attachToDomElement<T = any>(
        portal: Type<T>,
        elementOrSelector: HTMLElement | string,
        injector?: Injector,
    ): ComponentRef<T> {

        let element: HTMLElement;

        if (
            this.isElementSelector(elementOrSelector)
        ) {
            element = document.querySelector(elementOrSelector as string);
            if (!element) {
                this.errNoFoundBySelector(elementOrSelector as string);
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
            return this.attachTemplateToElement(
                template,
                host as HTMLElement,
                context,
            )
        } else {
            const hostEl: HTMLElement = document.querySelector(host as string);
            if (!hostEl) {
                this.errNoFoundBySelector(host as string);
                return;
            }
            return this.attachTemplateToElement(
                template,
                hostEl,
                context,
            );
        }
    }

    detach<T = any>(
        portal: ComponentRef<T> | EmbeddedViewRef<T>, 
    ) {
        portal.destroy();
    }

    protected attachTemplateToElement<T>(
        template: TemplateRef<T>,
        element: HTMLElement,
        context?: T,
    ): EmbeddedViewRef<T> {
        const viewRef = template.createEmbeddedView(context);
        this.appRef.attachView(viewRef);
        element.appendChild(
            viewRef.rootNodes[0] as HTMLElement
        );
        return viewRef;
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

    protected errNoFoundBySelector(selector: string) {
        throw new Error(`Element with selector '${selector}' not found`);
    }

}
