import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandlordFaqComponent } from './landlord-faq.component';

describe('LandlordFaqComponent', () => {
  let component: LandlordFaqComponent;
  let fixture: ComponentFixture<LandlordFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandlordFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandlordFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
