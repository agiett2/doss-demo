import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buyer-consultation',
  templateUrl: './buyer-consultation.component.html',
  styleUrls: ['./buyer-consultation.component.scss']
})
export class BuyerConsultationComponent implements OnInit {
public buyerForm: FormGroup;
public isSubmittingEmail: boolean;
  constructor(private fb: FormBuilder) { }
  // Look into issue
  // form becomes inavlid when checking either of the radio buttons
  ngOnInit(): void {
    this.isSubmittingEmail = false;
    this.buyerForm = this.fb.group({
      buyerName: ['', Validators.required],
      coBuyerName: [''],
      buyerEmail: ['', [Validators.required, Validators.email]],
      coBuyerEmail: ['', Validators.email],
      preApproved: ['', Validators.required],
      buyerPhone: ['',
      Validators.compose([Validators.required, Validators.pattern(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)])],
      coBuyerPhone: [''],
      whenToBuy: ['', Validators.required],
      priceRange: ['', Validators.required],
      dreamHome: ['', Validators.required]
    });

  }
  public submitForm(form: FormGroup): void {
    this.isSubmittingEmail = true;
    setTimeout(() => {
      this.isSubmittingEmail = false;
    }, 6000);

  }
  public get bf(): any {
    return this.buyerForm.controls;
  }
}
