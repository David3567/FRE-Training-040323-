import { TestBed } from '@angular/core/testing';

import { CurrentStepService } from './current-step.service';

describe('CurrentStepService', () => {
  let service: CurrentStepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentStepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
