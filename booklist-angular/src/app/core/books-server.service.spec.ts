import { TestBed } from '@angular/core/testing';

import { BooksServerService } from './books-server.service';

describe('BooksServerService', () => {
  let service: BooksServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
