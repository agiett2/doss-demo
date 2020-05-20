import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentConsultationComponent } from './rent-consultation.component';

describe('RentconsultationComponent', () => {
  let component: RentConsultationComponent;
  let fixture: ComponentFixture<RentConsultationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentConsultationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentConsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
