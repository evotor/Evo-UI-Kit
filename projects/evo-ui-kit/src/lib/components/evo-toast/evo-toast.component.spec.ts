import { async, fakeAsync, tick } from '@angular/core/testing';

import {
    EvoToastService,
    EvoToastComponent,
    EvoToastTypes
} from './index';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { createHostComponentFactory, SpectatorWithHost } from '@netbasal/spectator';
import { EvoUiClassDirective } from '../../directives/';
import { EvoButtonComponent } from '../evo-button';

const message = 'Message for toast';
const messageForce = 'Force Toast';
let toastType = EvoToastTypes.DEFAULT;

@Component({
    selector: 'evo-toast-wrapper',
    template: '',
})
class EvoToastWrapperComponent {
    toastType = toastType;
    message = message;
    messageSkipQueue = messageForce;
    @ViewChild(EvoToastComponent) evoToastComponent: EvoToastComponent;

    constructor(
        public evoToastService: EvoToastService,
        public element: ElementRef,
    ) {
    }

    showToast(force = false) {
        this.evoToastService.push({
            type: toastType,
            message: force ? messageForce : message,
        });
        if (force) {
            this.evoToastService.force();
        }
    }
}

let host: SpectatorWithHost<EvoToastComponent, EvoToastWrapperComponent>;
let evoToastComponent: EvoToastComponent;
let openBtnEl: HTMLElement;
let forceBtnEl: HTMLElement;

const createHost = createHostComponentFactory({
    component: EvoToastComponent,
    declarations: [
        EvoToastComponent,
        EvoUiClassDirective,
        EvoButtonComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
    ],
    providers: [
        EvoToastService,
    ],
    host: EvoToastWrapperComponent,
});

const openToast = () => {
    openBtnEl.dispatchEvent(new MouseEvent('click'));
    host.detectChanges();
};

describe('EvoToastComponent', () => {
    let evoToastService: EvoToastService;

    beforeEach(async(() => {
        host = createHost(`
            <evo-button class="evo-toast-wrapper__button" (click)="showToast()">open toast</evo-button>
                <evo-button class="evo-toast-wrapper__button evo-toast-wrapper__button_force" (click)="showToast(true)">
                open toast force
                </evo-button>
            <evo-toast></evo-toast>
        `);
        const nativeElement = host.hostComponent.element.nativeElement;
        evoToastComponent = host.hostComponent.evoToastComponent;
        openBtnEl = nativeElement.querySelector('.evo-toast-wrapper__button');
        forceBtnEl = nativeElement.querySelector('.evo-toast-wrapper__button_force');
        evoToastService = host.hostComponent.evoToastService;
    }));

    it('should create', () => {
        expect(evoToastComponent).toBeTruthy();
    });

    it('should set toast property and show toast element in the DOM after opening', () => {
        expect(host.query('.evo-toast__wrapper')).toBeFalsy();

        evoToastService.pushEvents
            .subscribe(() => {
                host.detectChanges();
                expect(evoToastComponent.toast).toBeTruthy();
                expect(host.query('.evo-toast__wrapper')).toBeTruthy();
            });

        openToast();
    });

    it('should display message passed from the wrapper component', () => {
        evoToastService.pushEvents
            .subscribe(() => {
                host.detectChanges();
                expect(host.query('.evo-toast__wrapper .evo-toast .evo-toast__message')).toBeTruthy();
                expect(host.query('.evo-toast__wrapper .evo-toast .evo-toast__message').textContent).toBe(message);
            });

        openToast();
    });

    it('should apply exact css class based on passed toast type', () => {
        evoToastService.pushEvents
            .subscribe((toast) => {
                host.detectChanges();
                expect(host.query('.evo-toast__wrapper .evo-toast')).toBeTruthy();
                expect(toast.type).toBe(toastType);
                expect(host.query('.evo-toast__wrapper .evo-toast').classList.contains(`evo-toast_${ toastType }`)).toBeTruthy();
                expect(host.query('.evo-toast__wrapper .evo-toast').classList.contains(`evo-toast_${ EvoToastTypes.DEFAULT }`)).toBeFalsy();
                expect(host.query('.evo-toast__wrapper .evo-toast').classList.contains(`evo-toast_${ EvoToastTypes.DANGER }`)).toBeFalsy();
            });

        toastType = EvoToastTypes.SUCCESS;
        openToast();
    });

    it('should set toast to null and remove element from the DOM when press close button', () => {
        evoToastService.pushEvents
            .subscribe((toast) => {
                host.detectChanges();
                expect(evoToastComponent.toast).toBeTruthy();
                expect(host.query('.evo-toast__wrapper')).toBeTruthy();
                host.click('.evo-toast__wrapper .evo-toast .evo-toast__close');
                host.detectChanges();
                expect(evoToastComponent.toast).toBeFalsy();
                expect(host.query('.evo-toast__wrapper')).toBeFalsy();
            });

        openToast();
    });

    it('should skip queue and show latest toast immediately when `force` method executed', () => {
        evoToastService.pushEvents
            .subscribe(fakeAsync((toast) => {
                host.detectChanges();
                expect(host.query('.evo-toast__wrapper .evo-toast .evo-toast__message')).toBeTruthy();
                expect(host.query('.evo-toast__wrapper .evo-toast .evo-toast__message').textContent).toBe(message);
                tick(1000);
                forceBtnEl.dispatchEvent(new MouseEvent('click'));
                host.detectChanges();
                tick(1000);
                expect(host.query('.evo-toast__wrapper .evo-toast .evo-toast__message')).toBeTruthy();
                expect(host.query('.evo-toast__wrapper .evo-toast .evo-toast__message').textContent).toBe(messageForce);
                expect(true).toBeTruthy();
            }));

        openToast();
    });
});
