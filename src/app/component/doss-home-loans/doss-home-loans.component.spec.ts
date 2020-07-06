import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DossHomeLoansComponent } from './doss-home-loans.component';

describe('DossHomeLoansComponent', () => {
  let component: DossHomeLoansComponent;
  let fixture: ComponentFixture<DossHomeLoansComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DossHomeLoansComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DossHomeLoansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
