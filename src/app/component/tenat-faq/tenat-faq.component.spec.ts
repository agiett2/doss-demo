import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenatFaqComponent } from './tenat-faq.component';

describe('TenatFaqComponent', () => {
  let component: TenatFaqComponent;
  let fixture: ComponentFixture<TenatFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenatFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenatFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
