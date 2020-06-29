import { createHostFactory, SpectatorHost } from '@ngneat/spectator';
import { EvoChipComponent, EvoChipTheme, EvoChipType } from './evo-chip.component';
import { FormsModule } from '@angular/forms';
import { Component, QueryList, ViewChildren } from '@angular/core';

@Component({
    selector: 'evo-chip-wrapper',
    template: '',
})
class EvoChipWrapperComponent {
    @ViewChildren(EvoChipComponent) evoChipComponents: QueryList<any>;
}

let host: SpectatorHost<EvoChipComponent, EvoChipWrapperComponent>;
let evoChipComponents: QueryList<EvoChipComponent>;

const createHost = createHostFactory({
    component: EvoChipComponent,
    declarations: [EvoChipComponent],
    imports: [
        FormsModule,
    ],
    host: EvoChipWrapperComponent,

});

const createDefaultHost = () => {
    host = createHost(`
        <evo-chip name="myChip" value="1">Lay's</evo-chip>
        <evo-chip name="myChip" value="2">Pringles</evo-chip>
        <evo-chip name="myChip" value="3">Русская картошка</evo-chip>
    `);

    evoChipComponents = host.hostComponent.evoChipComponents;
};

describe('EvoChipsComponent', () => {

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

        evoChipComponents = host.hostComponent.evoChipComponents;
        const inputElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip input');
        expect(inputElement).toBeTruthy();
        expect(inputElement.type).toEqual('radio');
    });

    it('should have input with type checkbox if type=checkbox was passed', () => {
        host = createHost(`
            <evo-chip class="first-chip" type="checkbox" name="myChip" value="1">Lay's</evo-chip>
        `);

        evoChipComponents = host.hostComponent.evoChipComponents;
        const inputElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip input');
        expect(inputElement).toBeTruthy();
        expect(inputElement.type).toEqual('checkbox');
    });

    it('should have class chip_theme-white when theme is passed', () => {
        host = createHost(`
            <evo-chip class="first-chip" theme="white" name="myChip" value="1">Lay's</evo-chip>
        `);

        evoChipComponents = host.hostComponent.evoChipComponents;
        const inputElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip');
        expect(inputElement).toHaveClass('chip_theme-white');
    });

    it('should have class chip_theme-grey when theme is passed', () => {
        host = createHost(`
            <evo-chip class="first-chip" theme="grey" name="myChip" value="1">Lay's</evo-chip>
        `);

        evoChipComponents = host.hostComponent.evoChipComponents;
        const inputElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip');
        expect(inputElement).toHaveClass('chip_theme-grey');
    });

    it('should have class chip_theme-grey when theme is passed', () => {
        host = createHost(`
            <evo-chip class="first-chip" theme="grey" name="myChip" value="1">Lay's</evo-chip>
        `);

        evoChipComponents = host.hostComponent.evoChipComponents;
        const inputElement = host.hostFixture.nativeElement.querySelector('evo-chip .chip');
        expect(inputElement).toHaveClass('chip_theme-grey');
    });

    it('should be disabled if disabled param is passed', () => {
        host = createHost(`
            <evo-chip theme="grey" name="myChip" value="1" [disabled]="true">Lay's</evo-chip>
            <evo-chip theme="grey" name="myChip" value="2">Pringles</evo-chip>
        `);

        evoChipComponents = host.hostComponent.evoChipComponents;
        const inputElement = host.hostFixture.nativeElement.querySelectorAll('evo-chip .chip input')[0];
        console.log(inputElement);
        expect(inputElement).toHaveAttribute('disabled');
    });

});

