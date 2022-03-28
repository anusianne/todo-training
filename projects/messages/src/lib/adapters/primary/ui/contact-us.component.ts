import { FormGroup, FormControl } from '@angular/forms';
import { Component, ViewEncapsulation, ChangeDetectionStrategy, Inject } from '@angular/core';
import { ADDS_MESSAGE_DTO, AddsMessageDtoPort } from '../../../application/ports/secondary/adds-message.dto-port';

@Component({ selector: 'lib-contact-us', templateUrl: './contact-us.component.html', encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush })

export class ContactUsComponent {
  readonly contactForm: FormGroup = new FormGroup({
    email: new FormControl(),
    text: new FormControl()
  
  });

  constructor
    (@Inject(ADDS_MESSAGE_DTO) private _addsMessageDto: AddsMessageDtoPort) {
  }

  onContactUsSubmited(contactForm: FormGroup): void {
    this._addsMessageDto.add({
      title: contactForm.get('title').value,
      id: contactForm.get('id').value
    });
  }
}

