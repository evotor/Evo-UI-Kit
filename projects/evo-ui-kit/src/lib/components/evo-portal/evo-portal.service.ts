// eslint-disable-next-line:max-line-length
import {
    ApplicationRef,
    ComponentFactoryResolver,
    ComponentRef,
    EmbeddedViewRef,
    Injectable,
    Injector,
    TemplateRef,
    Type,
    ViewRef,
} from '@angular/core';
import {EvoPortalOutlet} from './evo-portal-outlet.class';

export type EvoPortalHostType = EvoPortalOutlet | HTMLElement | string;

export abstract class EvoAbstractPortal {
    abstract hasAttachedPortal(): boolean;

    abstract attach(host: EvoPortalHostType): void;

    abstract detach(): void;
}

@Injectable()
export class EvoPortalService {
    constructor(
        protected appRef: ApplicationRef,
        protected injector: Injector,
        protected cfr: ComponentFactoryResolver,
    ) {}

    // eslint-disable-next-line
    attachComponent<T = any>(portal: Type<T>, host: EvoPortalHostType, injector?: Injector): ComponentRef<T> {
        if (host instanceof EvoPortalOutlet) {
            return this.attachToHost<T>(portal, host, injector);
        } else {
            return this.attachToDomElement<T>(portal, host, injector);
        }
    }

    // eslint-disable-next-line
    attachToDomElement<T = any>(
        portal: Type<T>,
        elementOrSelector: HTMLElement | string,
        injector?: Injector,
    ): ComponentRef<T> {
        let element: HTMLElement;

        if (this.isElementSelector(elementOrSelector)) {
            element = document.querySelector(elementOrSelector as string);
            if (!element) {
                this.errNotFoundBySelector(elementOrSelector as string);
            }
        } else if (this.isHTMLElement(elementOrSelector)) {
            element = elementOrSelector as HTMLElement;
        }

        // TODO: rewrite without deprecated ComponentFactoryResolver
        const factory = this.cfr.resolveComponentFactory<T>(portal);

        const compRef = factory.create(injector || this.injector);

        this.appRef.attachView(compRef.hostView);

        element.appendChild(this.getRootNode(compRef));

        return compRef;
    }

    // eslint-disable-next-line
    attachToHost<T = any>(portal: Type<T>, portalHost: EvoPortalOutlet, injector?: Injector): ComponentRef<T> {
        const factory = this.cfr.resolveComponentFactory<T>(portal);

        return portalHost.viewContainerRef.createComponent<T>(
            factory,
            portalHost.viewContainerRef.length,
            injector || portalHost.injector,
        );
    }

    // eslint-disable-next-line
    attachTemplate<T = any>(template: TemplateRef<T>, host: EvoPortalHostType, context?: T): EmbeddedViewRef<T> {
        if (host instanceof EvoPortalOutlet) {
            return host.viewContainerRef.createEmbeddedView(template, context, host.viewContainerRef.length);
        } else if (this.isHTMLElement(host)) {
            return this.attachTemplateToElement(template, host as HTMLElement, context);
        } else {
            const hostEl: HTMLElement = document.querySelector(host as string);
            if (!hostEl) {
                this.errNotFoundBySelector(host as string);
                return;
            }
            return this.attachTemplateToElement(template, hostEl, context);
        }
    }

    // eslint-disable-next-line
    detach<T = any>(portal: ComponentRef<T> | EmbeddedViewRef<T> | ViewRef) {
        portal.destroy();
    }

    protected attachTemplateToElement<T>(
        template: TemplateRef<T>,
        element: HTMLElement,
        context?: T,
    ): EmbeddedViewRef<T> {
        const viewRef = template.createEmbeddedView(context);
        this.appRef.attachView(viewRef);
        element.appendChild(viewRef.rootNodes[0] as HTMLElement);
        return viewRef;
    }

    // eslint-disable-next-line
    protected getRootNode(ref: ComponentRef<any> | EmbeddedViewRef<any>): HTMLElement {
        if (ref instanceof ComponentRef) {
            // eslint-disable-next-line
            return (ref.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
        } else {
            return ref.rootNodes[0] as HTMLElement;
        }
    }

    // eslint-disable-next-line
    protected isElementSelector(selector: any): boolean {
        return selector && typeof selector === 'string' && !!selector.trim().length;
    }

    // eslint-disable-next-line
    protected isHTMLElement(element: any): boolean {
        return element && (element instanceof Element || element instanceof HTMLDocument);
    }

    protected errNotFoundBySelector(selector: string) {
        throw new Error(`Element with selector '${selector}' not found`);
    }
}
