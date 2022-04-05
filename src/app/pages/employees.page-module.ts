import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeesPage } from './employees.page';
import { OurTeamComponentModule } from 'projects/team/src/lib/adapters/primary/ui/our-team.component-module';
import { FirebaseEmployeesServiceModule } from 'projects/team/src/lib/adapters/secondary/infrastructure/firebase-employees.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EmployeesPage,
        }
      ]),
  OurTeamComponentModule,
      FirebaseEmployeesServiceModule
],
  	declarations: [EmployeesPage],
  	providers: [],
  	exports: [] })
export class EmployeesPageModule {
}
