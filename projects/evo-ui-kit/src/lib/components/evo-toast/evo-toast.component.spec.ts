import {fakeAsync, tick, waitForAsync} from '@angular/core/testing';

import {EvoToastComponent, EvoToastService, EvoToastTypes} from './index';
import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {createHostFactory, SpectatorHost} from '@ngneat/spectator';
import {EvoUiClassDirective} from '../../directives/';
import {EvoButtonComponent} from '../evo-button';
import {EvoIconModule} from '../evo-icon';
import {icons} from '../../../../icons';

const message = 'Message for toast';
let toastType = EvoToastTypes.DEFAULT;

@Component({
    selector: 'evo-toast-wrapper',
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class EvoToastWrapperComponent {
    toastType = toastType;
    message = message;
    @ViewChild(EvoToastComponent, {static: true}) evoToastComponent: EvoToastComponent;

    constructor(public evoToastService: EvoToastService, public element: ElementRef) {}

    showToast() {
        this.evoToastService.push({
            type: toastType,
            message: message,
        });
    }
}

let host: SpectatorHost<EvoToastComponent, EvoToastWrapperComponent>;
let evoToastComponent: EvoToastComponent;
let openBtnEl: HTMLElement;

const createHost = createHostFactory({
    component: EvoToastComponent,
    declarations: [EvoToastComponent, EvoUiClassDirective, EvoButtonComponent],
    imports: [FormsModule, ReactiveFormsModule, EvoIconModule.forRoot([...icons])],
    providers: [EvoToastService],
    host: EvoToastWrapperComponent,
});

const openToast = () => {
    openBtnEl.dispatchEvent(new MouseEvent('click'));
    host.detectChanges();
};

describe('EvoToastComponent', () => {
    let evoToastService: EvoToastService;

    beforeEach(
        waitForAsync(() => {
            host = createHost(`
          <button evoButton class="evo-toast-wrapper__button" (click)="showToast()">open toast</button>
          <evo-toast></evo-toast>
    `);
            evoToastComponent = host.hostComponent.evoToastComponent;
            openBtnEl = host.hostComponent.element.nativeElement.querySelector('.evo-toast-wrapper__button');
            evoToastService = host.hostComponent.evoToastService;
        }),
    );

    it('should create', () => {
        expect(evoToastComponent).toBeTruthy();
    });

    it('should set toast property and show toast element in the DOM after opening', () => {
        expect(host.query('.evo-toast__wrapper')).toBeFalsy();

        evoToastService.pushEvents.subscribe(() => {
            host.detectChanges();
            expect(evoToastComponent.toast).toBeTruthy();
            expect(host.query('.evo-toast__wrapper')).toBeTruthy();
        });

        openToast();
    });

    it('should display message passed from the wrapper component', () => {
        evoToastService.pushEvents.subscribe(() => {
            host.detectChanges();
            expect(host.query('.evo-toast__wrapper .evo-toast .evo-toast__message')).toBeTruthy();
            expect(host.query('.evo-toast__wrapper .evo-toast .evo-toast__message').textContent).toBe(message);
        });

        openToast();
    });

    it('should apply exact css class based on passed toast type', () => {
        evoToastService.pushEvents.subscribe((toast) => {
            host.detectChanges();
            expect(host.query('.evo-toast__wrapper .evo-toast')).toBeTruthy();
            expect(toast.type).toBe(toastType);
            expect(
                host.query('.evo-toast__wrapper .evo-toast').classList.contains(`evo-toast_${toastType}`),
            ).toBeTruthy();
            expect(
                host.query('.evo-toast__wrapper .evo-toast').classList.contains(`evo-toast_${EvoToastTypes.DEFAULT}`),
            ).toBeFalsy();
            expect(
                host.query('.evo-toast__wrapper .evo-toast').classList.contains(`evo-toast_${EvoToastTypes.DANGER}`),
            ).toBeFalsy();
        });

        toastType = EvoToastTypes.SUCCESS;
        openToast();
    });

    it('should set toast to null and remove element from the DOM when press close button', fakeAsync(() => {
        evoToastService.pushEvents.subscribe(() => {
            host.detectChanges();
            tick();
            expect(evoToastComponent.toast).toBeTruthy();
            expect(host.query('.evo-toast__wrapper')).toBeTruthy();

            host.click('.evo-toast__wrapper .evo-toast .evo-toast__close');

            expect(evoToastComponent.toast).toBeFalsy();
            expect(host.query('.evo-toast__wrapper')).toBeFalsy();
        });

        openToast();
    }));
});
