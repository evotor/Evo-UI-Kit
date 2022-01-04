import {Component, ComponentRef, ElementRef, TemplateRef, ViewChild, ViewRef} from '@angular/core';
import {fakeAsync, tick, waitForAsync} from '@angular/core/testing';
import {createHostFactory, SpectatorHost} from '@ngneat/spectator';
import {EvoPortalOutletDirective} from './evo-portal-outlet.directive';
import {EvoPortalModule} from './evo-portal.module';
import {EvoPortalService} from './evo-portal.service';

@Component({
    selector: 'evo-portal-test',
    template: `{{ name }}`
})
class PortalTestComponent {
    name = 'Hey, i was rendered by EvoPortalService';
}

@Component({ selector: 'evo-host-component', template: `` })
class TestHostComponent {

    @ViewChild(EvoPortalOutletDirective) portalOutlet: EvoPortalOutletDirective;

    @ViewChild('template') template: TemplateRef<any>;

    domHost = '#dom-portal-host';

    componentRef: ComponentRef<PortalTestComponent>;

    viewRef: ViewRef;

    constructor(
        public portal: EvoPortalService,
        public element: ElementRef,
    ) {
    }

    attachToDomHost() {
        this.componentRef = this.portal.attachComponent(
            PortalTestComponent,
            this.domHost
        );
    }

    attachToOutlet() {
        this.componentRef = this.portal.attachComponent(
            PortalTestComponent,
            this.portalOutlet
        );
    }

    attachTemplateToOutlet() {
        this.viewRef = this.portal.attachTemplate(
            this.template,
            this.portalOutlet
        );
    }

    attachTemplateToDomHost() {
        this.viewRef = this.portal.attachTemplate(
            this.template,
            this.domHost
        );
    }

    disposeComponent() {
        this.portal.detach(this.componentRef);
    }

    disposeTemplate() {
        this.portal.detach(this.viewRef);
    }
}

const createHost = createHostFactory({
    component: EvoPortalOutletDirective,
    declarations: [
        PortalTestComponent,
    ],
    entryComponents: [
        PortalTestComponent,
    ],
    imports: [
        EvoPortalModule,
    ],
    providers: [EvoPortalService],
    host: TestHostComponent,
});

let host: SpectatorHost<EvoPortalOutletDirective, TestHostComponent>;
let hostEl: HTMLElement;
let hostComponent: TestHostComponent;

describe('EvoPortal', () => {
    beforeEach(waitForAsync(() => {
        host = createHost(`
            <div class="outlet" evoPortalOutlet></div>
            <div id="dom-portal-host"></div>

            <ng-template #template>
                <div class="tmp">just a div 😒</div>
            </ng-template>
        `);
        hostEl = host.hostComponent.element.nativeElement;
        hostComponent = host.hostComponent;
    }));

    it('should have outlet and DOM host', () => {
        const domHost = host.hostComponent.domHost;
        expect(hostEl.querySelector(domHost)).toBeTruthy();
        expect(host.hostComponent.portalOutlet).toBeTruthy();
    });

    it('should render/remove component to DOM host', fakeAsync(() => {
        hostComponent.attachToDomHost();
        host.detectChanges();
        tick(1);
        let portalTestEl = hostEl.querySelector('#dom-portal-host evo-portal-test');
        expect(portalTestEl).toBeTruthy();
        expect(hostComponent.componentRef.instance instanceof PortalTestComponent).toBeTruthy();

        hostComponent.disposeComponent();
        host.detectChanges();
        portalTestEl = hostEl.querySelector('#dom-portal-host evo-portal-test');
        expect(portalTestEl).toBeFalsy();
    }));

    it('should render/remove component to outlet', fakeAsync(() => {
        hostComponent.attachToOutlet();
        host.detectChanges();
        tick(1);
        let portalTestEl = hostEl.querySelector('.outlet + evo-portal-test');
        expect(portalTestEl).toBeTruthy();
        expect(hostComponent.componentRef.instance instanceof PortalTestComponent).toBeTruthy();

        hostComponent.disposeComponent();
        host.detectChanges();
        portalTestEl = hostEl.querySelector('.outlet + evo-portal-test');
        expect(portalTestEl).toBeFalsy();
    }));

    it('should render/remove template to outlet', fakeAsync(() => {
        hostComponent.attachTemplateToOutlet();
        host.detectChanges();
        tick(1);
        let templateEl = hostEl.querySelector('.outlet + .tmp');
        expect(templateEl).toBeTruthy();
        expect(hostComponent.viewRef).toBeTruthy();

        hostComponent.disposeTemplate();
        host.detectChanges();
        templateEl = hostEl.querySelector('.outlet + .tmp');
        expect(templateEl).toBeFalsy();
    }));

    it('should render/remove template to DOM host', fakeAsync(() => {
        hostComponent.attachTemplateToDomHost();
        host.detectChanges();
        tick(1);
        let portalTestEl = hostEl.querySelector('#dom-portal-host .tmp');
        expect(portalTestEl).toBeTruthy();
        expect(hostComponent.viewRef).toBeTruthy();

        hostComponent.disposeTemplate();
        host.detectChanges();
        portalTestEl = hostEl.querySelector('#dom-portal-host .tmp');
        expect(portalTestEl).toBeFalsy();
    }));
});
