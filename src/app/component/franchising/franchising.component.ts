import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { SendEmailService } from 'src/app/core/services/send-email/send-email.service';
import { SendEmailServiceAbstract } from 'src/app/core/services/abstract/send-email.service.abstract';

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
    this.emailService.sendEmail(form);
    setTimeout(() => {
      this.isSubmittingEmail = false;
    }, 6000);
  }
}
