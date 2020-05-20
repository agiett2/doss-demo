import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerStepsComponent } from './buyer-steps.component';

describe('BuyerStepsComponent', () => {
  let component: BuyerStepsComponent;
  let fixture: ComponentFixture<BuyerStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
