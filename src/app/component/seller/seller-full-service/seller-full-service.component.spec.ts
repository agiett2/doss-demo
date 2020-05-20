import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerFullServiceComponent } from './seller-full-service.component';

describe('SellerFullServiceComponent', () => {
  let component: SellerFullServiceComponent;
  let fixture: ComponentFixture<SellerFullServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellerFullServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellerFullServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
