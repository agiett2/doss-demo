import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightAlignComponent } from './right-align.component';

describe('RightAlignComponent', () => {
  let component: RightAlignComponent;
  let fixture: ComponentFixture<RightAlignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightAlignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightAlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
