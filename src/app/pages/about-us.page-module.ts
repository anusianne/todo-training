import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutUsPage } from './about-us.page';
import { OurTeamComponentModule } from '../../../projects/team/src/lib/adapters/primary/ui/our-team.component-module';
import { TestComponentModule } from '@messages';

@NgModule({ imports: [CommonModule, TestComponentModule,
      RouterModule.forChild([
        {
          path: '',
          component: AboutUsPage,
        }
      ]),
  OurTeamComponentModule,
],
  	declarations: [AboutUsPage],
  	providers: [],
  	exports: [] })
export class AboutUsPageModule {
}
