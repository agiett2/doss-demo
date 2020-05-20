import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerFlatRateComponent } from './seller-flat-rate.component';

describe('SellerFlatRateComponent', () => {
  let component: SellerFlatRateComponent;
  let fixture: ComponentFixture<SellerFlatRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerFlatRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerFlatRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
