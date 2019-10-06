import { TestBed, inject } from '@angular/core/testing';

import { EmergencyAlertsService } from './emergency-alerts.service';

describe('EmergencyAlertsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmergencyAlertsService]
    });
  });

  it('should be created', inject([EmergencyAlertsService], (service: EmergencyAlertsService) => {
    expect(service).toBeTruthy();
  }));
});
