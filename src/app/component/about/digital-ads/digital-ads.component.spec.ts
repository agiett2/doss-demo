import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalAdsComponent } from './digital-ads.component';

describe('DigitalAdsComponent', () => {
  let component: DigitalAdsComponent;
  let fixture: ComponentFixture<DigitalAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DigitalAdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
