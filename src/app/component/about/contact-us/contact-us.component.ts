import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmailOptionsPayloadInterface } from 'src/app/core/model/email-options.payload.interface';
import { SendEmailServiceAbstract } from 'src/app/core/services/abstract/send-email.service.abstract';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public contactUsForm: FormGroup;
  public isSubmittingEmail: boolean;
  public responseMsg: string;

  constructor(private fb: FormBuilder, private emailService: SendEmailServiceAbstract) { }

  ngOnInit(): void {
    this.isSubmittingEmail = false;
    this.contactUsForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['',
        Validators.compose([Validators.required, Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      help: ['', Validators.required]
    });
  }

  public submitForm(form: FormGroup): void {
    this.isSubmittingEmail = true;
    this.emailService.sendEmail(this.buildEmailOptions(form)).subscribe((response: { error?: any, success?: any }) => {
      this.isSubmittingEmail = false;
      response.success ? this.responseMsg = 'Email Sent!' : this.responseMsg = 'Error: Unable to send email at this time.';
    });
  }

  public get cf(): any {
    return this.contactUsForm.controls;
  }

  private buildEmailOptions(form: FormGroup): EmailOptionsPayloadInterface {
    return {
      to: 'agiet_doss@askdoss.com',
      from: 'noreply@askdoss.com',
      subject: `Contact Rewuest from ${form.controls.firstName.value} ${form.controls.lastName.value}`,
      html: `<p>Name: ${form.controls.firstName.value} ${form.controls.lastName.value}</p>
      <p>Phone Number: ${form.controls.phoneNumber.value}</p>
      <p>Email: ${form.controls.email.value}</p>
      <p>Help: ${form.controls.help.value}</p>`
    };
  }
}
