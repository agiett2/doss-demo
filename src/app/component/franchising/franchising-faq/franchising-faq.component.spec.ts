import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchisingFaqComponent } from './franchising-faq.component';

describe('FranchisingFaqComponent', () => {
  let component: FranchisingFaqComponent;
  let fixture: ComponentFixture<FranchisingFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchisingFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchisingFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
