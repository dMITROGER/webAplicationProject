import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert/alert.service';
import { routing } from '../app/app.routing';
import { AuthenticationModule } from './authentication/authentication.module';
import { PatientsModule } from './patients/patients.module';
import { EmergencyAlertsComponent } from './emergency-alerts/emergency-alerts.component';
import { UserService } from './user.service';
import { EmergencyAlertsService } from './emergency-alerts/emergency-alerts.service';
import { SymptomCheckerComponent } from './symptom-checker/symptom-checker.component';
import { SymptomCheckerService } from './symptom-checker/symptom-checker.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlertComponent,
    EmergencyAlertsComponent,
    SymptomCheckerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AuthenticationModule,
    PatientsModule,
    routing
  ],
  providers: [
    AlertService,
    UserService,
    EmergencyAlertsService,
    SymptomCheckerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
