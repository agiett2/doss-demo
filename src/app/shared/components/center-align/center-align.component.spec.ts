import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterAlignComponent } from './center-align.component';

describe('CenterAlignComponent', () => {
  let component: CenterAlignComponent;
  let fixture: ComponentFixture<CenterAlignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterAlignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterAlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
