import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';
import { User } from '../app.interface';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent {
  credentials: User = {
    email: '',
    password: ''
  };

  constructor(private _authService: AuthenticationService, private _router: Router, private _alertService: AlertService) { }

  login() {
    this._authService.login(this.credentials).subscribe(() => {
      this._router.navigateByUrl('/home');
    }, (err) => {
      this._alertService.error(err.error.message);
      console.error(err);
    });
  }
}


