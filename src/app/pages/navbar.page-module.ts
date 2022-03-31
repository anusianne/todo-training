import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarPage } from './navbar.page';
import { NavbarComponentModule } from '@nav';

@NgModule({
  imports: [CommonModule, 
    NavbarComponentModule,
      RouterModule.forChild([
        {
          path: '',
          component: NavbarPage,
        }
      ]),

],
  	declarations: [NavbarPage],
  	providers: [],
  	exports: [] })
export class NavbarPageModule {
}
