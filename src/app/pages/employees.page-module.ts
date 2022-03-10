import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EmployeesPage } from './employees.page';


@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EmployeesPage,
        }
      ])],
  	declarations: [EmployeesPage],
  	providers: [],
  	exports: [] })
export class EmployeesPageModule {
}



