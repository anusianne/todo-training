import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FirebaseMessagesServiceModule } from '../../secondary/infrastructure/firebase-messages.service-module';

@NgModule({ imports: [CommonModule, ReactiveFormsModule, FirebaseMessagesServiceModule],
  	declarations: [ContactUsComponent],
  	providers: [],
  	exports: [ContactUsComponent] })
export class ContactUsComponentModule {
}
