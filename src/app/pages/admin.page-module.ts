import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminPage } from './admin.page';
import { CreateEmployeeComponentModule } from '@team';
import { FirebaseEmployeesServiceModule } from '../../../projects/team/src/lib/adapters/secondary/infrastructure/firebase-employees.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AdminPage,
        }
      ]),
  CreateEmployeeComponentModule,
  FirebaseEmployeesServiceModule
],
  	declarations: [AdminPage],
  	providers: [],
  	exports: [] })
export class AdminPageModule {
}
