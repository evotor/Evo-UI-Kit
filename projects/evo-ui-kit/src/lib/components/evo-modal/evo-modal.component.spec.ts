import { async } from '@angular/core/testing';
import { createHostComponentFactory, SpectatorWithHost } from '@netbasal/spectator';
import { EvoModalComponent } from './index';
import { Component, ViewChild, ElementRef, Provider } from '@angular/core';
import { skip, tap } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';
import { EvoModalService } from './evo-modal.service';
import { EvoButtonComponent } from '../evo-button';
import { EvoUiClassDirective } from '../../directives/';

const id = 'accept';
const acceptText = 'Accept';
const declineText = 'Cancel';
const modalContentText = 'Some modal text';
const modalServiceInstance = new EvoModalService();
const modalServiceProvider: Provider = {
    provide: EvoModalService,
    useValue: modalServiceInstance
};

@Component({selector: 'evo-host-component', template: ''})
class TestHostComponent {
    id = id;
    acceptText = acceptText;
    declineText = declineText;
    modalContentText = modalContentText;
    @ViewChild(EvoModalComponent, {static: true}) modalComponent: EvoModalComponent;

    constructor(
        public modalService: EvoModalService,
        public element: ElementRef,
    ) {
    }

    open() {
        this.modalService.open(this.id);
    }
}

let host: SpectatorWithHost<EvoModalComponent, TestHostComponent>;
let modalComponent: EvoModalComponent;
let openBtnEl: HTMLElement;
const createHost = createHostComponentFactory({
    component: EvoModalComponent,
    declarations: [
        EvoModalComponent,
        EvoButtonComponent,
        EvoUiClassDirective,
    ],
    providers: [modalServiceProvider],
    host: TestHostComponent,
    componentProviders: [modalServiceProvider]
});

const openModal = () => {
    openBtnEl.dispatchEvent(new MouseEvent('click'));
    host.detectChanges();
};

describe('EvoModalComponent', () => {

    beforeEach(async(() => {
        host = createHost(`
        <evo-modal [declineText]="declineText" [acceptText]="acceptText" [id]="id">
            <p class="modal-content">{{modalContentText}}</p>
        </evo-modal>
        <button evo-button class="open-btn" (click)="open()">Open</button>
        `);
        modalComponent = host.hostComponent.modalComponent;
        openBtnEl = host.hostComponent.element.nativeElement.querySelector('.open-btn');
    }));

    it('should create', () => {
        expect(modalComponent).toBeTruthy();
    });

    it(`should have id = ${ id }, after construction`, () => {
        expect(modalComponent.id).toEqual(id);
    });

    it(`should be opened after click "Open" button & closed after click "${ declineText }" button`, () => {
        openModal();
        expect(host.query('.evo-modal')).toBeTruthy();
        host.click('.evo-modal__buttons .evo-modal__button:first-child');
        host.detectChanges();
        expect(host.query('.evo-modal')).toBeFalsy();
    });

    it(`should have buttons with specified text, after opening`, () => {
        openModal();
        expect(host.query('.evo-modal__buttons')).toBeTruthy();
        expect(host.query('.evo-modal__buttons-mobile')).toBeTruthy();
        expect(host.query('.evo-modal__buttons .evo-modal__button:first-child span').textContent).toEqual(declineText);
        expect(host.query('.evo-modal__buttons .evo-modal__button:last-child span').textContent).toEqual(acceptText);
        expect(host.query('.evo-modal__buttons-mobile .evo-modal__button:first-child span').textContent).toEqual(declineText);
        expect(host.query('.evo-modal__buttons-mobile .evo-modal__button:last-child span').textContent).toEqual(acceptText);
    });

    it(`should have specified content, after opening`, () => {
        openModal();
        expect(host.query('.modal-content')).toBeTruthy();
        expect(host.query('.modal-content').textContent).toEqual(modalContentText);
    });

    afterAll(() => {
        modalServiceInstance.close(id, false);
    });
});

describe('EvoModalService', () => {
    let modalService: EvoModalService;
    let subscription: Subscription;

    beforeEach(async(() => {
        host = createHost(`
        <evo-modal [declineText]="declineText" [acceptText]="acceptText" [id]="id"></evo-modal>`);
        modalService = host.hostComponent.modalService;
        modalService.close(id, false);
    }));

    afterEach(() => {
        if (subscription) {
            subscription.unsubscribe();
        }
    });

    it(`should return subject of EvoModalState`, () => {
        const events = modalService.getEventsSubscription(id);
        expect(events instanceof Subject).toBeTruthy();
        events.subscribe(evoModalState => {
            expect(evoModalState.hasOwnProperty('isOpen')).toBeTruthy();
        });
    });

    it(`should have registered modal with ${ id }, after construction`, () => {
        subscription = modalService.getEventsSubscription(id).pipe(
            skip(1),
            tap((evoModalState) => {
                expect(evoModalState.isOpen).toBeTruthy();
            })
        ).subscribe();
        modalService.open(id);
        host.detectChanges();
        expect(host.query('.evo-modal')).toBeTruthy();
    });

    it(`should unregister modal with ${ id } and throw error on attempt opening modal with this id`, () => {
        subscription = modalService.getEventsSubscription(id).pipe(
            skip(1),
            tap((evoModalState) => {
                expect(evoModalState.isOpen).toBeTruthy();
            })
        ).subscribe();
        modalService.unregister(id);
        try {
            modalService.open(id);
        } catch (error) {
            host.detectChanges();
            expect(error).toBeTruthy();
        }
    });
});

