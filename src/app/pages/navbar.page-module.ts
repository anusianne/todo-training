import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarPage } from './navbar.page';
import { NavbarComponentModule } from '../../../projects/nav/src/lib/adapters/primary/ui/navbar.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: NavbarPage,
        }
      ]),
  NavbarComponentModule
],
  	declarations: [NavbarPage],
  	providers: [],
  	exports: [] })
export class NavbarPageModule {
}
