import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_MESSAGE_DTO, AddsMessageDtoPort } from '../../../application/ports/secondary/adds-message.dto-port';

@Component({ selector: 'lib-contact-us', templateUrl: './contact-us.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })

export class ContactUsComponent {
  readonly contactForm: FormGroup = new FormGroup({
    fname: new FormControl(),
    lname: new FormControl(),
    email: new FormControl(),
    about: new FormControl()
  });

  constructor
    (@Inject(ADDS_MESSAGE_DTO) private _addsMessageDto: AddsMessageDtoPort) {
  }

  onContactUsSubmited(contactForm: FormGroup): void {
     if (contactForm.invalid) {
      return;
    }
    this._addsMessageDto.add({
      fname: contactForm.get('fname').value,
      lname: contactForm.get('lname').value,
      email: contactForm.get('email').value,
      about: contactForm.get('about').value
    });
     contactForm.reset();
  }
}

