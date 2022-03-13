import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactPage } from './contact.page';
import { ContactFormComponentModule } from '../../../projects/messages/src/lib/adapters/primary/ui/contact-form.component-module';

@NgModule({ imports: [
  CommonModule, 
  ContactFormComponentModule,
  
      RouterModule.forChild([
        {
          path: '',
          component: ContactPage,
        }
      ]),
],
      
  	declarations: [ContactPage],
  	providers: [],
  	exports: [] })
export class ContactPageModule {
}
