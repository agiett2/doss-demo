import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  public contactUsForm: FormGroup;
  public isSubmittingEmail: boolean;

  constructor(private fb: FormBuilder) { }

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
    console.log('form submited' + form);
    setTimeout(() => {
      this.isSubmittingEmail = false;
    }, 6000);
  }

  public get cf(): any {
    return this.contactUsForm.controls;
  }

}
