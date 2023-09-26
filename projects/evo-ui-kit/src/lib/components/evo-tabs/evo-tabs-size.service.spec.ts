import {getTestBed, TestBed} from '@angular/core/testing';
import {EvoTabsSizeService} from './evo-tabs-size.service';

import {EvoTabsSize} from './enums/evo-tabs-size';

describe('EvoTabsSizeService', () => {
    let injector: TestBed;
    let service: EvoTabsSizeService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [EvoTabsSizeService],
        });

        injector = getTestBed();
        service = injector.get(EvoTabsSizeService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it(`should be ${EvoTabsSize.normal} size if size is not set`, () => {
        expect(service.size === EvoTabsSize.normal).toBeTruthy();
    });

    it(`should be ${EvoTabsSize.normal} if set set normal`, () => {
        service.size = EvoTabsSize.normal;
        expect(service.size === EvoTabsSize.normal).toBeTruthy();
    });

    it(`size should be ${EvoTabsSize.small} if set small size`, () => {
        service.size = EvoTabsSize.small;
        expect(service.size === EvoTabsSize.small).toBeTruthy();
    });
});
