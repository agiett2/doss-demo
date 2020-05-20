import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForbesComponent } from './forbes.component';

describe('ForbesComponent', () => {
  let component: ForbesComponent;
  let fixture: ComponentFixture<ForbesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForbesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForbesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
