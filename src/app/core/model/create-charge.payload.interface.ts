import { BillingDetailsPayloadInterface } from './billing-details.payload.interface';
import { TableDataRowInterface } from 'src/app/shared/interfaces/tableDataRow.interface';

export interface CreateChargePayloadInterface {
  readonly token: string;
  readonly price: number;
  readonly billing_details: BillingDetailsPayloadInterface;
  readonly services?: TableDataRowInterface[];
}
