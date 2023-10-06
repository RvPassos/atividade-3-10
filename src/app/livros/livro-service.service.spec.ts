import { TestBed } from '@angular/core/testing';

import { LivroServiceService } from './livro-service.service';

describe('LivroServiceService', () => {
  let service: LivroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
