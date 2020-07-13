import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StripeService, StripeCardComponent, TokenResult } from 'ngx-stripe';
import { CreateChargePayloadInterface } from '../model/create-charge.payload.interface';
import { Observable } from 'rxjs';
import {
  MatDialogConfig,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { ConfirmPaymentModalComponent } from '../components/modal/confirm-payment-modal.component';
import { TableDataRowInterface } from 'src/app/shared/interfaces/tableDataRow.interface';
import { BillingDetailsPayloadInterface } from '../model/billing-details.payload.interface';
// import {
//   StripeService,
//   Elements,
//   Element as,
//   ElementsOptions,
//   StripeCardComponent,
//   ElementOptions,
// } from 'ngx-stripe';

@Injectable({
  providedIn: 'root',
})
export class StripePaymentService {
  constructor(
    private http: HttpClient,
    private stripeService: StripeService,
    private dialog: MatDialog
  ) {}

  public createCharge(charge: CreateChargePayloadInterface): Observable<any> {
    return this.http.post('https://localhost:3000/createCharge', charge);
  }
  public confirmPayment(
    totalPrice: number,
    card: StripeCardComponent,
    services: TableDataRowInterface[],
  ): MatDialogRef<ConfirmPaymentModalComponent> {
    const dialogRef = this.dialog.open(ConfirmPaymentModalComponent, {
      closeOnNavigation: false,
      width: '100%',
      data: { dialogPrice: totalPrice, dialogServices: services },
      disableClose: true,
      autoFocus: true,
    });
    return dialogRef;
  }
  public createToken(
    totalPrice: number,
    card: StripeCardComponent,
    services: TableDataRowInterface[],
    name: string,
    billingDetails: BillingDetailsPayloadInterface
  ): Observable<TokenResult> {
    return this.stripeService
      .createToken(card.getCard(), { name });
  }
}
