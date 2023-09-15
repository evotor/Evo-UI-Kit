import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Overlay, OverlayPositionBuilder, OverlayRef } from '@angular/cdk/overlay';
import { EvoTooltipService } from './evo-tooltip.service';
import { Component, ElementRef, Injector, TemplateRef, ViewChild } from '@angular/core';
import { EvoTooltipConfig } from '../interfaces/evo-tooltip-config';
import { EVO_TOOLTIP_POSITION } from '../enums/evo-tooltip-position';
import { EvoTooltipPositionType } from '../types/evo-tooltip-position-type';
import { EVO_TOOLTIP_CONFIG } from '../constants/evo-tooltip-config';
import { BehaviorSubject } from 'rxjs';
import { EvoTooltipComponent } from '../evo-tooltip.component';

@Component({
    template: `
        <div #button>button</div>
        <ng-template #content>
          <div>Template content</div>
        </ng-template>
  `
})
class TestComponent {
    @ViewChild('content', { static: true }) content: TemplateRef<HTMLElement>;
    @ViewChild('button', { static: true }) button: ElementRef<HTMLElement>;
}

describe('EvoTooltipService', () => {
    let service: EvoTooltipService;
    let fixture: ComponentFixture<TestComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, EvoTooltipComponent],
            providers: [
                EvoTooltipService,
                Overlay,
                OverlayPositionBuilder,
                Injector,
            ],
        });

        fixture = TestBed.createComponent(TestComponent);
        service = TestBed.inject(EvoTooltipService);
    }));

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('showTooltip', () => {
        let elementRef: ElementRef;
        let content: string | TemplateRef<HTMLElement>;
        let position: EvoTooltipPositionType;
        let config: EvoTooltipConfig;
        let targetElement: EventTarget | null;

        beforeEach(() => {
            elementRef = fixture.componentInstance.button;
            content = 'Tooltip content';
            position = EVO_TOOLTIP_POSITION.BOTTOM;
            config = EVO_TOOLTIP_CONFIG;
            targetElement = null;
        });

        it('should create overlay and attach tooltip component', fakeAsync(() => {
            const createOverlaySpy = spyOn(service, 'createOverlay').and.callThrough();
            const createPortalSpy = spyOn(service, 'createPortal').and.callThrough();

            service.showTooltip(elementRef, content, position, config, targetElement);

            tick(100);

            expect(createOverlaySpy).toHaveBeenCalledWith(elementRef, position);
            expect(createPortalSpy).toHaveBeenCalled();
        }));

        it('should set content, position, and config', () => {
            const setContentSpy = spyOn(service, 'setContent').and.callThrough();
            const setPositionSpy = spyOn(service, 'setPosition').and.callThrough();
            const setConfigSpy = spyOn(service, 'setConfig').and.callThrough();

            service.showTooltip(elementRef, content, position, config, targetElement);

            expect(setContentSpy).toHaveBeenCalledWith(content);
            expect(setPositionSpy).toHaveBeenCalledWith(position);
            expect(setConfigSpy).toHaveBeenCalledWith(config);
        });

        it('should set parentRef and targetElement', () => {
            service.showTooltip(elementRef, content, position, config, targetElement);

            expect(service['parentRef']).toBe(elementRef);
            expect(service['targetElement']).toBe(targetElement);
        });

        it('should initialize subscriptions', () => {
            const initSubscriptionsSpy = spyOn(service, 'initSubscriptions').and.callThrough();

            service.showTooltip(elementRef, content, position, config, targetElement);

            expect(initSubscriptionsSpy).toHaveBeenCalled();
        });
    });

    describe('hideTooltip', () => {
        it('should destroy tooltip component and detach overlay', () => {
            const destroySpy = jasmine.createSpyObj('ComponentRef', ['destroy']);
            const detachSpy = jasmine.createSpyObj('OverlayRef', ['detach']);
            service['tooltipComponentRef'] = destroySpy;
            service['overlayRef'] = detachSpy;

            service.hideTooltip();

            expect(destroySpy.destroy).toHaveBeenCalled();
            expect(detachSpy.detach).toHaveBeenCalled();
            expect(service['tooltipComponentRef']).toBeNull();
        });
    });

    describe('hasAttached', () => {
        it('should return true if overlayRef has attached', () => {
            service['overlayRef'] = {
                hasAttached: jasmine.createSpy('hasAttached').and.returnValue(true),
            } as unknown as OverlayRef;

            const result = service.hasAttached;

            expect(result).toBeTruthy();
        });

        it('should return false if overlayRef does not have attached', () => {
            service['overlayRef'] = {
                hasAttached: jasmine.createSpy('hasAttached').and.returnValue(false),
            } as unknown as OverlayRef;

            const result = service.hasAttached;

            expect(result).toBeFalsy();
        });

        it('should return false if overlayRef is null', () => {
            service['overlayRef'] = null;

            const result = service.hasAttached;

            expect(result).toBeFalsy();
        });
    });

    describe('setContent', () => {
        it('should set string content', () => {
            const content = 'Tooltip content';
            const stringContentSubject$ = service['stringContentSubject$'] as BehaviorSubject<string | null>;

            service['setContent'](content);

            expect(stringContentSubject$.value).toBe(content);
        });

        it('should set template content', () => {
            const templateRefMock = fixture.componentInstance.content;
            const templateContentSubject$ = service['templateContentSubject$'] as BehaviorSubject<TemplateRef<HTMLElement> | null>;

            service.setContent(templateRefMock);

            console.log(templateRefMock);
            console.log('instanceof', templateRefMock instanceof TemplateRef);

            expect(templateContentSubject$.value).toEqual(templateRefMock);
        });
    });

    describe('setPosition', () => {
        it('should set position', () => {
            const position: EvoTooltipPositionType = EVO_TOOLTIP_POSITION.BOTTOM;
            const positionSubject$ = service['positionSubject$'] as BehaviorSubject<EvoTooltipPositionType>;

            service['setPosition'](position);

            expect(positionSubject$.value).toBe(position);
        });
    });

    describe('setConfig', () => {
        it('should set config', () => {
            const config: EvoTooltipConfig = { hideDelay: 500 };
            const configSubject$ = service['configSubject$'] as BehaviorSubject<EvoTooltipConfig>;

            service['setConfig'](config);

            expect(configSubject$.value).toBe(config);
        });
    });
});
