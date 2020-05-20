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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.addressForm = this.fb.group({
    //   streetOne: ['', Validators.required],
    //   streetTwo: [''],
    //   city: ['', Validators.required],
    //   state: ['', Validators.required],
    //   zip: ['', Validators.required]
    // });
    this.sellerForm = this.fb.group({
      sellerName: ['', Validators.required],
      coSellerName: [''],
      sellerEmail: ['', Validators.required, Validators.email],
      coSellerEmail: [''],
      address: ['', Validators.required],
      sellerPhoneNumber: ['', Validators.required],
      coSellerPhoneNumber: [''],
      whenToSell: ['', Validators.required],
      priceListing: ['', Validators.required],
      // preApproved: [false],
      budget: [''],
      isbuyingNewHome: ['', Validators.required],
      nextHome: [''],
      whySelling: ['', Validators.required]
    });
  }

  public get sf(): {[key: string]: AbstractControl} {
    return this.sellerForm.controls;
  }

  public submitForm(sellerForm: FormGroup): void {}

}
