import { TestBed, inject } from '@angular/core/testing';

import { SymptomCheckerService } from './symptom-checker.service';

describe('SymptomCheckerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SymptomCheckerService]
    });
  });

  it('should be created', inject([SymptomCheckerService], (service: SymptomCheckerService) => {
    expect(service).toBeTruthy();
  }));
});
