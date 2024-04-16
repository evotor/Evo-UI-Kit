import {ComponentFixture, TestBed, waitForAsync} from '@angular/core/testing';
import {EvoNoteComponent} from './evo-note.component';
import {EvoNoteType} from './types/evo-note-type';
import {ChangeDetectionStrategy} from '@angular/core';

describe('EvoNoteComponent', () => {
    let component: EvoNoteComponent;
    let fixture: ComponentFixture<EvoNoteComponent>;
    let evoNoteEl: HTMLElement;

    const evoNoteTypesList: EvoNoteType[] = ['danger', 'warning', 'info', 'success'];

    const getCloseEl: () => HTMLElement = () => evoNoteEl.querySelector('.evo-note__close');

    const getElTypeClass = (type: EvoNoteType) => `evo-note_type-${type}`;

    beforeEach(
        waitForAsync(() => {
            TestBed.configureTestingModule({
                declarations: [EvoNoteComponent],
            })
                .overrideComponent(EvoNoteComponent, {
                    set: {changeDetection: ChangeDetectionStrategy.Default},
                })
                .compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(EvoNoteComponent);
        component = fixture.componentInstance;
        evoNoteEl = fixture.debugElement.nativeElement.querySelector('.evo-note');
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should show closing cross element when component input "closable" = true', () => {
        expect(getCloseEl()).toBeFalsy();
        component.closable = true;
        fixture.detectChanges();
        expect(getCloseEl()).toBeTruthy();
    });

    it('should emit close event when clicking on cross element', () => {
        component.closable = true;
        fixture.detectChanges();
        spyOn(component.close, 'emit');

        const closingCrossEl = getCloseEl();
        closingCrossEl.dispatchEvent(new MouseEvent('click'));
        expect(component.close.emit).toHaveBeenCalled();
    });

    it('Should apply exact css styles when defining component input "type"', () => {
        const checkElClasses = (currentType: EvoNoteType) => {
            component.type = currentType;
            fixture.detectChanges();
            expect(evoNoteEl.classList.contains(getElTypeClass(currentType))).toBeTruthy();
            evoNoteTypesList
                .filter((type) => type !== currentType)
                .forEach((type) => {
                    expect(evoNoteEl.classList.contains(getElTypeClass(type))).toBeFalsy();
                });
        };

        evoNoteTypesList.forEach((type) => checkElClasses(type));
    });
});
