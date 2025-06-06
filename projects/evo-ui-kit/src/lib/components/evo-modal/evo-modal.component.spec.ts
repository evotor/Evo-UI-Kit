import {fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';
import {createHostFactory, dispatchKeyboardEvent, SpectatorHost} from '@ngneat/spectator';
import {EvoModalComponent} from './index';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {skip, tap} from 'rxjs/operators';
import {Subject, Subscription, timer} from 'rxjs';
import {EvoModalService} from './evo-modal.service';
import {EvoButtonComponent} from '../evo-button';
import {EvoUiClassDirective} from '../../directives';
import {EvoIconComponent} from '../evo-icon';
import {provideModal} from './evo-modal.provider';

const id = 'accept';
const acceptText = 'Accept';
const declineText = 'Cancel';
const modalContentText = 'Some modal text';
const titleText = 'This is a modal window title';

@Component({selector: 'evo-host-component', template: ''})
class TestHostComponent {
    @ViewChild(EvoModalComponent, {static: true}) modalComponent: EvoModalComponent;

    id = id;
    acceptText = acceptText;
    declineText = declineText;
    modalContentText = modalContentText;
    titleText = titleText;

    constructor(
        public modalService: EvoModalService,
        public element: ElementRef,
    ) {}

    asyncAccept() {}

    open() {
        this.modalService.open(this.id);
    }
}

let host: SpectatorHost<EvoModalComponent, TestHostComponent>;
let modalComponent: EvoModalComponent;
let openBtnEl: HTMLElement;
const createHost = createHostFactory({
    component: EvoModalComponent,
    imports: [EvoIconComponent, EvoModalComponent, EvoButtonComponent, EvoUiClassDirective],
    providers: [provideModal()],
    host: TestHostComponent,
});

const openModal = () => {
    openBtnEl.dispatchEvent(new MouseEvent('click'));
    host.detectChanges();
};

describe('EvoModalComponent', () => {
    beforeEach(waitForAsync(() => {
        host = createHost(`
        <evo-modal [declineText]="declineText" [acceptText]="acceptText" [titleText]="titleText" [id]="id" [asyncAccept]="asyncAccept">
            <evo-icon shape="alert"></evo-icon>
            <p class="modal-content">{{modalContentText}}</p>
        </evo-modal>
        <button evoButton class="open-btn" (click)="open()">Open</button>
        `);
        modalComponent = host.hostComponent.modalComponent;
        openBtnEl = host.hostComponent.element.nativeElement.querySelector('.open-btn');
    }));

    it('should create', () => {
        expect(modalComponent).toBeTruthy();
    });

    it(`should have id = ${id}, after construction`, () => {
        expect(modalComponent.id()).toEqual(id);
    });

    it(`should be opened after click "Open" button & closed after click "${declineText}" button`, () => {
        openModal();
        expect(host.query('.evo-modal')).toBeTruthy();
        host.click('.evo-modal__button_decline');
        host.detectChanges();
        expect(host.query('.evo-modal')).toBeFalsy();
    });

    it(`should have buttons with specified text, after opening`, () => {
        openModal();
        expect(host.query('evo-modal-buttons')).toBeTruthy();
        expect(host.query('.evo-modal__button_decline').textContent.trim()).toEqual(declineText);
        expect(host.query('.evo-modal__button_accept').textContent.trim()).toEqual(acceptText);
    });

    it(`should have specified content, after opening`, () => {
        openModal();
        expect(host.query('.modal-content')).toBeTruthy();
        expect(host.query('.modal-content').textContent).toEqual(modalContentText);
    });

    it(`should have title`, () => {
        openModal();
        expect(host.query('.evo-modal__title')).toBeTruthy();
        expect(host.query('.evo-modal__title').textContent).toEqual(titleText);
    });

    it(`should have icon`, () => {
        openModal();
        expect(host.query('.evo-modal__icon evo-icon')).toBeTruthy();
    });

    it(`should hide on background click`, () => {
        expect(host.query('.evo-modal')).toBeFalsy();
        openModal();
        expect(host.query('.evo-modal')).toBeTruthy();
        host.query('.evo-modal__background').dispatchEvent(new MouseEvent('mousedown'));
        host.detectChanges();
        expect(host.query('.evo-modal')).toBeFalsy();
    });

    it(`should have only accept button if declineText is not set or equals to ''`, () => {
        host.hostComponent.declineText = '';
        host.detectChanges();
        expect(host.query('.evo-modal')).toBeFalsy();
        openModal();
        expect(host.query('.evo-modal')).toBeTruthy();
        expect(host.query('.evo-modal__button_accept')).toBeTruthy();
        expect(host.query('.evo-modal__button_decline')).toBeFalsy();
    });

    it(`should NOT close modal on background click if declineText is not set or equals to ''`, () => {
        host.hostComponent.declineText = '';
        host.detectChanges();
        expect(host.query('.evo-modal')).toBeFalsy();
        openModal();
        expect(host.query('.evo-modal')).toBeTruthy();
        host.click('.evo-modal__background');
        host.detectChanges();
        expect(host.query('.evo-modal')).toBeTruthy();
    });

    it(`should close modal on ESC click`, () => {
        expect(host.query('.evo-modal')).toBeFalsy();
        openModal();
        host.detectChanges();
        expect(host.query('.evo-modal')).toBeTruthy();
        dispatchKeyboardEvent(document.body, 'keydown', 'Escape');
        host.detectChanges();
        expect(host.query('.evo-modal')).toBeFalsy();
    });

    it(`should show loading on accept button click and disable decline button`, fakeAsync(() => {
        host.hostComponent.asyncAccept = () => {
            return timer(1);
        };
        host.detectChanges();
        openModal();
        expect(host.query('.evo-modal')).toBeTruthy();
        host.click('.evo-modal__button_accept');
        host.detectChanges();
        tick(1000);
        expect(host.query('.evo-modal__button_accept').querySelector('.evo-button__loader')).toBeTruthy();
        expect(host.query('.evo-modal__button_decline').querySelector('.evo-button_is-disabled')).toBeTruthy();
        tick(1);
    }));

    it(`should close modal after async accept`, fakeAsync(() => {
        host.hostComponent.asyncAccept = () => {
            return timer(1);
        };
        host.detectChanges();
        openModal();
        expect(host.query('.evo-modal')).toBeTruthy();
        host.click('.evo-modal__button_accept');
        tick(1);
        host.detectChanges();
        expect(host.query('.evo-modal')).toBeFalsy();
    }));

    it(`should NOT close modal on disabled decline click while async accept is loading`, fakeAsync(() => {
        host.hostComponent.asyncAccept = () => {
            return timer(1);
        };
        host.detectChanges();
        openModal();
        expect(host.query('.evo-modal')).toBeTruthy();
        host.click('.evo-modal__button_accept');
        host.click('.evo-modal__button_decline');
        host.detectChanges();
        expect(host.query('.evo-modal')).toBeTruthy();
        tick(1);
    }));

    afterAll(() => {
        TestBed.inject(EvoModalService).close(id, false);
    });
});

describe('EvoModalService', () => {
    let modalService: EvoModalService;
    let subscription: Subscription;

    beforeEach(waitForAsync(() => {
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
        events.subscribe((evoModalState) => {
            expect(evoModalState.hasOwnProperty('isOpen')).toBeTruthy();
        });
    });

    it(`should have registered modal with ${id}, after construction`, () => {
        subscription = modalService
            .getEventsSubscription(id)
            .pipe(
                skip(1),
                tap((evoModalState) => {
                    expect(evoModalState.isOpen).toBeTruthy();
                }),
            )
            .subscribe();
        modalService.open(id);
        host.detectChanges();
        expect(host.query('.evo-modal')).toBeTruthy();
    });

    it(`should unregister modal with ${id} and throw error on attempt opening modal with this id`, () => {
        subscription = modalService
            .getEventsSubscription(id)
            .pipe(
                skip(1),
                tap((evoModalState) => {
                    expect(evoModalState.isOpen).toBeTruthy();
                }),
            )
            .subscribe();
        modalService.unregister(id);
        try {
            modalService.open(id);
        } catch (error) {
            host.detectChanges();
            expect(error).toBeTruthy();
        }
    });
});
