import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftAlignComponent } from './left-align.component';

describe('LeftAlignComponent', () => {
  let component: LeftAlignComponent;
  let fixture: ComponentFixture<LeftAlignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftAlignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftAlignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
