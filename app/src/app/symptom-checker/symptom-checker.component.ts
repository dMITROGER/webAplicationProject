import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { SymptomCheckerService } from './symptom-checker.service';
import { User } from '../app.interface';

@Component({
  selector: 'app-symptomchecker',
  templateUrl: './symptom-checker.component.html',
  styleUrls: ['./symptom-checker.component.css']
})
export class SymptomCheckerComponent implements OnInit {
  title = 'Symptom Checker Component';
  user: User;
  results = false;
  symptoms = {
    sniffling: '',
    aching: '',
    coughing: '',
    highFever: ''
  };

  possibleCondition = {};

  influenza: String = '';
  constructor(private authService: AuthenticationService, private sympService: SymptomCheckerService) {
    this.results = false;
    this.user = this.authService.getUser();
  }

  ngOnInit() {
  }

  checksymptoms() {
    this.sympService.getMedicalConditions(this.symptoms).subscribe((res) => {
      this.results = true;
      this.possibleCondition = res;
    }, (err) => {
      console.error(err);
    });
  }

}
