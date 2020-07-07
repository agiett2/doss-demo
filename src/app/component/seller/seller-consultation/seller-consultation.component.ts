import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { SendEmailServiceAbstract } from 'src/app/core/services/abstract/send-email.service.abstract';
import { EmailOptionsPayloadInterface } from 'src/app/core/model/email-options.payload.interface';

@Component({
  selector: 'app-seller-consultation',
  templateUrl: './seller-consultation.component.html',
  styleUrls: ['./seller-consultation.component.scss']
})
export class SellerConsultationComponent implements OnInit {
  public sellerForm: FormGroup;
  public addressForm: FormGroup;
  public isSubmittingEmail: boolean;
  public responseMsg: string;
  constructor(private fb: FormBuilder, private emailService: SendEmailServiceAbstract) { }

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

  public submitForm(form: FormGroup): void {
    this.isSubmittingEmail = true;
    this.emailService.sendEmail(this.buildEmailOptions(form)).subscribe((response: { error?: any, success?: any}) => {
      this.isSubmittingEmail = false;
      response.success ? this.responseMsg = 'Email Sent!' : this.responseMsg = 'Error: Unable to send email at this time.';
    }, (error) => {
      this.isSubmittingEmail = false;
      this.responseMsg = 'Error: Unable to send email at this time.';
    });
  }
  private buildEmailOptions(form: FormGroup): EmailOptionsPayloadInterface {
    return {
      to: 'noreplydoss@gmail.com',
      from: 'noreply@askdoss.com',
      subject: `Seller Consultation Form For ${form.controls.sellerName.value}`,
      html: `<p>Seller Name ${form.controls.sellerName.value}</p>
      <p>Co Seller Name: ${form.controls.coSellerName.value}</p>
      <p>Seller Email: ${form.controls.sellerEmail.value}</p>
      <p>Co Seller Email: ${form.controls.coSellerEmail.value}</p>
      <p>Seller Address ${form.controls.sellerAddress.value}</p>
      <p>Seller Phone: ${form.controls.sellerPhoneNumber.value}</p>
      <p>Co Seller Phone: ${form.controls.coSellerPhoneNumber.value}</p>
      <p>When To Sell: ${form.controls.whenToSell.value}</p>
      <p>Price Listing: ${form.controls.priceListing.value}</p>
      <p>Have Pets: ${form.controls.havePets.value}</p>
      <p>Why Selling: ${form.controls.whySelling.value}</p>`
    };
  }
}
