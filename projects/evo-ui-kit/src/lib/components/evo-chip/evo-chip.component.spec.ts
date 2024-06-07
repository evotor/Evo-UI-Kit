import {createHostFactory, SpectatorHost} from '@ngneat/spectator';
import {EvoChipComponent, EvoChipTheme, EvoChipType} from './evo-chip.component';
import {FormsModule, ReactiveFormsModule, UntypedFormArray, UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {Component, QueryList, ViewChildren} from '@angular/core';
import {EvoUiClassDirective} from '../../directives';
import {fakeAsync, tick} from '@angular/core/testing';
import {EvoIconModule} from '../evo-icon';
import {icons} from '../../../../icons';

@Component({selector: 'evo-host-component', template: ''})
class TestHostComponent {
    @ViewChildren(EvoChipComponent) evoChipComponents: QueryList<EvoChipComponent>;

    // eslint-disable-next-line
    values: any[] = ['1', 1, {test: 'val'}, [1], true];

    form = new UntypedFormGroup({
        checkboxes: new UntypedFormArray(this.values.map((value) => new UntypedFormControl(value))),
        radios: new UntypedFormControl(''),
    });

    onCloseClick(e: Event) {}
}

const createHost = createHostFactory({
    component: EvoChipComponent,
    declarations: [
        EvoUiClassDirective,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        EvoIconModule.forRoot([...icons]),
    ],
    host: TestHostComponent,
});

describe('EvoChipsComponent', () => {

    let host: SpectatorHost<EvoChipComponent, TestHostComponent>;
    let evoChipComponents: QueryList<EvoChipComponent>;

    const createHostByTemplate = (template) => {
        host = createHost(template);
        evoChipComponents = host.hostComponent.evoChipComponents;
    };

    it('should create', () => {
        createHostByTemplate(`
            <evo-chip name="myChip" value="1">Chip 1</evo-chip>
            <evo-chip name="myChip" value="2">Chip 2</evo-chip>
            <evo-chip name="myChip" value="3">Chip 3</evo-chip>
        `);
        evoChipComponents.forEach((chip: EvoChipComponent) => {
            expect(chip).toBeTruthy();
        });
        host.detectChanges();
    });

    it('should set default type and theme if they are not specified', () => {
        createHostByTemplate(`
            <evo-chip name="myChip" value="1">Chip 1</evo-chip>
            <evo-chip name="myChip" value="2">Chip 2</evo-chip>
            <evo-chip name="myChip" value="3">Chip 3</evo-chip>
        `);
        evoChipComponents.forEach((chip: EvoChipComponent) => {
            expect(chip.type).toEqual(EvoChipType.radio);
            expect(chip.theme).toEqual(EvoChipTheme.grey);
        });
    });

    it('should create all evo-chip components after creation', () => {
        createHostByTemplate(`
            <evo-chip name="myChip" value="1">Chip 1</evo-chip>
            <evo-chip name="myChip" value="2">Chip 2</evo-chip>
            <evo-chip name="myChip" value="3">Chip 3</evo-chip>
        `);
        expect(evoChipComponents.length).toEqual(3);
    });

    it('should set right type and theme if they passed through bindings', () => {
        createHostByTemplate(`
            <evo-chip type="checkbox" name="myChip" value="1" theme="white">Chip 1</evo-chip>
            <evo-chip type="radio" name="myChip" value="1" theme="grey">Chip w</evo-chip>
        `);

        evoChipComponents.forEach((chip: EvoChipComponent, index: number) => {
            if (index === 1) {
                expect(chip.type).toEqual(EvoChipType.radio);
                expect(chip.theme).toEqual(EvoChipTheme.grey);
            } else {
                expect(chip.type).toEqual(EvoChipType.checkbox);
                expect(chip.theme).toEqual(EvoChipTheme.white);
            }
        });
    });

    it('should have input with type radio if type=radio was passed', () => {
        createHostByTemplate(`
            <evo-chip type="radio" name="myChip" value="1">Chip 1</evo-chip>
        `);
        const inputElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip input');
        expect(inputElement).toBeTruthy();
        expect(inputElement.type).toEqual('radio');
    });

    it('should have input with type checkbox if type=checkbox was passed', () => {
        createHostByTemplate(`
            <evo-chip type="checkbox" name="myChip" value="1">Chip 1</evo-chip>
        `);
        const inputElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip input');
        expect(inputElement).toBeTruthy();
        expect(inputElement.type).toEqual('checkbox');
    });

    it('should NOT have input if type=label was passed', () => {
        createHostByTemplate(`
            <evo-chip type="label" name="myChip" value="1">Chip 1</evo-chip>
        `);
        const inputElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip input');
        expect(inputElement === null).toBeTruthy();
    });

    it('should have class chip_theme-grey when theme is not passed', () => {
        createHostByTemplate(`
            <evo-chip name="myChip" value="1">Chip 1</evo-chip>
        `);
        const chipWrapperElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip');
        expect(chipWrapperElement).toHaveClass('chip_theme-grey');
    });

    it('should have class chip_theme-white when theme is passed', () => {
        createHostByTemplate(`
            <evo-chip theme="white" name="myChip" value="1">Chip 1</evo-chip>
        `);
        const chipWrapperElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip');
        expect(chipWrapperElement).toHaveClass('chip_theme-white');
    });

    it('should have class chip_theme-grey when theme is passed', () => {
        createHostByTemplate(`
            <evo-chip theme="grey" name="myChip" value="1">Chip 1</evo-chip>
        `);
        const chipWrapperElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip');
        expect(chipWrapperElement).toHaveClass('chip_theme-grey');
    });

    it('should be disabled and non-clickable if disabled param is passed', fakeAsync(() => {
        createHostByTemplate(`
            <evo-chip theme="grey" name="myChip" value="1">ENABLED</evo-chip>
            <evo-chip theme="grey" name="myChip" value="2" type="checkbox">ENABLED</evo-chip>

            <evo-chip theme="grey" name="myChip" value="3" disabled>DISABLED</evo-chip>
            <evo-chip theme="grey" name="myChip" value="4" type="checkbox" disabled>DISABLED</evo-chip>
        `);

        tick();

        const chipElements = host.hostFixture.nativeElement.querySelectorAll('evo-chip');
        chipElements.forEach((chip: Element, index: number) => {
            const inputElement = chip.querySelector('.chip input') as HTMLInputElement;
            const isChipDisabled = index > 1;

            expect(inputElement).not.toBeChecked();
            if (isChipDisabled) {
                expect(inputElement).toHaveAttribute('disabled');
            } else {
                expect(inputElement).not.toHaveAttribute('disabled');
            }

            chip.querySelector('label').dispatchEvent(new MouseEvent('click'));

            if (isChipDisabled) {
                expect(inputElement).not.toBeChecked();
            } else {
                expect(inputElement).toBeChecked();
            }
        });
    }));

    it('should set value from value param for radio type', () => {
        createHostByTemplate(`
            <div>
                <evo-chip type="radio" *ngFor="let value of values" [value]="value">Radio binding</evo-chip>
            </div>
            <evo-chip>Fake</evo-chip>
        `);

        const chipElements = host.hostFixture.nativeElement.querySelectorAll('evo-chip');
        evoChipComponents.forEach((chip: EvoChipComponent, index: number) => {
            chipElements[index].querySelector('label').dispatchEvent(new MouseEvent('click'));
            host.detectChanges();
            expect(chip.value === host.hostComponent.values[index]).toBeTruthy();
        });
    });

    it('should set value on form.patchValue() for radio type ', () => {
        createHostByTemplate(`
            <div>
                <evo-chip type="radio" *ngFor="let value of values" [value]="value">Radio binding</evo-chip>
            </div>
            <evo-chip>Fake</evo-chip>
        `);

        evoChipComponents.forEach((chip: EvoChipComponent, index: number) => {
            host.hostComponent.form.patchValue({'radios': host.hostComponent.values[index]})
            host.detectChanges();
            expect(host.hostComponent.form.value.radios === host.hostComponent.values[index]).toBeTruthy();
        });
    });

    it('should set value on form.patchValue() for checkbox', () => {
        createHostByTemplate(`
            <div>
                <evo-chip type="radio" [formControl]="form.get('checkboxes').controls[0]" [value]="false">Checkbox binding</evo-chip>
            </div>
        `);

        host.hostComponent.form.patchValue({'checkboxes': [false]});
        host.detectChanges();
        expect(host.hostComponent.form.value.checkboxes[0] === false).toBeTruthy();
        host.hostComponent.form.patchValue({'checkboxes': [true]});
        host.detectChanges();
        expect(host.hostComponent.form.value.checkboxes[0] === true).toBeTruthy();
    });

    it('should have close button for label type', () => {
        createHostByTemplate(`
            <div>
                <evo-chip type="label" [closable]="true">Label</evo-chip>
            </div>
        `);

        host.detectChanges();
        const chipElements = host.hostFixture.nativeElement.querySelectorAll('evo-chip');
        chipElements.forEach((chip: HTMLElement, index: number) => {
            expect(chip.querySelector('.chip__close') === null).toBeFalsy();
        });
    });

    it('should have counter for label type if counter is set, but close button should be hidden', () => {
        createHostByTemplate(`
            <div>
                <evo-chip type="label" [counter]="10">Label</evo-chip>
            </div>
        `);

        host.detectChanges();
        const chipElements = host.hostFixture.nativeElement.querySelectorAll('evo-chip');
        chipElements.forEach((chip: HTMLElement, index: number) => {
            expect(chip.querySelector('.chip__close') === null).toBeTruthy();
            expect(chip.querySelector('.chip__counter') === null).toBeFalsy();
        });
    });

    it('should have close button for label type even if counter is set, but counter should be hidden', () => {
        createHostByTemplate(`
            <div>
                <evo-chip type="label" [closable]="true" [counter]="10">Label</evo-chip>
            </div>
        `);

        host.detectChanges();
        const chipElements = host.hostFixture.nativeElement.querySelectorAll('evo-chip');
        chipElements.forEach((chip: HTMLElement, index: number) => {
            expect(chip.querySelector('.chip__close') === null).toBeFalsy();
            expect(chip.querySelector('.chip__counter') === null).toBeTruthy();
        });
    });

    it('should pass click event on close click for label type', fakeAsync(() => {
        createHostByTemplate(`
            <div>
                <evo-chip type="label" [closable]="true" (close)="onCloseClick($event)">Label</evo-chip>
            </div>
        `);

        spyOn(host.hostComponent, 'onCloseClick');

        host.detectChanges();
        const chipElement = host.hostFixture.nativeElement.querySelector('evo-chip');
        const e = new MouseEvent('click');
        chipElement.querySelector('.chip__close').dispatchEvent(e);
        expect(host.hostComponent.onCloseClick).toHaveBeenCalledWith(e);
    }));

    it('should NOT pass click event on close click for label type if disabled', fakeAsync(() => {
        createHostByTemplate(`
            <div>
                <evo-chip type="label" [closable]="true" [disabled]="true" (close)="onCloseClick($event)">Label</evo-chip>
            </div>
        `);

        spyOn(host.hostComponent, 'onCloseClick');

        host.detectChanges();
        const chipElement = host.hostFixture.nativeElement.querySelector('evo-chip');
        chipElement.querySelector('.chip__close').click();
        expect(host.hostComponent.onCloseClick).not.toHaveBeenCalled();
    }));
});
