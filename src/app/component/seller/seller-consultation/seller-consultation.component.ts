import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-seller-consultation',
  templateUrl: './seller-consultation.component.html',
  styleUrls: ['./seller-consultation.component.scss']
})
export class SellerConsultationComponent implements OnInit {
  public sellerForm: FormGroup;
  public addressForm: FormGroup;
  public isSubmittingEmail: boolean;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.isSubmittingEmail = false;
    this.sellerForm = this.fb.group({
      sellerName: ['', Validators.required],
      coSellerName: [''],
      sellerEmail: ['', [Validators.required, Validators.email]],
      coSellerEmail: [''],
      sellerAddress: ['', Validators.required],
      sellerPhoneNumber: ['',
        Validators.compose([Validators.required, Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)])],
      coSellerPhoneNumber: [''],
      whenToSell: ['', Validators.required],
      priceListing: ['', Validators.required],
      havePets: [''],
      whySelling: ['']
    });
  }

  public get sf(): { [key: string]: AbstractControl } {
    return this.sellerForm.controls;
  }

  public submitForm(sellerForm: FormGroup): void { 
    this.isSubmittingEmail = true;
    setTimeout(() => {
      this.isSubmittingEmail = false;
    }, 6000);
  }

}
