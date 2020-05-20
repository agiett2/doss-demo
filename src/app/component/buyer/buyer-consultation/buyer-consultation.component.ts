import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buyer-consultation',
  templateUrl: './buyer-consultation.component.html',
  styleUrls: ['./buyer-consultation.component.scss']
})
export class BuyerConsultationComponent implements OnInit {
public buyerForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  // Look into issue
  // form becomes inavlid when checking either of the radio buttons
  ngOnInit(): void {
    this.buyerForm = this.fb.group({
      buyerName: ['', Validators.required],
      coBuyerName: [''],
      buyerEmail: ['', [Validators.required, Validators.email]],
      coBuyerEmail: [''],
      preApproved: [''],
      notPreApproved: [''],
      buyerPhone: ['', Validators.required],
      coBuyerPhone: [''],
      oneToThreeMonths: [false],
      threeToSixMonths: [false],
      sixToTwelveMonths: [false],
      now: [false],
      priceRange: ['', Validators.required],
      dreamHome: ['', Validators.required]
    });
console.log(this.bf)
  }
  public submitForm(form: FormGroup): void {

  }
  public get bf(): any {
    return this.buyerForm.controls;
  }
}
