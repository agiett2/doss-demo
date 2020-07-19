import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TableDataRowInterface } from 'src/app/shared/interfaces/tableDataRow.interface';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import { CreateChargePayloadInterface } from '../../model/create-charge.payload.interface';
import { StripePaymentServiceAbstract } from '../../services/abstract/stripe-payment.service.abstract';
import { BillingDetailsPayloadInterface } from '../../model/billing-details.payload.interface';

@Component({
  selector: 'app-confirm-payment-modal-component',
  templateUrl: './confirm-payment-modal.component.html',
  styleUrls: ['./confirm-payment-modal.component.scss'],
})
export class ConfirmPaymentModalComponent implements OnInit {
  public dialogTitle: string;
  public dialogText: string;
  public services: TableDataRowInterface[];
  public isPaymentProcessing: boolean;
  public isPaymentError: boolean;
  @Output() submitClicked = new EventEmitter<any>();
  public message: string;
  constructor(
    private paymentService: StripePaymentServiceAbstract,
    public dialogRef: MatDialogRef<ConfirmPaymentModalComponent>,
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
    this.dialogText = `Please confirm your payment of $${this.data.dialogPrice}.00 for the following services:`;
    this.dialogTitle = 'Payment Confirmation';
    this.services = this.data.dialogServices;
  }

  public confirm = (): void => {
    this.purchaseServices();
    this.submitClicked.next(true);
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
          const payload: CreateChargePayloadInterface = {
            token,
            price: this.data.dialogPrice,
            billing_details: this.data.billing,
          };
          this.paymentService.createCharge(payload).subscribe(
            (response: any) => {
              console.log('sucess');
              console.log(response);
              const message: string = response.outcome.seller_message;
              setTimeout(() => {
                this.isPaymentProcessing = false;
              }, 6000);
            },
            (error) => {
              setTimeout(() => {
                this.isPaymentProcessing = false;
              }, 6000);
            }
          );

          // Use the token to create a charge or a customer
          // https://stripe.com/docs/charges
        } else if (result.error) {
          this.isPaymentProcessing = false;
          this.isPaymentError = true;
          console.log(result.error.message);
        }
      });
  }
}
