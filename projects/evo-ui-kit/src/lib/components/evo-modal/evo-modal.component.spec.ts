import { async } from '@angular/core/testing';
import { createHostComponentFactory, SpectatorWithHost } from '@netbasal/spectator';
import { EvoModalComponent } from './evo-modal.component';
import { EvoButtonComponent, EvoUiClassDirective, EvoModalService } from '../../evo-ui-kit.module';
import { Component, ViewChild, ElementRef } from '@angular/core';

const id = 'accept';
const acceptText = 'Accept';
const declineText = 'Cancel';
const modalContentText = 'Some modal text';

@Component({ selector: 'evo-host-component', template: `` })
class TestHostComponent {
    id = id;
    acceptText = acceptText;
    declineText = declineText;
    modalContentText = modalContentText;
    @ViewChild(EvoModalComponent) modalComponent: EvoModalComponent;
    constructor(
        private modalService: EvoModalService,
        public element: ElementRef,
    ) {}

    open() {
        this.modalService.open(this.id);
    }
}

describe('EvoModalComponent', () => {
    let host: SpectatorWithHost<EvoModalComponent, TestHostComponent>;
    let modalComponent: EvoModalComponent;
    let openBtnEl: HTMLElement;
    const createHost = createHostComponentFactory({
        component: EvoModalComponent,
        declarations: [ EvoModalComponent, EvoButtonComponent, EvoUiClassDirective ],
        providers: [ EvoModalService ],
        host: TestHostComponent,
    });

    const openModal = () => {
        openBtnEl.dispatchEvent(new MouseEvent('click'));
        host.detectChanges();
    };

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

    it(`should have id = ${id}, after construction`, () => {
        expect(modalComponent.id).toEqual(id);
    });

    it(`should be opened after click "Open" button & closed after click "${declineText}" button`, () => {
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
});
