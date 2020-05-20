import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerConsultationComponent } from './seller-consultation.component';

describe('SellerConsultationComponent', () => {
  let component: SellerConsultationComponent;
  let fixture: ComponentFixture<SellerConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
