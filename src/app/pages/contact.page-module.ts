import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactPage } from './contact.page';
import { ContactUsComponentModule } from '@messages';
import { FirebaseMessagesServiceModule } from 'projects/messages/src/lib/adapters/secondary/infrastructure/firebase-messages.service-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: ContactPage,
        }
      ]),
  ContactUsComponentModule,
  FirebaseMessagesServiceModule,
],
  declarations: [ContactPage],
  	providers: [],
  	exports: [] })
export class ContactPageModule {
}
