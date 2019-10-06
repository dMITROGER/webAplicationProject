
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';
import { User } from '../app.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'home component';
  user: User;
  constructor(
    public authService: AuthenticationService) {
    this.user = this.authService.getUser();
  }

  ngOnInit() {
    
  }
}
