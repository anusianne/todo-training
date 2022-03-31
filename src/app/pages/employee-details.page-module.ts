import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeDetailsPage } from './employee-details.page';
import { OurTeamComponentModule } from '@team';
import { EmployeeDetailComponentModule } from '@team';
import { FirebaseEmployeesServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-employees.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: ':employeeId',
          component: EmployeeDetailsPage,
        }
      ]),
      OurTeamComponentModule,
  EmployeeDetailComponentModule,
  FirebaseEmployeesServiceModule
],
  	declarations: [EmployeeDetailsPage],
  	providers: [],
  	exports: [] })
export class EmployeeDetailsPageModule {
}
