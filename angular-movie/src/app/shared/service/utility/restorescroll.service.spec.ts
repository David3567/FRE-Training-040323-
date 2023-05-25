import { TestBed } from '@angular/core/testing';

import { RestorescrollService } from './restorescroll.service';

describe('RestorescrollService', () => {
  let service: RestorescrollService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestorescrollService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
