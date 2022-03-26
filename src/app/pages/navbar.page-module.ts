import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarPage } from './navbar.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: NavbarPage,
        }
      ])],
  	declarations: [NavbarPage],
  	providers: [],
  	exports: [] })
export class NavbarPageModule {
}
