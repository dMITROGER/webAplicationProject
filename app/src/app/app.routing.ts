import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './authentication/auth.guard';
import { RoleGuard } from './authentication/role.guard';
import { RegisterComponent } from './register/register.component';
import { PatientsDetailsComponent } from './patients/patients-details/patients-details.component';
import { PatientsListComponent } from './patients/patients-list/patients-list.component';
import { PatientsMotivationsComponent } from './patients/patients-motivations/patients-motivations.component';
import { EmergencyAlertsComponent } from './emergency-alerts/emergency-alerts.component';
import { SymptomCheckerComponent } from './symptom-checker/symptom-checker.component';

//

const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'profile', component: PatientsDetailsComponent, canActivate: [AuthGuard] },
    { path: 'patients', component: PatientsListComponent, canActivate: [AuthGuard, RoleGuard] },
    { path: 'motivation', component: PatientsMotivationsComponent, canActivate: [AuthGuard] },
    { path: 'emergency', component: EmergencyAlertsComponent, canActivate: [AuthGuard] },
    { path: 'symptom-checker', component: SymptomCheckerComponent, canActivate: [AuthGuard] },
    { path: '**', redirectTo: 'home' }
];

export const routing = RouterModule.forRoot(appRoutes);
