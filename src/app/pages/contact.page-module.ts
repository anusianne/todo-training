import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactPage } from './contact.page';
import { ContactUsComponentModule } from '../../../projects/messages/src/lib/adapters/primary/ui/contact-us.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ContactPage,
        }
      ]),
  ContactUsComponentModule,
],
  declarations: [ContactPage],
  	providers: [],
  	exports: [] })
export class ContactPageModule {
}
