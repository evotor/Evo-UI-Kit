import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { EvoChipComponent, EvoChipTheme, EvoChipType } from './evo-chip.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component, QueryList, ViewChildren } from '@angular/core';
import { EvoUiClassDirective } from '../../directives';
import { fakeAsync, tick } from '@angular/core/testing';
import { EvoSelectComponent } from '../evo-select';

@Component({
    selector: 'evo-chip-wrapper',
    template: '',
})
class EvoChipWrapperComponent {
    @ViewChildren(EvoChipComponent) evoChipComponents: QueryList<EvoChipComponent>;
    form: FormGroup = new FormGroup({
        chips: new FormControl(),
    });
    values: any[] = [
        '1',
        1,
        {test: 'val'},
        [1],
        true,
    ];
}

const createHost = createHostFactory({
    component: EvoChipComponent,
    declarations: [
        EvoChipComponent,
        EvoUiClassDirective,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
    ],
    host: EvoChipWrapperComponent,
});

describe('EvoChipsComponent', () => {

    let host: SpectatorHost<EvoChipComponent, EvoChipWrapperComponent>;
    let evoChipComponents: QueryList<EvoChipComponent>;

    const createDefaultHost = () => {
        host = createHost(`
        <evo-chip name="myChip" value="1">Lay's</evo-chip>
        <evo-chip name="myChip" value="2">Pringles</evo-chip>
        <evo-chip name="myChip" value="3">Русская картошка</evo-chip>
    `);

        evoChipComponents = host.hostComponent.evoChipComponents;
    };

    it('should create', () => {
        createDefaultHost();
        evoChipComponents.forEach((chip: EvoChipComponent) => {
            expect(chip).toBeTruthy();
        });
    });

    it('should set default type and theme if they are not specified', () => {
        createDefaultHost();
        evoChipComponents.forEach((chip: EvoChipComponent) => {
            expect(chip.type).toEqual(EvoChipType.radio);
            expect(chip.theme).toEqual(EvoChipTheme.grey);
        });
    });

    it('should create all evo-chip components after creation', () => {
        createDefaultHost();
        expect(evoChipComponents.length).toEqual(3);
    });

    it('should set right type and theme if they passed through bindings', () => {
        host = createHost(`
            <evo-chip type="checkbox" name="myChip" value="1" type="radio" theme="white">Lay's</evo-chip>
        `);

        evoChipComponents = host.hostComponent.evoChipComponents;

        evoChipComponents.forEach((chip: EvoChipComponent) => {
            expect(chip.type).toEqual(EvoChipType.radio);
            expect(chip.theme).toEqual(EvoChipTheme.white);
        });
    });

    it('should have input with type radio if type=radio was passed', () => {
        host = createHost(`
            <evo-chip class="first-chip" type="radio" name="myChip" value="1">Lay's</evo-chip>
        `);

        const inputElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip input');
        expect(inputElement).toBeTruthy();
        expect(inputElement.type).toEqual('radio');
    });

    it('should have input with type checkbox if type=checkbox was passed', () => {
        host = createHost(`
            <evo-chip class="first-chip" type="checkbox" name="myChip" value="1">Lay's</evo-chip>
        `);

        const inputElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip input');
        expect(inputElement).toBeTruthy();
        expect(inputElement.type).toEqual('checkbox');
    });

    it('should have class chip_theme-white when theme is passed', () => {
        host = createHost(`
            <evo-chip class="first-chip" theme="white" name="myChip" value="1">Lay's</evo-chip>
        `);

        const inputElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip');
        expect(inputElement).toHaveClass('chip_theme-white');
    });

    it('should have class chip_theme-grey when theme is passed', () => {
        host = createHost(`
            <evo-chip class="first-chip" theme="grey" name="myChip" value="1">Lay's</evo-chip>
        `);

        const inputElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip');
        expect(inputElement).toHaveClass('chip_theme-grey');
    });

    it('should have class chip_theme-grey when theme is passed', () => {
        host = createHost(`
            <evo-chip class="first-chip" theme="grey" name="myChip" value="1">Lay's</evo-chip>
        `);

        const inputElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip');
        expect(inputElement).toHaveClass('chip_theme-grey');
    });

    it('should be disabled and non-clickable if disabled param is passed', fakeAsync(() => {
        host = createHost(`
            <evo-chip theme="grey" name="myChip" value="1">ENABLED</evo-chip>
            <evo-chip theme="grey" name="myChip" value="2" type="checkbox">ENABLED</evo-chip>

            <evo-chip theme="grey" name="myChip" value="3" disabled>DISABLED</evo-chip>
            <evo-chip theme="grey" name="myChip" value="4" type="checkbox" disabled>DISABLED</evo-chip>
        `);

        tick();

        const chips = host.hostFixture.nativeElement.querySelectorAll('evo-chip');
        chips.forEach((chip: Element, index: number) => {
            const inputElement = chip.querySelector('.chip input');
            const isChipDisabled = index > 1;

            expect(inputElement).not.toBeChecked();
            if (isChipDisabled) {
                expect(inputElement).toHaveAttribute('disabled');
            } else {
                expect(inputElement).not.toHaveAttribute('disabled');
            }

            chip.querySelector('label').click();

            if (isChipDisabled) {
                expect(inputElement).not.toBeChecked();
            } else {
                expect(inputElement).toBeChecked();
            }
        });
    }));

});

describe('EvoChipsComponentReactiveForm', () => {
    let host: SpectatorHost<EvoChipComponent, EvoChipWrapperComponent>;
    let hostComponent: EvoChipWrapperComponent;
    let evoChipComponents: QueryList<EvoChipComponent>;

    beforeEach(() => {
        host = createHost(`
            <div [formGroup]="form">
                <evo-chip formControlName="chips" *ngFor="let value of values" [value]="value">Value binding</evo-chip>
            </div>
        `);

        hostComponent = host.hostComponent;
    });

    it('should set value from value param', fakeAsync(() => {
        evoChipComponents = hostComponent.evoChipComponents;
        evoChipComponents.forEach((chip: EvoChipComponent, index) => {
            expect(chip.value === hostComponent.values[index]).toBeTruthy();
        });
    }));
});

