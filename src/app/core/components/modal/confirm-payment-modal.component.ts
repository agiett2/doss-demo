import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableDataRowInterface } from 'src/app/shared/interfaces/tableDataRow.interface';
import { StripeCardComponent } from 'ngx-stripe';
import { CreateChargePayloadInterface } from '../../model/create-charge.payload.interface';
import { StripePaymentServiceAbstract } from '../../services/abstract/stripe-payment.service.abstract';
import { BillingDetailsPayloadInterface } from '../../model/billing-details.payload.interface';
import { EmailOptionsPayloadInterface } from '../../model/email-options.payload.interface';
import { SendEmailServiceAbstract } from '../../services/abstract/send-email.service.abstract';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-confirm-payment-modal-component',
  templateUrl: './confirm-payment-modal.component.html',
  styleUrls: ['./confirm-payment-modal.component.scss'],
})
export class ConfirmPaymentModalComponent implements OnInit {
  @Output() submitClicked = new EventEmitter<any>();
  public dialogTitle: string;
  public dialogText: string;
  public services: TableDataRowInterface[];
  public isPaymentProcessing: boolean;
  public isPaymentError: boolean;
  public isPaymentComplete: boolean;
  public message: string;
  public paymentMes: string;
  constructor(
    private paymentService: StripePaymentServiceAbstract,
    public dialogRef: MatDialogRef<ConfirmPaymentModalComponent>,
    private emailService: SendEmailServiceAbstract,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      dialogPrice: number;
      dialogServices: TableDataRowInterface[];
      name: string;
      ccInfo: StripeCardComponent;
      billing: BillingDetailsPayloadInterface;
    }
  ) {}
  public ngOnInit(): void {
    this.isPaymentProcessing = false;
    this.isPaymentError = false;
    this.isPaymentComplete = false;
    this.dialogText = `Please confirm your payment of $${this.data.dialogPrice}.00 for the following services:`;
    this.dialogTitle = 'Payment Confirmation';
    this.services = this.data.dialogServices;
  }

  public confirm = (): void => {
    this.purchaseServices();
  }

  public cancel = (): void => {
    this.dialogRef.close();
  }

  public purchaseServices(): void {
    this.isPaymentProcessing = true;
    this.paymentService
      .createToken(this.data.ccInfo, this.data.name)
      .subscribe((result) => {
        if (result.token) {
          console.log(result.token.id);
          const token = result.token.id;
          const totalPrice = this.data.dialogPrice;
          const payload: CreateChargePayloadInterface = {
            token,
            price: totalPrice,
            billing_details: this.data.billing,
          };
          this.paymentService.createCharge(payload).subscribe(
            (response: any) => {
              this.isPaymentProcessing = false;
              console.log('sucess');
              console.log(response);
              if (response.status === 'succeeded') {
                this.isPaymentComplete = true;
                this.paymentMes = 'payment completed!';
                this._sendCustomerEmail(response, totalPrice);
                this._sendBobbyEmail(response, totalPrice);
              } else {
                console.log('payment failed');
                this.paymentMes = 'unable to complete payment';
                this.isPaymentError = true;
              }
            },
            (error) => {
              console.log(error);
              console.log('error on toaken');
              this.isPaymentProcessing = false;
              this.isPaymentError = true;
              this.paymentMes = 'unable to complete payment! Please re-enter payment information and try again.';
            }
          );

          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges
        } else if (result.error) {
          this.isPaymentProcessing = false;
          this.isPaymentError = true;
          this.paymentMes = result.error.message;
          console.log(result.error.message);
        }
      });
  }

  private _sendCustomerEmail(response: any, totalPrice: number): void {
    const customerEmail: EmailOptionsPayloadInterface = {
      from: 'noreply@askdoss.com',
      to: [`${response.receipt_email}`, 'noreplydoss@gmail.com'],
      subject: 'Payment Confirmation',
      html: `<h2>Thank You For your Payment at www.askdoss.com</h2>
      <h4>Payment Confirmation Receipt:
      Your receipt can be viewed <a href="${response.receipt_url}" target="_blank">here</a>.</h4>
      <h4>Payment Total: $${totalPrice}.00</h4>`,
    };
    this.emailService.sendEmail(customerEmail);
  }

  private _sendBobbyEmail(response: any, totalPrice: number): void {
    const bobbyEmail: EmailOptionsPayloadInterface = {
      from: 'noreply@askdoss.com',
      to: [`${response.receipt_email}`, 'noreplydoss@gmail.com'],
      subject: 'Payment Confirmation',
      html: `<h2>New Customer</h2>
      <h4>Customer Payment Confirmation Receipt:
     Receipt can be viewed <a href="${response.receipt_url}" target="_blank">here</a>.</h4>
     <h4>Payment Total: $${totalPrice}.00</h4>
     <hr>
     <h2>Customer Info</h2>
     <p>Name: ${this.data.name}</p>
     <h2>Contact Info</h2>
     <p>Email: ${this.data.billing.email}</p>
     <p>Phone Number: ${this.data.billing.phone}</p>
     <h2>Address</h2>
     <p>Street: ${this.data.billing.address.line1}</p>
     <p>Unit: ${this.data.billing.address.line2}</p>
     <p>City: ${this.data.billing.address.city}</p>
     <p>State: ${this.data.billing.address.state}</p>
     <p>Zip Code: ${this.data.billing.address.zip}</p>`,
    };
    this.emailService.sendEmail(bobbyEmail);
  }
}
