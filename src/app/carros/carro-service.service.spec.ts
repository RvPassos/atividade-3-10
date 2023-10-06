import { TestBed } from '@angular/core/testing';

import { CarroServiceService } from './carro-service.service';

describe('CarroServiceService', () => {
  let service: CarroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
