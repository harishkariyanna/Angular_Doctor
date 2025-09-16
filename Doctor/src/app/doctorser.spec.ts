import { TestBed } from '@angular/core/testing';

import { Doctorser } from './doctorser';

describe('Doctorser', () => {
  let service: Doctorser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Doctorser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
