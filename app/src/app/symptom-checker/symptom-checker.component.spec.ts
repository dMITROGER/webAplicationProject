import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomCheckerComponent } from './symptom-checker.component';

describe('SymptomCheckerComponent', () => {
  let component: SymptomCheckerComponent;
  let fixture: ComponentFixture<SymptomCheckerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomCheckerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomCheckerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
