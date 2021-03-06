import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SendEmailServiceAbstract } from 'src/app/core/services/abstract/send-email.service.abstract';
import { EmailOptionsPayloadInterface } from 'src/app/core/model/email-options.payload.interface';

@Component({
  selector: 'app-buyer-consultation',
  templateUrl: './buyer-consultation.component.html',
  styleUrls: ['./buyer-consultation.component.scss'],
})
export class BuyerConsultationComponent implements OnInit {
  public buyerForm: FormGroup;
  public isSubmittingEmail: boolean;
  public responseMsg: string;
  constructor(
    private fb: FormBuilder,
    private emailService: SendEmailServiceAbstract
  ) {}
  ngOnInit(): void {
    this.isSubmittingEmail = false;
    this.buyerForm = this.fb.group({
      buyerName: ['', Validators.required],
      coBuyerName: [''],
      buyerEmail: ['', [Validators.required, Validators.email]],
      coBuyerEmail: ['', Validators.email],
      preApproved: ['', Validators.required],
      buyerPhone: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
          ),
        ]),
      ],
      coBuyerPhone: [''],
      whenToBuy: ['', Validators.required],
      priceRange: ['', Validators.required],
      dreamHome: ['', Validators.required],
    });
  }
  public submitForm(form: FormGroup): void {
    this.isSubmittingEmail = true;
    this.emailService.sendEmail(this.buildEmailOptions(form)).then((value: any) => {
      this.isSubmittingEmail = false;
      this.responseMsg = 'Email Sent';
    });
  }
  public get bf(): any {
    return this.buyerForm.controls;
  }
  private buildEmailOptions(form: FormGroup): EmailOptionsPayloadInterface {
    return {
      to: 'noreplydoss@gmail.com',
      from: 'noreply@askdoss.com',
      subject: `Buyer Consultation Form For ${form.controls.buyerName.value}`,
      html: `<p>Buyer Name: ${form.controls.buyerName.value}</p>
      <p>Co Buyer Name: ${form.controls.coBuyerName.value}</p>
      <p>Buyer Email: ${form.controls.buyerEmail.value}</p>
      <p>Co Buyer Email: ${form.controls.coBuyerEmail.value}</p>
      <p>Pre-Approved: ${form.controls.preApproved.value}</p>
      <p>Buyer Phone: ${form.controls.buyerPhone.value}</p>
      <p>Co Buyer Phone: ${form.controls.coBuyerPhone.value}</p>
      <p>When To Buy: ${form.controls.whenToBuy.value}</p>
      <p>Price Range: ${form.controls.priceRange.value}</p>
      <p>Dream Home: ${form.controls.dreamHome.value}</p>`,
    };
  }
}
