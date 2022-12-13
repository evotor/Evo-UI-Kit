import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EvoNoteComponent, EvoNoteTypes } from './evo-note.component';

describe('EvoNoteComponent', () => {
    let component: EvoNoteComponent;
    let fixture: ComponentFixture<EvoNoteComponent>;
    let evoNoteEl: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                EvoNoteComponent,
            ],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoNoteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        evoNoteEl = fixture.nativeElement.querySelector('.evo-note');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show closing cross element when component input "closable" = true', () => {
        expect(fixture.nativeElement.querySelector('.evo-note__close')).toBeFalsy();
        component.closable = true;
        fixture.detectChanges();
        expect(fixture.nativeElement.querySelector('.evo-note__close')).toBeTruthy();
    });

    it('should emit close event when clicking on cross element', () => {
        component.closable = true;
        fixture.detectChanges();
        spyOn(component.close, 'emit');

        const closingCrossEl = fixture.nativeElement.querySelector('.evo-note__close');
        closingCrossEl.dispatchEvent(new MouseEvent('click'));
        expect(component.close.emit).toHaveBeenCalled();
    });

    it('Should apply exact css styles when defining component input "type"', () => {
        component.type = EvoNoteTypes.success;
        fixture.detectChanges();
        expect(evoNoteEl.classList.contains('evo-note_success')).toBeTruthy();
        expect(evoNoteEl.classList.contains('evo-note_danger')).toBeFalsy();
        expect(evoNoteEl.classList.contains('evo-note_warning')).toBeFalsy();
        expect(evoNoteEl.classList.contains('evo-note_info')).toBeFalsy();

        component.type = EvoNoteTypes.danger;
        fixture.detectChanges();
        expect(evoNoteEl.classList.contains('evo-note_danger')).toBeTruthy();
        expect(evoNoteEl.classList.contains('evo-note_success')).toBeFalsy();
        expect(evoNoteEl.classList.contains('evo-note_warning')).toBeFalsy();
        expect(evoNoteEl.classList.contains('evo-note_info')).toBeFalsy();

        component.type = EvoNoteTypes.warning;
        fixture.detectChanges();
        expect(evoNoteEl.classList.contains('evo-note_warning')).toBeTruthy();
        expect(evoNoteEl.classList.contains('evo-note_danger')).toBeFalsy();
        expect(evoNoteEl.classList.contains('evo-note_success')).toBeFalsy();
        expect(evoNoteEl.classList.contains('evo-note_info')).toBeFalsy();

        component.type = EvoNoteTypes.info;
        fixture.detectChanges();
        expect(evoNoteEl.classList.contains('evo-note_info')).toBeTruthy();
        expect(evoNoteEl.classList.contains('evo-note_danger')).toBeFalsy();
        expect(evoNoteEl.classList.contains('evo-note_success')).toBeFalsy();
        expect(evoNoteEl.classList.contains('evo-note_warning')).toBeFalsy();
    });

});
