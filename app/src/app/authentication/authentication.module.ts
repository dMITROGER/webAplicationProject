import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleGuard } from './role.guard';
import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { FormsModule } from '@angular/forms';
import { routing } from '../app.routing';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    routing
  ],
  declarations: [
    RegisterComponent,
    LoginComponent
  ],
  providers: [
    RoleGuard,
    AuthGuard,
    AuthenticationService
  ]
})
export class AuthenticationModule { }
