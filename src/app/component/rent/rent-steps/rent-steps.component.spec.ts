import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentStepsComponent } from './rent-steps.component';

describe('RentStepsComponent', () => {
  let component: RentStepsComponent;
  let fixture: ComponentFixture<RentStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
