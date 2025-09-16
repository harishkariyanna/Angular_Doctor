import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doctorcom } from './doctorcom';

describe('Doctorcom', () => {
  let component: Doctorcom;
  let fixture: ComponentFixture<Doctorcom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Doctorcom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Doctorcom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
