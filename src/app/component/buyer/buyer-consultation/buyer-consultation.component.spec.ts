import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerConsultationComponent } from './buyer-consultation.component';

describe('BuyerConsultationComponent', () => {
  let component: BuyerConsultationComponent;
  let fixture: ComponentFixture<BuyerConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuyerConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyerConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
