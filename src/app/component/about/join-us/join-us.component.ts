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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.heroHeading = 'SUCCESS, is a decision....';
    this.heroText = 'Join Us!';
    this.techAgentText = `Is your current Brokerage designed for the future? Are they structurally and
    technologically built to help you be competitive in your market?
    If not, it's tme to join a purpose driven tech brokerage. It's time for you to become a TECH Agent!`;
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
    console.log('sumbitted form', form);
  }

}
