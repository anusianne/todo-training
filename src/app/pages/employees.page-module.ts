import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { EmployeesPage } from './employees.page';
import { ContactFormComponentModule } from '../../../projects/messages/src/lib/adapters/primary/ui/contact-form.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EmployeesPage,
        }
      ]),
  ContactFormComponentModule
],
  	declarations: [EmployeesPage],
  	providers: [],
  	exports: [] })
export class EmployeesPageModule {
}



