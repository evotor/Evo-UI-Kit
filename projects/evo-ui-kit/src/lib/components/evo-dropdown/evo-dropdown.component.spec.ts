import {fakeAsync, tick, waitForAsync} from '@angular/core/testing';
import {Component} from '@angular/core';
import {createHostFactory, SpectatorHost} from '@ngneat/spectator';
import {EvoDropdownComponent} from './evo-dropdown.component';
import {EvoDropdownModule} from './evo-dropdown.module';

@Component({selector: 'evo-host-component', template: ``})
class TestHostComponent {
    handleOpenChange(e) {}
}

const createHost = createHostFactory({
    component: EvoDropdownComponent,
    host: TestHostComponent,
    imports: [EvoDropdownModule],
});

describe('EvoDropdownComponent', () => {
    let host: SpectatorHost<EvoDropdownComponent, TestHostComponent>;

    beforeEach(waitForAsync(() => {
        host = createHost(`
            <button
                #origin="evoDropdownOrigin"
                evoDropdownOrigin
            ></button>

            <evo-dropdown
                [dropdownOrigin]="origin"
                (isOpenChange)="handleOpenChange($event)"
            ></evo-dropdown>
        `);
    }));


    it(`should emit isOpen changes`, fakeAsync(() => {
        const handleOpenChange = spyOn(host.hostComponent, 'handleOpenChange');

        host.component.open();
        host.detectChanges();
        tick();
        expect(handleOpenChange).toHaveBeenCalledWith(true);

        host.component.close();
        host.detectChanges();
        tick();
        expect(handleOpenChange).toHaveBeenCalledWith(false);

        host.component.toggle();
        host.detectChanges();
        tick();
        expect(handleOpenChange).toHaveBeenCalledWith(true);

        host.component.toggle();
        host.detectChanges();
        tick();
        expect(handleOpenChange).toHaveBeenCalledWith(false);
    }));
});
