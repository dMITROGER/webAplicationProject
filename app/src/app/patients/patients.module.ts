import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsListComponent } from './patients-list/patients-list.component';
import { PatientsDetailsComponent } from './patients-details/patients-details.component';
import { PatientsMotivationsComponent } from './patients-motivations/patients-motivations.component';
import { FormsModule } from '@angular/forms';
import { routing } from '../app.routing';
import { PatientsService } from './patients.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    routing,
  ],
  declarations: [PatientsListComponent, PatientsDetailsComponent, PatientsMotivationsComponent],
  providers: [
    PatientsService
  ]
})
export class PatientsModule { }
