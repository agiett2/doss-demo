import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-full-service-form',
  templateUrl: './full-service-form.component.html',
  styleUrls: ['./full-service-form.component.scss']
})
export class FullServiceFormComponent implements OnInit {
  public fullServiceForm: FormGroup;
  public isSubmittingEmail: boolean;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.isSubmittingEmail = false;
    this.fullServiceForm = this.fb.group({
      sellerName: ['', Validators.required],
      coSellerName: [''],
      sellerEmail: ['', Validators.compose([Validators.required, Validators.email])],
      coSellerEmail: ['', Validators.email],
      address: ['', Validators.required],
      sellerPhoneNumber: ['',
        Validators.compose([Validators.required, Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)])],
      coSellerPhoneNumber: ['', Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)],
      lookingToSell: ['', Validators.required],
      priceListing: ['', Validators.required],
      aboutHome: ['', Validators.required],
      timeDateToContact: ['', Validators.required]
    });
  }

  public get fsf(): { [key: string]: AbstractControl } {
    return this.fullServiceForm.controls;
  }

  public submitForm(form: FormGroup): void {
    this.isSubmittingEmail = true;
    setTimeout(() => {
      this.isSubmittingEmail = false;
    }, 6000);
  }
}
