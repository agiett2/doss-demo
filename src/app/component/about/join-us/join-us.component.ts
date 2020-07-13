import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-join-us',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.scss']
})
export class JoinUsComponent implements OnInit {
  public heroHeading: string;
  public heroText: string;
  public techAgentText: string;
  public dossHeading: string;
  public signUpForm: FormGroup;
  public isSubmittingEmail: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.isSubmittingEmail = false;
    this.heroHeading = 'SUCCESS, is a decision....';
    this.heroText = 'Join Us!';
    this.techAgentText = `Is your current Brokerage designed for the future? Are they structurally and
    technologically built to help you be competitive in your market?
    If not, it's tme to join a purpose driven tech brokerage. It's time for you to become a tech AGENT!`;
    this.dossHeading = 'What do you get at DOSS?';
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phoneNumber: ['',
        Validators.compose([Validators.required, Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      currentBroker: [''],
      yearsLicensed: ['', Validators.required],
      closing2018: ['', Validators.required],
      closing2019: ['', Validators.required]
    });
  }

  public get sf(): { [key: string]: AbstractControl } {
    return this.signUpForm.controls;
  }

  public submitForm(form: FormGroup): void {
    this.isSubmittingEmail = true;
    this.emailService
      .sendEmail(this.buildEmailOptions(form))
      .then((value: any) => {
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
      <p>Current Broker: ${form.controls.currentBroker.value}</p>
      <p>Years Licensed: ${form.controls.yearsLicensed.value}</p>
      <p>Closing 2018: ${form.controls.closing2018.value}</p>
      <p>Closing 2019: ${form.controls.closing2019.value}</p>`
    };
  }
}
