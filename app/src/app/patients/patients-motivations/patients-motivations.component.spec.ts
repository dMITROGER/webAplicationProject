import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsMotivationsComponent } from './patients-motivations.component';

describe('PatientsMotivationsComponent', () => {
  let component: PatientsMotivationsComponent;
  let fixture: ComponentFixture<PatientsMotivationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsMotivationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsMotivationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
