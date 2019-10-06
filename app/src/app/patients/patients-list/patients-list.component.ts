import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';
import { AlertService } from '../../alert/alert.service';
import { UserService } from '../../user.service';
import { User } from '../../app.interface';
@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css']
})
export class PatientsListComponent implements OnInit {

  patients: User[];
  constructor(
    private _authService: AuthenticationService,
    private _alertService: AlertService,
    private _userService: UserService) { }

  ngOnInit() {
    this._userService.listUsers()
      .subscribe(users => {
        this.patients = users.filter(patient => patient.type === 'patient');
      });
  }

}
