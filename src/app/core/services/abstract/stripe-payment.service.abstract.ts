import { Observable } from 'rxjs/internal/Observable';
import { CreateChargePayloadInterface } from '../../model/create-charge.payload.interface';
import { TableDataRowInterface } from 'src/app/shared/interfaces/tableDataRow.interface';
import { BillingDetailsPayloadInterface } from '../../model/billing-details.payload.interface';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfirmPaymentModalComponent } from '../../components/modal/confirm-payment-modal.component';
import { TokenResult } from 'ngx-stripe';

export abstract class StripePaymentServiceAbstract {
  public abstract createCharge(
    charge: CreateChargePayloadInterface
  ): Observable<any>;

  public abstract confirmPayment(
    totalPrice: number,
    services: TableDataRowInterface[]
  ): MatDialogRef<ConfirmPaymentModalComponent>;
  public abstract createToken(
    totalPrice: number,
    card: any,
    services: TableDataRowInterface[],
    name: string,
    billingDetails: BillingDetailsPayloadInterface
  ): Observable<TokenResult>;
}
