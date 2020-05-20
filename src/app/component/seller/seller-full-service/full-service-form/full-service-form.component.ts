import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-full-service-form',
  templateUrl: './full-service-form.component.html',
  styleUrls: ['./full-service-form.component.scss']
})
export class FullServiceFormComponent implements OnInit {
  public fullServiceForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.fullServiceForm = this.fb.group({
      sellerName: ['', Validators.required],
      coSellerName: [''],
      sellerEmail: ['', Validators.required, Validators.email],
      coSellerEmail: [''],
      address: ['', Validators.required],
      sellerPhoneNumber: ['', Validators.required],
      coSellerPhoneNumber: [''],
      lookingToSell: ['', Validators.required],
      priceListing: ['', Validators.required],
      howArrivedAtPrice: ['', Validators.required],
      aboutHome: ['', Validators.required],
      timeDateToContact: ['', Validators.required]
    });
  }

  public get fsf(): { [key: string]: AbstractControl} {
    return this.fullServiceForm.controls;
  }

  public submitForm(form: FormGroup): void {
    console.log(form.getRawValue());
  }
}
