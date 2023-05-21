import { TestBed } from '@angular/core/testing';
import { roleGuard } from './roleguard.guard';

describe('roleGuard', () => {
  let service: roleGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(roleGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
