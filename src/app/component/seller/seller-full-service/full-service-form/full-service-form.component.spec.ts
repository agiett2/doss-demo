import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullServiceFormComponent } from './full-service-form.component';

describe('FullServiceFormComponent', () => {
  let component: FullServiceFormComponent;
  let fixture: ComponentFixture<FullServiceFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullServiceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullServiceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
