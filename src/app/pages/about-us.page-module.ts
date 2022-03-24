import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
import { OurTeamComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/our-team.component-module';
import { TestComponentModule } from '@messages';
import { EmployeeDetailComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/employee-detail.component-module';
import { FirebaseEmployeesServiceModule } from '@team';

@NgModule({ imports: [CommonModule, 
  EmployeeDetailComponentModule,
  TestComponentModule,
  FirebaseEmployeesServiceModule,
      RouterModule.forChild([
        {
          path: '',
          component: AboutUsPage,
        }
      ]),
  OurTeamComponentModule,
  EmployeeDetailComponentModule
],
  	declarations: [AboutUsPage],
  	providers: [],
  	exports: [] })
export class AboutUsPageModule {
}
