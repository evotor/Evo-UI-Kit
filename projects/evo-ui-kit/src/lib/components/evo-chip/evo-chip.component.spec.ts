import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { EvoChipComponent, EvoChipTheme, EvoChipType } from './evo-chip.component';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { EvoUiClassDirective } from '../../directives';
import { fakeAsync, tick } from '@angular/core/testing';
import { EvoIconModule } from '../evo-icon';
import { icons } from '../../../../icons';

@Component({selector: 'evo-host-component', template: ''})
class TestHostComponent {
    @ViewChildren(EvoChipComponent) evoChipComponents: QueryList<EvoChipComponent>;

    values: any[] = [
        '1',
        1,
        {test: 'val'},
        [1],
        true,
    ];

    form = new FormGroup({
        checkboxes: new FormArray(this.values.map((value) => new FormControl(value))),
        radios: new FormControl(''),
    });
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
            <evo-chip type="checkbox" name="myChip" value="1" type="radio" theme="white">Chip 1</evo-chip>
        `);

        evoChipComponents.forEach((chip: EvoChipComponent) => {
            expect(chip.type).toEqual(EvoChipType.radio);
            expect(chip.theme).toEqual(EvoChipTheme.white);
        });
    });

    it('should have input with type radio if type=radio was passed', () => {
        createHostByTemplate(`
            <evo-chip class="first-chip" type="radio" name="myChip" value="1">Chip 1</evo-chip>
        `);
        const inputElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip input');
        expect(inputElement).toBeTruthy();
        expect(inputElement.type).toEqual('radio');
    });

    it('should have input with type checkbox if type=checkbox was passed', () => {
        createHostByTemplate(`
            <evo-chip class="first-chip" type="checkbox" name="myChip" value="1">Chip 1</evo-chip>
        `);
        const inputElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip input');
        expect(inputElement).toBeTruthy();
        expect(inputElement.type).toEqual('checkbox');
    });

    it('should have class chip_theme-white when theme is passed', () => {
        createHostByTemplate(`
            <evo-chip class="first-chip" theme="white" name="myChip" value="1">Chip 1</evo-chip>
        `);
        const chipWrapperElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip');
        expect(chipWrapperElement).toHaveClass('chip_theme-white');
    });

    it('should have class chip_theme-grey when theme is passed', () => {
        createHostByTemplate(`
            <evo-chip class="first-chip" theme="grey" name="myChip" value="1">Chip 1</evo-chip>
        `);
        const chipWrapperElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip');
        expect(chipWrapperElement).toHaveClass('chip_theme-grey');
    });

    it('should have class chip_theme-grey when theme is passed', () => {
        createHostByTemplate(`
            <evo-chip class="first-chip" theme="grey" name="myChip" value="1">Chip 1</evo-chip>
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

    // TODO label; label disabled; label counter; label closable; label closable close; label closable disabled close; label closable counter
    // TODO radio closable; checkbox closable;
});
