import { TestBed } from '@angular/core/testing';

import { OserviceService } from './oservice.service';

describe('OserviceService', () => {
  let service: OserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
