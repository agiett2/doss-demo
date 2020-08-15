import { Observable } from 'rxjs/internal/Observable';
import { CreateChargePayloadInterface } from '../../model/create-charge.payload.interface';
import { TableDataRowInterface } from 'src/app/shared/interfaces/tableDataRow.interface';
import { BillingDetailsPayloadInterface } from '../../model/billing-details.payload.interface';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfirmPaymentModalComponent } from '../../components/modal/confirm-payment-modal.component';
import { TokenResult, StripeCardComponent } from 'ngx-stripe';

export abstract class StripePaymentServiceAbstract {
  public abstract createCharge(
    charge: CreateChargePayloadInterface
  ): Observable<any>;

  public abstract confirmPayment(
    totalPrice: number,
    services: TableDataRowInterface[],
    userName: string,
    creditCardInfo: StripeCardComponent,
    billing: BillingDetailsPayloadInterface
  ): MatDialogRef<ConfirmPaymentModalComponent>;
  public abstract createToken(
    card: StripeCardComponent,
    name: string,
  ): Observable<TokenResult>;
}
