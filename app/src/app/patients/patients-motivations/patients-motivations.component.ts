import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication/authentication.service';
import { UserService } from '../../user.service';
import { User } from '../../app.interface';

@Component({
  selector: 'app-patients-motivations',
  templateUrl: './patients-motivations.component.html',
  styleUrls: ['./patients-motivations.component.css']
})
export class PatientsMotivationsComponent implements OnInit {

  patient: User;
  constructor(
    public authService: AuthenticationService,
    private _userService: UserService) {

  }
  ngOnInit() {
    this._userService
      .getUser(this.authService.getUser()._id)
      .subscribe((res) => {
        this.patient = res;
        console.log(this.patient);
      });
  }

}
