import { TestBed } from '@angular/core/testing';

import { ResolveDetailsService } from './resolve-details.service';

describe('ResolveDetailsService', () => {
  let service: ResolveDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
