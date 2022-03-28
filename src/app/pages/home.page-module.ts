import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { OurTeamComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/our-team.component-module';
import { FirebaseEmployeesServiceModule } from 'projects/team/src/lib/adapters/secondary/infrastructure/firebase-employees.service-module';
import { EmployeeDetailComponentModule } from 'projects/team/src/lib/adapters/primary/ui/employee-detail.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: HomePage,
        }
      ]),
  OurTeamComponentModule,
  EmployeeDetailComponentModule,
  FirebaseEmployeesServiceModule,
],
  	declarations: [HomePage],
  	providers: [],
  	exports: [] })
export class HomePageModule {
}
