import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EvoNoteComponent } from './evo-note.component';

describe('EvoNoteComponent', () => {
    let component: EvoNoteComponent;
    let fixture: ComponentFixture<EvoNoteComponent>;
    let evoAlertEl: HTMLElement;

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
        evoAlertEl = fixture.nativeElement.querySelector('.evo-note');
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
});
