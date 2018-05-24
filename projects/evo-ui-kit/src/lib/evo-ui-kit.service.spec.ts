import { TestBed, inject } from '@angular/core/testing';

import { EvoUiKitService } from './evo-ui-kit.service';

describe('EvoUiKitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvoUiKitService]
    });
  });

  it('should be created', inject([EvoUiKitService], (service: EvoUiKitService) => {
    expect(service).toBeTruthy();
  }));
});
