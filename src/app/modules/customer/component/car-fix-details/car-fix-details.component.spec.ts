import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFixDetailsComponent } from './car-fix-details.component';

describe('CarFixDetailsComponent', () => {
  let component: CarFixDetailsComponent;
  let fixture: ComponentFixture<CarFixDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarFixDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFixDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
