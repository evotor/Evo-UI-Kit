import { TestBed } from '@angular/core/testing';

import { EvoToastService } from './evo-toast.service';

describe('EvoToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EvoToastService = TestBed.get(EvoToastService);
    expect(service).toBeTruthy();
  });
});
