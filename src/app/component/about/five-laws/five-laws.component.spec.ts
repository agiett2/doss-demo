import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiveLawsComponent } from './five-laws.component';

describe('FiveLawsComponent', () => {
  let component: FiveLawsComponent;
  let fixture: ComponentFixture<FiveLawsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiveLawsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiveLawsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
