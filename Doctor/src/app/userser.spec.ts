import { TestBed } from '@angular/core/testing';

import { Userser } from './userser';

describe('Userser', () => {
  let service: Userser;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Userser);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
