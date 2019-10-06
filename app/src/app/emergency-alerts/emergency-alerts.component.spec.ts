import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyAlertsComponent } from './emergency-alerts.component';

describe('EmergencyAlertsComponent', () => {
  let component: EmergencyAlertsComponent;
  let fixture: ComponentFixture<EmergencyAlertsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyAlertsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
