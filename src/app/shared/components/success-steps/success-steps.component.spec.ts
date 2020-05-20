import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessStepsComponent } from './success-steps.component';

describe('SuccessStepsComponent', () => {
  let component: SuccessStepsComponent;
  let fixture: ComponentFixture<SuccessStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
