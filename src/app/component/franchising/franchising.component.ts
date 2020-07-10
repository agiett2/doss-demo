import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { SendEmailService } from 'src/app/core/services/send-email/send-email.service';
import { SendEmailServiceAbstract } from 'src/app/core/services/abstract/send-email.service.abstract';
import { EmailOptionsPayloadInterface } from 'src/app/core/model/email-options.payload.interface';

@Component({
  selector: 'app-franchising',
  templateUrl: './franchising.component.html',
  styleUrls: ['./franchising.component.scss']
})
export class FranchisingComponent implements OnInit {
  public heading: string;
  public subHeading: string;
  public component: any;
  public message: string;
  public quote: string;
  public signature: string;
  public requestInfoForm: FormGroup;
  public isSubmittingEmail: boolean;
  public responseMsg: string;
  constructor(private fb: FormBuilder, private emailService: SendEmailServiceAbstract) { }

  ngOnInit(): void {
    this.isSubmittingEmail = false;
    this.heading = 'Open DOSS in your Market Area';
    this.subHeading = 'Finally, an opportunity to Franchise a Real Estate TECH brand!';
    this.message = `You never change things by fighting the existing reality. To change
    something, build a new model that makes the existing model obsolete.`;
    this.quote = 'You never chnage things by fighting the existing reality. To change something, build a new model that makes the ';
    this.signature = '-buminster fuller';
    this.requestInfoForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['',
        Validators.compose([Validators.required, Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      cityStateIntrest: [''],
      marketAreaInterest: [''],
      expereince: [''],
    });
  }

  public get rf(): { [key: string]: AbstractControl } {
    return this.requestInfoForm.controls;
  }

  public submitForm(form: FormGroup): void {
    this.isSubmittingEmail = true;
    this.emailService.sendEmail(this.buildEmailOptions(form)).then((value: any) => {
      this.isSubmittingEmail = false;
      this.responseMsg = 'Email Sent';
    });
  }

  private buildEmailOptions(form: FormGroup): EmailOptionsPayloadInterface {
    const name = `${form.controls.firstName.value.toUpperCase()} ${form.controls.lastName.value.toUpperCase()}`;
    return {
      to: 'noreplydoss@gmail.com',
      from: 'noreply@askdoss.com',
      subject: `Contact Request from ${ name }`,
      html: `<p>Name: ${ name }</p>
      <p>Phone Number: ${form.controls.phoneNumber.value}</p>
      <p>Email: ${form.controls.email.value}</p>
      <p>City State Intrest: ${form.controls.cityStateIntrest.value}</p>
      <p>Market Area Interest: ${form.controls.marketAreaInterest.value}</p>
      <p>Expereince: ${form.controls.expereince.value}</p>`
    };
  }
}
