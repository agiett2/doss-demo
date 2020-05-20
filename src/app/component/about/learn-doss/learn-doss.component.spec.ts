import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnDossComponent } from './learn-doss.component';

describe('LearnDossComponent', () => {
  let component: LearnDossComponent;
  let fixture: ComponentFixture<LearnDossComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnDossComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnDossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
