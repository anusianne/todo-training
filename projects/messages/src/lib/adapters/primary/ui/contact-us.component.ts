import { Component, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({ selector: 'lib-contact-us', templateUrl: './contact-us.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })

export class ContactUsComponent {
  readonly contactForm: FormGroup = new FormGroup({
    email: new FormControl(),
    text: new FormControl()
  
  });

  onFormSubmited (contactForm: FormGroup) :
    void {
    console.log(contactForm.getRawValue());
    alert( `email: ${contactForm.value.email} text: ${contactForm.value.text}`);

  }
}